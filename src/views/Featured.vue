<template>
  <div
    class="featured"
    :class="{ [`featured-${store.state.theme}`]: store.state.theme }"
  >
    <div
      class="section"
      :class="{
        move: down,
        [`section-${store.state.theme}`]: store.state.theme,
      }"
    ></div>
    <div class="featured-wrapper">
      <section class="featured-info hide" :class="{ show: show }">
        <div class="content">
          <h1>{{ currentProject.name }}</h1>
          <p v-if="currentProject.type">
            {{ currentProject.type }}
          </p>
          <a
            area-label="Visit featured website"
            :class="{
              [`project-link-${store.state.theme}`]: store.state.theme,
            }"
            :href="currentProject.link"
            target="_blank"
            rel="noopener noreferrer"
            v-if="currentProject.link"
            >Visit Site</a
          >
          <router-link
            v-if="currentProject.caseStudyRoute"
            :to="currentProject.caseStudyRoute"
            class="case-study-link"
            :class="{
              [`case-study-link-${store.state.theme}`]: store.state.theme,
            }"
          >
            Read Case Study
          </router-link>
          <div
            v-if="currentProject.shortDescription"
            class="description description-short"
            :class="{
              [`description-${store.state.theme}`]: store.state.theme,
            }"
          >
            <p
              class="description-text"
              v-html="currentProject.shortDescription"
            ></p>
          </div>
          <div
            v-if="currentProject.name"
            class="description description-full"
            :class="{
              'show-top': scrollTop,
              'show-bottom': scrollBottom,
              [`description-${store.state.theme}`]: store.state.theme,
            }"
          >
            <p
              class="description-text"
              ref="block"
              v-html="currentProject.description"
            ></p>
          </div>
        </div>
      </section>

      <div class="featured-slider-wrap">
        <Slider
          ref="slider"
          class="featured-slider hide"
          :class="{ show: show }"
          :projectIdx="projectIdx"
          :slides="currentProject.slides"
        />
        <button
          area-label="Navigate to next project"
          class="next-project hide"
          :class="{
            show: down,
            [`next-project-${store.state.theme}`]: store.state.theme,
          }"
          @click="next()"
        >
          Next Project
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import Slider from "@/components/slider.vue";
import { projects } from "@/data/projects.js";

const store = useStore();

const block = ref(null);
const slider = ref(null);
const down = ref(false);
const show = ref(false);
const currentProject = ref(projects[0]);
const projectIdx = ref(0);
const scrollTop = ref(false);
const scrollBottom = ref(true);

const handleScroll = ({ target }) => {
  scrollTop.value = target.scrollTop > 1;
  scrollBottom.value =
    target.scrollTop !== target.scrollHeight - target.clientHeight;
};

onMounted(() => {
  down.value = true;

  setTimeout(() => {
    show.value = true;
  }, 200);

  if (block.value) {
    block.value.addEventListener("scroll", handleScroll);
  }
});

onBeforeUnmount(() => {
  if (block.value) {
    block.value.removeEventListener("scroll", handleScroll);
  }
});

const length = computed(() => projects.length - 1);

const preloadImages = (imageUrls) => {
  const promises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject(url);
      img.src = url;
    });
  });
  return Promise.all(promises);
};

const next = async () => {
  show.value = false;

  const nextProjectIdx = (projectIdx.value + 1) % (length.value + 1);
  const nextProject = projects[nextProjectIdx];

  try {
    await preloadImages(nextProject.slides);

    projectIdx.value = nextProjectIdx;
    currentProject.value = nextProject;
    show.value = true;
  } catch (error) {
    console.error("Failed to load images:", error);
    setTimeout(() => {
      projectIdx.value = nextProjectIdx;
      currentProject.value = nextProject;
      show.value = true;
    }, 500);
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.featured {
  color: $white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  &-dark {
    color: $white;
  }

  &-light {
    color: $black;
  }

  &-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .next-project {
    position: relative;
    width: fit-content;
    padding: 0.5rem 1rem;
    margin: 0 auto 1rem;
    font-size: 0.75rem;
    background: transparent;
    flex-shrink: 0;

    @media #{$small} {
      margin: 0 2rem 1rem auto;
      font-size: 0.85rem;
    }

    &-dark {
      color: $gold;
      border: 1px solid $gold;
    }

    &-light {
      color: $black;
      border: 1px solid $black;
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
      -webkit-text-stroke: 1px $turquiose;
    }
  }

  &-slider-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media #{$small} {
      width: 65%;
      height: 100%;
      right: 0;
      left: auto;
      align-items: stretch;
    }
  }

  &-info {
    width: 100%;
    height: 50%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;

    @media #{$small} {
      width: 35%;
      height: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-bottom: $pad * 2;
      width: 100%;
      height: 100%;

      h1 {
        padding: 2rem 2rem 1rem;

        @media #{$small} {
          padding: 0 2rem 1rem;
        }
      }

      p {
        padding: 0 2rem;
        margin-bottom: 1rem;
      }

      a,
      .case-study-link {
        padding: 0 2rem;
        margin-bottom: 1rem;
        font-size: 12px;
        border: 0 !important;
        text-decoration: underline;
        display: inline-block;
      }

      .case-study-link {
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.02em;

        &-dark {
          color: $gold;
        }

        &-light {
          color: $black;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      .description-short {
        display: block;
        margin-bottom: 0.5rem;

        .description-text {
          padding: 0 2rem;
          margin: 0;
          font-size: 0.7rem;
          line-height: 1.45;
        }

        @media #{$small} {
          display: none;
        }
      }

      .description-full {
        display: none;

        @media #{$small} {
          display: block;
          overflow: hidden;
          position: relative;
          height: 50%;
          margin-bottom: 3rem;

          .description-text {
            overflow: auto;
            height: 100%;
            margin: 0;
          }
        }

        &:before,
        &:after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 1rem;
          opacity: 0;
        }

        &:before {
          top: 0;
          background: linear-gradient(to bottom, $black, rgba(0, 0, 0, 0) 100%);
        }

        &:after {
          bottom: 0;
          background: linear-gradient(to top, $black, rgba(0, 0, 0, 0) 100%);
        }

        &-light {
          &:before {
            top: 0;
            background: linear-gradient(
              to bottom,
              $white,
              rgba(0, 0, 0, 0) 100%
            );
          }

          &:after {
            bottom: 0;
            background: linear-gradient(to top, $white, rgba(0, 0, 0, 0) 100%);
          }
        }
      }

      .show-top:before {
        opacity: 1;
      }

      .show-bottom:after {
        opacity: 1;
      }

      .project-link {
        padding: 0.5rem 1rem;

        &-dark {
          border: 1px solid $gold;
          color: $gold;
        }

        &-light {
          border: 1px solid $black;
          color: $black;
        }
      }
    }
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50%;
    background: $black;
    transform: translateY(-100%);
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.8);

    @media #{$small} {
      width: 35%;
      height: 100%;
      transform: translateX(-100%);
    }

    &-dark {
      background: $black;
    }

    &-light {
      background: $white;
    }
  }

  &-slider {
    flex: 1;
    width: 100% !important;
    min-height: 0;
    height: 100% !important;
    position: relative !important;
    bottom: auto;
    left: auto;
    right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-delay: 0.5s;
  }

  .move {
    transform: translateY(0);
    transition: all ease 0.5s;

    @media #{$small} {
      transform: translateX(0);
      transition: all ease 0.5s;
    }
  }
}
</style>
