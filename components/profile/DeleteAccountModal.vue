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
      <div class="mb-4 font-medium text-center text-xl">
        {{ $t("delete_account") }}
      </div>
      <div class="text-center mb-8">
        {{ $t("are_you_sure_delete_account") }}
      </div>
      <div class="flex items-center justify-center gap-x-6">
        <UiHButton
          class="!h-10 !w-[130px] !text-red-500"
          :title="$t('delete')"
          @click="changeUserData"
          :class="loaderBtn ? 'site-btn-loader' : ''"
        />
        <UiHButton
          class="!h-10 !w-[130px] !bg-[#eee] !text-[#333]"
          :title="$t('cancel')"
          @click="settingsStore.deleteAccountModal = false"
        />
      </div>
    </template>
  </UiHModal>
</template>

<style></style>
