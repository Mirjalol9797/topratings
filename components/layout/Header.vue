<script setup>
import { ref, onMounted } from "vue";
const { locales, locale, setLocale } = useI18n();

const localeView = computed(() =>
  locales.value.filter((item) => locale.value == item.code)
);

function language(value) {
  setLocale(value);
}

// new language

const selectedLanguage = ref("uz"); // По умолчанию узбекский

// Проверка, если находимся на клиентской стороне
const checkLocalStorage = () => {
  if (process.client) {
    // Проверяем, есть ли сохранённый язык в localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      selectedLanguage.value = savedLanguage;
    }
  }
};

const changeLanguage = () => {
  if (process.client) {
    localStorage.setItem("selectedLanguage", selectedLanguage.value);
    location.reload(); // Перезагружаем страницу для применения изменений
  }
};

// Вызываем проверку localStorage только на клиенте
onMounted(checkLocalStorage);
</script>

<template>
  <header class="bg-[#0f0f0f] text-white mb-10 header 480:mb-6">
    <div class="site-container">
      <div class="flex-center-between py-2">
        <nuxt-link
          to="/"
          class="text-xl font-bold flex items-center 480:text-lg"
        >
          Top Rankings
        </nuxt-link>
        <div class="flex">
          <div class="mr-6 flex relative language-view">
            <div class="text-white font-semibold flex-center !hidden">
              <span>{{ localeView[0].name }}</span>
            </div>
            <ul class="language-list text-[#0f0f0f] !hidden">
              <li
                v-for="(item, key) in locales"
                :key="key"
                @click="language(item.code)"
                class="flex-center"
              >
                {{ item.name }}
              </li>
            </ul>
            <div class="language-selector text-[#0f0f0f]">
              <label for="language">Language:</label>
              <select
                id="language"
                v-model="selectedLanguage"
                @change="changeLanguage"
              >
                <option value="uz">O‘zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
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
    top: 25px;
    left: -8px;
    z-index: 12;
    border-radius: 6px;
    border: 1px solid #0f0f0f;
    font-size: 14px;
    line-height: 20px;
    width: 45px;
    display: none;

    li {
      padding: 6px 10px;
      &:hover {
        background: #0f0f0f;
        color: #fff;
      }
    }
  }
}
</style>
