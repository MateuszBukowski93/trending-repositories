import { api } from './constans';

export async function getRepos(language: string, since: string) {
  const data = await fetch(
    `${api}/repositories?language=${language}&since=${since}`
  );
  const repos = await data.json();

  return repos;
}
