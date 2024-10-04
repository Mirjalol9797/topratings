import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userLogin: false,
    userToken: null,
    userData: null,
  }),
  getters: {},
  actions: {},
  persist: true,
});
