<script setup lang="ts">
import Section from '../components/Section.vue'
import Card from '../components/Card.vue'
</script>

<template>
  <Section title="openSUSE Kalpa" subtitle="Make the best of your openSUSE" :image="true">
    <template #image>
      <img src="../assets/desktop.png" alt="MicroOS Desktop" />
    </template>

    <div class="presentation">
      <p>
        This just contains some suggestion of how you can improve your experience with openSUSE openSUSE Kalpa
        <strong>in my opinion</strong>.
      </p>
      <p>
        I will suggest some tweaks and some essential Flatpak apps to install to make you have the best "install and
        forget" experience after following these suggestions.
      </p>
    </div>
  </Section>

  <Section title="Applications" subtitle="To improve your productivity">
    <p>
      I usually always install these three applications first, because in my opinion they are more than needed to a
      better usage of your computer. They are:
    </p>

    <div class="row">
      <Card
        title="Okular"
        image="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/org.kde.okular.png"
        url="https://dl.flathub.org/repo/appstream/org.kde.okular.flatpakref"
        flathub="https://flathub.org/apps/details/org.kde.okular"
      />

      <Card
        title="Gwenview"
        image="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/org.kde.gwenview.png"
        url="https://dl.flathub.org/repo/appstream/org.kde.gwenview.flatpakref"
        flathub="https://flathub.org/apps/details/org.kde.gwenview"
      />

      <Card
        title="Ark"
        image="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/org.kde.ark.png"
        url="https://dl.flathub.org/repo/appstream/org.kde.ark.flatpakref"
        flathub="https://flathub.org/apps/details/org.kde.ark"
      />
    </div>

    <p>
      If you want to game, you should try to install these applications:
    </p>

    <div class="row">
      <Card
        title="Steam"
        image="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.valvesoftware.Steam.png"
        url="https://dl.flathub.org/repo/appstream/com.valvesoftware.Steam.flatpakref"
        flathub="https://flathub.org/apps/details/com.valvesoftware.Steam"
      />

      <Card
        title="Lutris"
        image="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/net.lutris.Lutris.png"
        url="https://dl.flathub.org/repo/appstream/net.lutris.Lutris.flatpakref"
        flathub="https://flathub.org/apps/details/net.lutris.Lutris"
      />
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.presentation {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 32px 0;
  gap: 32px;
}
</style>
