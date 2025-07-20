<script setup lang="ts">
import type { Task } from "@/types";
import {
  TaskCardRoot,
  TaskCardID,
  TaskCardContent,
  TaskCardInfo,
  TaskCardActions,
} from "./index";

const props = defineProps<{
  task: Task;
}>();
</script>

<template>
  <TaskCardRoot :task="props.task">
    <template #left>
      <TaskCardID />
      <TaskCardContent />
    </template>

    <template #center>
      <TaskCardInfo />
    </template>

    <template #right>
      <TaskCardActions />
    </template>
  </TaskCardRoot>
</template>
