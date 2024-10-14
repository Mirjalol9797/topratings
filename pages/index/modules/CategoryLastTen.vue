<script setup></script>

<template>
  <div class="sticky top-4">
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
</template>

<style lang="scss" scoped></style>
