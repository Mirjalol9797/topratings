<script setup>
const props = defineProps({
  categoryList: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="main-page-category">
    <div class="main-page-category-title-wrap">
      <h2 class="text-lg">{{ title }}</h2>
      <nuxt-link
        :to="localePath(`/category/${slug}`)"
        class="flex justify-center text-xs text-[#315efb] font-medium"
      >
        {{ $t("see_all") }}
      </nuxt-link>
    </div>
    <div class="grid grid-cols-2 gap-8 mb-5">
      <nuxt-link
        :to="localePath(`/rank/${item?.slug}`)"
        class="flex items-center gap-3 mb-4"
        v-for="(item, index) in categoryList"
        :key="index"
      >
        <div class="w-[30%]">
          <img :src="item?.file" :alt="item?.title" :title="item?.title" />
        </div>
        <h3 class="text-sm">
          {{ item?.title }}
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
