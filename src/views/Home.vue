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
      Software Engineer
    </h3>

    <div class="left">
      <p class="status detail">
        <font-awesome-icon id="status-icon" :icon="['fas', 'circle']" />
        Open to work
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
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import dayjs from "dayjs";

const store = useStore();

const toggle = () => store.commit("toggleTheme");

const loaded = () => store.state.preloaded;

const localTime = () => dayjs.utc().tz("US/Pacific").format("h:mm A z");
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

  .heading {
    opacity: 0;
    color: $gold;
    padding-top: 2rem;
    font-size: 2.5rem;

    @media #{$small} {
      font-size: 5rem;
    }

    &-dark {
      color: $gold;
    }

    &-light {
      color: $black;
    }

    &-sub {
      opacity: 0;
      font-size: 1.5rem;

      &-dark {
        color: $white;
      }

      &-light {
        color: $black;
      }
    }
  }

  .left {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: right;
    padding: $pad;
  }

  .right {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: $pad;
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: end;
    color: $white;

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
