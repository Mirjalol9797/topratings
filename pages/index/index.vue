<script setup>
const news = await $fetch("/api/news");
console.log(news);
</script>

<template>
  <div class="main-page">
    <div class="site-container">
      <div class="flex">
        <div class="w-[65%]">
          center column
          <div class="mb-5">
            <Swiper
              :modules="[SwiperAutoplay, SwiperEffectCreative]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{
                delay: 4000,
                disableOnInteraction: true,
              }"
            >
              <SwiperSlide v-for="(item, index) in news" :key="index">
                <div class="mx-auto h-[460px]">
                  <NuxtImg
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                    format="webp"
                  />
                  <div>
                    {{ item.title }}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>slider mini</div>
          <div>Игры и Киберспорт</div>
          <div>Кино и Телевидение</div>
        </div>
        <div class="w-[32%] ml-[3%]">left column</div>
      </div>
    </div>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
