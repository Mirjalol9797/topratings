<script setup>
import { ref } from "vue";
const settingsStore = useSettingsStore();
const props = defineProps({
  productInfo: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<template>
  <UiHModal width="420" classModal="!bg-[#F3F4F9]">
    <template #modal_content>
      <button
        class="absolute top-4 right-4"
        @click="settingsStore.placeBidModal = false"
      >
        <img src="/icons/modal/close.svg" alt="close" />
      </button>
      <div>
        <div class="mb-4 mx-auto w-[120px] h-[120px]">
          <img
            :src="productInfo?.image_paths[0]"
            :alt="productInfo?.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="text-center text-lg font-bold mb-4">
          {{ productInfo?.name }}
        </div>
        <div class="flex-center gap-3 mb-4">
          <div
            class="bg-white rounded-2xl p-4 border border-[#C4C7CC] w-1/3 text-center"
          >
            <div class="text-xs mb-1">Highest bid</div>
            <div class="font-bold">€ 12.00</div>
          </div>
          <div
            class="bg-white rounded-2xl p-4 border border-[#C4C7CC] w-1/3 text-center"
          >
            <div class="text-xs mb-1">Bid step</div>
            <div class="font-bold">
              {{ productInfo?.auction_info?.bid_increment }} сум
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-4 border border-[#C4C7CC] w-1/3 text-center"
          >
            <div class="text-xs mb-1">Min bid</div>
            <div class="font-bold">
              {{ productInfo?.auction_info?.starting_price }} сум
            </div>
          </div>
        </div>
        <div>
          <div class="text-xs font-bold mb-2">Your bid in sum</div>
          <UiHInput
            placeholder="Enter your bid amount"
            type="number"
            class="w-full"
          />
          <button class="site-btn bg-[#18A53C] text-xs mt-4">Place bid</button>
        </div>
      </div>
    </template>
  </UiHModal>
</template>

<style lang="scss"></style>
