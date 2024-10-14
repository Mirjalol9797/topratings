<script setup>
import CategoryLastTen from "../index/modules/CategoryLastTen.vue";
import CategoryAllTopMain from "../index/modules/CategoryAllTopMain.vue";
</script>

<template>
  <div class="news-detail">
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <div class="font-medium text-3xl mb-6">Category page</div>

          <CategoryAllTopMain />
        </div>
        <div class="w-[29%] ml-[3%]">
          <CategoryLastTen />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
