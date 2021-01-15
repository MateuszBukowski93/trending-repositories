async function getRepos() {
  let data = await fetch(
    "https://private-anon-3e268db977-githubtrendingapi.apiary-mock.com/repositories?language=javascript&since=daily"
  );
  let repos = await data.json();

  console.log(repos);
}
function App() {
  getRepos();
  return (
    <ThemeProvider theme={}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
