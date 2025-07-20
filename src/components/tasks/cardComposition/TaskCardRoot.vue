<script setup lang="ts">
import { provide } from "vue";
import type { Task } from "@/types";

interface TaskCardRootProps {
  task: Task;
}

const props = defineProps<TaskCardRootProps>();
provide("task", props.task);
</script>

<template>
  <div class="card-base">
    <div class="flex items-center gap-4 flex-1 min-w-[450px]">
      <slot name="left" />
    </div>

    <div class="flex justify-start flex-1">
      <slot name="center" />
    </div>

    <div class="flex items-center justify-end flex-1">
      <slot name="right" />
    </div>
  </div>
</template>
