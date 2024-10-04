<script setup>
import { ref, onMounted } from "vue";
import { formatPhoneNumber } from "@/utils/tools";

const loader = ref(false);

const { $axiosPlugin } = useNuxtApp();
const authStore = useAuthStore();

async function getUser() {
  loader.value = true;

  await $axiosPlugin
    .get("auth/get-user")
    .then((res) => {
      if (res.data) {
        authStore.userData = res.data.data;
      } else {
      }
    })
    .catch((error) => console.log(error));

  loader.value = false;
}

getUser();

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
          <div class="w-1/2 border border-[#ececec] rounded-lg 768:w-full">
            <div
              class="border-b border-[#ececec] flex-center-between py-3 px-4"
            >
              <div class="flex-center">
                <div
                  class="flex-center justify-center border border-[#777] bg-[#f7f7f7] rounded-full w-10 h-10 font-medium mr-4"
                >
                  {{ authStore.userData?.first_name?.charAt(0).toUpperCase()
                  }}{{ authStore.userData?.last_name?.charAt(0).toUpperCase() }}
                </div>
                <div>{{ $t("personal_information") }}</div>
              </div>
              <nuxt-link
                :to="localePath('/profile/details')"
                class="block border border-[#18A53C] px-4 py-[5px] rounded-lg"
              >
                {{ $t("change") }}
              </nuxt-link>
            </div>
            <div class="p-4">
              <div class="mb-2" v-if="authStore.userData?.first_name">
                <span class="font-medium">{{ $t("full_name") }}</span
                >:
                <span
                  >{{ authStore.userData?.first_name }}
                  {{ authStore.userData?.last_name }}</span
                >
              </div>
              <div class="mb-2">
                <span class="font-medium">Email</span>:
                {{ authStore.userData?.email }}
              </div>
              <div v-if="authStore.userData?.phone_number">
                <span class="font-medium">{{ $t("phone") }}</span
                >:
                <span>{{
                  formatPhoneNumber(authStore.userData?.phone_number)
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UiHLoader v-if="loader" />
</template>

<style lang="scss" scoped></style>
