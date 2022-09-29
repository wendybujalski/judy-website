import BioCvView from "@/views/BioCvView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaintingView from "../views/PaintingView.vue";
import VideoView from "../views/VideoView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bio",
      name: "bio",
      component: BioCvView,
    },
    {
      path: "/painting",
      name: "painting",
      component: PaintingView,
    },
    {
      path: "/video",
      name: "video",
      component: VideoView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
