<script setup lang="ts">
import type { ButtonProps } from "@/types";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "view",
  type: "button",
});

const variantClasses = {
  assume: "btn-assume",
  view: "btn-view",
};
</script>

<template>
  <button :type="props.type" :class="variantClasses[props.variant]">
    <i v-if="props.icon" :class="props.icon" />
    <slot />
  </button>
</template>
