<template>
  <div class="page home frame">
    <h1 class="heading" :class="{ show: loaded }">Taylor Tobin</h1>
    <h3 class="heading-sub" :class="{ show: loaded }">Developer</h3>
    <router-link class="item view-work" to="/featured">View Work</router-link>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      expand: false,
      show: false,
    };
  },

  computed: {
    loaded() {
      return this.$store.state.preloaded;
    },
  },

  methods: {
    start() {
      this.expand = true;
      // animate button before transition
      setTimeout(() => {
        this.$router.push({ path: "featured" });
        this.transition = false;
      }, 2000);
    },
    go() {
      // animate button before transition
      setTimeout(() => {
        this.$router.push({ path: "featured" });
        this.transition = false;
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .heading {
    opacity: 0;
    color: $gold;
    padding-top: 2rem;
    font-size: 2.5rem;

    // @media #{$small} {
    //   font-size: 5rem;
    // }

    &-sub {
      opacity: 0;
      font-size: 2rem;
      color: $white;
    }
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
