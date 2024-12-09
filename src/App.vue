<template>
  <div
    id="app"
    class="palm"
    :class="{ 'custom-cursor': store.state.cursor }"
    :style="{
      backgroundImage: `linear-gradient(${
        store.state.theme === 'dark'
          ? 'rgba(0,0,0,0.8), rgba(0,0,0,0.8)'
          : 'rgba(255,255,255,0.8), rgba(255,255,255,0.8)'
      }), url(${imgBg})`,
    }"
  >
    <!-- Cursor -->
    <bolt v-if="store.state.cursor" />
    <!-- Noise -->
    <div
      class="noise"
      :class="{ 'hide-overlay': !store.state.overlay }"
      :style="{
        backgroundImage: `url(${imgNoise})`,
      }"
    ></div>
    <!-- Preloader -->
    <Preloader
      :class="{
        hide: store.state.preload,
      }"
      v-if="
        !down &&
        !store.state.preloaded &&
        (route.path === '/' || route.path === '/featured')
      "
    />
    <!-- Global Nav Component -->
    <navigation v-if="!down && !landscape" />
    <!-- Pages -->
    <transition :name="transitionName">
      <router-view
        :preloaded="store.state.preloaded"
        v-if="!down && !landscape"
      />
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
const down = store.state.down;
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

const showCard = (e) => {
  landscape.value = isMobileDevice() && isMobileSize() && e.matches;
};

onMounted(() => {
  setTimeout(() => {
    store.state.preload = true;
    setTimeout(() => {
      store.state.preloaded = true;
    }, 1000);
  }, 2000);

  // intial orientation check
  let orientation = window.matchMedia("(orientation: landscape)");
  landscape.value = isMobileDevice() && isMobileSize() && orientation.matches;

  // set landscape state on orientation change
  orientation.addEventListener("change", showCard);
});

onUnmounted(() => {
  window.removeEventListener("change", showCard);
});
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.custom-cursor {
  cursor: none;
}

.palm {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: $base;
}

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

.hide-overlay {
  visibility: hidden;
}
</style>
