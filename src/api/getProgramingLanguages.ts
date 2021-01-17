export async function getProgramingLanguages() {
  const data = await fetch(`http://localhost:8000/languages`);
  const languages = await data.json();

  return languages;
}
