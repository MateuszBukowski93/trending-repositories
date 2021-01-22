import { action, makeAutoObservable } from 'mobx';

export class FiltersStore {
  since: string = localStorage.since || 'daily';
  language: string = localStorage.language || 'javascript';

  constructor() {
    makeAutoObservable(this);
  }

  @action setSince(since: string) {
    this.since = since;
    localStorage.since = since;
  }

  @action setLanguage(language: string) {
    this.language = language;
    localStorage.language = language;
  }
}
