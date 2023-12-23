<template>
  <div id="menu" v-if="!down">
    <router-link @click.native="pageChange" to="/" :class="{ hide: open }">
      <img class="home-button" src="@/assets/images/tail-portfolio.png" />
    </router-link>

    <button class="toggle" id="toggle" @click="toggleNav">
      <div class="bar" :class="{ rotate: unlock }"></div>
      <div class="bar" :class="{ rotate: unlock }"></div>
    </button>

    <div class="menu-wrap" :class="{ visible: unlock, show: open }">
      <router-link @click.native="pageChange" class="item" to="/"
        >Home</router-link
      >
      <router-link @click.native="pageChange" class="item" to="/featured"
        >Work</router-link
      >
      <!-- <router-link @click.native="pageChange" class="item" to="/projects">Projects</router-link> -->
      <!-- <router-link @click.native="pageChange" class="item" to="/about">About</router-link> -->
      <router-link @click.native="pageChange" class="item" to="/contact"
        >Contact</router-link
      >

      <ul class="social">
        <li>
          <a href="https://github.com/19TT94">
            <font-awesome-icon :icon="['fab', 'github-square']" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/taylor-tobin/">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/19tt94/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      // reference state from store
      down: this.$store.state.down,
      unlock: false,
      open: false,
    };
  },

  methods: {
    /* toggles events for opening and closing the nav */
    toggleNav() {
      this.unlock = !this.unlock;
      setTimeout(() => {
        this.open = !this.open;
      }, 200);
    },
    /* handles route change event, resets data */
    pageChange() {
      this.unlock = false;
      this.open = false;
    },
  },
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
    z-index: 99;

    @media #{$small} {
      max-width: 45px;
    }
  }

  .toggle {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    margin: 2rem 2.4rem;
    z-index: 99;

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
