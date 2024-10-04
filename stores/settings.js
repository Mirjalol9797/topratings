import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    authGmailModal: false,
    addNewProductResultModal: false,
    deteleProductModal: false,
    deleteAccountModal: false,
    placeBidModal: false,
    howDoesItWorkModal: false,
  }),
  getters: {},
  actions: {},
});
