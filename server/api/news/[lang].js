// server/api/news/[lang].js
export default defineEventHandler((event) => {
  const { lang } = event.context.params;

  const data = {
    en: [
      {
        id: 1,
        slug: "new_title",
        title: "New title",
        description: "Description in English",
        image: "/news-img/test.jpg",
      },
    ],
    ru: [
      {
        id: 2,
        slug: "novoye_nazvaniye",
        title: "Новое название",
        description: "Описание на русском",
        image: "/news-img/test.jpg",
      },
    ],
    uz: [
      {
        id: 3,
        slug: "yangi_sarlavha",
        title: "Yangi sarlavha",
        description: "O‘zbek tilidagi ta’rif",
        image: "/news-img/test.jpg",
      },
    ],
  };

  return data[lang] || data["uz"]; // Если язык не найден, возвращаем данные на узбекском
});
