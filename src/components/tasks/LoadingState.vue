<script setup lang="ts">
import type { LoadingStateProps } from "@/types";
import TaskCardSkeleton from "./TaskCardSkeleton.vue";

const props = withDefaults(defineProps<LoadingStateProps>(), {
  itemCount: 5,
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end text-gray-600 text-sm">
      <span class="w-10 h-4 bg-gray-200 rounded" />
    </div>
    <TaskCardSkeleton v-for="i in props.itemCount" :key="i" />
  </div>
</template>
