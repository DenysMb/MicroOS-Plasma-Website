import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from 'vue-router'
import App from "./App.vue";
import Applications from "./features/Applications.vue";
import Tweaks from "./features/Tweaks.vue";
import Wallpapers from "./features/Wallpapers.vue";

const routes = [
  { path: "/", component: Applications },
  { path: "/tweaks", component: Tweaks },
  { path: "/wallpapers", component: Wallpapers },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
