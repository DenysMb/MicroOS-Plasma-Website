<script setup lang="ts">
defineProps<{ title: string; subtitle: string; image?: boolean }>();
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="content">
        <h5>{{ subtitle }}</h5>

        <h1>{{ title }}</h1>

        <slot></slot>
      </div>

      <slot name="image"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding: 32px;
  width: 100%;

  .container {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    gap: 64px;
  }

  .content {
    display: flex;
    flex-direction: column;
    place-content: center;
  }

  &:nth-child(even) {
    background-color: #973a84;
    color: #fff;
  }
}
</style>
