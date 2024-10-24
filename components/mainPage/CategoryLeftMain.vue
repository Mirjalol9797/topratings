<script setup>
import { defineProps, computed } from "vue";
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

// Проверка на наличие массива и его деструктуризация
const firstData = computed(() => {
  if (Array.isArray(props.categoryList) && props.categoryList.length > 0) {
    return props.categoryList[0]; // Первый элемент
  }
  return null; // Возвращаем null, если нет данных
});

const otherData = computed(() => {
  if (Array.isArray(props.categoryList)) {
    return props.categoryList.slice(1); // Остальные элементы
  }
  return [];
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
    <div class="flex gap-8 mb-5 768:flex-col">
      <nuxt-link
        :to="localePath(`/rank/${firstData?.slug}`)"
        class="w-1/2 768:w-full block"
      >
        <div class="h-[280px] mb-4">
          <NuxtImg
            :src="firstData?.file"
            :alt="firstData?.title"
            :title="firstData?.title"
            class="w-full h-full object-cover"
            loading="lazy"
            format="webp"
          />
        </div>
        <h3 class="font-medium">{{ firstData?.title }}</h3>
      </nuxt-link>
      <div class="w-1/2 768:w-full">
        <nuxt-link
          :to="localePath(`/rank/${item?.slug}`)"
          class="flex items-center gap-3 mb-4 last:mb-0"
          v-for="(item, index) in otherData"
          :key="index"
        >
          <div class="min-w-[90px] h-[80px]">
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
  </div>
</template>

<style lang="scss" scoped></style>
