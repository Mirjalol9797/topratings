<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import DeleteAccountModal from "@/components/profile/DeleteAccountModal.vue";

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const { $axiosPlugin } = useNuxtApp();

const loaderBtn = ref(false);
const errorText = ref(t("field_required"));

const userInfo = ref({
  first_name: null,
  last_name: null,
  phone_number: null,
  file_path: "/images/64480df9347e4b0001a4c1d8.png",
});

const userInfoError = ref({
  first_name: {
    required,
    maxLength: maxLength(45),
  },
  last_name: {
    required,
    maxLength: maxLength(45),
  },
  phone_number: {
    required,
    minLength: minLength(19),
  },
});

const v$1 = useVuelidate(userInfoError, userInfo);

async function changeUserData() {
  let validate = v$1.value.$invalid;
  v$1.value.$touch();
  if (!validate) {
    loaderBtn.value = true;
    const formattedPhoneNumber = userInfo.value.phone_number.replace(/\D/g, "");
    await $axiosPlugin
      .post("user/update-me", {
        first_name: userInfo.value.first_name,
        last_name: userInfo.value.last_name,
        phone_number: formattedPhoneNumber,
        file_path: userInfo.value.file_path,
      })
      .then((res) => {
        if (res.data.success) {
          router.push("/profile/home");
        } else {
          alert("error");
        }
      })
      .catch((error) => {
        alert(error.response.data.error_messages.join(",\n"));
        console.log(error);
      });
    loaderBtn.value = false;
  }
}

definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div class="profile-detail">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <ProfileLeftColumn />
        <div class="w-full">
          <div class="w-1/2 768:w-full">
            <div class="font-semibold mb-6 text-xl">
              {{ $t("personal_information") }}
            </div>
            <UiHInput
              :label="$t('first_name')"
              class="mb-6"
              v-model="userInfo.first_name"
              :error="v$1.first_name.$error"
              :errorText="
                v$1.first_name.required.$invalid
                  ? errorText
                  : v$1.first_name.maxLength.$invalid
                  ? $t('field_must_shorter_equal_characters')
                  : ''
              "
            />
            <UiHInput
              :label="$t('last_name')"
              class="mb-6"
              v-model="userInfo.last_name"
              :error="v$1.last_name.$error"
              :errorText="
                v$1.last_name.required.$invalid
                  ? errorText
                  : v$1.last_name.maxLength.$invalid
                  ? $t('field_must_shorter_equal_characters')
                  : ''
              "
            />
            <UiHInput
              :label="$t('phone_number')"
              class="mb-6"
              v-model="userInfo.phone_number"
              :error="v$1.phone_number.$error"
              :errorText="errorText"
              dataMaska="+(998) ## ### ## ##"
            />
            <UiHButton
              :title="$t('save')"
              @click="changeUserData"
              :class="loaderBtn ? 'site-btn-loader' : ''"
            />

            <div
              class="flex items-center justify-between py-4 border-t border-b border-gray-10 mt-10"
            >
              <div>{{ $t("delete_account") }}</div>
              <button
                class="py-[6px] px-5 border-2 border-gray-13 border-solid rounded-lg"
                @click="settingsStore.deleteAccountModal = true"
              >
                {{ $t("delete") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DeleteAccountModal v-if="settingsStore.deleteAccountModal" />
</template>
<style lang="scss" scoped></style>
