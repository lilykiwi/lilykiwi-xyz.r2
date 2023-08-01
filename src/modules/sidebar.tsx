import { useSignal, useSignalEffect, Signal } from "@preact/signals";

const useHeadings = () => {
  const _headings: Signal<Element[]> = useSignal([]);

  useSignalEffect(() => {
    const headings: NodeListOf<Element> = document.querySelectorAll('article');
    _headings.value = getHeadings(headings);
  });

  return _headings;
}

const getHeadings = (headingElements: NodeListOf<Element>) => {
  const headings: Element[] = [];

  headingElements.forEach((heading) => {
    headings.push(heading);
  });

  return headings;
};

function topToArticleIndex(value: number): number {
  const articles = document.querySelectorAll('article');
  let closest = 0;
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    if (article.offsetTop - value <= 0) {
      closest = i;
    }
  }
  return closest;
}

function SidebarButtons() {
  return <div class="text">
    {useHeadings().value.map(function (heading) {
      // get the article element
      const article: HTMLElement | null = document.getElementById(heading.id);
      // get the article's title element
      const title = article?.querySelector('h1')?.innerHTML;
      return <a id={"->" + heading.id} href={"#" + heading.id}>{title}</a>;
    })}
  </div>
}

function SidebarTimeline(props: { spy: Signal<number> }) {
  let value = 8
  const headings = useHeadings();
  // get the article element from topToArticleIndex
  if (headings.value.length == 0) {
    value = 8
  } else {
    const articleID = headings.value[topToArticleIndex(props.spy.value)].id;
    // get the article link
    const articleLink = document.getElementById(`->${articleID}`);
    // get the article link's position
    if (articleLink?.offsetTop && articleLink?.parentElement?.offsetTop) {
      value = articleLink?.offsetTop - articleLink?.parentElement?.offsetTop;
    } else {
      value = 8
    }
  }

  return <div class="timeline">
    <div class="line">
      <div style={{
        top:
          value + 3
      }} class="dot"></div>
    </div>
    <SidebarButtons />
  </div >
}

export default function Sidebar(props: {
  scrollHook: {
    value: Signal<number>;
    onScroll: () => void;
  }
}) {
  return <nav class="sideBar">
    <div class="navScroll">
      <a class="navTitle" href=""><h1>lilykiwi.xyz</h1></a>
      <SidebarTimeline spy={props.scrollHook.value} />
    </div>
  </nav >;
}