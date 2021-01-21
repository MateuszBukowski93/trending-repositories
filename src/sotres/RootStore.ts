import { createContext } from "react";
import { FiltersStore } from "./FiltersStore";
import { ReposStore } from "./ReposStore";

export class RootStore {
  filtersStore = new FiltersStore(this);
  reposStore = new ReposStore(this);
}

export const RootStoreContext = createContext(new RootStore());
