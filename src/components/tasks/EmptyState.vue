<script setup lang="ts">
import { computed } from "vue";
import type { EmptyStateProps } from "@/types";

const props = withDefaults(defineProps<EmptyStateProps>(), {
  searchTerm: "",
});

// Mensagem para estado vazio baseado se há pesquisa
const message = computed(() => {
  return props.searchTerm
    ? "Nenhuma tarefa encontrada para o filtro aplicado."
    : "Nenhuma tarefa encontrada.";
});
</script>

<template>
  <div class="text-center py-8">
    <div class="text-gray">
      {{ message }}
    </div>
  </div>
</template>
