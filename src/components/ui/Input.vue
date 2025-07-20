<script setup lang="ts">
import type { InputProps, InputEmits } from "@/types";

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  placeholder: "",
});

const emit = defineEmits<InputEmits>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div>
    <div class="relative">
      <div
        v-if="icon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <i :class="[icon, 'w-5 h-5 text-primary']" />
      </div>

      <input
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="updateValue"
        class="search-input"
      />
    </div>

    <div v-if="hint" class="mt-2 text-sm text-gray-500 absolute">
      {{ hint }}
    </div>
  </div>
</template>
