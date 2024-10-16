const baseUrl = "news/";

export const useNewsSlug = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getNewsSlug = async (newsSlug) => {
    const res = await $api(`${baseUrl}?slug=${newsSlug}`);

    return res.data[0];
  };

  return {
    getNewsSlug,
  };
};
