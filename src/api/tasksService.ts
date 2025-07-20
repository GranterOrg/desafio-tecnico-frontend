import { httpClient } from "./httpClient";
import type { Task } from "@/types";
import { TASK_FILTERS } from "@/constants";

export interface TasksResponse {
  data: Task[];
  total: number;
  page: number;
  perPage: number;
}

export interface TaskParams {
  page?: number;
  per_page?: number;
  status?: Task["str_task_status"];
  type?: Task["str_step_type"];
  search?: string;
}

export class TasksService {
  static async getTasks(params: TaskParams = {}): Promise<{ tasks: Task[] }> {
    const { data } = await httpClient.get<Task[]>("/tasks", { params });
    return { tasks: data };
  }

  static async getOpenTasks(): Promise<{ tasks: Task[] }> {
    // Buscar tarefas abertas (pending e waiting)
    const promises = TASK_FILTERS.OPEN_STATUSES.map((status) =>
      httpClient
        .get<Task[]>("/tasks", { params: { str_task_status: status } })
        .then((res) => res.data),
    );

    const results = await Promise.all(promises);
    const combined = results.flat();

    return { tasks: combined };
  }

  static async getFinishedTasks(): Promise<{ tasks: Task[] }> {
    // Buscar tarefas finalizadas (finished, canceled)
    const promises = TASK_FILTERS.FINISHED_STATUSES.map((status) =>
      httpClient
        .get<Task[]>("/tasks", { params: { str_task_status: status } })
        .then((res) => res.data),
    );

    const results = await Promise.all(promises);
    const combined = results.flat();

    return { tasks: combined };
  }
}

export default TasksService;
