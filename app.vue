<script setup>
import { useSeo } from "@/composables/useSeo";

const { t } = useI18n();
const seoData = {
  title: t("seo.title"),
  description: t("seo.description"),
  keywords: t("seo.keywords"),
  ogTitle:
    "Top Rankings – Рейтинги лучших в спорте, кино, технологиях и других областях",
  ogDescription:
    'На "Top Rankings" вы найдете топ-10 списки в различных категориях: спорт, кино, технологии, музыка, архитектура и многое другое. Оцените рейтинги, созданные на основе данных и мнений экспертов',
  ogImage: "./public/favicon.ico",
  ogUrl: "https://toprankings.uz/",
  twitterUrl: "https://toprankings.uz/",
  twitterTitle:
    "Top Rankings – Рейтинги лучших в спорте, кино, технологиях и других областях",
  twitterDescription:
    "На Top Rankings вы найдете топ-10 списки в различных категориях: спорт, кино, технологии, музыка, архитектура и многое другое. Оцените рейтинги, созданные на основе данных и мнений экспертов",
  twitterImage: "./public/favicon.ico",
};

useSeo(seoData);
</script>

<template>
  <NuxtLayout></NuxtLayout>
</template>
