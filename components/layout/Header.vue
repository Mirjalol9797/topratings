<script setup>
import { onMounted } from "vue";

const { locales, locale, setLocale } = useI18n();

const localeView = computed(() =>
  locales.value.filter((item) => locale.value == item.code)
);

const loader = ref(false);

function language(value) {
  setLocale(value);
  // loader.value = true;

  // setTimeout(() => {
  //   location.reload();
  // }, 500);
  // setTimeout(() => {
  //   loader.value = false;
  // }, 1000);
}

onMounted(() => {});
</script>

<template>
  <UiHLoader v-if="loader" />
  <header class="bg-[#F3F4F9] mb-10 header 480:mb-5">
    <div class="site-container">
      <div class="flex-center-between py-2">
        <nuxt-link
          :to="localePath(`/`)"
          class="text-2xl font-bold flex items-center text-[#000] hover:text-[#000] 480:text-lg"
        >
          <span>Top Rankings</span>
        </nuxt-link>
        <div class="flex">
          <div class="flex relative language-view">
            <div class="text-[#1C335F] font-semibold flex-center">
              <span>{{ localeView[0].name }}</span>
            </div>
            <ul class="language-list">
              <li
                v-for="(item, key) in locales"
                :key="key"
                @click="language(item.code)"
                class="flex-center"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  .profile-wrap {
    &:after {
      content: "";
      position: absolute;
      height: 14px;
      width: 100%;
      background-color: transparent;
      bottom: -12px;
      left: 0;
    }
    &:hover .profile-links {
      display: block;
    }
  }
  .language-view {
    &:hover .language-list {
      display: block;
    }
  }
  .language-list {
    position: absolute;
    background: #fff;
    top: 20px;
    left: -8px;
    z-index: 12;
    border-radius: 6px;
    border: 1px solid #1c335f;
    font-size: 14px;
    line-height: 20px;
    width: 45px;
    display: none;

    li {
      padding: 6px 10px;
      &:hover {
        background: #1c335f;
        color: #fff;
      }
    }
  }
}
</style>
