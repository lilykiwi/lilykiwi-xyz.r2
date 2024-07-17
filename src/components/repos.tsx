import { RepoIcon, RepoForkedIcon, ArchiveIcon, StarIcon, LawIcon, HistoryIcon } from '@primer/octicons-react';
import { JSX } from 'preact';
import { useSignal, Signal } from '@preact/signals';
import { useEffect } from 'preact/hooks';

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
      // TODO: cache this
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
        });
      });
    }

    getData();
  }, [fetchedData]);

  if (fetchedData.value.length === 0) {
    return <div class="repoCards"></div>;
  }

  return <div class=" repoCards" >      
    {fetchedData.value.map((repo: any) => (
      <a href={repo.html_url}>
        <p class="repoTitle">
          <span class="repoIcon">
            {repo.is_archived ?
              <ArchiveIcon verticalAlign="middle" /> :
              repo.is_fork ?
                <RepoForkedIcon verticalAlign="middle" /> :
                <RepoIcon verticalAlign="middle" />}
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
            );
          })}
        </p>
        <p class="repoDescription">{repo.description}</p>
        <p class="repoMeta">
          <span class="stars">
            <StarIcon verticalAlign="middle" />{repo.stars}
          </span>
          <span class="commits">
            <HistoryIcon verticalAlign="middle" />{TimeFormat(Date.parse(repo.last_commit))}
          </span>
          {repo.license ?
            <span class="license">
              <LawIcon verticalAlign="middle" />{repo.license}
            </span> : ""
          }
        </p>
      </a>
    ))}
  </div>;
}
