<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";

// components
import SliderBanner from "../../components/mainPage/SliderBanner.vue";
import BannerBottomBlock from "../../components/mainPage/BannerBottomBlock.vue";
import CategoryLeftMain from "../../components/mainPage/CategoryLeftMain.vue";
import CategoryRightMain from "../../components/mainPage/CategoryRightMain.vue";
import CategoryDoubleTopMain from "../../components/mainPage/CategoryDoubleTopMain.vue";
import CategoryNotMain from "../../components/mainPage/CategoryNotMain.vue";
import CategoryLastTen from "../../components/mainPage/CategoryLastTen.vue";
import CategoryFullViewMain from "../../components/mainPage/CategoryFullViewMain.vue";
import CategoryAllTopMain from "../../components/mainPage/CategoryAllTopMain.vue";

const { $axiosPlugin } = useNuxtApp();

const news = ref(null);

// banner api
const {
  data: ranksBannerList,
  pending: ranksBannerPending,
  error: ranksBannerError,
} = await useAsyncData(
  "ranksBanner",
  async () => {
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
  },
  { server: true }
);

// little banner api
const {
  data: ranksLittleBannerList,
  pending: ranksLittleBannerPending,
  error: ranksLittleBannerError,
} = await useAsyncData(
  "ranksLittleBanner",
  async () => {
    try {
      const response = await $axiosPlugin.get(
        "news/placeinsite/little_banner/"
      );
      if (response.status == "200") {
        return response.data;
      } else {
        throw new Error("API response error news/placeinsite/little_banner/");
      }
    } catch (err) {
      console.error(
        "news/placeinsite/little_banner/ Error fetching data:",
        err
      );
      throw err;
    }
  },
  { server: true }
);

// category Игры и Киберспорт
const {
  data: ranksIgryKibersportList,
  pending: ranksIgryKibersportPending,
  error: ranksIgryKibersportError,
} = await useAsyncData(
  "ranksIgryKibersport",
  async () => {
    try {
      const response = await $axiosPlugin.post(
        "news/?cat_slug=igry-i-kibersport-ru",
        {
          limit: 5,
          page: 1,
        }
      );
      if (response.status == "200") {
        return response.data.data;
      } else {
        throw new Error(
          "API response error news/?cat_slug=igry-i-kibersport-ru"
        );
      }
    } catch (err) {
      console.error(
        "news/?cat_slug=igry-i-kibersport-ru Error fetching data:",
        err
      );
      throw err;
    }
  },
  { server: true }
);

// category Кино и Телевидение
const {
  data: ranksKinoTelevidenieList,
  pending: ranksKinoTelevideniePending,
  error: ranksKinoTelevidenieError,
} = await useAsyncData(
  "ranksKinoTelevidenie",
  async () => {
    try {
      const response = await $axiosPlugin.post(
        "news/?cat_slug=kino-i-televidenie-ru",
        {
          limit: 6,
          page: 1,
        }
      );
      if (response.status == "200") {
        return response.data.data;
      } else {
        throw new Error(
          "API response error news/?cat_slug=kino-i-televidenie-ru"
        );
      }
    } catch (err) {
      console.error(
        "news/?cat_slug=kino-i-televidenie-ru Error fetching data:",
        err
      );
      throw err;
    }
  },
  { server: true }
);
</script>

<template>
  <div class="main-page">
    <!-- first column -->
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <!-- slider banner -->

          <SliderBanner :bannerList="ranksBannerList" />

          <!-- banner bottom block -->
          <BannerBottomBlock :littleBannerList="ranksLittleBannerList" />

          <!-- Игры и Киберспорт -->
          <CategoryLeftMain
            :categoryList="ranksIgryKibersportList"
            title="Игры и Киберспорт"
            slug="igry-i-kibersport-ru"
          />

          <!-- Кино и Телевидение -->
          <CategoryNotMain
            :categoryList="ranksKinoTelevidenieList"
            title="Кино и Телевидение"
            slug="kino-i-televidenie-ru"
          />
        </div>
        <div class="w-[29%] ml-[3%]">
          <!-- last 10 news -->
          <CategoryLastTen />
        </div>
      </div>
    </div>

    <template v-if="false">
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
            <!-- <CategoryLastTen /> -->
          </div>
        </div>
      </div>

      <!-- fourth column -->
      <div class="site-container">
        <CategoryFullViewMain />
      </div>
    </template>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
