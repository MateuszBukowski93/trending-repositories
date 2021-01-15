export async function getRepos({
  language = 'javascript',
  since = 'daily',
}: ApiOptions) {
  let data = await fetch(
    `http://localhost:8000/repositories?language=${language}&since=${since}`
  );
  let repos = await data.json();

  console.log(repos);
}
