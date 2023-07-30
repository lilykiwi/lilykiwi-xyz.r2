import { lorem } from 'txtgen';
import { Signal } from '@preact/signals';

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

function Article(props: { id: string | number, title: string, category: string, children: any }) {
  return <article id={props.id.toString()} class={props.category}>
    <Header>
      <h1>{props.title}</h1>
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

  return <Article id="aboutMe" title="About Me" category="About Me">
    <p>Hi, I'm {lily.name}</p>
    <p>I'm {Math.floor((Date.now() - lily.dob) / 31536000000)} years old</p>
    <p>{lily.blurb}</p>
  </Article>

}

export default function Content(props: { signal: Signal<number> }) {
  return <main>

    <AboutMe />

    <Article id={1} title={lorem(3, 5)} category="blog">
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>

    <Article id={2} title={lorem(3, 5)} category="blog">
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>

    <Article id={3} title={lorem(3, 5)} category="blog">
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>
    <Article id={4} title={lorem(3, 5)} category="blog">
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>
    <Article id={5} title={lorem(3, 5)} category="blog">
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
      <p>{lorem(15, 60)}</p>
    </Article>
  </main>;
}
