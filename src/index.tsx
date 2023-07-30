import { render } from 'react';
import './index.scss';

function NavLink(props: { href: string, children: string }) {
  if (window.location.href === props.href) {
    return <p><a href="#">{props.children}</a></p>;
  } else {
    return <p><a href={props.href}>{props.children}</a></p>;
  }
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
  return <nav class="headerBar">
    <h1>lilykiwi.xyz</h1>
    <div>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </div>
  </nav >;
}

function Content() {
  return <div class="content">
    <Header>
      <h1>hi there welcome this is a test can you tell?</h1>
    </Header>
    <Body>
      <p>text</p>
    </Body>
  </div>;
}

const Main = <>
  <Sidebar />
  <Content />
</>;


render(Main, document.body);