import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Featured from "@/views/Featured.vue";
import Projects from "@/views/Projects.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: { transitionName: "fade" },
    },
    {
      path: "/featured",
      name: "featured",
      component: () => import("../views/Home.vue"),
      meta: { transitionName: "zoom" },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/Home.vue"),
      meta: { transitionName: "fade" },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/Home.vue"),
      meta: { transitionName: "fade" },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Home.vue"),
      meta: { transitionName: "fade" },
    },
    {
      // will match everything
      path: "*",
      name: "NotFound",
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
