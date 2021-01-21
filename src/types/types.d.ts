interface RepoAuthor {
  username: string;
  href: string;
  avatar: string;
}

interface Repository {
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  currentPeriodStars: number;
  builtBy: RepoAuthor;
}

interface ReposStore {
  repos: Repository[];
}

interface FilterStore {
  language: string;
  since: string;
  sortLowToHigh: boolean;
}

interface RootStore {
  filtersStore: FiltersStore;
  reposStore: ReposStore;
}

interface ProgramingLanguage {
  urlParam: string;
  name: string;
}
