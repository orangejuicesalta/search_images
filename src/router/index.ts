import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../layout/MainLayout.vue"),
      redirect: {
        name: "home",
      },
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/HomePage.vue"),
        },
      ],
    },
  ],
});

export default router;
