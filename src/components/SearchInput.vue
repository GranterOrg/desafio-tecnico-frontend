<script setup lang="ts">
import type { SearchInputProps, SearchInputEmits } from "@/types";
import Input from "./ui/Input.vue";

const props = withDefaults(defineProps<SearchInputProps>(), {
  modelValue: "",
  placeholder: "Pesquisar...",
  feedback: "",
});

const emit = defineEmits<SearchInputEmits>();

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="m-10px">
    <Input
      :model-value="modelValue"
      @update:model-value="updateValue"
      type="search"
      :placeholder="placeholder"
      :hint="feedback"
      icon="i-mdi-magnify"
      iconPosition="left"
      clearable
    />
  </div>
</template>
