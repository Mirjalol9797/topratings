<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

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

const { t } = useI18n();
const getNewsBannerApi = useNewsPlaceInSite();
const getNewsCategoryApi = useNewsCategory();
const route = useRoute();

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
  <img src="../../public/logo.jpg" alt="" class="hidden" />
  <div class="main-page">
    <!-- first column -->
    <div class="site-container">
      <div class="flex 960:flex-col">
        <div class="w-[68%] 960:w-full 960:mb-14">
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
        <div class="w-[29%] ml-[3%] 960:w-full 960:ml-0">
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

  <!-- seo -->
  <Head>
    <Title>{{ t("seo.title") }}</Title>
    <Meta name="title" :content="t('seo.title')" />
    <Meta name="description" :content="t('seo.description')" />
    <Meta name="keywords" :content="t('seo.keywords')" />
    <Meta name="og:title" property="og:title" :content="t('seo.title')" />
    <Meta
      name="og:description"
      property="og:description"
      :content="t('seo.description')"
    />
    <Meta property="og:image" content="./public/logo.jpg" />
    <Meta
      property="og:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Meta property="twitter:title" :content="t('seo.title')" />
    <Meta property="twitter:description" :content="t('seo.description')" />
    <Meta property="twitter:image" content="./public/logo.jpg" />
    <Meta
      property="twitter:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://toprankings.uz${route.fullPath}`" />
    <Link rel="alternate" hreflang="uz" href="https://toprankings.uz/uz" />
    <Link rel="alternate" hreflang="en" href="https://toprankings.uz/en" />
    <Link rel="alternate" hreflang="x-default" href="https://toprankings.uz/" />
  </Head>
</template>

<style lang="scss"></style>
