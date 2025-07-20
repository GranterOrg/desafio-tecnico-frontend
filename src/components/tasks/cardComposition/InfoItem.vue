<script setup lang="ts">
interface InfoItemProps {
  icon?: string;
  title: string;
  titleClass?: string;
  descriptionClass?: string;
}

defineProps<InfoItemProps>();
</script>

<template>
  <div class="flex flex-col items-start gap-1">
    <div class="flex items-center gap-1">
      <i v-if="icon" :class="[icon, 'w-3 h-3 text-primary-dark']" />
      <span class="text-xs" :class="titleClass">{{ title }}</span>
    </div>
    <span :class="['text-sm', descriptionClass]">
      <slot />
    </span>
  </div>
</template> 