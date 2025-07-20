<script setup lang="ts">
import type { TaskCardSkeletonProps } from "@/types";

withDefaults(defineProps<TaskCardSkeletonProps>(), {});
</script>

<template>
  <div
    class="flex items-center justify-between w-full px-6 py-4 min-h-[124px] bg-gray-100 border border-gray-300 rounded-md animate-pulse gap-4"
  >
    <!-- Esquerda: ID + Conteúdo -->
    <div class="flex items-center gap-4 flex-1 min-w-[300px]">
      <!-- ID -->
      <div
        class="w-40px h-44px bg-gray-300 rounded-md flex items-center justify-center m-2"
      />
      <!-- Fluxo e Etapa -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div class="w-48 h-4 bg-gray-200 rounded" />
          <div class="w-40 h-3 bg-gray-200 rounded" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="w-48 h-4 bg-gray-200 rounded" />
          <div class="w-40 h-3 bg-gray-200 rounded" />
        </div>
      </div>
    </div>

    <!-- Centro: Infos -->
    <div class="flex flex-col gap-2 flex-1">
      <div class="flex items-center gap-4">
        <div class="flex flex-col gap-1">
          <div class="w-24 h-3 bg-gray-300 rounded" />
          <div class="w-28 h-4 bg-gray-200 rounded" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="w-28 h-3 bg-gray-300 rounded" />
          <div class="w-32 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex flex-col gap-1">
          <div class="w-24 h-3 bg-gray-300 rounded" />
          <div class="w-28 h-4 bg-gray-200 rounded" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="w-28 h-3 bg-gray-300 rounded" />
          <div class="w-32 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>

    <!-- Direita: Botão -->
    <div class="w-[100px] h-10 bg-gray-300 rounded-md flex-shrink-0" />
    <div class="w-[100px] h-10 bg-gray-300 rounded-md flex-shrink-0" />
  </div>
</template>
