<template>
  <div id="menu" v-if="!down">
    <router-link @click.native="pageChange" to="/" :class="{ hide: open }">
      <img
        tabindex="0"
        class="home-button"
        src="@/assets/images/tail-portfolio.png"
        alt="Pilot (Taylor Tobin Portfolio Logo)"
      />
    </router-link>

    <button
      id="hamburger"
      role="button"
      tabindex="0"
      title="Menu"
      @click="toggleNav"
    >
      <div class="bar" :class="{ rotate: unlock }"></div>
      <div class="bar" :class="{ rotate: unlock }"></div>
    </button>

    <div class="menu-wrap" :class="{ visible: unlock, show: open }">
      <router-link
        @click.native="pageChange"
        class="item"
        name="Navigate to Homepage"
        to="/"
        >Home</router-link
      >
      <router-link
        @click.native="pageChange"
        class="item"
        name="Navigate to Featured Work"
        to="/featured"
        >Work</router-link
      >
      <!-- <router-link @click.native="pageChange" class="item" to="/projects">Projects</router-link> -->
      <!-- <router-link @click.native="pageChange" class="item" to="/about">About</router-link> -->
      <router-link
        @click.native="pageChange"
        name="Navigate to Contact"
        class="item"
        to="/contact"
        >Contact</router-link
      >

      <ul class="social">
        <li>
          <a name="View my work on Github" href="https://github.com/19TT94">
            <font-awesome-icon :icon="['fab', 'github-square']" />
          </a>
        </li>
        <li>
          <a
            name="View my profile on LinkedIn"
            href="https://www.linkedin.com/in/taylor-tobin/"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a
            name="View my profile on Instagram"
            href="https://www.instagram.com/19tt94/"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
      </ul>
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
  }

  #hamburger {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    margin: 2rem 2.4rem;
    z-index: $nav;

    .bar {
      width: 100%;
      height: 3px;
      background: $gold;
      margin-top: 6px;
      transition: all ease-in-out 0.5s;
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
}
</style>
