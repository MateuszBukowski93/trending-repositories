import { makeAutoObservable, action } from 'mobx';

export class ReposStore {
  repos: Repository[] = [];
  sortLowToHigh: boolean = localStorage.sortLowToHigh || true;

  constructor() {
    makeAutoObservable(this);
  }

  @action setRepos(repos: Repository[]) {
    this.repos = repos;
  }
  @action setSortLowToHigh(sortLowToHigh: boolean) {
    this.sortLowToHigh = sortLowToHigh;
    localStorage.sortLowToHigh = sortLowToHigh;
  }
}
