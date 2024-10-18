<script setup>
import { useAsyncData } from "nuxt/app";

import { useRoute } from "vue-router";

import CategoryLastTen from "../../components/mainPage/CategoryLastTen.vue";
import CategoryAllTopMain from "../../components/mainPage/CategoryAllTopMain.vue";

const route = useRoute();

const getNewsCategoryApi = useNewsCategory();

const { data: newsCategory } = useAsyncData("category", () =>
  getNewsCategoryApi.getNewsCategoryPage(route.params.slug)
);
</script>

<template>
  <div class="news-detail">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <div class="w-[68%] 768:w-full 768:mb-14">
          <h1 class="font-bold text-xl mb-6">
            {{ newsCategory?.data[0]?.category?.name }}
          </h1>

          <div class="grid grid-cols-3 gap-8 1024:grid-cols-2">
            <nuxt-link
              :to="localePath(`/rank/${item.slug}`)"
              v-for="(item, index) in newsCategory.data"
              :key="index"
            >
              <div class="h-[220px] mb-4 480:h-[160px]">
                <img
                  :src="item.file"
                  :alt="item.title"
                  :title="item.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="font-medium">{{ item.title }}</div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-[29%] ml-[3%] 768:w-full 768:ml-0">
          <CategoryLastTen />
        </div>
      </div>
    </div>
  </div>

  <!-- seo -->
  <Head>
    <Title>{{ newsCategory?.data[0].category.seo.title }}</Title>
    <Meta name="title" :content="newsCategory?.data[0].category.seo.title" />
    <Meta
      name="description"
      :content="newsCategory?.data[0].category.seo.description"
    />
    <Meta
      name="keywords"
      :content="newsCategory?.data[0].category.seo.keywords"
    />
    <Meta
      name="og:title"
      property="og:title"
      :content="newsCategory?.data[0].category.seo.title"
    />
    <Meta
      name="og:description"
      property="og:description"
      :content="newsCategory?.data[0].category.seo.description"
    />
    <Meta property="og:image" :content="newsCategory?.data[0].category.image" />
    <Meta
      property="og:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Meta
      property="twitter:title"
      :content="newsCategory?.data[0].category.seo.title"
    />
    <Meta
      property="twitter:description"
      :content="newsCategory?.data[0].category.seo.description"
    />
    <Meta
      property="twitter:image"
      :content="newsCategory?.data[0].category.image"
    />
    <Meta
      property="twitter:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://toprankings.uz${route.fullPath}`" />
    <Link
      rel="alternate"
      hreflang="uz"
      :href="`https://toprankings.uz/uz/category/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="`https://toprankings.uz/en/category/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="`https://toprankings.uz/category/${route.params.slug}`"
    />
  </Head>
</template>
<style lang="scss" scoped></style>
