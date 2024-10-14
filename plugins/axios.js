// import axios from "~/node_modules/axios/index";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosPlugin = axios.create({});

  axiosPlugin.defaults.baseURL = "http://127.0.0.1:8000/api/";
  // axiosPlugin.defaults.baseURL = "https://market.hamroh.me/api/";

  axiosPlugin.interceptors.request.use(
    (config) => {
      config.headers["Accept-Language"] = nuxtApp.$i18n.locale.value;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axiosPlugin: axiosPlugin,
    },
  };
});
