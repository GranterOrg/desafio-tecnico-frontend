<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Breadcrumbs from "@/components/layout/Breadcrumbs.vue";
import TabPanel from "@/components/layout/tabs/TabPanel.vue";
import Tabs from "@/components/layout/tabs/Tabs.vue";
import Container from "@/components/layout/Container.vue";
</script>

<template>
  <Header>
    <Breadcrumbs :include-query-params="true" />
  </Header>
  <Container>
    <Tabs>
      <TabPanel />
    </Tabs>
  </Container>
</template>
