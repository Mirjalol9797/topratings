<script setup></script>

<template>
  <div class="main-page-category">
    <div class="main-page-category-title-wrap">
      <h2 class="text-lg">Топ-блюд</h2>
      <nuxt-link
        to="/"
        class="flex justify-center text-xs text-[#315efb] font-medium"
      >
        Barcha habarlar
      </nuxt-link>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <nuxt-link
        to="/"
        class="relative after:content-['*'] after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.2)]"
        v-for="(item, index) in 6"
        :key="index"
      >
        <img
          src="https://daryo.uz/static/2024/09/thumb-66f76bab2c90a.jpg"
          alt=""
          title
        />
        <div
          class="absolute bottom-2 text-sm text-white font-medium z-10 w-[80%] left-2 right-2"
        >
          Title
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
