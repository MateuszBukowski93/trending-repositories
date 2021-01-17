import React from 'react';
import { useLocalObservable } from 'mobx-react';

export const StoreContext = React.createContext({} as RepositoriesStore);

interface INewStore {
  children: React.ReactChild;
}
const RepositoriesStore = ({ children }: INewStore) => {
  const store = useLocalObservable(() => ({
    repos: [] as Repository[],
    updateRepos: (repos: Repository[]) => (store.repos = repos),
    language: 'javascript',
    updateLanguage: (language: string) => (store.language = language),
    since: 'daily',
    updateSince: (since: string) => (store.since = since),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default RepositoriesStore;
