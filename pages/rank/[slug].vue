<script setup>
import { useAsyncData } from "nuxt/app";

import { useRoute } from "vue-router";

import CategoryLastTen from "@/components/mainPage/CategoryLastTen.vue";
import CategoryAllTopMain from "@/components/mainPage/CategoryAllTopMain.vue";

const route = useRoute();

const getNewsSlugApi = useNewsSlug();

const { data: newsSlug } = useAsyncData("slug", () =>
  getNewsSlugApi.getNewsSlug(route.params.slug)
);
</script>

<template>
  <div class="rank-detail">
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <h1 class="font-bold text-3xl mb-6 title">
            {{ newsSlug?.title }}
          </h1>
          <div
            v-html="newsSlug?.description"
            class="w-full h-full content"
          ></div>
        </div>
        <div class="w-[29%] ml-[3%]">
          <CategoryLastTen />
        </div>
      </div>
      <CategoryAllTopMain />
    </div>
  </div>
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
    a {
      color: #315efb;
    }
    ul {
      padding: 0 0 0 16px;
      margin-bottom: 12px;
      list-style: circle;
    }
  }
}
</style>
