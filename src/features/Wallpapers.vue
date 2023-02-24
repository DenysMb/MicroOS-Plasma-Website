<script setup lang="ts"></script>

<template>
  <div class="wallpapers">
    <img src="../assets/openSUSE-MicroOS.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE-MicroOS-Pattern-Alt.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE-MicroOS-Pattern.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE-MicroOS-Alt.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE-MicroOS-Alt-Pattern.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE-Pattern-MicroOS.png" alt="openSUSE MicroOS Wallpaper 1" />
    <img src="../assets/openSUSE-MicroOS-Only-Pattern.png" alt="openSUSE MicroOS Wallpaper 1" />
  </div>
</template>

<style lang="scss" scoped>
.wallpapers {
  display: flex;
  flex-wrap: wrap;

  img {
    width: 50%;
    height: 50%;

    @media only screen and (max-width: 820px) {
      width: 100%;
      height: auto;
    }
  }
}
</style>
