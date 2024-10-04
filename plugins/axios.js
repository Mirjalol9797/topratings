// import axios from "~/node_modules/axios/index";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const axiosPlugin = axios.create({});
  const authStore = useAuthStore();

  axiosPlugin.defaults.baseURL = "https://dev-market.hamroh.me/api/";
  // axiosPlugin.defaults.baseURL = "https://market.hamroh.me/api/";

  axiosPlugin.interceptors.request.use(
    (config) => {
      config.headers["Accept-Language"] = nuxtApp.$i18n.locale.value;

      const token = authStore.userToken;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

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
