<script setup>
import { useAsyncData } from "nuxt/app";

import { useRoute } from "vue-router";

import CategoryLastTen from "../index/modules/CategoryLastTen.vue";
import CategoryAllTopMain from "../index/modules/CategoryAllTopMain.vue";

const { $axiosPlugin } = useNuxtApp();

const route = useRoute();

const {
  data: categoryList,
  pending: categoryListPending,
  error: categoryListError,
} = await useAsyncData("category", async () => {
  try {
    const response = await $axiosPlugin.post(
      `news/?cat_slug=${route.params.slug}`,
      {
        limit: 20,
        page: 1,
      }
    );
    if (response.status == "200") {
      return response.data.data;
    } else {
      throw new Error(`API response error news/?cat_slug=${route.params.slug}`);
    }
  } catch (err) {
    console.error(
      `news/?cat_slug=${route.params.slug} Error fetching data:`,
      err
    );
    throw err;
  }
});
</script>

<template>
  <div class="news-detail">
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <div class="font-medium text-xl mb-6">
            {{ categoryList[0].category.name }}
          </div>

          <div class="grid grid-cols-3 gap-8">
            <nuxt-link
              :to="localePath(`/rank/${item.slug}`)"
              v-for="(item, index) in categoryList"
              :key="index"
            >
              <div class="h-[220px] mb-4">
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
        <div class="w-[29%] ml-[3%]">
          <CategoryLastTen />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
