import { TASK_FILTERS } from "@/constants";
import type { TaskStatus } from "@/types";

export const withMinimumLoading = async (asyncFunction: () => Promise<any>) => {
  const startTime = Date.now();
  const minLoadingTime = 2000; // 2 segundos

  try {
    const result = await asyncFunction();

    // Calcula o tempo decorrido
    const elapsedTime = Date.now() - startTime;
    const remainingTime = minLoadingTime - elapsedTime;

    // Se o tempo decorrido for menor que 2 segundos, aguarda o tempo restante
    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }

    return result;
  } catch (err) {
    // Mesmo em caso de erro, garante o tempo mínimo de loading
    const elapsedTime = Date.now() - startTime;
    const remainingTime = minLoadingTime - elapsedTime;

    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }

    throw err;
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const isOpenStatus = (status: TaskStatus): boolean => {
  return (TASK_FILTERS.OPEN_STATUSES as readonly TaskStatus[]).includes(status);
};

export const isFinishedStatus = (status: TaskStatus): boolean => {
  return (TASK_FILTERS.FINISHED_STATUSES as readonly TaskStatus[]).includes(
    status,
  );
};

export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};
