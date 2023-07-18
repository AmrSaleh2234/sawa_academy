import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";
export const useParentStore = defineStore("parentStore", {
  state: () => ({
    parent: useStorage("parent", {}),
    token: useStorage("token", {}),
    parentAuth: useStorage("parentAuth", false),
    showErrors: ref(false),
    authErrors: {},
  }),
  getters: {
    user: (state) => state.parent,
    errors: (state) => state.authErrors.errors,
    errorMessage: (state) => state.authErrors.message,
  },
  actions: {
    async login(parent) {
      this.authErrors = [];
      this.showErrors = false;
      await axios
        .post("api/parent/login", parent)
        .then((res) => {
          this.parent = res.data.user;
          this.token = res.data.token;
          console.log(res);
        })
        .catch((err) => {
          this.showErrors = true;
          this.authErrors = err.response.data;
          console.log(err);
        });
    },
    async register(parent) {
      this.authErrors = [];
      this.showErrors = false;
      await axios
        .post("api/parent/register", parent)
        .then((res) => {
          this.parent = res.data.user;
          this.token = res.data.token;
          console.log(res);
        })
        .catch((err) => {
          this.showErrors = true;
          this.authErrors = err.response.data;
          console.log(err);
        });
    },
    getUser() {},
    logout() {},
  },
});
