export async function getRepos(language: string, since: string) {
  const data = await fetch(
    `http://localhost:8000/repositories?language=${language}&since=${since}`
  );
  const repos = await data.json();

  return repos;
}
