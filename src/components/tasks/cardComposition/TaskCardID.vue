<script setup lang="ts">
import { inject } from "vue";
import type { Task } from "@/types";

interface TaskCardDateProps {
  task?: Task;
}

const props = defineProps<TaskCardDateProps>();
const injectedTask = inject<Task>("task");
const task = props.task || injectedTask;

if (!task) {
  throw new Error(
    "TaskCardDate: task is required either as prop or provided by parent",
  );
}
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-gray-200 rounded-md w-40px h-44px ml-2"
  >
    <i class="i-mdi-identifier w-16px h-16px text-primary-dark" />
    <span class="text-sm font-medium text-gray-600">
      {{ task.id }}
    </span>
  </div>
</template>
