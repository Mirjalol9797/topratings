export default defineEventHandler((event) => {
  const { lang } = event.context.params;

  const data = {
    en: [
      {
        title: "New title",
        description: "Description in English",
        image: "/news-img/test.png",
      },
    ],
    ru: [
      {
        title: "Новое название",
        description: "Описание на русском",
        image: "/news-img/test.png",
      },
    ],
    uz: [
      {
        title: "Yangi sarlavha",
        description: "O‘zbek tilidagi ta’rif",
        image: "/news-img/test.png",
      },
    ],
  };

  return data[lang] || data["uz"]; // Если язык не найден, по умолчанию возвращаем узбекский
});
