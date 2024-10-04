<script setup>
import { ref, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

const { t } = useI18n();
const settingsStore = useSettingsStore();
const authStore = useAuthStore();
const { $axiosPlugin } = useNuxtApp();

const loaderBtn = ref(false);
const step = ref(1);
const errorText = ref(t("field_required"));

const userEmail = ref({
  email: null,
});
const userEmailError = ref({
  email: {
    required,
    email,
  },
});
const v$1 = useVuelidate(userEmailError, userEmail);

const userCode = ref({
  code: null,
  otp: null,
});
const userCodeError = ref({
  otp: {
    required,
    minLength: minLength(6),
  },
});

const v$2 = useVuelidate(userCodeError, userCode);

async function getCode() {
  let validate = v$1.value.$invalid;
  v$1.value.$touch();
  if (!validate) {
    loaderBtn.value = true;
    await $axiosPlugin
      .post("auth/enter", {
        email: userEmail.value.email,
      })
      .then((res) => {
        if (res.data.success) {
          step.value = 2;
          userCode.value.code = res.data.data.code;
        } else {
        }
      })
      .catch((error) => {
        v$1.value.$error = true;
        errorText.value = error?.response?.data?.message;
      });
    loaderBtn.value = false;
  }
}

async function sendCode() {
  let validate = v$2.value.$invalid;
  v$2.value.$touch();
  if (!validate) {
    loaderBtn.value = true;
    await $axiosPlugin
      .post("auth/verify-otp", userCode.value)
      .then((res) => {
        if (res.data.success) {
          settingsStore.authGmailModal = false;
          authStore.userToken = res?.data?.data?.access_token;
          navigateTo("/profile/details");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
        v$2.value.$error = true;
        errorText.value = error?.response?.data?.message;
      });
    loaderBtn.value = false;
  }
}
</script>

<template>
  <div class="max-w-[420px] mx-auto">
    <template v-if="step == 1">
      <div class="px-4">
        <div class="font-medium mb-8 text-center text-xl 768:text-xl">
          {{ $t("enter_email_to_enter") }}
        </div>
        <UiHInput
          label="Email"
          class="mb-7"
          type="email"
          v-model="userEmail.email"
          :error="v$1.$error"
          :errorText="
            v$1.email.required.$invalid
              ? errorText
              : v$1.email.email.$invalid
              ? $t('enter_correct_email')
              : ''
          "
        />

        <UiHButton
          :title="t('get_code')"
          @click="getCode"
          :class="loaderBtn ? 'site-btn-loader' : ''"
        />
      </div>
    </template>
    <template v-if="step == 2">
      <div class="px-4">
        <div class="font-medium mb-2 text-center text-xl 768:text-xl">
          {{ $t("we_sentconfirmation_code_to_email") }}
        </div>
        <div class="text-center mb-2">{{ userEmail.email }}</div>
        <button @click="step = 1" class="mb-8 mx-auto block text-[#0056b3]">
          {{ $t("change_email") }}
        </button>
        <UiHInput
          :label="$t('enter_code')"
          class="mb-7"
          v-model="userCode.otp"
          :error="v$2.$error"
          :errorText="errorText"
          dataMaska="######"
        />
        <UiHButton
          :title="$t('send_code')"
          @click="sendCode"
          :class="loaderBtn ? 'site-btn-loader' : ''"
        />
      </div>
    </template>
  </div>
</template>

<style></style>
