import { observable } from "mobx";
import { createContext } from "react";
import { RootStore } from "./RootStore";

export class FiltersStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable since: string = "daily";
  @observable language: string = "javascript";
  @observable sortLowToHigh: boolean = true;
}
