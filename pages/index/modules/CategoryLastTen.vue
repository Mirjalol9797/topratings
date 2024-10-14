<script setup>
const props = defineProps({
  lastRanks: {
    type: Array,
    default: [],
  },
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
        :to="`rank/${item.slug}`"
        class="flex items-start justify-between gap-4 mb-3"
        v-for="(item, index) in lastRanks"
        :key="index"
      >
        <div class="font-medium text-sm">
          {{ item.title }}
        </div>
        <div class="min-w-[90px]">
          <img
            :src="item.file"
            :alt="item.title"
            :title="item.title"
            class="w-[90px] h-[70px] object-cover"
          />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
