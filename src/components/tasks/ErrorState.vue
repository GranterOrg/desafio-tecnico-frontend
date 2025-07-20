<script setup lang="ts">
import type { ErrorStateProps, ErrorStateEmits } from "@/types";
import Button from "@/components/ui/Button.vue";

const props = withDefaults(defineProps<ErrorStateProps>(), {
  error: "Ocorreu um erro inesperado",
});

const emit = defineEmits<ErrorStateEmits>();

const handleRetry = () => {
  emit("retry");
};
</script>

<template>
  <div class="text-center py-8">
    <div class="text-error mb-2">{{ props.error }}</div>
    <Button variant="view" @click="handleRetry"> Tentar novamente </Button>
  </div>
</template>
