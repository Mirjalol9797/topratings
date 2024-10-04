<script setup>
import { useAsyncData } from "nuxt/app";
import { ref } from "vue";
import { formatCustomDate, formatPrice } from "@/utils/tools";
import { useRoute } from "vue-router";
import PlaceBidModal from "@/components/modals/PlaceBidModal.vue";

const settingsStore = useSettingsStore();
const route = useRoute();
const formatCustomDateLang = route.name.slice(-2);
const { $axiosPlugin } = useNuxtApp();

const products = ref({
  limit: 20,
  page: 1,
});

const productInfo = ref(null);

const {
  data: mainProductsList,
  pending: loader,
  error,
} = useAsyncData("mainProducts", async () => {
  const response = await $axiosPlugin.post("products/get-all", products.value);
  console.log(response);
  if (response.data.success) {
    return response.data.data;
  } else {
    throw new Error("Failed to fetch products");
  }
});

definePageMeta({
  middleware: "auth",
});

function handlePlaceBid(item) {
  productInfo.value = item;
  settingsStore.placeBidModal = true;
  console.log(productInfo.value);
}
</script>

<template>
  <div class="main-page">
    <div class="site-container hidden">
      <div class="grid grid-cols-4 gap-8 768:grid-cols-2 480:gap-2">
        <div
          class="border border-[#ececec] p-4 rounded-2xl 480:p-2"
          v-for="(item, index) in mainProductsList"
          :key="index"
        >
          <nuxt-link :to="localePath(`/product/detail/${item?.id}`)">
            <div class="h-[210px] w-full mb-4 480:h-[160px]">
              <NuxtImg
                :src="`http://hamroh.me${item?.image_paths[0]}`"
                :alt="item?.name"
                class="w-full h-full object-cover object-center rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div class="text-sm">
              <h2 class="text-sm mb-1 font-normal">
                {{ item?.name }}
              </h2>
              <div class="font-semibold mb-2">
                {{ formatPrice(item?.price) }} {{ $t("sum") }}
              </div>
              <div class="text-xs">
                {{ formatCustomDate(item?.created_at, formatCustomDateLang) }}
              </div>
            </div>
          </nuxt-link>
          <!-- auction -->
          <template v-if="item?.sale_type == 'auction'">
            <!-- finish time -->
            <div class="finish-time text-sm mt-6">
              <div class="mb-1.5 text-xs">Ends in</div>
              <div class="font-medium">
                <span>3 days : </span>
                <span>12:30:00</span>
              </div>
            </div>
            <!-- bid -->
            <div class="mt-4">
              <div class="flex text-[#18A53C]">
                <span>Your bid</span>
                <span>€ 12.00</span>
              </div>
              <div class="flex text-[#ED3241]">
                <span>Highest bid</span>
                <span>€ 12.00</span>
              </div>
            </div>
            <button
              class="w-full border border-[#18A53C] text-[#18A53C] rounded-lg h-10 mt-4"
              @click="handlePlaceBid(item)"
            >
              Place bid
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>

  <UiHLoader v-if="loader" />

  <PlaceBidModal
    v-if="settingsStore.placeBidModal"
    :productInfo="productInfo"
  />
</template>

<style lang="scss"></style>
