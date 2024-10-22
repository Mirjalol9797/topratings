<script setup></script>

<template>
  <div class="main-page-category">
    <div class="main-page-category-title-wrap">
      <h2 class="text-lg font-bold">Музыка</h2>
      <nuxt-link
        to="/"
        class="flex justify-center text-xs text-[#315efb] font-medium"
      >
        {{ $t("see_all") }}
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
          <h3 class="text-sm font-medium">
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
        <h3>Britaniya Ukrainaga harbiylar yuborishi mumkin — The Times</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
