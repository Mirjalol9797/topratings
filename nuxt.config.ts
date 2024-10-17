// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Manrope: {
            wght: [400, 500, 600, 700],
          },
        },
      },
    ],
  ],

  css: ["~/assets/scss/main.scss"],

  pinia: {
    storesDirs: ["./stores/**"],
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        name: "EN",
        file: "en.json",
        image: "en.png",
      },
      {
        code: "ru",
        name: "РУ",
        file: "ru.json",
        image: "ru.png",
      },
      {
        code: "uz",
        name: "O'Z",
        file: "uz.json",
        image: "uz.png",
      },
    ],
    defaultLocale: "ru",
    // vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },

  // seo
});
