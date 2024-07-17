import { JSX } from 'preact';

export function Navbar(links): JSX.Element {
  return <nav>
    <NavLink text="About Me" />
    <NavLink text="Repositories" />
    <NavLink text="Documentation" />
  </nav>;
}

export function NavLink(props: { text: string; }): JSX.Element {
  return <p><a href="#">{props.text}</a></p>;
}
