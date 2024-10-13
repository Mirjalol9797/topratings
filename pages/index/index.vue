<script setup>
import { ref, onMounted } from "vue";

// components
import SliderBanner from "./modules/SliderBanner.vue";
import BannerBottomBlock from "./modules/BannerBottomBlock.vue";
import CategoryLeftMain from "./modules/CategoryLeftMain.vue";
import CategoryRightMain from "./modules/CategoryRightMain.vue";
import CategoryDoubleTopMain from "./modules/CategoryDoubleTopMain.vue";
import CategoryNotMain from "./modules/CategoryNotMain.vue";
import CategoryLastTen from "./modules/CategoryLastTen.vue";

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
          <CategoryLastTen />
        </div>
      </div>
    </div>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
