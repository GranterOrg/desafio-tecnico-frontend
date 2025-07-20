<script setup lang="ts">
import type { Task } from "@/types";
import { TaskCardComposed } from "./cardComposition";

interface TaskCardProps {
  task: Task;
}

const props = defineProps<TaskCardProps>();
</script>

<template>
  <TaskCardComposed :task="props.task" />
</template>
