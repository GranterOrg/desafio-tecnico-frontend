<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

const API_URL = import.meta.env.VITE_API_URL;

const mockServerError = ref();
const mockServerResp = ref();

const testMockServer = async () => {
  try {
    const req = await fetch(`${API_URL}/tasks?_page=1&per_page=10`);
    mockServerResp.value = await req.json();
  } catch (e: unknown) {
    mockServerError.value = e;
  }
};

onBeforeMount(async () => {
  await testMockServer();
});
</script>

<template>
  <div pa-6 bg-white w-full>
    <h1>Olá!</h1>
    <p>Leia o README.md e implemente as funcionalidade aqui.</p>
    <p>Boa sorte :)</p>

    <div flex flex-col>
      <h3>Mock Server Teste:</h3>
      <div v-if="mockServerResp">
        <p>
          <span color-teal font-bold> Sucesso! </span>
          O Servidor mock está rodando corretamente no caminho
          <b>{{ API_URL }}</b
          >! 🎉
        </p>
      </div>
      <div v-else-if="mockServerError">
        <p>
          <span color-red font-bold> Erro! </span>
          Não foi possível carregar corretamente os dados do mock server,
          verifique se você está rodou corretamente o comando
          <code>pnpm mock-server</code>
        </p>
        <p>Erro retornado:</p>
        <pre>{{ mockServerError }}</pre>
      </div>
      <div v-else>
        <span> Carregando dados do MockServer... </span>
      </div>
    </div>

    <div flex flex-col gap-1>
      <h3>UnoCSS Teste:</h3>
      <span
        >Se tiver ícones abaixo quer dizer que o UnoCSS está funcionando!</span
      >
      <div flex gap-2>
        <div i-mdi:success color-teal size-6 />
        <div i-mdi:user color-blue size-6 />
        <div i-mdi:source-branch color-red size-6 />
      </div>
    </div>
  </div>
</template>
