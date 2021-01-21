import { observable } from "mobx";
import { createContext } from "react";
import { RootStore } from "./RootStore";

export class ReposStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable repos = [];
}
