<script setup>
import { useAsyncData } from "nuxt/app";

import { useRoute } from "vue-router";
import CategoryLastTen from "../../components/mainPage/CategoryLastTen.vue";
import CategoryAllTopMain from "../../components/mainPage/CategoryAllTopMain.vue";

const { $axiosPlugin } = useNuxtApp();

const route = useRoute();

console.log("route", route.params.slug);
const {
  data: rankData,
  pending: rankDataPending,
  error: rankDataError,
} = await useAsyncData("rankDataList", async () => {
  try {
    const response = await $axiosPlugin.get(`news/?slug=${route.params.slug}`);
    if (response.status == "200") {
      return response.data.data[0];
    } else {
      throw new Error(`API response error news/?slug=${route.params.slug}`);
    }
  } catch (err) {
    console.error("news/?slug=${route.params.slug} Error fetching data:", err);
    throw err;
  }
});
</script>

<template>
  <div class="rank-detail">
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <div class="font-bold text-3xl mb-6 title">
            {{ rankData?.title }}
          </div>
          <div
            v-html="rankData?.description"
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
<style lang="scss" scoped>
.rank-detail {
  .title {
    font-family: Comic Sans MS, cursive;
  }
  .content {
    p {
      margin-bottom: 12px;
    }
  }
}
</style>
