<script setup lang="ts">
import { inject } from "vue";
import type { Task } from "@/types";
import { UI_LABELS } from "@/constants";
import { isOpenStatus, isFinishedStatus } from "@/utils";
import Button from "@/components/ui/Button.vue";

interface TaskCardActionsProps {
  task?: Task;
}

const props = defineProps<TaskCardActionsProps>();
const injectedTask = inject<Task>("task");
const task = props.task || injectedTask;

if (!task) {
  throw new Error(
    "TaskCardActions: task is required either as prop or provided by parent",
  );
}
</script>

<template>
  <div class="flex gap-2" v-if="isOpenStatus(task.str_task_status)">
    <Button variant="assume">
      {{ UI_LABELS.BUTTON_LABELS.ASSUME }}
    </Button>
    <Button variant="view">
      {{ UI_LABELS.BUTTON_LABELS.VIEW }}
    </Button>
  </div>
  <div v-else-if="isFinishedStatus(task.str_task_status)" class="flex gap-2">
    <Button variant="view">
      {{ UI_LABELS.BUTTON_LABELS.VIEW }}
    </Button>
  </div>
</template>
