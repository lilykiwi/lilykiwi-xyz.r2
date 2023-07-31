import { lorem } from 'txtgen';
import { signal, Signal, useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { RepoIcon, RepoForkedIcon, ArchiveIcon, StarIcon, LawIcon, HistoryIcon } from '@primer/octicons-react';

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

function TimeFormat(time: number) {
  const date = new Date(time);
  return date.toLocaleDateString();
}

function Repositories() {

  let fetchedData = useSignal([]);

  useEffect(() => {
    async function getData() {
      const repos: Response = await fetch("https://api.github.com/users/lilykiwi/repos");
      if (repos.status !== 200) {
        return;
      }
      const json: any = await repos.json();
      fetchedData.value = json.map((repo: any) => {
        return ({
          name: repo.full_name,
          description: repo.description,
          html_url: repo.html_url,
          license: repo.license?.spdx_id,
          stars: repo.stargazers_count,
          is_fork: repo.fork,
          is_archived: repo.archived,
          tags: repo.topics,
          last_commit: repo.pushed_at,
        })
      });
    }

    getData();
  }, [fetchedData]);

  if (fetchedData.value.length === 0) {
    return <div class="repoCards"></div>;
  }

  return <div class="repoCards">
    {fetchedData.value.map((repo: any) => (
      <a href={repo.html_url}>
        <p class="repoTitle">
          <span class="repoIcon">
            {repo.is_archived ?
              <ArchiveIcon /> :
              repo.is_fork ?
                <RepoForkedIcon /> :
                <RepoIcon />}
          </span>
          <span class="name">
            {repo.name}
          </span>
        </p>
        <p class="tags">
          {repo.tags.map((tag: string) => {
            return (
              <span class="tag">
                {tag}
              </span>
            )
          })}
        </p>
        <p class="repoDescription">{repo.description}</p>
        <p class="repoMeta">
          <span class="stars">
            <StarIcon />{repo.stars}
          </span>
          <span class="commits">
            <HistoryIcon />{TimeFormat(Date.parse(repo.last_commit))}
          </span>
          {repo.license ?
            <span class="license">
              <LawIcon />{repo.license}
            </span> : ""
          }
        </p>
      </a>
    ))}
  </div>;
}

export default function Content(props: { signal: Signal<number> }) {
  return <main>

    <Segment category="info">
      <AboutMe />
      <Article id="myRepos" title="My Repos">
        <Repositories />
      </Article>
    </Segment>

    <Segment category="blog">
      <Article id={1} title="(this is a placeholder)">
        <p>I'm working on this site still, this is a placeholder article for a blog feature that I'm going to be implementing. This stems from my dissatisfaction with <i>every</i> major social media platform, being centralised and for-profit. Instead, I'm going to post stuff I'm up to here!</p>
        <p>Anyway, have some lorem ipsum:</p>
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
        <p>{lorem(15, 60)}</p>
      </Article>
    </Segment>
  </main>;
}
