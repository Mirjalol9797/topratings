<script setup>
const settingsStore = useSettingsStore();
</script>

<template>
  <UiHModal width="420">
    <template #modal_content>
      <button
        class="absolute top-4 right-4"
        @click="settingsStore.howDoesItWorkModal = false"
      >
        <img src="/icons/modal/close.svg" alt="close" />
      </button>
    </template>
  </UiHModal>
</template>

<style lang="scss" scoped></style>
