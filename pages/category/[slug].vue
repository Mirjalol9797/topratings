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
      <div class="flex">
        <div class="w-[68%]">
          <h1 class="font-medium text-xl mb-6">
            {{ newsCategory.data[0].category.name }}
          </h1>

          <div class="grid grid-cols-3 gap-8">
            <nuxt-link
              :to="localePath(`/rank/${item.slug}`)"
              v-for="(item, index) in newsCategory.data"
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
