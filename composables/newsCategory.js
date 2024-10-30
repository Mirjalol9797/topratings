const baseUrl = "news/";

export const useNewsCategory = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getNewsCategory = async (categorySlug, limit) => {
    const res = await $api(`${baseUrl}?cat_slug=${categorySlug}`, {
      method: "POST", // Указываем метод POST
      body: {
        limit,
        page: 1,
      },
    });
    return res;
  };

  const getNewsCategoryPage = async (categorySlug) => {
    const res = await $api(`${baseUrl}?cat_slug=${categorySlug}`, {
      method: "POST", // Указываем метод POST
      body: {
        limit: 20,
        page: 1,
      },
    });
    return res;
  };

  return {
    getNewsCategory,
    getNewsCategoryPage,
  };
};
