<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import addNewProductResultModal from "@/components/profile/addNewProductResultModal.vue";
import { useRoute } from "vue-router";

const loader = ref(false);
const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();
const settingsStore = useSettingsStore();
const route = useRoute();

const loaderBtn = ref(false);
const errorText = ref(t("field_required"));
const image_paths = ref([]);
const imagesError = ref(false);

const handleFileUpload = async (event) => {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);

  if (
    ["image/jpeg", "image/jpg", "image/png"].includes(file.type) &&
    file.size < 5 * 1024 * 1024
  ) {
    await $axiosPlugin
      .post("files/upload-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success) {
          image_paths.value.push(res.data.data.path);
          image_paths.value.length == 0
            ? (imagesError.value = true)
            : (imagesError.value = false);
        } else {
        }
      })
      .catch((error) => console.log(error));
  } else {
    alert("Only jpg, jpeg, png images no larger than 5 MB are allowed.");
  }
};

const removeImage = (index) => {
  image_paths.value.splice(index, 1);
};

const productInfo = ref({
  id: null,
  name: null,
  price: null,
  description: null,
  phone_number: null,
  image_paths: null,
});

const productInfoError = ref({
  name: {
    required,
  },
  price: {
    required,
  },
  description: {
    required,
  },
  phone_number: {
    required,
    minLength: minLength(19),
  },
});

const v$1 = useVuelidate(productInfoError, productInfo);

async function getProductDetail() {
  await $axiosPlugin
    .get(`products/get-one/${route.params.id}`)
    .then((res) => {
      if (res.data.success) {
        productInfo.value.id = res.data.data.id;
        productInfo.value.name = res.data.data.name;
        productInfo.value.price = res.data.data.price;
        productInfo.value.description = res.data.data.description;
        productInfo.value.phone_number = res.data.data.phone_number;
        image_paths.value = res.data.data.image_paths;
      } else {
      }
    })
    .catch((error) => console.log(error));
}

getProductDetail();

async function addProduct() {
  let validate = v$1.value.$invalid;
  v$1.value.$touch();

  image_paths.value.length == 0
    ? (imagesError.value = true)
    : (imagesError.value = false);

  if (!validate && image_paths.value.length > 0) {
    loaderBtn.value = true;
    await $axiosPlugin
      .patch(`products/update-one/${productInfo.value.id}`, {
        name: productInfo.value.name,
        price: Number(productInfo.value.price.replace(" ", "")),
        description: productInfo.value.description,
        phone_number: productInfo.value.phone_number,
        image_paths: image_paths.value,
      })
      .then((res) => {
        if (res.data.success) {
          settingsStore.addNewProductResultModal = true;
          console.log("111");
        } else {
        }
      })
      .catch((error) => console.log(error));
    loaderBtn.value = false;
  }
}

settingsStore.addNewProductResultModal = false;

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="profile-home">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <ProfileLeftColumn />
        <div class="w-full">
          <div class="flex">
            <div class="w-1/2 border-r border-[#ececec] mr-[3%] pr-[3%]">
              <div class="mb-8 768:mb-4">
                <label
                  class="border border-[#ececec] px-4 h-[50px] rounded-xl inline-flex cursor-pointer"
                >
                  <div class="flex-center">
                    <img
                      src="/icons/profile/plus.svg"
                      alt="plus"
                      class="w-4 mr-4"
                    />
                    <span>{{ $t("add_new_image") }}</span>
                  </div>

                  <input
                    type="file"
                    class="hidden"
                    @change="handleFileUpload"
                    accept=".jpg, .jpeg, .png"
                  />
                </label>
                <div v-if="imagesError" class="text-error flex items-center">
                  <img src="/icons/ui/alert-circle.svg" alt="" class="mr-1" />
                  <span>{{ $t("please_add_images") }}</span>
                </div>
              </div>

              <div v-if="image_paths.length > 0" class="grid grid-cols-2 gap-2">
                <div
                  v-for="(image, index) in image_paths"
                  :key="index"
                  class="border border-[#ececec] p-2 rounded-xl relative h-[200px]"
                >
                  <img
                    :src="image.url ? image.url : `http://hamroh.me${image}`"
                    alt="Uploaded image "
                    class="rounded-xl w-full h-full object-cover"
                  />
                  <button
                    @click="removeImage(index)"
                    class="w-6 absolute top-1.5 right-1.5"
                  >
                    <img src="/icons/profile/delete.svg" alt="delete" />
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <UiHInput
                :label="$t('product_name')"
                class="mb-6"
                v-model="productInfo.name"
                :error="v$1.name.$error"
                :errorText="errorText"
              />
              <UiHInput
                :label="$t('product_price')"
                class="mb-6"
                v-model="productInfo.price"
                :error="v$1.price.$error"
                :errorText="errorText"
                type="number"
              />
              <UiHTextarea
                :label="$t('product_description')"
                class="mb-6"
                v-model="productInfo.description"
                :error="v$1.description.$error"
                :errorText="errorText"
              />
              <UiHInput
                :label="$t('phone_number')"
                class="mb-6"
                v-model="productInfo.phone_number"
                :error="v$1.phone_number.$error"
                :errorText="errorText"
                dataMaska="+(998) ## ### ## ##"
                type="tel"
              />
              <UiHButton
                :title="$t('save')"
                :class="loaderBtn ? 'site-btn-loader' : ''"
                @click="addProduct"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <addNewProductResultModal
    v-if="settingsStore.addNewProductResultModal"
    title="Вы удачно изменили данные о продукте"
  />
</template>

<style lang="scss" scoped></style>
