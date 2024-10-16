const baseUrl = "news/placeinsite";

export const useNewsPlaceInSite = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getNewsBanner = async () => {
    const res = await $api(`${baseUrl}/banner/`);
    return res;
  };
  const getNewsLittleBanner = async () => {
    const res = await $api(`${baseUrl}/little_banner/`);
    return res;
  };

  return {
    getNewsBanner,
    getNewsLittleBanner,
  };
};
