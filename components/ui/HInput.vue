<template>
  <div class="form-item" :class="{ 'form-item__error': error }">
    <div class="form-item-input">
      <input
        :type="type"
        :class="inputClass"
        class="form-input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        ref="inputRef"
        :maxlength="maxlength"
        v-maska
        :data-maska="dataMaska"
        :disabled="disabled"
      />
      <span class="text-base form-item__label" :class="labelClass">
        {{ label }}
      </span>
    </div>
    <div class="text-error flex items-center" v-if="error">
      <img src="/icons/ui/alert-circle.svg" alt="" class="mr-1" />
      <span>{{ errorText }}</span>
    </div>
  </div>
</template>
<script setup>
import { vMaska } from "maska";
const props = defineProps({
  itemClass: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  inputClass: String,
  modelValue: "",
  label: String,
  error: Boolean,
  errorText: String,
  placeholder: {
    type: String,
    default: " ",
  },
  ref: String,
  labelClass: String,
  maxlength: {
    type: String,
  },
  dataMaska: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(e) {
  emit("update:modelValue", e.target.value);
}
</script>
<style lang="scss" scoped>
.form-item {
  position: relative;
  width: 100%;

  &-input {
    position: relative;
  }

  &__label {
    position: absolute;
    top: 14px;
    left: 20px;
    transition: 0.2s;
    z-index: 1;
    color: #767676;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    padding: 0 4px;
  }

  input {
    box-shadow: 0 0 0 1px #18a53c;
    background-color: transparent;
    z-index: 2;
    position: relative;
    height: 48px;
    width: 100%;
    border-radius: 12px;
    border-width: 0px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    color: #767676;

    &:focus {
      box-shadow: 0 0 0 2px #18a53c;
    }
  }

  input {
    &:focus ~ .form-item__label {
      transform: scale(0.95) translateY(-1.7rem) translateX(-0.6rem);
      z-index: 2;
    }

    &:not(:placeholder-shown) ~ .form-item__label {
      transform: scale(0.95) translateY(-1.7rem) translateX(-0.6rem);
      z-index: 2;
    }
  }

  &__error {
    input {
      box-shadow: 0 0 0 1px #e01f19 !important;
    }
  }
  .input-filter {
    height: 32px;
    font-size: 12px;
    padding: 0 8px;
    border-radius: 4px;
  }
}
</style>
