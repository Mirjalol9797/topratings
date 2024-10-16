const baseUrl = "news/";

export const useNewsLatest = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getNewsLatest = async () => {
    const res = await $api(baseUrl, {
      method: "POST", // Указываем метод POST
      body: {
        limit: 10,
        page: 1,
      },
    });
    return res;
  };

  return {
    getNewsLatest,
  };
};
