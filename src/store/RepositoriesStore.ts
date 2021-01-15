import { useLocalObservable } from 'mobx-react';

const RepositoriesStore = () => {
  const store = useLocalObservable(() => ({
    repos: {},
    updateRepos: (repos: Repository[]) => {
      store.repos = repos;
    },
  }));
};

export default RepositoriesStore;
