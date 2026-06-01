<template>
  <div class="projects">
    <div class="bar"></div>
    <div class="grid">
      <div class="block" v-for="project in projects" :key="project.id">
        <router-link
          v-if="project.caseStudyRoute"
          class="project-link"
          :to="project.caseStudyRoute"
        >
          <span class="project-name">{{ project.name }}</span>
          <span class="project-type" v-if="project.type">{{ project.type }}</span>
        </router-link>
        <a
          v-else-if="project.link"
          class="project-link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="project-name">{{ project.name }}</span>
          <span class="project-type" v-if="project.type">{{ project.type }}</span>
        </a>
        <div v-else class="project-link">
          <span class="project-name">{{ project.name }}</span>
          <span class="project-type" v-if="project.type">{{ project.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from "@/data/projects.js";
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
      padding: 1rem;
      box-sizing: border-box;

      .project-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        height: 100%;
        text-align: center;
        text-decoration: none;
        color: $white;
        border: 1px solid $gold;
        padding: 1rem;
        box-sizing: border-box;
        transition: background 0.3s ease;

        &:hover {
          background: rgba($black, 0.35);
        }
      }

      .project-name {
        font-family: $title-font;
        font-size: 1rem;
        line-height: 1.2;
      }

      .project-type {
        font-size: 0.75rem;
        line-height: 1.3;
        opacity: 0.85;
      }

      img {
        border: 1px solid $gold;
      }
    }
  }
}
</style>
