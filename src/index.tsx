import { createContext, render } from 'preact';
import './style.scss';
import { lorem } from 'txtgen';
import { signal, Signal, useSignal, useSignalEffect } from '@preact/signals';

const scrollFromTop = signal(0);

const useHeadings = () => {

  const _headings: Signal<HTMLElement[]> = useSignal([]);

  useSignalEffect(() => {
    const headings = document.querySelectorAll('article');
    _headings.value = getHeadings(headings);
  });

  return _headings;
}

const getHeadings = (headingElements: NodeListOf<HTMLElement>) => {
  const headings: HTMLElement[] = [];

  headingElements.forEach((heading) => {
    headings.push(heading);
  });

  return headings;
};

function topToArticleIndex(): number {
  var _scrollFromTop = scrollFromTop.value

  const articles = document.querySelectorAll('article');
  let closest = 0;
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    if (article.offsetTop - _scrollFromTop <= 0) {
      closest = i;
    }
  }
  return closest;
}

function Header(props: { children: any }) {
  return <div class="header">
    {props.children}
  </div>;
}

function Body(props: { children: any } | undefined) {
  return <div class="body">
    {props.children}
  </div>;
}

function Sidebar() {
  return <nav class="sideBar">
    <div class="navScroll">
      <h1>lilykiwi.xyz</h1>
      <SidebarTimeline />
    </div>
  </nav >;
}

function SidebarButtons() {
  console.log(useHeadings())
  return <div class="text">
    {useHeadings().value.map(function (heading) {
      console.log(heading.id)
      // get the article element
      const article = document.getElementById(heading.id);
      // get the article's title element
      const title = article?.querySelector('h1').innerHTML;
      return <a id={"->" + heading.id} href={"#" + heading.id}>{title}</a>;
    })}
  </div>
}

function SidebarTimeline() {

  let value = 8
  const headings = useHeadings();
  // get the article element from topToArticleIndex
  console.log(topToArticleIndex())
  console.log(headings)
  if (headings.value.length == 0) {
    console.log("no headings")
    value = 8
  } else {
    const articleID = headings.value[topToArticleIndex()].id;
    // get the article link
    console.log(`->${articleID}`)
    const articleLink = document.getElementById(`->${articleID}`);
    console.log(articleLink)
    // get the article link's position
    value = articleLink?.offsetTop - articleLink?.parentElement?.offsetTop;
    console.log(value)
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

function Article(props: { id: any, header: any, children: any }) {
  return <article id={props.id}>
    <Header>
      <h1>{props.header}</h1>
    </Header>
    <Body>
      {props.children}
    </Body>
  </article>;
}

function AboutMe() {
  const lily = {
    name: 'Lily',
    dob: Date.parse('1999-10-16'),
    location: 'UK',
    occupation: 'Software Engineer',
    interests: ['Programming', 'Gaming', 'Engineering'],
    blurb: "I'm passionate about programming, gaming and engineering. "
      + "I'm a huge nerd and love learning new things. "
      + "I'm currently working on a few projects, "
      + "including a Pokémon fan game and a discord bot. "
      + "I'm also learning Japanese in my spare time."
  };

  return <Article id="aboutMe" header="About Me">
    <p>Hi, I'm {lily.name}</p>
    <p>I'm {Math.floor((Date.now() - lily.dob) / 31536000000)} years old</p>
    <p>{lily.blurb}</p>
  </Article>

}

function Content() {
  return <div class="content">

    <AboutMe />

    <Article id={1} header={lorem(3, 5)}>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>

    <Article id={2} header={lorem(3, 5)}>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>

    <Article id={3} header={lorem(3, 5)}>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>
    <Article id={4} header={lorem(3, 5)}>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>
    <Article id={5} header={lorem(3, 5)}>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>
  </div>;
}

const Main = <>
  <Sidebar />
  <Content />
</>;

scrollFromTop.value = document.documentElement.scrollTop;
document.onscroll = () => {
  scrollFromTop.value = document.documentElement.scrollTop;
}
render(Main, document.body);