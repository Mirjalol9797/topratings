<script setup>
import { ref, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import addNewProductResultModal from "@/components/profile/addNewProductResultModal.vue";
import HowDoesItWorkModal from "@/components/modals/HowDoesItWorkModal.vue";

const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();
const settingsStore = useSettingsStore();

const loaderBtn = ref(false);
const errorText = ref(t("field_required"));
const images = ref([]);
const image_paths = ref([]);
const imagesError = ref(false);

const handleFileUpload = async (event) => {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);

  if (
    ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
      file.type
    ) &&
    file.size < 5 * 1024 * 1024
  ) {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({ file, url: e.target.result });
    };
    reader.readAsDataURL(file);

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
  images.value.splice(index, 1);
  image_paths.value.splice(index, 1);
};

const productInfo = ref({
  name: null,
  price: null,
  description: null,
  phone_number: null,
  image_paths: null,
  is_auction: false,
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

async function addProduct() {
  let validate = v$1.value.$invalid;
  v$1.value.$touch();

  console.log(productInfo.value);

  image_paths.value.length == 0
    ? (imagesError.value = true)
    : (imagesError.value = false);

  if (!validate && image_paths.value.length > 0) {
    loaderBtn.value = true;
    const formattedPhoneNumber = productInfo.value.phone_number.replace(
      /\D/g,
      ""
    );

    await $axiosPlugin
      .post("products/create", {
        name: productInfo.value.name,
        price: Number(productInfo.value.price),
        description: productInfo.value.description,
        phone_number: formattedPhoneNumber,
        image_paths: image_paths.value,
      })
      .then((res) => {
        if (res.data.success) {
          settingsStore.addNewProductResultModal = true;
        } else {
        }
      })
      .catch((error) => {
        alert(error.response?.data?.error_messages[0]);
      });

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
          <div class="flex 768:flex-col">
            <div
              class="w-1/2 border-r border-[#ececec] mr-[3%] pr-[3%] 768:w-full 768:mr-0 768:pr-0 768:mb-10"
            >
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
                    accept=".jpg, .jpeg, .png, .webp"
                  />
                </label>
                <div v-if="imagesError" class="text-error flex items-center">
                  <img src="/icons/ui/alert-circle.svg" alt="" class="mr-1" />
                  <span>{{ $t("please_add_images") }}</span>
                </div>
              </div>

              <div v-if="images.length > 0" class="grid grid-cols-2 gap-2">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="border border-[#ececec] p-2 rounded-xl relative h-[200px]"
                >
                  <img
                    :src="image.url"
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
            <div class="w-1/2 768:w-full">
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
              <label class="flex-center-between cursor-pointer py-2 mb-4">
                <span
                  class="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Auction
                </span>
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  @change="productInfo.is_auction = !productInfo.is_auction"
                />
                <div
                  class="relative w-14 h-8 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-[#18A53C] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[-1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#18A53C]"
                ></div>
              </label>
              <div v-if="productInfo.is_auction">
                <div>
                  <UiHInput label="Min price" class="mb-6" type="number" />
                </div>
                <div>
                  <UiHInput label="Bid step" class="mb-6" type="number" />
                </div>
                <div>
                  <UiHInput label="Duration" class="mb-6" type="number" />
                </div>
                <div class="text-base font-medium">Auction Start Options</div>
                <label class="flex-center-between cursor-pointer py-2">
                  <span
                    class="text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Auction Starts After First Bid
                  </span>
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="relative w-14 h-8 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-[#18A53C] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[-1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#18A53C]"
                  ></div>
                </label>
                <label class="flex-center-between cursor-pointer py-2">
                  <span
                    class="text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Set Specific Start Time
                  </span>
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="relative w-14 h-8 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-[#18A53C] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[-1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#18A53C]"
                  ></div>
                </label>
                <div class="mt-4">
                  <UiHInput
                    label="Auction start time"
                    class="mb-6"
                    type="number"
                  />
                </div>
                <button
                  class="text-[#18A53C] flex justify-center mb-3 w-full"
                  @click="settingsStore.howDoesItWorkModal = true"
                >
                  How does it works?
                </button>
              </div>
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
    title="Siz yangi mahsulot qo'shdiz"
  />

  <HowDoesItWorkModal v-if="settingsStore.howDoesItWorkModal" />
</template>

<style lang="scss" scoped></style>
