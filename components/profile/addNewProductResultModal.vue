<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <UiHModal width="420">
    <template #modal_content>
      <div class="mb-6 font-medium text-center text-xl">
        {{ title }}
      </div>
      <div class="flex-center">
        <nuxt-link
          :to="localePath('/profile/all-products')"
          class="border border-[#18a53c] rounded-xl px-6 py-3 text-center inline-flex mx-auto"
        >
          Ok
        </nuxt-link>
      </div>
    </template>
  </UiHModal>
</template>

<style></style>
