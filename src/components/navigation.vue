<template>
  <div id="menu" v-if="!down">
    <router-link @click.native="pageChange" to="/" :class="{ hide: open }">
      <img
        class="home-button"
        :class="{ hide: store.state.theme === 'light' }"
        src="@/assets/images/tail-portfolio.png"
        alt="Pilot (Taylor Tobin Portfolio Logo)"
        tabindex="0"
      />

      <img
        class="home-button"
        :class="{ hide: store.state.theme === 'dark' }"
        src="@/assets/images/tail-bw.png"
        alt="Pilot (Taylor Tobin Portfolio Logo)"
        tabindex="0"
      />
    </router-link>

    <button
      id="hamburger"
      role="button"
      tabindex="0"
      area-label="Open Menu"
      @click="toggleNav"
    >
      <div
        class="bar"
        :class="{
          rotate: unlock,
          [`bar-${store.state.theme}`]: store.state.theme,
        }"
      ></div>
      <div
        class="bar"
        :class="{
          rotate: unlock,
          [`bar-${store.state.theme}`]: store.state.theme,
        }"
      ></div>
    </button>

    <div class="menu-wrap" :class="{ visible: unlock, show: open }">
      <router-link
        @click.native="pageChange"
        class="item"
        area-label="Navigate to Homepage"
        to="/"
        >Home</router-link
      >
      <router-link
        @click.native="pageChange"
        class="item"
        area-label="Navigate to Featured Work"
        to="/featured"
        >Work</router-link
      >
      <!-- <router-link @click.native="pageChange" class="item" to="/projects">Projects</router-link> -->
      <!-- <router-link @click.native="pageChange" class="item" to="/about">About</router-link> -->
      <router-link
        @click.native="pageChange"
        area-label="Navigate to Contact"
        class="item"
        to="/contact"
        >Contact</router-link
      >

      <ul class="social">
        <li>
          <a
            area-label="View my work on Github"
            href="https://github.com/19TT94"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github-square']" />
          </a>
        </li>
        <li>
          <a
            area-label="View my profile on LinkedIn"
            href="https://www.linkedin.com/in/taylor-tobin/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a
            area-label="View my profile on Instagram"
            href="https://www.instagram.com/19tt94/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
      </ul>
      <div id="settings">
        <button
          type="button"
          :title="store.state.cursor ? 'Disable Cursor' : 'Enable Cursor'"
          @click="disableCursor"
        >
          {{ store.state.cursor ? "Disable" : "Enable" }} Cursor
        </button>
        <button
          type="button"
          :title="store.state.overlay ? 'Disable Overlay' : 'Enable Overlay'"
          @click="disableOverlay"
        >
          {{ store.state.overlay ? "Disable" : "Enable" }} Overlay
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const down = ref(null);
const unlock = ref(false);
const open = ref(false);

const store = useStore();

onMounted(() => {
  down.value = store.state.down;
});

const toggleNav = () => {
  unlock.value = !unlock.value;
  setTimeout(() => {
    open.value = !open.value;
  }, 200);
};

const pageChange = () => {
  unlock.value = false;
  open.value = false;
};

const disableCursor = () => {
  store.state.cursor = !store.state.cursor;
};

const disableOverlay = () => {
  store.state.overlay = !store.state.overlay;
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

#menu {
  .home-button {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 35px;
    margin: 2rem 2.4rem;
    z-index: $nav;

    @media #{$small} {
      max-width: 45px;
    }

    &:focus {
      img {
        box-shadow: 0 0 10px 2px $turquiose;
        outline: hidden;
      }
    }

    .hide {
      opacity: 0;
    }
  }

  #hamburger {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    margin: 2rem 2.4rem;
    z-index: $nav;

    &:focus {
      outline: hidden;
      box-shadow: none;

      .bar {
        box-shadow: 0 0 10px 2px $turquiose;
      }
    }

    .bar {
      width: 100%;
      height: 3px;
      background: $gold;
      margin-top: 6px;
      transition: all ease-in-out 0.5s;

      &-light {
        background: $black;
      }
    }

    .rotate {
      background: $black;

      &:first-child {
        transform: rotate(45deg) translateX(6px);
      }

      &:last-child {
        transform: rotate(-405deg) translateX(6px);
      }
    }
  }

  .menu-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $white;
    opacity: 0;
    visibility: hidden;
    z-index: $back;
    transition: all 0.5s ease;

    .item {
      font-family: $title-font;
      font-weight: 600;
      padding: 1rem 0;
      color: $black;
      font-size: 2rem;
    }
  }

  .social {
    display: inline-flex;

    li {
      padding: 2rem;

      .svg-inline--fa {
        color: $black;
      }
    }
  }

  .visible {
    visibility: visible;
    z-index: $menu;
  }

  .show {
    opacity: 1;
  }

  #settings {
    display: flex;
    gap: $pad;

    button {
      background: $black;
      color: $white;
      padding: $pad;
      font-family: $body-font;
      font-size: 0.75rem;
    }
  }
}
</style>
