<template>
  <section class="wrapper" ref="theater" :class="{ loading: !setupFinished }">
    <ul class="slider">
      <li
        class="slide"
        v-for="(item, index) in slides"
        :class="[item.name, { active: currentIndex === index }]"
        :key="`x-${index}`"
      >
        <div class="content">
          <img :src="item" />
          <div class="swipe" v-touch:swipe="onSwipe"></div>
        </div>
      </li>
    </ul>

    <!-- optional stuff -->
    <div class="button backward" v-if="navigation">
      <button class="next" @click="backward">←</button>
    </div>

    <div class="button forward" v-if="navigation">
      <button class="next" @click="forward">→</button>
    </div>

    <div class="pagination" v-if="dots">
      <ul class="item-list">
        <li
          class="item"
          v-for="(item, index) in slides"
          :class="[item.slug, { active: currentIndex === index }]"
          :key="`y-${index}`"
        >
          <button @click="setItem(index)">
            <span v-if="dotText">
              {{ item.title }}
            </span>
            <span else> &times; </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

import { isMobileDevice, isMobileSize } from "@/utils/index.js";

const props = defineProps(["slides", "projectIdx"]);

const currentIndex = ref(0);
const setupFinished = ref(false);
const navigation = ref(true);
const dots = ref(true);
const dotText = ref(false);

onMounted(() => {
  currentIndex.value = 0;
  setupFinished.value = true;
});

watch(
  () => props.projectIdx,
  () => {
    currentIndex.value = 0;
  }
);

const itemsLength = computed(() => [...props.slides].length - 1);

const previousIndex = computed(() => {
  return currentIndex.value - 1 < 0
    ? itemsLength.value
    : currentIndex.value - 1;
});

const nextIndex = computed(() =>
  currentIndex.value + 1 > itemsLength.value ? 0 : currentIndex.value + 1
);

const setItem = (index) => {
  currentIndex.value = index;
};

const forward = () => {
  currentIndex.value = nextIndex.value;
};

const backward = () => {
  currentIndex.value = previousIndex.value;
};

const onSwipe = (direction) => {
  // if mobile device
  if (isMobileSize() && isMobileDevice()) {
    if (direction === "left") currentIndex.value = nextIndex.value;
    if (direction === "right") currentIndex.value = previousIndex.value;
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .slide {
    @include absolute-cover();
    pointer-events: none; // stop the layer from interaction
    opacity: 0; // opacity - to visually hide it ^ (it can't be touched)
    transition: 0.5s ease; // general transition for now
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      opacity: 0; // also hide this -
      transform: translate(0, 10px);
      transition: 0.5s; // animation duration
      margin: 0 auto;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        max-width: 70%;
        max-height: 60%;
        margin: 0 auto;
        box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.8);

        @media #{$small} {
          max-width: 80%;
        }
      }
    }

    &.active {
      // when the frame that is chosen appears...
      opacity: 1;
      z-index: $base;
      pointer-events: initial; // let users interact with buttons etc.
      .content {
        opacity: 1; // setup additional CSS animations
        //
        // delays are brittle compared to gsap -
        // but also fun / and sometimes do the trick
        transition-delay: 0.5s;
        transform: translate(0, 0); // set it back to 'normal' layout
      }
    }
  }

  .pagination {
    z-index: $base;

    span {
      padding: 1.5rem;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);

      @media #{$small} {
        font-size: 2rem;
      }
    }
  }

  .button,
  .menu {
    // menu/buttons etc. - rendering could be based on an optional parameter
    // - but the style rules to be written and ready
    opacity: 1;
    transition: opacity 2s;
    transition-delay: 1s;
  }

  .button {
    position: absolute;
    top: 50%;
    border: 0;
    transform: translate(0, -50%); // (half it's own height up)

    .next {
      color: $gold;
      padding: 1.5rem 1rem;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);

      @media #{$small} {
        font-size: 2rem;
      }
    }

    &.forward {
      right: 0;
      padding: 0;
      display: none;

      @media #{$small} {
        display: block;
      }
    }

    &.backward {
      left: 0;
      padding: 0;
      display: none;

      @media #{$small} {
        display: block;
      }
    }
  }

  .pagination {
    position: absolute;
    bottom: 1rem;
    width: 100%;

    @media #{$small} {
      bottom: 4rem;
    }

    .item-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .item {
      display: block;
      width: fit-content;

      button {
        color: $white;
      }

      &.active {
        button {
          color: $gold;
        }
      }
    }
  }

  &.loading {
    .button,
    .menu {
      // start these hidden, so they can fade in with some style
      opacity: 0;
      transition: 2s;
    }
  }
}

.swipe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $front;
}
</style>
