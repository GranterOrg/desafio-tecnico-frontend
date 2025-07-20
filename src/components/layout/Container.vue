<script setup lang="ts">
import type { ContainerProps } from "@/types";

const props = withDefaults(defineProps<ContainerProps>(), {
  class: "mx-auto max-w-1240px px-6 py-8",
});
</script>

<template>
  <div :class="[props.class, $attrs.class]" v-bind="$attrs">
    <slot />
  </div>
</template>
