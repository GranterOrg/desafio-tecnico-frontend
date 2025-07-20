<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { UI_LABELS } from "@/constants";
import type { BreadcrumbsProps } from "@/types";

interface BreadcrumbItem {
  label: string;
  path?: string;
  active?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  customLabels: () => ({}),
  includeQueryParams: false,
  separator: " > ",
  customClass: "",
});

const route = useRoute();

const defaultLabels: Record<string, string> = {
  flow: UI_LABELS.BREADCRUMBS.FLOW,
  tasks: UI_LABELS.BREADCRUMBS.TASKS,
  open: UI_LABELS.BREADCRUMBS.OPEN,
  finished: UI_LABELS.BREADCRUMBS.FINISHED,
};

const getSegmentLabel = (segment: string): string => {
  if (props.customLabels[segment]) return props.customLabels[segment];
  if (defaultLabels[segment]) return defaultLabels[segment];
  return segment.charAt(0).toUpperCase() + segment.slice(1);
};

const breadcrumbs = computed(() => {
  const items: BreadcrumbItem[] = [];
  const pathSegments = route.path.split("/").filter(Boolean);
  let currentPath = "";

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      label: getSegmentLabel(segment),
      path: currentPath,
      active: index === pathSegments.length - 1,
    });
  });

  if (props.includeQueryParams) {
    const tabValue = route.query.tab as string;
    const defaultTab = tabValue || "open";
    items.push({
      label: getSegmentLabel(defaultTab),
      active: true,
    });
  }

  return items;
});
</script>

<template>
  <template v-for="(item, index) in breadcrumbs" :key="index">
    <span
      :class="[
        'text-sm font-bold m-2',
        item.active &&
        props.includeQueryParams &&
        index === breadcrumbs.length - 1
          ? 'text-gray-600'
          : 'text-gray-500',
      ]"
    >
      {{ item.label }}
    </span>
    <span v-if="index < breadcrumbs.length - 1" class="text-gray-500 text-lg">
      {{ props.separator }}
    </span>
  </template>
</template>
