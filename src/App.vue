<template>
  <div
    id="app"
    class="palm"
    :style="{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imgBg})`,
      cursor: `url(${imgCursor})`,
    }"
  >
    <!-- Cursor -->
    <bolt />
    <!-- Noise -->
    <div
      class="noise"
      :style="{
        backgroundImage: `url(${imgNoise})`,
      }"
    ></div>
    <!-- Preloader -->
    <Preloader
      :class="{
        hide: hide,
        remove: remove,
      }"
      v-if="
        (!down && !preload && currentPage === 'home') ||
        currentPage === 'featured'
      "
    />
    <!-- Global Nav Component -->
    <navigation v-if="!down && !landscape" />
    <!-- Pages -->
    <transition :name="transitionName">
      <router-view :preloaded="preload" v-if="!down && !landscape" />
    </transition>
    <!-- Maintenance -->
    <maintenance v-if="down" />
    <!-- Landscape Device -->
    <card v-if="landscape" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import utils from "@/utils/index.js";

// Components
import Navigation from "@/components/Navigation.vue";
import Maintenance from "@/components/Maintenance.vue";
import Preloader from "@/components/Preloader.vue";
import Card from "@/components/Card.vue";
import Bolt from "@/components/Bolt.vue";

// Images
import imgBg from "@/assets/images/palm.jpg";
import imgCursor from "@/assets/images/cursor.svg";
import imgNoise from "@/assets/images/film.gif";

const DEFAULT_TRANSITION = "fade";

const router = useRouter();
const store = useStore();

// current page reference
const currentPage = router.currentRoute.name;
// reference state from store
const preload = store.state.preloaded;
const down = store.state.down;
const hide = ref(false);
const remove = ref(false);
const landscape = ref(false);
const transitionName = ref(DEFAULT_TRANSITION);

onBeforeMount(() => {
  router.beforeEach((to, from, next) => {
    const curr =
      to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;
    transitionName.value = curr;
    next();
  });
});

onMounted(() => {
  setTimeout(() => {
    hide.value = true;
    setTimeout(() => {
      remove.value = true;
      store.state.preloaded = true;
    }, 500);
  }, 1000);

  // intial orientation check
  landscape.value =
    (utils.isMobileDevice() && utils.isMobileSize() && window.screen === 90) ||
    window.screen === -90;

  // set landscape state on orientation change
  window.addEventListener("orientationchange", function () {
    landscape.value =
      (Utils.isMobileDevice() &&
        Utils.isMobileSize() &&
        window.screen === 90) ||
      window.screen === -90;
  });
});

// TODO: fix
// watch: {
//   $route(to, from) {
//     this.currentPage = to.name;
//   },
// },
// };
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(1.2, 1.2, 1.2);
  }

  100% {
    opacity: 1;
  }
}
</style>
