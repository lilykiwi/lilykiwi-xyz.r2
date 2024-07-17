import { JSX } from "preact";

export function Title(props: { text: string; }): JSX.Element {
  return <div class="heroTitle">
    <h1>{props.text}</h1>
  </div>;
}
