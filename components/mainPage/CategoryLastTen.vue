<script setup>
import { useAsyncData } from "nuxt/app";

const { $axiosPlugin } = useNuxtApp();

const {
  data: ranksLastList,
  pending: ranksLastPending,
  error: ranksLastError,
} = await useAsyncData("ranksLast", async () => {
  try {
    const response = await $axiosPlugin.post("news/", {
      limit: 10,
      page: 1,
    });
    if (response.status == "200") {
      return response.data.data;
    } else {
      throw new Error("API response error news/ last 10");
    }
  } catch (err) {
    console.error("news/ last 10 Error fetching data:", err);
    throw err;
  }
});
</script>

<template>
  <div class="sticky top-4">
    <div class="main-page-category-title-wrap">
      <div
        class="bg-[#315efb] font-medium px-2 py-2 rounded-[4px] text-base w-full"
      >
        Последные
      </div>
    </div>
    <div class="h-[350px] overflow-y-auto pr-1 site-scroll">
      <nuxt-link
        :to="localePath(`/rank/${item?.slug}`)"
        class="flex items-start justify-between gap-4 mb-3"
        v-for="(item, index) in ranksLastList"
        :key="index"
      >
        <div>
          <div class="font-medium text-sm">
            {{ item?.title }}
          </div>
        </div>
        <div class="min-w-[90px]">
          <img
            :src="item?.file"
            :alt="item?.title"
            :title="item?.title"
            class="w-[90px] h-[70px] object-cover"
          />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
