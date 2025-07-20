import { ref, computed } from "vue";
import type { ButtonAction, Task, TaskStats, TaskStatus } from "@/types";
import TasksService from "@/api/tasksService";
import {
  TASK_STATUS,
  UI_LABELS,
  BADGE_CLASSES,
  BADGE_ICONS,
  BUTTON_ACTIONS,
  ERROR_MESSAGES,
} from "@/constants";
import { withMinimumLoading, isOpenStatus } from "@/utils";

export const useTasks = () => {
  const tasks = ref<Task[]>([]);
  const isLoading = ref(false);
  const isError = ref<string | null>(null);

  const fetchTasks = async () => {
    isLoading.value = true;
    isError.value = null;

    try {
      await withMinimumLoading(async () => {
        const data = await TasksService.getTasks();
        tasks.value = data.tasks;
      });
    } catch (err) {
      isError.value =
        err instanceof Error ? err.message : ERROR_MESSAGES.FETCH_TASKS;
      console.error("Erro ao buscar tarefas:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchOpenTasks = async () => {
    isLoading.value = true;
    isError.value = null;

    try {
      await withMinimumLoading(async () => {
        const data = await TasksService.getOpenTasks();
        tasks.value = data.tasks;
      });
    } catch (err) {
      isError.value =
        err instanceof Error ? err.message : ERROR_MESSAGES.FETCH_OPEN_TASKS;
      console.error("Erro ao buscar tarefas abertas:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchFinishedTasks = async () => {
    isLoading.value = true;
    isError.value = null;

    try {
      await withMinimumLoading(async () => {
        const data = await TasksService.getFinishedTasks();
        tasks.value = data.tasks;
      });
    } catch (err) {
      isError.value =
        err instanceof Error
          ? err.message
          : ERROR_MESSAGES.FETCH_FINISHED_TASKS;
      console.error("Erro ao buscar tarefas finalizadas:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const getBadgeClass = (status: TaskStatus): string => {
    return BADGE_CLASSES[status] || BADGE_CLASSES[TASK_STATUS.PENDING];
  };

  const getBadgeIcon = (status: TaskStatus): string => {
    return BADGE_ICONS[status] || BADGE_ICONS[TASK_STATUS.PENDING];
  };

  const getBadgeIconColor = (status: TaskStatus): string => {
    switch (status) {
      case TASK_STATUS.PENDING:
        return "text-error";
      case TASK_STATUS.WAITING:
        return "text-warning";
      case TASK_STATUS.FINISHED:
        return "text-success";
      case TASK_STATUS.CANCELED:
        return "text-error";
      default:
        return "text-gray-400";
    }
  };

  const getButtonAction = (status: TaskStatus): ButtonAction => {
    if (isOpenStatus(status)) {
      return BUTTON_ACTIONS.ASSUME;
    }
    return BUTTON_ACTIONS.VIEW;
  };

  const getStatusLabel = (status: TaskStatus): string => {
    return UI_LABELS.STATUS_LABELS[status] || status;
  };

  const getStepTypeLabel = (type: Task["str_step_type"]): string => {
    return UI_LABELS.STEP_TYPE_LABELS[type] || type;
  };

  return {
    tasks,
    isLoading,
    isError,
    fetchTasks,
    fetchOpenTasks,
    fetchFinishedTasks,
    getBadgeClass,
    getBadgeIcon,
    getBadgeIconColor,
    getButtonAction,
    getStatusLabel,
    getStepTypeLabel,
  };
};
