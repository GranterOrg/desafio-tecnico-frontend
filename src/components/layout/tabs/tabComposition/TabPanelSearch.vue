<script setup lang="ts">
import { inject, ref, watch } from "vue";
import { TabPanelKey } from "@/types";
import SearchInput from "@/components/SearchInput.vue";
import { useSearchDebounce } from "@/composables/useDebounce";

const tabContext = inject(TabPanelKey);

if (!tabContext) {
  throw new Error("TabPanel context not found");
}

const { updateSearchTerm } = tabContext;
const searchInputValue = ref("");

const { debouncedSearchTerm, searchFeedback } =
  useSearchDebounce(searchInputValue);

watch(debouncedSearchTerm, (value: string) => {
  updateSearchTerm(value);
});
</script>

<template>
  <div class="m-4 px-2 bg-gray-50 rounded-md">
    <SearchInput
      id="search"
      placeholder="Busque por nome do fluxo, nome da etapa ou etiqueta"
      v-model="searchInputValue"
      :feedback="searchFeedback"
    />
  </div>
</template>
