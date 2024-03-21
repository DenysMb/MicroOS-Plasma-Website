<script setup lang="ts">
defineProps<{ title: string; flathub: string; url: string; image: string }>();
</script>

<template>
  <div class="card">
    <a class="header" :href="flathub">{{ title }}</a>

    <img :src="image" :alt="title" />

    <a class="button" :href="`appstream://${url}`">Download</a>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  place-items: center;
  gap: 8px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);

  @media (prefers-color-scheme: dark) {
    border: 1px solid rgba(255, 255, 255, 0.15);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  }

  .header {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    background-color: #f5ebf3;
    text-align: center;
    font-weight: 500;

    @media (prefers-color-scheme: dark) {
      border: 1px solid rgba(255, 255, 255, 0.15);
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  img {
    width: 128px;
    height: 128px;
    margin-bottom: 8px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    background-color: #f5ebf3;
    padding: 8px;

    @media (prefers-color-scheme: dark) {
      border: 1px solid rgba(255, 255, 255, 0.15);
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  a {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
  }
}
</style>
