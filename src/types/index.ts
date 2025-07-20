import type {
  BUTTON_ACTIONS,
  STEP_TYPE,
  TAB_TYPES,
  TASK_STATUS,
} from "@/constants";
import type { Ref } from "vue";
import type { InjectionKey } from "vue";

export interface ButtonProps {
  variant?: "assume" | "view";
  icon?: string;
  type?: "button" | "submit" | "reset";
}

export interface BadgeProps {
  variant?: "pending" | "waiting" | "finished" | "canceled";
  icon?: string;
  iconColor?: string;
}

export interface InputProps {
  modelValue: string;
  type?: "text" | "search";
  placeholder?: string;
  hint?: string | null;
  icon?: string;
}

export interface InputEmits {
  (e: "update:modelValue", value: string): void;
}

export interface TabPanelContext {
  activeTab: Ref<TabType>;
  tasks: Ref<Task[]>;
  isLoading: Ref<boolean>;
  isError: Ref<string | null>;
  searchTerm: Ref<string>;
  title: Ref<string>;
  description: Ref<string>;
  updateSearchTerm: (value: string) => void;
  switchTab: (tabId: TabType) => Promise<void>;
}

export const TabPanelKey = Symbol("TabPanel") as InjectionKey<TabPanelContext>;

export interface Task {
  id: number;
  str_automation_name: string;
  str_step_name: string;
  str_task_status: TaskStatus;
  str_step_type: StepType;
  ts_created_at: string;
  ts_finished_at: string | null;
  str_step_label: string | null;
}

export interface TaskStats {
  total: number;
  pending: number;
  waiting: number;
  finished: number;
  canceled: number;
}

export interface ComponentCardProps {
  title: string;
  icon: string;
  count: number;
  color: string;
  onClick?: () => void;
}

export interface SearchInputProps {
  modelValue: string;
  placeholder?: string;
  feedback?: string | null;
  isLoading?: boolean;
}

export interface LoadingStateProps {
  itemCount?: number;
}

export interface ErrorStateProps {
  error: string;
}

export interface TasksListProps {
  tasks: Task[];
  searchTerm?: string;
}

export interface SearchInputEmits {
  (e: "update:modelValue", value: string): void;
}

export interface ErrorStateEmits {
  (e: "retry"): void;
}

export interface EmptyStateProps {
  searchTerm?: string;
}

export interface TaskCardSkeletonProps {
  // Este componente não precisa de props
}

export interface ContainerProps {
  class?: string;
  maxWidth?: string;
  padding?: string;
}

export interface SectionHeaderProps {
  activeTab: string;
  title?: string;
  description?: string;
}

export interface TabsProps {
  activeTab: string;
}

export interface TabsEmits {
  (e: "tab-change", tabId: TabType): void;
}

export interface TaskCardProps {
  task: Task;
}

export interface BreadcrumbsProps {
  customLabels?: Record<string, string>;
  includeQueryParams?: boolean;
  separator?: string;
  customClass?: string;
}

export type ButtonAction = (typeof BUTTON_ACTIONS)[keyof typeof BUTTON_ACTIONS];

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];

export type StepType = (typeof STEP_TYPE)[keyof typeof STEP_TYPE];

export type TabType = (typeof TAB_TYPES)[keyof typeof TAB_TYPES];
