<script setup></script>

<template>
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
</template>

<style lang="scss" scoped></style>
