<script setup lang="ts">
import type { BadgeProps } from "@/types";
import { useTasks } from "@/composables/useTasks";
import type { TaskStatus } from "@/types";

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "pending",
});

const { getBadgeClass, getBadgeIcon, getBadgeIconColor } = useTasks();

const badgeClass = getBadgeClass(props.variant as TaskStatus);
const iconClass = props.icon || getBadgeIcon(props.variant as TaskStatus);
const iconColor =
  props.iconColor || getBadgeIconColor(props.variant as TaskStatus);
</script>

<template>
  <div :class="[badgeClass, 'w-full p-2']">
    <i :class="[iconClass, iconColor]" class="size-4" />
    <slot />
  </div>
</template>
