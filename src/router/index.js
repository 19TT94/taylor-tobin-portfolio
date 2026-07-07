import { createRouter, createWebHistory } from "vue-router";

import { ROUTE_SEO } from "@/data/seo.js";
import { applySeo } from "@/utils/seo.js";
import Home from "@/views/Home.vue";
import Featured from "@/views/Featured.vue";
import HeroBuilderCaseStudy from "@/views/HeroBuilderCaseStudy.vue";
import Projects from "@/views/Projects.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Card from "@/views/Card.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { transitionName: "fade", seo: ROUTE_SEO.home },
    },
    {
      path: "/featured",
      name: "featured",
      component: Featured,
      meta: { transitionName: "zoom", seo: ROUTE_SEO.featured },
    },
    {
      path: "/featured/hero-builder",
      name: "hero-builder-case-study",
      component: HeroBuilderCaseStudy,
      meta: { transitionName: "fade", seo: ROUTE_SEO["hero-builder-case-study"] },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: { transitionName: "fade", seo: ROUTE_SEO.projects },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { transitionName: "fade", seo: ROUTE_SEO.about },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: { transitionName: "fade", seo: ROUTE_SEO.contact },
    },
    {
      path: "/card",
      name: "card",
      component: Card,
      meta: { transitionName: "fade", seo: ROUTE_SEO.card },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
      meta: { seo: ROUTE_SEO["not-found"] },
    },
  ],
});

router.afterEach((to) => {
  applySeo(to.meta.seo, to.path);
});

export default router;
