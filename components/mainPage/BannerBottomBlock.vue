<script setup>
const props = defineProps({
  littleBannerList: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <div class="grid grid-cols-5 gap-6 768:grid-cols-2">
    <nuxt-link
      :to="localePath(`/rank/${item?.slug}`)"
      v-for="(item, index) in littleBannerList"
      :key="index"
    >
      <div class="mb-2 h-[96px] 768:h-[180px] 480:!h-[160px]">
        <NuxtImg
          :src="item?.file"
          :alt="item?.title"
          :title="item?.title"
          class="w-full h-full object-cover"
          loading="lazy"
          format="webp"
        />
      </div>
      <h2 class="text-mini-3">
        {{ item?.title }}
      </h2>
    </nuxt-link>
  </div>
</template>
<style lang="scss" scoped></style>
