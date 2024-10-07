<script setup>
import { ref, onMounted } from "vue";
const news = ref(null);

// Функция для получения данных с API
const fetchNews = async () => {
  news.value = await $fetch("http://127.0.0.1:8000/api/contacts/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      lang: "ru", // Устанавливаем язык
    },
  });
};

onMounted(() => {
  fetchNews();
});

console.log("news", news.value);
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
                </div>
                <div>
                  {{ item.title }}
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
