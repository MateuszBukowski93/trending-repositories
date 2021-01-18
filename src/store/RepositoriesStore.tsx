import React from 'react';
import { useLocalObservable } from 'mobx-react';

export const StoreContext = React.createContext({} as RepositoriesStore);

interface IRepositoriesStore {
  children: React.ReactChild;
}
const RepositoriesStore = ({ children }: IRepositoriesStore) => {
  const store = useLocalObservable(() => ({
    repos: [] as Repository[],
    updateRepos: (repos: Repository[]) => (store.repos = repos),
    language: localStorage.language,
    updateLanguage: (language: string) => {
      localStorage.language = language;
      store.language = language;
    },
    since: localStorage.since,
    updateSince: (since: string) => {
      localStorage.since = since;
      store.since = since;
    },
    sortLowToHigh: localStorage.sortLowToHigh,
    setSortLowToHigh: (sortLowToHigh: boolean) => {
      localStorage.sortLowToHigh = sortLowToHigh;
      store.sortLowToHigh = sortLowToHigh;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default RepositoriesStore;
