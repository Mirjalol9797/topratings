<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";

// components
import SliderBanner from "@/components/mainPage/SliderBanner.vue";
import BannerBottomBlock from "@/components/mainPage/BannerBottomBlock.vue";
import CategoryLeftMain from "@/components/mainPage/CategoryLeftMain.vue";
import CategoryRightMain from "@/components/mainPage/CategoryRightMain.vue";
import CategoryDoubleTopMain from "@/components/mainPage/CategoryDoubleTopMain.vue";
import CategoryNotMain from "@/components/mainPage/CategoryNotMain.vue";
import CategoryLastTen from "@/components/mainPage/CategoryLastTen.vue";
import CategoryFullViewMain from "@/components/mainPage/CategoryFullViewMain.vue";
import CategoryAllTopMain from "@/components/mainPage/CategoryAllTopMain.vue";

const getNewsBannerApi = useNewsPlaceInSite();
const getNewsCategoryApi = useNewsCategory();

// banner api
const { data: newsBanner } = useAsyncData("banner", () =>
  getNewsBannerApi.getNewsBanner()
);

// little banner api
const { data: newsLittleBanner } = useAsyncData("littleBanner", () =>
  getNewsBannerApi.getNewsLittleBanner()
);

// category Игры и Киберспорт
const { data: newsCategoryIgriKibersport } = useAsyncData("category", () =>
  getNewsCategoryApi.getNewsCategory("igry-i-kibersport")
);

// category Кино и Телевидение
const { data: newsCategoryKinoTelevidenie } = useAsyncData("category", () =>
  getNewsCategoryApi.getNewsCategory("kino-i-televidenie")
);
</script>

<template>
  <div class="main-page">
    <!-- first column -->
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <!-- slider banner -->

          <SliderBanner :bannerList="newsBanner" />

          <!-- banner bottom block -->
          <BannerBottomBlock :littleBannerList="newsLittleBanner" />

          <!-- Игры и Киберспорт -->
          <CategoryLeftMain
            :categoryList="newsCategoryIgriKibersport?.data"
            :title="$t('category.igry_i_kibersport')"
            slug="igry-i-kibersport"
          />

          <!-- Кино и Телевидение -->
          <CategoryNotMain
            :categoryList="newsCategoryKinoTelevidenie?.data"
            :title="$t('category.kino_i_televidenie')"
            slug="kino-i-televidenie"
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
