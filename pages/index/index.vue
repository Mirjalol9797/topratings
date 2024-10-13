<script setup>
import { ref, onMounted } from "vue";

// components
import SliderBanner from "./modules/SliderBanner.vue";
import BannerBottomBlock from "./modules/BannerBottomBlock.vue";
import CategoryLeftMain from "./modules/CategoryLeftMain.vue";
import CategoryRightMain from "./modules/CategoryRightMain.vue";
import CategoryDoubleTopMain from "./modules/CategoryDoubleTopMain.vue";
import CategoryNotMain from "./modules/CategoryNotMain.vue";

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
          <CategoryLeftMain />

          <!-- Кино и Телевидение -->
          <CategoryNotMain />

          <!-- Музыка -->
          <CategoryRightMain />

          <!-- Технологии -->
          <CategoryDoubleTopMain />
        </div>
        <div class="w-[32%] ml-[3%]">
          <!-- last 10 news -->
          <div>
            <div class="main-page-category-title-wrap">
              <div
                class="bg-[#315efb] font-medium px-2 py-2 rounded-[4px] text-base w-full"
              >
                Последные
              </div>
            </div>
            <div class="h-[350px] overflow-y-auto pr-1 site-scroll">
              <nuxt-link
                to="/"
                class="flex items-start gap-3 mb-4"
                v-for="(item, index) in 10"
                :key="index"
              >
                <div class="font-medium text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <img
                  src="https://daryo.uz/static/2024/10/thumb-670bce4513abb.jpg"
                  alt=""
                  title=""
                  class="w-[90px] h-[70px] object-cover"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
