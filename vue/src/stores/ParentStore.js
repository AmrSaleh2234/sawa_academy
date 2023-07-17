import { defineStore } from "pinia";

export const useParentStore = defineStore("parentStore", {
  state: () => ({
    parent: {},
  }),
  getters: {},
  actions: {
    login() {},
    register() {},
    logout() {},
  },
});
