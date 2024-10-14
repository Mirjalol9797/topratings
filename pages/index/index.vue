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

// banner api
const {
  data: ranksBannerList,
  pending: ranksBannerPending,
  error: ranksBannerError,
} = await useAsyncData("ranksBanner", async () => {
  try {
    const response = await $axiosPlugin.get("news/placeinsite/banner/");
    if (response.status == "200") {
      return response.data;
    } else {
      throw new Error("API response error news/placeinsite/banner/");
    }
  } catch (err) {
    console.error("news/placeinsite/banner/ Error fetching data:", err);
    throw err;
  }
});

// little banner api
const {
  data: ranksLittleBannerList,
  pending: ranksLittleBannerPending,
  error: ranksLittleBannerError,
} = await useAsyncData("ranksLittleBanner", async () => {
  try {
    const response = await $axiosPlugin.get("news/placeinsite/little_banner/");
    if (response.status == "200") {
      return response.data;
    } else {
      throw new Error("API response error news/placeinsite/little_banner/");
    }
  } catch (err) {
    console.error("news/placeinsite/little_banner/ Error fetching data:", err);
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

          <SliderBanner :ranksBannerList="ranksBannerList" />

          <!-- banner bottom block -->
          <BannerBottomBlock :ranksLittleBannerList="ranksLittleBannerList" />

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
