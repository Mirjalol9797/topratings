<script setup>
import { ref, onMounted } from "vue";

// components
import SliderBanner from "./modules/SliderBanner.vue";
import BannerBottomBlock from "./modules/BannerBottomBlock.vue";

const news = ref(null);
</script>

<template>
  <div class="main-page">
    <div class="site-container">
      <div class="flex">
        <div class="w-[65%]">
          <!-- slider banner -->
          <SliderBanner />

          <!-- banner bottom block -->
          <BannerBottomBlock />

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
              <nuxt-link
                v-for="(item, index) in 2"
                :key="index"
                to="/"
                class="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.3)] after:rounded-md"
              >
                <img
                  src="https://daryo.uz/static/2024/10/thumb-6708cd0177a88.jpg"
                  alt=""
                  class="rounded-md"
                />
                <div
                  class="absolute bottom-5 text-white z-10 max-w-[80%] left-5 font-medium"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae, deleniti!
                </div>
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
