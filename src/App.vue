<template>
  <div
    id="app"
    class="palm"
    :style="{
      'background-image':
        'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' +
        require('@/assets/images/palm.jpg') +
        ')',
      cursor: 'url(' + require('@/assets/images/cursor.svg') + ')',
    }"
  >
    <!-- Cursor -->
    <bolt />
    <!-- Noise -->
    <div
      class="noise"
      :style="{
        'background-image': 'url(' + require('@/assets/images/film.gif') + ')',
      }"
    ></div>
    <!-- preloader -->
    <preloader
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

<script>
import navigation from "@/components/navigation.vue";
import maintenance from "@/components/maintenance.vue";
import preloader from "@/components/preloader.vue";
import bolt from "@/components/bolt.vue";
import card from "@/components/card.vue";
import utils from "@/utils/index.js";

const DEFAULT_TRANSITION = "fade";

export default {
  components: {
    preloader,
    bolt,
    navigation,
    maintenance,
    card,
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },

  mounted() {
    setTimeout(() => {
      this.hide = true;
      setTimeout(() => {
        this.remove = true;
        this.$store.state.preloaded = true;
      }, 500);
    }, 2500);

    // intial orientation check
    if (
      (utils.isMobileDevice() &&
        utils.isMobileSize() &&
        window.orientation === 90) ||
      window.orientation === -90
    ) {
      this.landscape = true;
    }

    // set landscape state on orientation change
    let self = this;
    window.addEventListener("orientationchange", function () {
      if (
        (Utils.isMobileDevice() &&
          Utils.isMobileSize() &&
          window.orientation === 90) ||
        window.orientation === -90
      ) {
        self.landscape = true;
      } else {
        self.landscape = false;
      }
    });
  },

  data() {
    return {
      // current page reference
      currentPage: this.$router.currentRoute.name,
      // reference state from store
      preload: this.$store.state.preloaded,
      down: this.$store.state.down,
      hide: false,
      remove: false,
      landscape: false,
      transitionName: DEFAULT_TRANSITION,
    };
  },

  watch: {
    $route(to, from) {
      this.currentPage = to.name;
    },
  },
};
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
