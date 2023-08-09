import { useSignal, useSignalEffect, Signal } from "@preact/signals";
import { JSX } from "preact";

/**
 * useHeadings hook that returns a signal of the headings
 * @returns {Signal<Element[]>} signal of the headings
 */
export const useHeadings = (): Signal<Element[]> => {
  const _headings: Signal<Element[]> = useSignal([]);

  useSignalEffect(() => {
    const headings: NodeListOf<Element> = document.querySelectorAll('article');
    _headings.value = getHeadings(headings);
  });

  return _headings;
}

/** 
 * getHeadings function that returns an array of the headings
 * @param headingElements list of heading elements
 */
export const getHeadings = (headingElements: NodeListOf<Element>) => {
  const headings: Element[] = [];

  headingElements.forEach((heading) => {
    headings.push(heading);
  });

  return headings;
};

/**
 * topToArticleIndex function that returns the index of the article that is closest to the top
 * @param value scroll position
 * @returns {number} index of the article that is closest to the top
 * @remarks This function is used to determine which article is currently being viewed for the scrollspy.
 */
export function topToArticleIndex(value: number): number {
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

/**
 * SidebarButtons component
 * @remarks This component is a list of buttons that link to the articles.
 * @returns {JSX.Element} SidebarButtons component
 * @todo Add headings to the sidebar buttons based on segment, and generalise which segments get headings.
 */
function SidebarButtons(): JSX.Element {
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

/**
 * SidebarTimeline component
 * @remarks This component is a timeline that highlights the current article.
 * @param props.spy scroll position signal
 * @returns {JSX.Element} SidebarTimeline component
 * @todo Fix the timeline dot position when the page is scrolled to the bottom, where the article isn't the height of the screen.
 */
export function SidebarTimeline(props: { spy: Signal<number> }): JSX.Element {
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

/**
 * Sidebar component
 * @remarks This component is a sidebar that contains a timeline of the articles along with a scrollspy that highlights the current article.
 * @param props.scrollHook.value scroll position signal
 * @param props.scrollHook.onScroll scroll change callback
 * @returns {JSX.Element} Sidebar component
 */
export default function Sidebar
  (props: {
    scrollHook: {
      value: Signal<number>;
      onScroll: () => void;
    }
  }): JSX.Element {
  return <nav class="sideBar">
    <div class="navScroll">
      <a class="navTitle" href=""><h1>lilykiwi.xyz</h1></a>
      <SidebarTimeline spy={props.scrollHook.value} />
    </div>
  </nav >;
}
