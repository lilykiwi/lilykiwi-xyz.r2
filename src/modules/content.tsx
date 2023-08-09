import { lorem } from 'txtgen';
import { useSignal, Signal } from '@preact/signals';
import { JSX } from 'preact';
import { useEffect } from 'preact/hooks';
import { RepoIcon, RepoForkedIcon, ArchiveIcon, StarIcon, LawIcon, HistoryIcon } from '@primer/octicons-react';

/**
 * Header component that contains the title of the article
 * @remarks This component is probably unnecessary, all it does is wrap its' contents in a div with the class "header". This is used in Sidebar.SidebarButtons, which specifically looks for a h1 to grab headings for the document. This should be reworked to be more general.
 * @param props children of the header
 * @returns {JSX.Element} Header component
 * @see Sidebar.SidebarButtons
 */
export function Header(props: { children: any } | undefined): JSX.Element {
  return <div class="header">
    {props?.children}
  </div>;
}

/** 
 * Body component that contains the content of the article
 * @remarks This component is probably unnecessary, all it does is wrap its' contents in a div with the class "body". Unlike Header, this is not used in the sidebar, and is a general wrapper for the content of the article. Styles are applied based on this class.
 * @param props children of the body
 * @returns {JSX.Element} Body component
 * @see Header
 */
export function Body(props: { children: any } | undefined): JSX.Element {
  return <div class="body">
    {props?.children}
  </div>;
}

/**
 * @todo: document this
 */
export function Article(props: { id: string | number, title: string, children: any }): JSX.Element {
  return <article id={props.id.toString()}>
    <Header>
      <h1>{props.title}</h1>
    </Header>
    <Body>
      {props.children}
    </Body>
  </article>;
}

/**
 * @todo: document this
 */
export function AboutMe(): JSX.Element {
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

/**
 * @todo: document this
 */
export function Segment(props: { category: string, children: any }): JSX.Element {
  return <section id={props.category}>
    {props.children}
  </section>;
}

/**
 * @todo: document this
 */
export function TimeFormat(time: number): string {
  const date = new Date(time);
  return date.toLocaleDateString();
}

/**
 * @todo: document this
 */
export function Repositories(): JSX.Element {

  let fetchedData = useSignal([]);

  useEffect(() => {
    async function getData() {
      const repos: Response = await fetch("https://api.github.com/users/lilykiwi/repos", { cache: "force-cache" });
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

/**
 * @todo: document this
 */
export default function Content(props: {
  scrollHook: {
    value: Signal<number>;
    onScroll: () => void;
  }
}): JSX.Element {

  return <main id="main">
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
