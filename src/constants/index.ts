// ===== TASK STATUS CONSTANTS =====
export const TASK_STATUS = {
  PENDING: "pending",
  WAITING: "waiting",
  FINISHED: "finished",
  CANCELED: "canceled",
} as const;

// ===== STEP TYPE CONSTANTS =====
export const STEP_TYPE = {
  APPROVAL: "approval",
  FORM: "form",
} as const;

// ===== UI LABELS =====
export const UI_LABELS = {
  // Status labels
  STATUS_LABELS: {
    [TASK_STATUS.PENDING]: "Pendente",
    [TASK_STATUS.WAITING]: "Aguardando",
    [TASK_STATUS.FINISHED]: "Preenchida",
    [TASK_STATUS.CANCELED]: "Cancelada",
  },

  // Step type labels
  STEP_TYPE_LABELS: {
    [STEP_TYPE.APPROVAL]: "Aprovação",
    [STEP_TYPE.FORM]: "Formulário",
  },

  // Button labels
  BUTTON_LABELS: {
    ASSUME: "Assumir",
    VIEW: "Visualizar",
  },

  // Tab labels
  TAB_LABELS: {
    OPEN: "Abertas",
    FINISHED: "Finalizadas",
  },

  // Section labels
  SECTION_LABELS: {
    OPEN_TASKS: "Área de tarefas abertas",
    FINISHED_TASKS: "Área de tarefas finalizadas",
  },

  // Descriptions
  DESCRIPTIONS: {
    OPEN_TASKS:
      "Quando um fluxo iniciado por você ou por outra pessoa alcançar etapas sob sua responsabilidade, as tarefas serão exibidas aqui.",
    FINISHED_TASKS:
      "Visualize todas as tarefas que já foram concluídas, canceladas ou finalizadas no sistema.",
  },

  // Date labels
  INFO_LABELS: {
    STATUS: "Status da tarefa",
    TIME: "Tarefa disponível desde",
    TYPE: "Tipo",
    LABEL: "Etiqueta",
  },

  // Breadcrumbs
  BREADCRUMBS: {
    FLOW: "Fluxo",
    TASKS: "Tarefas",
    OPEN: "Abertas",
    FINISHED: "Finalizadas",
  },
} as const;

// ===== BADGE CLASSES =====
export const BADGE_CLASSES = {
  [TASK_STATUS.PENDING]: "badge-pending",
  [TASK_STATUS.WAITING]: "badge-waiting",
  [TASK_STATUS.FINISHED]: "badge-finished",
  [TASK_STATUS.CANCELED]: "badge-canceled",
} as const;

// ===== BADGE ICONS =====
export const BADGE_ICONS = {
  [TASK_STATUS.PENDING]: "i-mdi-account-clock",
  [TASK_STATUS.WAITING]: "i-mdi-clock",
  [TASK_STATUS.FINISHED]: "i-mdi-check",
  [TASK_STATUS.CANCELED]: "i-mdi-cancel",
} as const;

// ===== BUTTON ACTIONS =====
export const BUTTON_ACTIONS = {
  ASSUME: "assumir",
  VIEW: "visualizar",
} as const;

// ===== TAB TYPES =====
export const TAB_TYPES = {
  OPEN: "open",
  FINISHED: "finished",
} as const;

// ===== TASK FILTERS =====
export const TASK_FILTERS = {
  OPEN_STATUSES: [TASK_STATUS.PENDING, TASK_STATUS.WAITING] as const,
  FINISHED_STATUSES: [TASK_STATUS.FINISHED, TASK_STATUS.CANCELED] as const,
} as const;

// ===== ERROR MESSAGES =====
export const ERROR_MESSAGES = {
  FETCH_TASKS: "Erro ao carregar tarefas",
  FETCH_OPEN_TASKS: "Erro ao carregar tarefas abertas",
  FETCH_FINISHED_TASKS: "Erro ao carregar tarefas finalizadas",
} as const;

// ===== COMPONENT ICONS =====
export const COMPONENT_ICONS = {
  CLIPBOARD: "i-mdi-clipboard-text",
  COG: "i-mdi-cog",
  CALENDAR: "i-mdi-calendar",
  CLOCK: "i-mdi-clock",
  TAG: "i-mdi-tag",
} as const;

export const TABS = [
  {
    id: TAB_TYPES.OPEN,
    label: UI_LABELS.TAB_LABELS.OPEN,
  },
  {
    id: TAB_TYPES.FINISHED,
    label: UI_LABELS.TAB_LABELS.FINISHED,
  },
];
