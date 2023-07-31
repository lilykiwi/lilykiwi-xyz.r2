import { lorem } from 'txtgen';
import { signal, Signal, useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';

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

function Article(props: { id: string | number, title: string, children: any }) {
  return <article id={props.id.toString()}>
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

  return <Article id="aboutMe" title="About Me">
    <p>Hi, I'm {lily.name}</p>
    <p>I'm {Math.floor((Date.now() - lily.dob) / 31536000000)} years old</p>
    <p>{lily.blurb}</p>
  </Article>

}

function Segment(props: { category: string, children: any }) {
  return <section id={props.category}>
    {props.children}
  </section>;
}

function Repositories() {

  let fetchedData = useSignal([]);

  useEffect(() => {
    async function getData() {
      const repos = await fetch("https://api.github.com/users/lilykiwi/repos");
      const json = await repos.json();
      fetchedData.value = json.map((repo: any) => {
        return ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          default_branch: repo.default_branch,
          img: "https://raw.githubusercontent.com/lilykiwi/" + repo.name + "/" + repo.default_branch + "/.github/preview.png"
        })
      });
    }
    getData();
  }, [fetchedData]);

  return <div class="repoCards">
    {fetchedData.value.map((repo: any) => (
      <a href={repo.html_url}>
        <img src={repo.img} />
        <p class="name">{repo.name}</p>
      </a>
    ))}
  </div>;
}

export default function Content(props: { signal: Signal<number> }) {
  return <main>

    <Segment category="info">
      <AboutMe />
      <Repositories />
    </Segment>

    <Segment category="blog">
      <Article id={1} title={lorem(3, 5)}>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
      </Article>

      <Article id={2} title={lorem(3, 5)}>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
      </Article>

      <Article id={3} title={lorem(3, 5)}>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
      </Article>
      <Article id={4} title={lorem(3, 5)}>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
      </Article>
      <Article id={5} title={lorem(3, 5)}>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
        <p>{lorem(15, 60)}</p>
      </Article>
    </Segment>
  </main>;
}
