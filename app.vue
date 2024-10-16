<script setup>
import { useSeo } from "@/composables/useSeo";

const { t } = useI18n();
const seoData = {
  title: t("seo.title"),
  description: t("seo.description"),
  keywords: t("seo.keywords"),
  ogTitle: t("seo.title"),
  ogDescription: t("seo.description"),
  ogImage: "./public/favicon.ico",
  ogUrl: "https://toprankings.uz/",
  twitterUrl: "https://toprankings.uz/",
  twitterTitle: t("seo.title"),
  twitterDescription: t("seo.description"),
  twitterImage: "./public/favicon.ico",
};

useSeo(seoData);
</script>

<template>
  <NuxtLayout></NuxtLayout>
</template>
