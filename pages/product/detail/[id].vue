<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { formatPrice, formatPhoneNumber } from "@/utils/tools";
import PlaceBidModal from "@/components/modals/PlaceBidModal.vue";

const settingsStore = useSettingsStore();
const { $axiosPlugin } = useNuxtApp();
const route = useRoute();

const {
  data: productDetail,
  pending: loader,
  error,
} = useAsyncData("getProductDetail", async () => {
  const response = await $axiosPlugin.get(
    `products/get-one/${route.params.id}`
  );
  console.log(response);
  if (response.data.success) {
    return response.data.data;
  } else {
    throw new Error("Failed to fetch products");
  }
});

function handlePlaceBid() {
  settingsStore.placeBidModal = true;
}

// getProductDetail();
</script>

<template>
  <div class="product-detail">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <div class="w-[55%] mr-[3%] 768:w-full 768:mr-0 768:mb-10">
          <div class="product-detail__slider">
            <div class="p-6 768:p-1">
              <Swiper
                :modules="[
                  SwiperAutoplay,
                  SwiperEffectCreative,
                  SwiperNavigation,
                  SwiperPagination,
                ]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 400000,
                  disableOnInteraction: true,
                }"
                :navigation="true"
              >
                <SwiperSlide
                  class="!w-full"
                  v-for="(item, index) in productDetail?.image_paths"
                  :key="index"
                >
                  <div
                    class="!h-[580px] max-w-[580px] w-full mx-auto 768:!h-[460px]"
                  >
                    <NuxtImg
                      :src="`http://hamroh.me${item}`"
                      :alt="productDetail?.name"
                      class="w-full h-full object-contain"
                      loading="lazy"
                      format="webp"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div class="w-[42%] 768:w-full">
          <div class="p-5 border border-[#ececec] rounded-xl mb-5">
            <div class="mb-4 480:mb-2">
              {{ $t("published") }}:
              {{
                formatCustomDate(
                  productDetail?.created_at,
                  route.name.slice(-2)
                )
              }}
            </div>
            <div class="mb-4 480:mb-2 font-semibold text-base">
              {{ productDetail?.name }}
            </div>
            <div class="font-black mb-4 text-xl 480:mb-2">
              {{ formatPrice(productDetail?.price) }} {{ $t("sum") }}
            </div>
            <div class="mb-8 break-words 480:mb-4">
              {{ productDetail?.description }}
            </div>
            <a
              :href="`tel:${productDetail?.phone_number}`"
              class="site-btn text-center bg-[#18A53C] text-white"
            >
              {{ formatPhoneNumber(productDetail?.phone_number) }}
            </a>
          </div>
          <div class="p-5 border border-[#ececec] rounded-xl mb-5">
            <div class="font-medium mb-4 uppercase 480:mb-2">
              {{ $t("user") }}
            </div>
            <div class="font-base">
              {{
                productDetail?.user_info?.first_name
                  ? productDetail?.user_info?.first_name
                  : productDetail?.user_info?.email
              }}
            </div>
          </div>
          <!-- auction -->
          <div
            class="p-5 border border-[#ececec] rounded-xl"
            v-if="productDetail?.sale_type == 'auction'"
          >
            <!-- finish time -->
            <div class="finish-time mb-10">
              <div class="mb-1.5">Ends in</div>
              <div class="font-medium">
                <span class="text-lg">3 days : </span>
                <span class="text-base">12:30:00</span>
              </div>
            </div>
            <!-- bid history -->
            <div class="bid-history mb-10">
              <div
                class="flex-center-between text-sm bg-[#F3F4F9] rounded-lg mb-1.5 px-2 py-3 font-semibold last:mb-0"
              >
                <div class="text-[#18A53C]">ClP...hRZ</div>
                <div class="text-[#6C6F76]">19-mart, 19:19</div>
                <div class="text-[#101116]">$1200.00</div>
              </div>
              <div
                class="flex-center-between text-sm bg-[#F3F4F9] rounded-lg mb-1.5 px-2 py-3 font-semibold last:mb-0 border border-[#18A53C]"
              >
                <div class="text-[#18A53C]">ClP...hRZ</div>
                <div class="text-[#6C6F76]">19-mart, 19:19</div>
                <div class="text-[#101116]">$1200.00</div>
              </div>
              <div
                class="flex-center-between text-sm bg-[#F3F4F9] rounded-lg mb-1.5 px-2 py-3 font-semibold last:mb-0 border border-[#ED3241]"
              >
                <div class="text-[#ED3241]">ClP...hRZ</div>
                <div class="text-[#6C6F76]">19-mart, 19:19</div>
                <div class="text-[#101116]">$1200.00</div>
              </div>
            </div>
            <button
              class="site-btn text-center bg-[#18A53C]"
              @click="handlePlaceBid"
            >
              Place bid
            </button>
            <button class="site-btn text-center bg-[#ED3241] !text-black">
              Sold
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <UiHLoader v-if="loader" />
  <PlaceBidModal
    v-if="settingsStore.placeBidModal"
    :productInfo="productDetail"
  />
</template>
<style lang="scss" scoped></style>
