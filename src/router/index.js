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
      component: Home,
      meta: { transitionName: "fade" },
    },
    {
      path: "/featured",
      name: "featured",
      component: Featured,
      meta: { transitionName: "zoom" },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: { transitionName: "fade" },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { transitionName: "fade" },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: { transitionName: "fade" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
