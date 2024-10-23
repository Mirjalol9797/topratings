<script setup>
import { useAsyncData } from "nuxt/app";

import { useRoute } from "vue-router";

import CategoryLastTen from "@/components/mainPage/CategoryLastTen.vue";
import CategoryAllTopMain from "@/components/mainPage/CategoryAllTopMain.vue";

const { t } = useI18n();
const route = useRoute();

const getNewsSlugApi = useNewsSlug();

const { data: newsSlug } = useAsyncData("slug", () =>
  getNewsSlugApi.getNewsSlug(route.params.slug)
);
</script>

<template>
  <div class="rank-detail">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <div class="w-[68%] 768:w-full 768:mb-14">
          <h1 class="font-bold text-3xl mb-6 title">
            {{ newsSlug?.title }}
          </h1>
          <div
            v-html="newsSlug?.description"
            class="w-full h-full content"
          ></div>
        </div>
        <div class="w-[29%] ml-[3%] 768:w-full 768:ml-0">
          <CategoryLastTen />
        </div>
      </div>
      <CategoryAllTopMain />
    </div>
  </div>

  <!-- seo -->
  <Head>
    <Title>{{ newsSlug?.seo?.title }}</Title>
    <Meta name="title" :content="newsSlug?.seo?.title" />
    <Meta name="description" :content="newsSlug?.seo?.description" />
    <Meta name="keywords" :content="newsSlug?.seo?.keywords" />
    <Meta name="og:title" property="og:title" :content="newsSlug?.seo?.title" />
    <Meta
      name="og:description"
      property="og:description"
      :content="newsSlug?.seo?.description"
    />
    <Meta property="og:image" :content="newsSlug?.file" />
    <Meta
      property="og:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Meta property="twitter:title" :content="newsSlug?.seo?.title" />
    <Meta
      property="twitter:description"
      :content="newsSlug?.seo?.description"
    />
    <Meta property="twitter:image" :content="newsSlug?.file" />
    <Meta
      property="twitter:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://toprankings.uz${route.fullPath}`" />
    <Link
      rel="alternate"
      hreflang="uz"
      :href="`https://toprankings.uz/uz/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="`https://toprankings.uz/en/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="`https://toprankings.uz/rank/${route.params.slug}`"
    />
  </Head>
</template>

<style lang="scss">
.rank-detail {
  .content {
    h1,
    h2,
    h3,
    img,
    p {
      margin-bottom: 12px;
    }
    p {
      line-height: 24px;
    }
    h2 {
      font-size: 20px;
      line-height: 24px;
    }
    a {
      color: #315efb;
    }
    ul {
      padding: 0 0 0 40px;
      margin-bottom: 12px;
      list-style: circle;
    }
    iframe {
      width: 100%;
    }
  }
}
</style>
