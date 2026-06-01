<template>
  <div
    class="page home frame"
    :class="{ [`frame-${store.state.theme}`]: store.state.theme }"
  >
    <div
      class="toggle-wrapper"
      :class="{ [store.state.theme]: store.state.theme }"
    >
      <button
        type="button"
        :title="`Toggle ${store.state.theme} mode`"
        class="toggle"
        :class="{ [`toggle-${store.state.theme}`]: store.state.theme }"
        @click="toggle"
      >
        <div
          class="toggle-dot"
          :class="{
            active: store.state.theme === 'light',
            [`active-${store.state.theme}`]: store.state.theme === 'light',
            [`toggle-dot-${store.state.theme}`]: store.state.theme,
          }"
        >
          <font-awesome-icon :icon="['fas', 'sun']" />
        </div>
        <div
          class="toggle-dot"
          :class="{
            active: store.state.theme === 'dark',
            [`active-${store.state.theme}`]: store.state.theme === 'dark',
            [`toggle-dot-${store.state.theme}`]: store.state.theme,
          }"
        >
          <font-awesome-icon :icon="['fas', 'moon']" />
        </div>
      </button>
    </div>

    <div class="hero">
      <h1
        class="heading"
        :class="{
          show: loaded,
          [`heading-${store.state.theme}`]: store.state.theme,
        }"
      >
        TAYLOR TOBIN
      </h1>
      <h3
        class="heading-sub"
        :class="{
          show: loaded,
          [`heading-sub-${store.state.theme}`]: store.state.theme,
        }"
      >
        <span class="service-rotator" aria-live="polite">
          <Transition name="service-rotate" mode="out-in">
            <span :key="services[activeService]" class="service-label">
              {{ services[activeService] }}
            </span>
          </Transition>
        </span>
      </h3>
    </div>

    <div class="left">
      <p class="status detail">
        <font-awesome-icon id="status-icon" :icon="['fas', 'circle']" />
        Open to work
      </p>
      <p class="status detail">
        <font-awesome-icon id="status-icon" :icon="['fas', 'circle']" />
        Available for Freelance & Consulting
      </p>
    </div>

    <div class="right">
      <p
        class="detail"
        :class="{ [`detail-${store.state.theme}`]: store.state.theme }"
      >
        {{ localTime() }}
      </p>
      <p
        class="detail"
        :class="{ [`detail-${store.state.theme}`]: store.state.theme }"
      >
        <font-awesome-icon
          id="location-icon"
          :class="{ [`location-icon-${store.state.theme}`]: store.state.theme }"
          :icon="['fas', 'location']"
        />
        Grover Beach, CA
      </p>

      <div
        class="cta"
        :class="{
          show: loaded,
          [`cta-${store.state.theme}`]: store.state.theme,
        }"
      >
        <a
          v-if="calendlyUrl"
          class="button cta-link"
          :href="calendlyUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
        <router-link class="button cta-link" to="/contact">
          Submit an inquiry
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import dayjs from "dayjs";

const store = useStore();

const services = ["Software Engineering", "Design", "Consulting"];
const activeService = ref(0);
let serviceTimer;

const calendlyUrl = "https://calendly.com/ttobin-dev";

const toggle = () => store.commit("toggleTheme");

const loaded = () => store.state.preloaded;

const localTime = () => dayjs.utc().tz("US/Pacific").format("h:mm A z");

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  serviceTimer = setInterval(() => {
    activeService.value = (activeService.value + 1) % services.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(serviceTimer);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss"; // global styles

.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .toggle-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .toggle {
    border-radius: 20px;
    padding: 2px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-dark {
      border: $border solid $gold;
    }

    &-light {
      border: $border solid $black;
    }

    &-dot {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 5px;
      margin: 2px;

      svg {
        height: 15px;
        padding: 0;
      }

      &-light {
        svg {
          color: $black;
        }
      }
    }
  }

  .active {
    border-radius: 50%;

    &-dark {
      background: $gold;

      svg {
        color: $black;
      }
    }

    &-light {
      background: $black;

      svg {
        color: $gold;
      }
    }
  }

  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 1.5rem;
    box-sizing: border-box;
    z-index: 0;
  }

  .heading {
    opacity: 0;
    color: $gold;
    padding: 0;
    margin: 0;
    font-size: 3.25rem;
    line-height: 1;
    text-align: center;
    width: 100%;

    @media #{$small} {
      font-size: 6rem;
    }

    @media #{$medium} {
      font-size: 6.5rem;
    }

    &-dark {
      color: $gold;
    }

    &-light {
      color: $black;
    }
  }

  .heading-sub {
    opacity: 0;
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    margin-top: 0.75rem;
    perspective: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media #{$small} {
      font-size: 2.5rem;
      margin-top: 1rem;
    }

    &-dark {
      color: $white;
    }

    &-light {
      color: $black;
    }
  }

  .service-rotator {
    display: grid;
    place-items: center;
    position: relative;
    min-height: 1.2em;
    text-align: center;
  }

  .service-label {
    grid-area: 1 / 1;
    display: block;
    text-align: center;
    white-space: nowrap;
    transform-origin: center center;
  }

  .service-rotate-enter-active,
  .service-rotate-leave-active {
    grid-area: 1 / 1;
    transition: transform 0.6s ease, opacity 0.6s ease;
  }

  .service-rotate-enter-from {
    opacity: 0;
    transform: rotateX(90deg);
  }

  .service-rotate-leave-to {
    opacity: 0;
    transform: rotateX(-90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    .service-rotate-enter-active,
    .service-rotate-leave-active {
      transition: none;
    }
  }

  .cta {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: calc($pad / 2);
    margin-top: calc($pad / 2);
    width: 100%;

    @media #{$small} {
      align-items: flex-end;
      width: auto;
      margin-top: $pad;
    }

    &-dark .cta-link {
      border-color: $gold;
      color: $gold;
    }

    &-light .cta-link {
      border-color: $black;
      color: $black;
    }

    .cta-link {
      width: 100%;
      font-size: 0.7rem;
      text-align: center;
      box-sizing: border-box;

      @media #{$small} {
        width: fit-content;
        font-size: 0.85rem;
        text-align: left;
      }

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: none;
        -webkit-text-stroke: 1px $turquiose;
      }
    }
  }

  .left {
    position: static;
    width: 100%;
    margin-top: auto;
    text-align: left;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: calc($pad / 2);

    @media #{$small} {
      position: absolute;
      bottom: 0;
      left: 0;
      width: auto;
      margin-top: 0;
      text-align: right;
      padding: $pad;
    }
  }

  .right {
    position: static;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: calc($pad / 2);

    @media #{$small} {
      position: absolute;
      bottom: 0;
      right: 0;
      width: auto;
      padding: $pad;
      align-items: flex-end;
      gap: 0;
    }
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $white;
    width: fit-content;
    margin-top: calc($pad / 2);

    @media #{$small} {
      justify-content: end;
    }

    &-dark {
      color: $white;
    }

    &-light {
      color: $black;
    }
  }

  .status {
    display: flex;
    align-items: center;
    background: $black;
    padding: 0 calc($pad / 2);
    border-radius: 10px;
    font-size: 0.75rem;
  }

  #status-icon {
    color: $green;
    width: 5px;
    height: 5px;
  }

  #location-icon {
    width: 15px;
    height: 15px;
  }

  .location-icon-dark {
    color: $gold;
  }

  .location-icon-light {
    color: $black;
  }

  .view-work {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 150px;
    padding: 1rem;
    text-align: center;
  }

  .show {
    opacity: 1;
  }
}
</style>
