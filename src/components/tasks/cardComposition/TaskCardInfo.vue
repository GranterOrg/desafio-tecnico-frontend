<script setup lang="ts">
import { h, inject } from "vue";
import type { Task, BadgeProps } from "@/types";
import { useTasks } from "@/composables/useTasks";
import { UI_LABELS } from "@/constants";
import { formatDate, formatTime } from "@/utils";
import Badge from "@/components/ui/Badge.vue";
import InfoItem from "@/components/tasks/cardComposition/InfoItem.vue";

interface TaskCardInfoProps {
  task?: Task;
}

const props = defineProps<TaskCardInfoProps>();
const injectedTask = inject<Task>("task");
const task = props.task || injectedTask;

if (!task) {
  throw new Error(
    "TaskCardInfo: task is required either as prop or provided by parent",
  );
}

const { getStatusLabel, getBadgeIcon, getBadgeIconColor, getStepTypeLabel } =
  useTasks();

const statusLabel = getStatusLabel(task.str_task_status);
const stepTypeLabel = getStepTypeLabel(task.str_step_type);

const getBadgeVariant = (status: string): BadgeProps["variant"] => {
  return status.toLowerCase() as BadgeProps["variant"];
};
</script>

<template>
  <div class="flex items-start gap-8 text-xs text-gray-500">
    <!-- Primeira coluna: Status e Tipo -->
    <div class="flex flex-col items-start gap-4">
      <!-- Status -->
      <InfoItem title="Status da tarefa">
        <Badge
          :variant="getBadgeVariant(task.str_task_status)"
          :icon="getBadgeIcon(task.str_task_status)"
          :iconColor="getBadgeIconColor(task.str_task_status)"
        >
          {{ statusLabel }}
        </Badge>
      </InfoItem>

      <!-- Tipo OBS: Não achei o icon! -->
      <InfoItem
        icon="i-mdi-clipboard-text-outline" 
        :title="UI_LABELS.INFO_LABELS.TYPE"
      >
        <span class="text-gray-600 font-600">{{ stepTypeLabel }}</span>
      </InfoItem>
    </div>

    <!-- Segunda coluna: Data e Etiqueta -->
    <div class="flex flex-col items-start gap-4">
      <!-- Data -->
      <InfoItem
        icon="i-mdi-clock"
        :title="UI_LABELS.INFO_LABELS.TIME"
      >
        <span class="text-gray-600">
          {{ formatDate(task.ts_created_at) }} -
          {{ formatTime(task.ts_created_at) }}h
        </span>
      </InfoItem>

      <!-- Etiqueta -->
      <InfoItem
        icon="i-mdi-tag"
        :title="UI_LABELS.INFO_LABELS.LABEL"
      >
        <span
          :class="[
            task.str_step_label ? 'text-gray-600' : 'text-gray-300',
            'font-600',
          ]"
        >
          {{ task.str_step_label ?? "Sem etiqueta" }}
        </span>
      </InfoItem>
    </div>
  </div>
</template>
