<template>
  <button
    class="site-btn"
    :class="btnClass"
    @click="clickBtn"
    :style="{ backgroundColor: `${bgColor}` }"
  >
    {{ title }}
  </button>
</template>
<script setup>
const props = defineProps({
  title: String,
  btnClass: String,
  bgColor: {
    type: String,
    default: "#18A53C",
  },
});
</script>
<style lang="scss">
.site-btn {
  border-radius: 12px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: 0.5px;
  color: white;
}

.site-btn-36 {
  border-radius: 12px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: 0.5px;
  padding: 0 24px;
  white-space: nowrap;
}
</style>
