<script setup>
import { ref } from "vue";

const props = defineProps({
  bannerList: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <div class="mb-5">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      :effect="'fade'"
    >
      <SwiperSlide v-for="(item, index) in bannerList" :key="index">
        <nuxt-link
          :to="localePath(`/rank/${item.slug}`)"
          class="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.3)]"
        >
          <div class="mx-auto h-[460px]">
            <NuxtImg
              :src="item.file"
              :alt="item.title"
              :title="item.title"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
            />
          </div>
          <div
            class="absolute bottom-5 text-white z-10 max-w-[80%] left-5 text-2xl"
          >
            {{ item.title }}
          </div>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style lang="scss" scoped></style>
