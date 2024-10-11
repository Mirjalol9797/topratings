<script setup>
import { ref } from "vue";
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
      <SwiperSlide>
        <nuxt-link
          to="/"
          class="relative after:content-['*'] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.3)]"
        >
          <div class="mx-auto h-[460px]">
            <NuxtImg
              src="https://daryo.uz/static/2024/10/6708a9ab0401d.jpg"
              alt="item"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
            />
          </div>
          <div
            class="absolute bottom-5 text-white z-10 max-w-[80%] left-5 text-2xl"
          >
            news name
          </div>
        </nuxt-link>
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-link
          to="/"
          class="relative after:content-['*'] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.3)]"
        >
          <div class="mx-auto h-[460px]">
            <NuxtImg
              src="https://daryo.uz/static/2024/10/little-67069f45c6c94.jpg"
              alt="item"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
            />
          </div>
          <div
            class="absolute bottom-5 text-white z-10 max-w-[80%] left-5 text-2xl"
          >
            news name
          </div>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style lang="scss" scoped></style>
