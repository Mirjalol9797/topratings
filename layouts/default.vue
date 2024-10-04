<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const settingsStore = useSettingsStore();
const platform = useNuxtApp().$platform;
</script>

<template>
  <LayoutHeader />
  <div class="content">
    <NuxtPage :key="route.fullPath" />
  </div>
  <LayoutFooter />
  <UiHLoader v-if="settingsStore.isLoader" />
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
