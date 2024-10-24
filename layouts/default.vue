<script setup>
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

  // Асинхронная загрузка скрипта Google AdSense
  const adsenseScript = document.createElement("script");
  adsenseScript.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3990212606361557"; // замените client=11111111 на ваш client ID
  adsenseScript.async = true;
  adsenseScript.setAttribute("crossorigin", "anonymous");
  document.head.appendChild(adsenseScript);
}
</script>

<template>
  <LayoutHeader />
  <div class="content">
    <NuxtPage :key="route.fullPath" />
  </div>
  <LayoutFooter />
  <UiHLoader v-if="settingsStore.isLoader" />
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
