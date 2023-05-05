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
          path: "photos",
          name: "home",
          component: () => import("../views/HomePage.vue"),
        },
        {
          path: "photos/:id",
          name: "photo",
          component: () => import("../views/PhotoInfo.vue"),
        },
        {
          path: "photos/favourites",
          name: "favourites",
          component: () => import("../views/FavouritesPage.vue"),
        },
      ],
    },
  ],
});

export default router;
