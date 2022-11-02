import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/MyTasks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
  ],
});

export default router;
