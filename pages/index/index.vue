<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";

// components
import SliderBanner from "./modules/SliderBanner.vue";
import BannerBottomBlock from "./modules/BannerBottomBlock.vue";
import CategoryLeftMain from "./modules/CategoryLeftMain.vue";
import CategoryRightMain from "./modules/CategoryRightMain.vue";
import CategoryDoubleTopMain from "./modules/CategoryDoubleTopMain.vue";
import CategoryNotMain from "./modules/CategoryNotMain.vue";
import CategoryLastTen from "./modules/CategoryLastTen.vue";
import CategoryFullViewMain from "./modules/CategoryFullViewMain.vue";
import CategoryAllTopMain from "./modules/CategoryAllTopMain.vue";

const { $axiosPlugin } = useNuxtApp();

const news = ref(null);

const {
  data: ranksBannerList,
  pending,
  error,
} = await useAsyncData("ranksBanner", async () => {
  try {
    const response = await $axiosPlugin.get("news/placeinsite/banner/");
    console.log("Response:", response);
    if (response.status == "200") {
      return response.data;
    } else {
      throw new Error("API response error");
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
});
</script>

<template>
  <div class="main-page">
    <!-- first column -->
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <!-- slider banner -->

          <SliderBanner :ranksList="ranksBannerList" />

          <!-- banner bottom block -->
          <BannerBottomBlock />

          <!-- Игры и Киберспорт -->
          <CategoryLeftMain />

          <!-- Кино и Телевидение -->
          <CategoryNotMain />
        </div>
        <div class="w-[29%] ml-[3%]">
          <!-- last 10 news -->
          <CategoryLastTen />
        </div>
      </div>
    </div>

    <!-- second column -->
    <div class="site-container">
      <CategoryFullViewMain />
    </div>

    <!-- third column -->
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <!-- Музыка -->
          <CategoryRightMain />

          <!-- Технологии -->
          <CategoryDoubleTopMain />

          <!-- Топ-блюд -->
          <CategoryAllTopMain />
        </div>
        <div class="w-[29%] ml-[3%]">
          <!-- last 10 news -->
          <CategoryLastTen />
        </div>
      </div>
    </div>

    <!-- fourth column -->
    <div class="site-container">
      <CategoryFullViewMain />
    </div>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
