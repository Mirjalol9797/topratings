<script setup>
const props = defineProps({
  classModal: { type: String },
  title: { type: String },
  width: { type: String, default: "760" },
  closeBtn: { type: Boolean, default: true },
  titleClass: { type: String },
});
const emit = defineEmits(["closeModal"]);
function closeModal(e) {
  emit("closeModal", e);
}
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-10 768:bg-white 768:items-start"
  >
    <div
      :class="classModal"
      class="bg-white pt-8 p-6 w-full relative rounded-xl 768:p-8 480:!px-3"
      :style="{ maxWidth: `${width}px` }"
    >
      <slot name="modal_content"></slot>
    </div>
  </div>
</template>

<style lang="scss"></style>
