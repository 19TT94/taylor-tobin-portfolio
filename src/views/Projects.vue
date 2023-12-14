<template>
  <div class="projects">
    <div class="bar"></div>
    <div class="grid">
      <div class="block" v-for="project in projects" :key="project.id">
        <a href="">{{ project.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      projects: [
        {
          name: "PXL Website",
          link: "https://pxlagency.com",
          type: "Ember/Laravel",
          image: "",
        },
        {
          name: "Selfie Booth",
          type: "Ember/Cordova/Laravel",
          image: "",
        },
        {
          name: "Universal Platform",
          link: "https://universalpictures.com",
          type: "Vue/Laravel",
          image: "",
        },
        {
          name: "Fathom Events",
          link: "https://dreamworks.com",
          type: "Ember/Laravel",
          image: "",
        },
        {
          name: "Global Road",
          link: "https://dreamworks.com",
          type: "Vue/Laravel",
          image: "",
        },
        {
          name: "PXL Platform",
          type: "Ember",
          image: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.projects {
  background: transparent;
  color: $white;
  width: 100%;
  height: 100%;

  .bar {
    width: 100%;
    height: 80px;
    background: $black;
    z-index: $back;
  }

  .grid {
    width: 100%;
    height: calc(100% - 80px);
    background: slategray;
    display: flex;
    flex-wrap: wrap;

    .block {
      position: relative;
      width: 50%;
      height: 33.33%;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border: 1px solid $gold;
      }
    }
  }
}
</style>
