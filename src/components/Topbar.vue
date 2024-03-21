<script setup lang="ts">
import MicroOSLogo from '../assets/microos.svg'
</script>

<template>
  <div class="topbar">
    <div class="logo">
      <MicroOSLogo />
      <h2>openSUSE Kalpa</h2>
    </div>

    <div class="links">
      <router-link to="/">Applications</router-link>
      <router-link to="/tweaks">Tweaks</router-link>
      <router-link to="/wallpapers">Wallpapers</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  color: #fff;
  padding: 16px 32px;

  svg {
    min-width: 48px;
    min-height: 48px;
    max-width: 48px;
    max-height: 48px;
    fill: #fff;

    @media (prefers-color-scheme: dark) {
      fill: #242424;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .links {
    display: flex;
    justify-content: flex-end;
    gap: 32px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #fff;
    color: #213547;
  }

  @media only screen and (max-width: 700px) {
    .links {
      flex-direction: column;
    }
  }
}
</style>
