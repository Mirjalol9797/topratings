<script setup>
import { ref, onMounted } from "vue";
const news = ref(null);
</script>

<template>
  <div class="main-page">
    <div class="site-container">
      <div class="flex">
        <div class="w-[65%]">
          <!-- slider banner -->
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

          <!-- banner bottom block -->
          <div class="flex gap-6">
            <nuxt-link to="/" v-for="(item, index) in 5" :key="index">
              <img
                src="https://daryo.uz/static/2024/10/thumb-6707f3ef83099.jpg"
                alt=""
                title=""
                class="mb-2"
              />
              <h2 class="text-mini-3">
                Namanganda o‘zganing nomiga 40 mln so‘m kredit rasmiylashtirib,
                pullarni o‘zlashtirgan shaxs ushlandi
              </h2>
            </nuxt-link>
          </div>

          <!-- Игры и Киберспорт -->
          <div class="main-page-category">
            <div class="main-page-category-title-wrap">
              <h2 class="text-lg">Игры и Киберспорт</h2>
              <nuxt-link
                to="/"
                class="flex justify-center text-xs text-[#315efb] font-medium"
              >
                Barcha habarlar
              </nuxt-link>
            </div>
            <div class="flex gap-8 mb-5">
              <nuxt-link to="/" class="w-1/2">
                <img
                  src="https://daryo.uz/static/2024/10/thumb-6708d23fae76a.jpg"
                  alt=""
                  title=""
                  class="mb-4"
                />
                <h3>
                  Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times
                </h3>
              </nuxt-link>
              <div class="w-1/2">
                <nuxt-link
                  to="/"
                  class="flex items-center gap-3 mb-4"
                  v-for="(item, index) in 4"
                  :key="index"
                >
                  <img
                    src="https://daryo.uz/static/2024/10/thumb-6708d23fae76a.jpg"
                    alt=""
                    title=""
                    class="w-[30%]"
                  />
                  <h3 class="text-sm">
                    Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times
                  </h3>
                </nuxt-link>
              </div>
            </div>
          </div>

          <!-- Кино и Телевидение -->
          <div class="main-page-category">
            <div class="main-page-category-title-wrap">
              <h2 class="text-lg">Кино и Телевидение</h2>
              <nuxt-link
                to="/"
                class="flex justify-center text-xs text-[#315efb] font-medium"
              >
                Barcha habarlar
              </nuxt-link>
            </div>
            <div class="grid grid-cols-2 gap-8 mb-5">
              <nuxt-link
                to="/"
                class="flex items-center gap-3 mb-4"
                v-for="(item, index) in 6"
                :key="index"
              >
                <img
                  src="https://daryo.uz/static/2024/10/thumb-6708d23fae76a.jpg"
                  alt=""
                  title=""
                  class="w-[30%]"
                />
                <h3 class="text-sm">
                  Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times
                </h3>
              </nuxt-link>
            </div>
          </div>

          <!-- Музыка -->
          <div class="main-page-category">
            <div class="main-page-category-title-wrap">
              <h2 class="text-lg">Музыка</h2>
              <nuxt-link
                to="/"
                class="flex justify-center text-xs text-[#315efb] font-medium"
              >
                Barcha habarlar
              </nuxt-link>
            </div>
            <div class="flex gap-8 mb-5">
              <div class="w-1/2">
                <nuxt-link
                  to="/"
                  class="flex items-center gap-3 mb-4"
                  v-for="(item, index) in 4"
                  :key="index"
                >
                  <img
                    src="https://daryo.uz/static/2024/10/thumb-6708d23fae76a.jpg"
                    alt=""
                    title=""
                    class="w-[30%]"
                  />
                  <h3 class="text-sm">
                    Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times
                  </h3>
                </nuxt-link>
              </div>
              <nuxt-link to="/" class="w-1/2">
                <img
                  src="https://daryo.uz/static/2024/10/thumb-6708d23fae76a.jpg"
                  alt=""
                  title=""
                  class="mb-4"
                />
                <h3>
                  Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times
                </h3>
              </nuxt-link>
            </div>
          </div>

          <!-- Технологии -->
          <div class="main-page-category">
            <div class="main-page-category-title-wrap">
              <h2 class="text-lg">Технологии</h2>
              <nuxt-link
                to="/"
                class="flex justify-center text-xs text-[#315efb] font-medium"
              >
                Barcha habarlar
              </nuxt-link>
            </div>
            <div class="grid grid-cols-2 gap-8 mb-5">
              <nuxt-link to="/" class="relative">
                <img
                  src="https://daryo.uz/static/2024/10/thumb-6708cd0177a88.jpg"
                  alt=""
                />
                <div class="absolute"></div>
              </nuxt-link>
            </div>
            <div class="grid grid-cols-2 gap-8 mb-5">
              <nuxt-link
                to="/"
                class="flex items-center gap-3 mb-4"
                v-for="(item, index) in 4"
                :key="index"
              >
                <img
                  src="https://daryo.uz/static/2024/10/thumb-6708d23fae76a.jpg"
                  alt=""
                  title=""
                  class="w-[30%]"
                />
                <h3 class="text-sm">
                  Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-[32%] ml-[3%]">left column</div>
      </div>
    </div>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
