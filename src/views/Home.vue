<template>
  <div class="page home frame">
    <div class="toggle-wrapper">
      <button
        type="button"
        :title="{ [`Toggle ${store.state.theme} mode`]: store.state.theme }"
        class="toggle"
        :class="{ [store.state.theme]: store.state.theme }"
        @click="toggle"
      >
        <font-awesome-icon
          :class="{ active: store.state.theme === 'light' }"
          :icon="['fas', 'sun']"
        />
        <font-awesome-icon
          :class="{ active: store.state.theme === 'dark' }"
          :icon="['fas', 'moon']"
        />
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
        <font-awesome-icon id="location-icon" :icon="['fas', 'cog']" />
        Settings
      </p>
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
        <font-awesome-icon id="location-icon" :icon="['fas', 'location']" />
        Grover Beach CA
      </p>
    </div>

    <!-- <router-link class="item view-work" to="/featured">View Work</router-link> -->
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
    border: $border solid $gold;
    border-radius: 20px;
    padding: 2px 0;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    .active {
      border-radius: 50%;
      padding: 5px;
      background: $gold;
    }

    svg {
      color: $gold;
      width: 15px;
      height: 15px;
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
  }

  #status-icon {
    color: $green;
    width: 5px;
    height: 5px;
  }

  #location-icon {
    color: $gold;
    width: 15px;
    height: 15px;
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
