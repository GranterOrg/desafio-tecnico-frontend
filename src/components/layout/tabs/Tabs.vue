<script setup lang="ts">
import { onBeforeMount, provide } from "vue";
import { TABS } from "@/constants";
import { useTabs } from "@/composables/useTabs";
import { TabPanelKey } from "@/types";

const {
  activeTab,
  searchTerm,
  title,
  description,
  switchTab,
  fetchTabData,
  updateSearchTerm,
  tasks,
  isLoading,
  isError,
} = useTabs();

onBeforeMount(() => {
  fetchTabData();
});

provide(TabPanelKey, {
  activeTab,
  tasks,
  isLoading,
  isError,
  searchTerm,
  title,
  description,
  updateSearchTerm,
  switchTab,
});
</script>

<template>
  <div>
    <nav class="tabs">
      <button
        v-for="tab in TABS"
        :key="tab.id"
        @click="switchTab(tab.id)"
        :class="activeTab === tab.id ? 'tab-active' : 'tab-inactive'"
      >
        {{ tab.label }}
      </button>
    </nav>

    <div class="tasks-container">
      <slot />
    </div>
  </div>
</template>
