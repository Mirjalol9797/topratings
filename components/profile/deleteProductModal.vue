<script setup>
const settingsStore = useSettingsStore();
const emit = defineEmits(["deleteProduct"]);

function deleteProduct(e) {
  emit("deleteProduct", e);
}
</script>

<template>
  <UiHModal width="420">
    <template #modal_content>
      <div class="mb-6 font-medium text-center text-xl">
        {{ $t("are_you_sure_remove_product") }}
      </div>
      <div class="flex-center gap-x-6">
        <UiHButton class="" :title="$t('yes')" @click="deleteProduct" />
        <UiHButton
          class="!bg-white border-2 border-[#18a53c] !text-[#18a53c]"
          :title="$t('no')"
          @click="settingsStore.deteleProductModal = false"
        />
      </div>
    </template>
  </UiHModal>
</template>

<style></style>
