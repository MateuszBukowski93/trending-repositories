import { api } from './constans';

export async function getProgramingLanguages() {
  const data = await fetch(`${api}/languages`);
  const languages = await data.json();

  return languages;
}
