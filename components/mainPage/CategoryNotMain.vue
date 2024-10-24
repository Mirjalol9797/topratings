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
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <nuxt-link
        :to="localePath(`/category/${slug}`)"
        class="flex justify-center text-xs text-[#315efb] font-medium"
      >
        {{ $t("see_all") }}
      </nuxt-link>
    </div>
    <div class="grid grid-cols-2 gap-8 mb-5 640:grid-cols-1 640:gap-0">
      <nuxt-link
        :to="localePath(`/rank/${item?.slug}`)"
        class="flex items-center gap-3"
        v-for="(item, index) in categoryList"
        :key="index"
      >
        <div class="min-w-[100px] h-[90px]">
          <NuxtImg
            :src="item?.file"
            :alt="item?.title"
            :title="item?.title"
            class="w-full h-full object-cover"
            loading="lazy"
            format="webp"
          />
        </div>
        <h3 class="text-sm font-medium">
          {{ item?.title }}
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
