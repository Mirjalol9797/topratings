<script setup>
import { onMounted } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
const settingsStore = useSettingsStore();

if (process.client) {
  // Асинхронная загрузка gtag.js
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-EG248XZFC7";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-EG248XZFC7");

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // yandex
  // Подготовка Yandex.RTB
  window.yaContextCb = window.yaContextCb || [];

  // Создание тега скрипта
  const sct = document.createElement("script");
  sct.src = "https://yandex.ru/ads/system/context.js";
  sct.async = true;

  // Добавление тега в DOM
  document.head.appendChild(sct);
}

function siteScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", function () {
    const scrollElem = document.querySelector(".site-scroll-top");

    if (scrollElem) {
      if (document.documentElement.scrollTop > 400) {
        scrollElem.style.opacity = "1";
        scrollElem.style.zIndex = "10";
      } else {
        scrollElem.style.opacity = "0";
        scrollElem.style.zIndex = "-1";
      }
    }
  });
});
</script>

<template>
  <LayoutHeader />
  <div class="content">
    <NuxtPage :key="route.fullPath" />
  </div>
  <LayoutFooter />
  <UiHLoader v-if="settingsStore.isLoader" />

  <div class="site-scroll-top" @click="siteScrollTop">
    <img
      src="/icons/header/scroll-top.svg"
      alt="scroll-top"
      width="24px"
      height="24px"
    />
  </div>
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
