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

function topToArticleIndex(signal: Signal<number>): number {
  var value = signal.value;

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
      const article = document.getElementById(heading.id);
      // get the article's title element
      const title = article?.querySelector('h1').innerHTML;
      return <a id={"->" + heading.id} href={"#" + heading.id}>{title}</a>;
    })}
  </div>
}

function SidebarTimeline(props: { signal: Signal<number> }) {
  let value = 8
  const headings = useHeadings();
  // get the article element from topToArticleIndex
  if (headings.value.length == 0) {
    value = 8
  } else {
    const articleID = headings.value[topToArticleIndex(props.signal)].id;
    // get the article link
    const articleLink = document.getElementById(`->${articleID}`);
    // get the article link's position
    value = articleLink?.offsetTop - articleLink?.parentElement?.offsetTop;
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

export default function Sidebar(props: { signal: Signal<number> }) {
  return <nav class="sideBar">
    <div class="navScroll">
      <h1>lilykiwi.xyz</h1>
      <SidebarTimeline {...props} />
    </div>
  </nav >;
}