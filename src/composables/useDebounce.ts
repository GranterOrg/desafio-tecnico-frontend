import { ref, watch, computed, type Ref } from "vue";

export interface UseDebounceOptions {
  delay?: number;
  minLength?: number;
  immediate?: boolean;
}

/**
 * Composable genérico para debounce de qualquer valor reativo
 */
export function useDebounce<T>(
  source: Ref<T>,
  options: UseDebounceOptions = {},
) {
  const { delay = 300, minLength = 3, immediate = true } = options;

  const debouncedValue = ref<T>(source.value);
  const isDebouncing = ref(false);
  const debounceTimeout = ref<number | null>(null);

  const clearDebounceTimeout = () => {
    if (debounceTimeout.value !== null) {
      clearTimeout(debounceTimeout.value);
      debounceTimeout.value = null;
    }
  };

  const applyDebounce = (value: T) => {
    clearDebounceTimeout();
    isDebouncing.value = true;

    debounceTimeout.value = window.setTimeout(() => {
      debouncedValue.value = value;
      isDebouncing.value = false;
    }, delay);
  };

  watch(
    source,
    (newValue) => {
      // Previne debounce desnecessário se valor não mudou
      if (newValue === debouncedValue.value) return;

      // Se for string e não atender minLength
      if (typeof newValue === "string") {
        const trimmed = newValue.trim();

        if (minLength > 0 && trimmed.length < minLength) {
          clearDebounceTimeout();
          debouncedValue.value = "" as T;
          isDebouncing.value = false;
          return;
        }

        if (trimmed === "") {
          clearDebounceTimeout();
          debouncedValue.value = newValue;
          isDebouncing.value = false;
          return;
        }
      }

      applyDebounce(newValue);
    },
    { immediate },
  );

  const cancel = () => {
    clearDebounceTimeout();
    isDebouncing.value = false;
  };

  const flush = () => {
    if (debounceTimeout.value !== null) {
      clearDebounceTimeout();
    }

    debouncedValue.value = source.value;
    isDebouncing.value = false;
  };

  return {
    debouncedValue: debouncedValue as Ref<T>,
    isDebouncing,
    cancel,
    flush,
  };
}

export function useSearchDebounce(
  searchTerm: Ref<string>,
  options: UseDebounceOptions = {},
) {
  const { delay = 300, minLength = 3, immediate = true } = options;

  const { debouncedValue, isDebouncing, cancel, flush } = useDebounce(
    searchTerm,
    {
      delay,
      minLength,
      immediate,
    },
  );

  const searchFeedback = computed(() => {
    if (!searchTerm.value) return null;

    if (searchTerm.value.length < minLength) {
      return `Digite pelo menos ${minLength} caracteres para buscar (${searchTerm.value.length}/${minLength})`;
    }

    if (isDebouncing.value) {
      return "Buscando...";
    }

    return null;
  });

  return {
    debouncedSearchTerm: debouncedValue,
    isSearching: isDebouncing,
    searchFeedback,
    cancelSearch: cancel,
    flushSearch: flush,
  };
}
