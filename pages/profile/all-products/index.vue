<script setup>
import { ref } from "vue";
import { formatCustomDate } from "@/utils/tools";
import { useRoute } from "vue-router";
import deleteProductModal from "@/components/profile/deleteProductModal.vue";

const route = useRoute();
const loader = ref(false);

const formatCustomDateLang = route.name.slice(-2);

const { $axiosPlugin } = useNuxtApp();
const settingsStore = useSettingsStore();
const deleteProductID = ref(null);

const products = ref({
  limit: 20,
  page: 1,
});

const productsList = ref(null);

async function getMainProducts() {
  loader.value = true;

  await $axiosPlugin
    .post("products/get-my-list", products.value)
    .then((res) => {
      if (res.data.success) {
        productsList.value = res.data.data.data;
      } else {
      }
    })
    .catch((error) => console.log(error));

  loader.value = false;
}

getMainProducts();

function openDeleteProductModal(id) {
  settingsStore.deteleProductModal = true;
  deleteProductID.value = id;
}

function deleteProduct() {
  $axiosPlugin
    .delete(`products/delete-one/${deleteProductID.value}`)
    .then((res) => {
      if (res.data.success) {
        getMainProducts();
        settingsStore.deteleProductModal = false;
      } else {
      }
    })
    .catch((error) => console.log(error));
}

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="profile-all-products">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <ProfileLeftColumn />
        <div class="w-full">
          <nuxt-link
            :to="localePath(`/profile/add-product`)"
            class="mb-6 main-btn"
          >
            {{ $t("add_product") }}
          </nuxt-link>
          <div class="grid grid-cols-4 gap-4 768:grid-cols-2 480:!grid-cols-1">
            <div
              class="border border-[#ececec] p-3 rounded-2xl product relative"
              v-for="(item, index) in productsList"
              :key="index"
            >
              <div class="h-[120px] w-full mb-2">
                <img
                  :src="`http://hamroh.me${item?.image_paths[0]}`"
                  :alt="item?.name"
                  class="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <div class="text-xs">
                <h2 class="text-sm mb-2">
                  {{ item?.name }}
                </h2>
                <div class="mb-2">
                  {{ formatCustomDate(item?.created_at, formatCustomDateLang) }}
                </div>
                <div class="font-semibold">
                  {{ item?.price.toLocaleString("ru-RU") }} {{ $t("sum") }}
                </div>
              </div>
              <div class="gap-x-4 hidden product-change">
                <nuxt-link
                  :to="localePath(`/profile/edit-product/${item.id}`)"
                  class="w-6 block"
                >
                  <img src="/icons/profile/edit-white.svg" alt="edit-white" />
                </nuxt-link>
                <button
                  class="w-5 block"
                  @click="openDeleteProductModal(item.id)"
                >
                  <img
                    src="/icons/profile/delete-white.svg"
                    alt="delete-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <deleteProductModal
    v-if="settingsStore.deteleProductModal"
    @deleteProduct="deleteProduct"
  />

  <UiHLoader v-if="loader" />
</template>

<style scoped lang="scss">
.profile-all-products {
  .product-change {
    position: absolute;
    inset: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .product {
    &:hover {
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 16px;
        z-index: 1;
      }
      .product-change {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
      }
    }
  }
}
</style>
