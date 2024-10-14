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
import CategoryFullViewMain from "./modules/CategoryFullViewMain.vue";

const news = ref(null);
</script>

<template>
  <div class="main-page">
    <!-- first column -->
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <!-- slider banner -->
          <SliderBanner />

          <!-- banner bottom block -->
          <BannerBottomBlock />

          <!-- Игры и Киберспорт -->
          <CategoryLeftMain />

          <!-- Кино и Телевидение -->
          <CategoryNotMain />
        </div>
        <div class="w-[29%] ml-[3%]">
          <!-- last 10 news -->
          <CategoryLastTen />
        </div>
      </div>
    </div>

    <!-- second column -->
    <div class="site-container">
      <CategoryFullViewMain />
    </div>

    <!-- third column -->
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <!-- Музыка -->
          <CategoryRightMain />

          <!-- Технологии -->
          <CategoryDoubleTopMain />
        </div>
        <div class="w-[29%] ml-[3%]">
          <!-- last 10 news -->
          <CategoryLastTen />
        </div>
      </div>
    </div>
  </div>

  <!-- <UiHLoader /> -->
</template>

<style lang="scss"></style>
