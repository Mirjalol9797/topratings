<script setup>
const authStore = useAuthStore();
import { formatPhoneNumber } from "@/utils/tools";
</script>
<template>
  <div
    class="max-w-[300px] w-full border-r border-[#ececec] mr-12 text-sm 768:mb-10 768:max-w-full 768:mr-0 768:border-r-0 768:border-b 768:pb-6"
  >
    <nuxt-link
      :to="localePath('/profile/home')"
      class="flex border-b border-[#ececec] pb-4"
    >
      <img src="/icons/profile/user.svg" alt="" class="w-8 mr-6" />
      <div v-if="authStore.userData?.first_name">
        <div class="mb-1">
          {{ authStore.userData?.first_name }}
          {{ authStore.userData?.last_name }}
        </div>
        <div class="text-[#767676]">
          {{ formatPhoneNumber(authStore.userData?.phone_number) }}
        </div>
      </div>
      <div v-else>
        <div class="mb-1">{{ authStore.userData?.email }}</div>
      </div>
    </nuxt-link>
    <nuxt-link
      :to="localePath('/profile/all-products')"
      class="flex items-center pt-4 pb-4"
    >
      <img src="/icons/profile/my_products.svg" alt="" class="w-8 mr-6" />
      <div>{{ $t("my_products") }}</div>
    </nuxt-link>
    <nuxt-link
      :to="localePath('/')"
      class="flex items-center pt-4 pb-4"
      @click="authStore.userToken = null"
    >
      <img src="/icons/profile/exit-profile.svg" alt="" class="w-6 mr-6" />
      <div class="text-[#ED3241]">{{ $t("logout") }}</div>
    </nuxt-link>
  </div>
</template>
<style lang="scss" scoped></style>
