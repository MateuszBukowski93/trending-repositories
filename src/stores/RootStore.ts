import { FiltersStore } from './FiltersStore';
import { ReposStore } from './ReposStore';

export class RootStore {
  filtersStore = new FiltersStore();
  reposStore = new ReposStore();
}

const rootStore = new RootStore();

export default rootStore;
