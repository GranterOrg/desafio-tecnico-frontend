<script setup lang="ts">
import { inject } from "vue";
import type { Task } from "@/types";
import { UI_LABELS } from "@/constants";

interface TaskCardContentProps {
  task?: Task;
}

const props = defineProps<TaskCardContentProps>();
const injectedTask = inject<Task>("task");
const task = props.task || injectedTask;

if (!task) {
  throw new Error(
    "TaskCardContent: task is required either as prop or provided by parent",
  );
}
</script>

<template>
  <div class="flex flex-col min-w-0 ml-5">
    <div class="flex flex-col mb-4">
      <span class="text-xs text-gray-500"> Fluxo </span>
      <span class="text-sm font-600 text-gray-600 truncate max-w-[300px]">
        {{ task.str_automation_name }}
      </span>
    </div>
    <div class="flex flex-col">
      <span class="text-xs text-gray-500">Nome da etapa</span>
      <span class="text-sm font-600 text-gray-600 truncate max-w-[280px]">
        {{ task.str_step_name }}
      </span>
    </div>
  </div>
</template>
