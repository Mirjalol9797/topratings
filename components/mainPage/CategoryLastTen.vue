<script setup>
import { useAsyncData } from "nuxt/app";

const getNewsLatestApi = useNewsLatest();

const { data: newsLatest } = useAsyncData("latest", () =>
  getNewsLatestApi.getNewsLatest()
);
</script>

<template>
  <div class="sticky top-4">
    <div class="main-page-category-title-wrap">
      <div
        class="bg-[#315efb] font-medium px-2 py-2 rounded-[4px] text-white w-full"
      >
        {{ $t("latest") }}
      </div>
    </div>
    <div class="h-[350px] overflow-y-auto pr-1 site-scroll">
      <nuxt-link
        :to="localePath(`/rank/${item?.slug}`)"
        class="flex items-start justify-between gap-4 mb-3"
        v-for="(item, index) in newsLatest?.data"
        :key="index"
      >
        <div>
          <div class="font-medium text-sm">
            {{ item?.title }}
          </div>
        </div>
        <div class="min-w-[90px]">
          <NuxtImg
            :src="item?.file"
            :alt="item?.title"
            :title="item?.title"
            class="w-[90px] h-[70px] object-cover"
            loading="lazy"
            format="webp"
          />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
