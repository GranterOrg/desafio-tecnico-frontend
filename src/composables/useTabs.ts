import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { TAB_TYPES, UI_LABELS } from "@/constants";
import type { TabType } from "@/types";
import { useTasks } from "./useTasks";

export function useTabs() {
  const router = useRouter();
  const route = useRoute();
  const { fetchOpenTasks, fetchFinishedTasks, tasks, isLoading, isError } =
    useTasks();

  const activeTab = ref<TabType>(
    (route.query.tab as TabType) || TAB_TYPES.OPEN,
  );
  const searchTerm = ref("");

  const title = computed(() =>
    activeTab.value === TAB_TYPES.OPEN
      ? UI_LABELS.SECTION_LABELS.OPEN_TASKS
      : UI_LABELS.SECTION_LABELS.FINISHED_TASKS,
  );

  const description = computed(() =>
    activeTab.value === TAB_TYPES.OPEN
      ? UI_LABELS.DESCRIPTIONS.OPEN_TASKS
      : UI_LABELS.DESCRIPTIONS.FINISHED_TASKS,
  );

  const fetchTabData = async () => {
    if (activeTab.value === TAB_TYPES.OPEN) {
      await fetchOpenTasks();
    } else {
      await fetchFinishedTasks();
    }
  };

  const switchTab = async (tabId: TabType) => {
    activeTab.value = tabId;

    router.replace({ query: { ...route.query, tab: tabId } });

    await fetchTabData();
  };

  const updateSearchTerm = (value: string) => {
    searchTerm.value = value;
  };

  return {
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
  };
}
