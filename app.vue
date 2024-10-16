<script setup>
useHead({
  title:
    "Top Rankings – Рейтинги лучших в спорте, кино, технологиях и других областях",
  meta: [
    {
      name: "title",
      content:
        "Top Rankings – Рейтинги лучших в спорте, кино, технологиях и других областях",
    },
    {
      name: "description",
      content: `На Top Rankings вы найдете топ-10 списки в различных категориях: спорт, кино, технологии, музыка, архитектура и многое другое. Оцените рейтинги, созданные на основе данных и мнений экспертов`,
    },
    {
      name: "keywords",
      content: `рейтинги, топ-10, лучшие, топ спортсмены, топ фильмы, топ песни, топ технологии, топ гаджеты, топ архитекторы, лучшие рестораны, рейтинги кино, топ музыки, рейтинги спорта, популярные рейтинги`,
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "og:title",
      property: "og:title",
      content: `Top Rankings – Рейтинги лучших в спорте, кино, технологиях и других областях`,
    },
    {
      name: "og:description",
      property: "og:description",
      content: `На "Top Rankings" вы найдете топ-10 списки в различных категориях: спорт, кино, технологии, музыка, архитектура и многое другое. Оцените рейтинги, созданные на основе данных и мнений экспертов`,
    },
    {
      property: "og:image",
      content: `./public/favicon.ico`,
    },
    {
      property: "og:url",
      content: `https://toprankings.uz/`,
    },
    {
      name: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      property: "og:site_name",
      content: "Hamkoh market",
    },
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:url",
      content: `https://toprankings.uz/`,
    },
    {
      name: "twitter:title",
      property: "og:title",
      content: `Top Rankings – Рейтинги лучших в спорте, кино, технологиях и других областях`,
    },
    {
      name: "twitter:description",
      property: "og:description",
      content: `На Top Rankings вы найдете топ-10 списки в различных категориях: спорт, кино, технологии, музыка, архитектура и многое другое. Оцените рейтинги, созданные на основе данных и мнений экспертов`,
    },
    {
      property: "twitter:image",
      content: `./public/favicon.ico`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://toprankings.uz/",
    },
    {
      rel: "preload",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://toprankings.uz/en/",
    },
    {
      rel: "alternate",
      hreflang: "ru",
      href: "https://toprankings.uz/ru/",
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: "https://toprankings.uz/",
    },
    { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
    { rel: "preload", href: "https://fonts.gstatic.com" },
    // { rel: "manifest", href: "/_nuxt/manifest.bb59f937.json" }, // надо поменять json
  ],
});
</script>

<template>
  <NuxtLayout></NuxtLayout>
</template>
