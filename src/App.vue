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
        !down && !preload && (route.path === '/' || route.path === '/featured')
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
import { ref, onBeforeMount, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

import { isMobileDevice, isMobileSize } from "@/utils/index.js";

// Components
import Navigation from "@/components/navigation.vue";
import Maintenance from "@/components/maintenance.vue";
import Preloader from "@/components/preloader.vue";
import Card from "@/components/card.vue";
import Bolt from "@/components/bolt.vue";

// Images
import imgBg from "@/assets/images/palm.jpg";
import imgCursor from "@/assets/images/cursor.svg";
import imgNoise from "@/assets/images/film.gif";

const DEFAULT_TRANSITION = "fade";

const router = useRouter();
const route = useRoute();
const store = useStore();

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

const showCard = () => {
  landscape.value =
    isMobileDevice() &&
    isMobileSize() &&
    window.screen.orientation.angle === 90;
};

onMounted(() => {
  setTimeout(() => {
    hide.value = true;
    setTimeout(() => {
      remove.value = true;
      store.state.preloaded = true;
    }, 500);
  }, 1500);

  // intial orientation check
  landscape.value =
    isMobileDevice() &&
    isMobileSize() &&
    window.screen.orientation.angle === 90;

  // set landscape state on orientation change
  window.addEventListener("orientationchange", showCard);
});

onUnmounted(() => {
  window.removeEventListener("orientationchange", showCard);
});
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
