<script setup lang="ts">
import Applications from "./features/Applications.vue";
import Topbar from "./components/Topbar.vue";
</script>

<template>
  <Topbar />

  <router-view></router-view>
</template>

<style lang="scss" scoped>
.presentation {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.row {
  padding: 32px 0;
  gap: 32px;
}
</style>
