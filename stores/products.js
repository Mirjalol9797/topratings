import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    mainProducts: null,
  }),
  getters: {},
  actions: {},
  persist: true,
});
