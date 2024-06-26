<script setup lang="ts">
import Section from '../components/Section.vue'
</script>

<template>
  <Section title="Tweaks and Tricks" subtitle="Let's do some hacking with">
    <div class="presentation">
      <p>
        To make the best of any system, sometimes we need to do some "hacking" with tweaks and "mess with
        configuration".
      </p>
      <p>Here I'll show you what I usually do to make the best of my MicroOS + KDE.</p>
    </div>
  </Section>

  <Section title="Tweaks" subtitle="Here is the list of">
    <h2 id="proton-wine">To run Proton/Wine games</h2>

    <p>
      If you want to be able to play some Proton/Wine games, you will need to run this on terminal. This will set the
      right permission to SELinux, so it will prevent to block them.
    </p>

    <code> sudo setsebool -P selinuxuser_execmod 1 </code>

    <h2 id="graphic-drivers">To install graphic drivers</h2>

    <h3 id="nvidia">NVIDIA</h3>

    <p>To install NVIDIA drivers first you need to add the repositories by running:</p>

    <code> zypper addrepo --refresh https://download.nvidia.com/opensuse/tumbleweed NVIDIA </code>

    <p>Then you can install the drivers with:</p>

    <code> sudo transactional-update -i pkg in nvidia-driver-G06-kmp-default nvidia-video-G06 nvidia-gl-G06 nvidia-compute-G06 </code>

    <p class="important">
      Please make sure to check the correct driver here in the
      <strong>
        <a href="https://en.opensuse.org/SDB:NVIDIA_drivers#Install"> openSUSE official documentation </a>
      </strong>
    </p>

    <p>
      If you have Optimus laptop and want ability to switch between NVIDIA and Intel/AMD GPUs, you can create an alias
      in your <em>~/.bashrc</em> file and just run the application that you want to run with NVIDIA GPU with
      <em>prime-run COMMAND</em>
    </p>

    <code>
      alias prime-run="__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia"
    </code>

    <h3 id="amd">AMD</h3>

    <p>To install AMD drivers you can run:</p>

    <code>
      sudo transactional-update -i pkg install kernel-firmware-amdgpu libdrm_amdgpu1 libdrm_amdgpu1-32bit libdrm_radeon1
      libdrm_radeon1-32bit libvulkan_radeon libvulkan_radeon-32bit libvulkan1 libvulkan1-32bit
    </code>

    <h3 id="nvidia">Intel</h3>

    <p>To install INTEL drivers you can run:</p>

    <code>
      sudo transactional-update -i pkg install kernel-firmware-intel libdrm_intel1 libdrm_intel1-32bit libvulkan1
      libvulkan1-32bit libvulkan_intel libvulkan_intel-32bit
    </code>

    <h2 id="add-dictionaries">Add dictionaries</h2>

    <p>
      With MicroOS you don't have any dictionary pre-installed, for it you should install any of them. I recommend
      install <em>myspell</em>. You can install it with:
    </p>

    <code> sudo transactional-update -i pkg install myspell-en_US</code>

    <p>You can search for all available dictionaries with:</p>

    <code> zypper se myspell</code>

    <h2 id="enable-zram">Enable Zram</h2>

    <p>
      If you don't have enough RAM available and need more, since MicroOS doesn't install SWAP partition, you can simple
      enable ZRAM if you don't mind to use your disk and CPU to it.
    </p>

    <code>sudo transactional-update -i pkg install systemd-zram-service</code>

    <p>And then you need to enable it. In the next time you reboot your machine it will be working.</p>

    <code>systemctl enable zramswap</code>

    <h2 id="enable-plymouth">Enable Plymouth</h2>

    <p>
      If you don't want to see that bunch of messages when staring your computer you can just install plymouth. It will
      be configured and enabled automatically after install.
    </p>

    <code>sudo transactional-update -c pkg install plymouth plymouth-branding-openSUSE</code>
  </Section>

  <Section title="Tricks" subtitle="And here are some">
    <h2 id="link-qtdbus">Create a copy of qdbus binary</h2>

    <p>
      The binary of qdbus in openSUSE is called qdbus-qt5 but in some distros is called only qdbus so, because of this,
      some custom widgets may not work. A simple solution is just create a copy of it with the following command:
    </p>

    <code>ln -s /usr/bin/qdbus6 /usr/bin/qdbus</code>

    <h2 id="flatpak-overrides">Flatpak overrides</h2>

    <p>For better integrate flatpaks with your desktop, I usually do this overrides.</p>

    <p>First we need to create a <strong>global</strong> override file</p>

    <code>
      mkdir -p $HOME/.local/share/flatpak/overrides/
      <br />
      nano $HOME/.local/share/flatpak/overrides/global
    </code>

    <p>And then we add these content</p>

    <code>
      [Context]
      <br />
      filesystems=xdg-config/gtk-3.0:ro;~/.icons:ro;~/.themes:ro;~/.local/share/icons:ro
      <br />
      <br />
      [Environment]
      <br />
      GTK_USE_PORTAL=1
      <br />
      XDG_CURRENT_DESKTOP=KDE
      <br />
      <br />
      [System Bus Policy]
      <br />
      com.canonical.AppMenu.Registrar=talk
      <br />
      <br />
      [Session Bus Policy]
      <br />
      com.canonical.AppMenu.Registrar=talk
    </code>

    <p>This will make your flatpak applications user your theme and icon and also integrate them with appmenu</p>
  </Section>

  <Section title="Optional changes" subtitle="And here are some">
    <h2 id="flatpak-overrides">X11 Plasma Session</h2>
    
    <p>If you are facing issues with Wayland or just miss the X11 session, you can easily install it with</p>

    <code>sudo transactional-update -i pkg install plasma6-session-x11</code>
  </Section>
</template>

<style lang="scss" scoped>
.presentation {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

h2,
h3 {
  margin: 8px 0;
}

h2 {
  margin-top: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  //   &:first-of-type {
  //     margin-top: 8px;
  //   }
}

h3 {
  font-weight: 500;
}

p.important {
  color: #f00;
}

code {
  margin: 8px 0;
  padding: 4px 8px;
  border: 1px solid #242424;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
}
</style>
