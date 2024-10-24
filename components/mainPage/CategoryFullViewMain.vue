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
  <div class="my-10">
    <div class="main-page-category-title-wrap">
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <nuxt-link
        :to="localePath(`/category/${slug}`)"
        class="flex justify-center text-xs text-[#315efb] font-medium"
      >
        {{ $t("see_all") }}
      </nuxt-link>
    </div>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="5"
      :spaceBetween="24"
      :loop="false"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(item, index) in categoryList" :key="index">
        <nuxt-link :to="localePath(`/rank/${item?.slug}`)" class="">
          <div
            class="mx-auto mb-3 relative h-[180px] after:content-[''] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.3)] after:rounded-xl"
          >
            <NuxtImg
              :src="item?.file"
              :alt="item?.title"
              :title="item?.title"
              class="w-full h-full object-cover rounded-xl"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="text-sm font-medium">{{ item?.title }}</div>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped></style>
