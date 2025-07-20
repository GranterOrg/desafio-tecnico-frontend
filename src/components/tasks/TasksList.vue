<script setup lang="ts">
import { computed } from "vue";
import type { TasksListProps } from "@/types";
import { useSearchDebounce } from "@/composables/useDebounce";
import TaskCard from "./TaskCard.vue";
import EmptyState from "./EmptyState.vue";
import { normalizeString } from "@/utils";

const props = withDefaults(defineProps<TasksListProps>(), {
  tasks: () => [],
  searchTerm: "",
});

const searchTermRef = computed(() => props.searchTerm || "");
const { debouncedSearchTerm } = useSearchDebounce(searchTermRef, {
  delay: 300,
  minLength: 3,
});

const filteredTasks = computed(() => {
  const search = normalizeString(debouncedSearchTerm.value);
  if (!search) return props.tasks;

  return props.tasks.filter((task) => {
    return [
      task.str_automation_name,
      task.str_step_name,
      task.str_step_label,
    ].some((field) => normalizeString(field ?? "").includes(search));
  });
});

const shouldShowEmptyState = computed(() =>
  !debouncedSearchTerm.value
    ? props.tasks.length === 0
    : filteredTasks.value.length === 0,
);

const shouldShowTasks = computed(() => filteredTasks.value.length > 0);
</script>

<template>
  <div class="flex flex-col gap-4 mt-10px">
    <EmptyState
      v-if="shouldShowEmptyState"
      :search-term="debouncedSearchTerm"
    />
    <div v-else-if="shouldShowTasks" class="flex flex-col gap-4">
      <div class="flex justify-end text-gray-600 text-sm">
        {{ filteredTasks.length }}
        <small class="ml-1 text-gray-500"> tarefas</small>
      </div>
      <TaskCard v-for="task in filteredTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>
