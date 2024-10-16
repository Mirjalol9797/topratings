const baseUrl = "news/";

export const useNewsSlug = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getNewsSlug = async (newsSlug) => {
    const res = await $api(`${baseUrl}?slug=${newsSlug}`);
    console.log("res", res);

    return res.data[0];
  };

  return {
    getNewsSlug,
  };
};
