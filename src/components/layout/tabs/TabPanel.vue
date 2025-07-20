<script setup lang="ts">
import {
  TabPanelRoot,
  TabPanelHeader,
  TabPanelSearch,
  TabPanelContent,
} from "./tabComposition";
</script>
<template>
  <TabPanelRoot>
    <template #header>
      <TabPanelHeader />
    </template>
    <template #search>
      <TabPanelSearch />
    </template>
    <template #content>
      <TabPanelContent />
    </template>
  </TabPanelRoot>
</template>
