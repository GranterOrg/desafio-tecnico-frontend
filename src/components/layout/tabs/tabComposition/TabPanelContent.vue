<script setup lang="ts">
import { inject } from "vue";
import { TabPanelKey } from "@/types";
import LoadingState from "@/components/tasks/LoadingState.vue";
import ErrorState from "@/components/tasks/ErrorState.vue";
import TasksList from "@/components/tasks/TasksList.vue";

const tabContext = inject(TabPanelKey);

if (!tabContext) {
  throw new Error("TabPanel context not found");
}

const { tasks, isLoading, isError, searchTerm } = tabContext;
</script>

<template>
  <LoadingState v-if="isLoading" />
  <ErrorState v-else-if="isError" :error="isError" />
  <TasksList v-else :tasks="tasks" :search-term="searchTerm" />
</template>
