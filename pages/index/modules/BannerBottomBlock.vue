<script setup>
const props = defineProps({
  ranksLittleBannerList: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <div class="grid grid-cols-5 gap-6">
    <nuxt-link
      :to="`rank/${item.slug}`"
      v-for="(item, index) in ranksLittleBannerList"
      :key="index"
    >
      <div class="mb-2">
        <img :src="item.file" :alt="item.title" :title="item.title" />
      </div>
      <h2 class="text-mini-3">
        {{ item.title }}
      </h2>
    </nuxt-link>
  </div>
</template>
<style lang="scss" scoped></style>
