<script setup lang="ts">
import { inject } from "vue";
import { TabPanelKey } from "@/types";

const tabContext = inject(TabPanelKey);

if (!tabContext) {
  throw new Error("TabPanel context not found");
}

const { title, description } = tabContext;
</script>

<template>
  <div class="m-x p-5 bg-gray-50 rounded-md">
    <h1 class="section-header">{{ title }}</h1>
    <p v-if="description" class="section-description">
      {{ description }}
    </p>
  </div>
</template>
