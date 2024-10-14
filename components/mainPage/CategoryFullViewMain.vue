<script setup></script>

<template>
  <div class="my-10">
    <div class="main-page-category-title-wrap">
      <h2 class="text-lg">Спорт</h2>
      <nuxt-link
        to="/"
        class="flex justify-center text-xs text-[#315efb] font-medium"
      >
        {{ $t("see_all") }}
      </nuxt-link>
    </div>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="5"
      :spaceBetween="24"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(item, index) in 8" :key="index">
        <nuxt-link to="/" class="">
          <div
            class="mx-auto mb-3 relative h-[180px] after:content-[''] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.3)]"
          >
            <NuxtImg
              src="https://daryo.uz/static/2024/10/6708a9ab0401d.jpg"
              alt="item"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="text-base font-medium">news name</div>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped></style>
