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

import signin from "@/assets/images/projects/hero-builder/1-signin.png";
import facilitiesDashboard from "@/assets/images/projects/hero-builder/2-facilities-dashboard.png";
import facilityDashboardStats from "@/assets/images/projects/hero-builder/3-facility-dashboard-stats.png";
import facilityDashboardRecords from "@/assets/images/projects/hero-builder/4-facility-dashboard-records.png";
import facilityDashboardRecord from "@/assets/images/projects/hero-builder/5-facility-dashboard-record.png";
import facilityDashboardChecksheetEditor from "@/assets/images/projects/hero-builder/6-facility-dashboard-checksheet-editor.png";
import checksheetBuilder from "@/assets/images/projects/hero-builder/7-checksheet-builder.png";
import facilityBuilderPreview from "@/assets/images/projects/hero-builder/8-faciltity-builder-preview.png";
import tasks from "@/assets/images/projects/hero-builder/9-tasks.png";
import checksheetRecord from "@/assets/images/projects/hero-builder/10-checksheet-record.png";
import calendar from "@/assets/images/projects/hero-builder/11-calendar.png";
import NR1 from "@/assets/images/projects/new-regency/new-regency-1.png";
import NR2 from "@/assets/images/projects/new-regency/new-regency-2.png";
import NR3 from "@/assets/images/projects/new-regency/new-regency-3.png";
import NR4 from "@/assets/images/projects/new-regency/new-regency-4.png";
import PM1 from "@/assets/images/projects/paramount/paramount1.png";
import PM2 from "@/assets/images/projects/paramount/paramount2.png";
import PM3 from "@/assets/images/projects/paramount/paramount3.png";
import PM4 from "@/assets/images/projects/paramount/paramount4.png";
import PM5 from "@/assets/images/projects/paramount/paramount5.png";
import DW1 from "@/assets/images/projects/dreamworks/dreamworks-1.png";
import DW2 from "@/assets/images/projects/dreamworks/dreamworks-2.png";
import DW3 from "@/assets/images/projects/dreamworks/dreamworks-3.png";
import DW4 from "@/assets/images/projects/dreamworks/dreamworks-4.png";
import DW5 from "@/assets/images/projects/dreamworks/dreamworks-5.png";
import RH1 from "@/assets/images/projects/replace-hate/replace-1.jpg";
import RH2 from "@/assets/images/projects/replace-hate/replace-2.jpg";
import RH3 from "@/assets/images/projects/replace-hate/replace-3.jpg";
import RH4 from "@/assets/images/projects/replace-hate/replace-4.png";
import PA1 from "@/assets/images/projects/pxl-agency/pxl-1.png";
import PA2 from "@/assets/images/projects/pxl-agency/pxl-2.png";
import PA3 from "@/assets/images/projects/pxl-agency/pxl-3.png";
import PA4 from "@/assets/images/projects/pxl-agency/pxl-4.png";
import WW1 from "@/assets/images/projects/wiere-weddings/ww-1.png";
import WW2 from "@/assets/images/projects/wiere-weddings/ww-2.png";
import WW3 from "@/assets/images/projects/wiere-weddings/ww-3.png";
import TT1 from "@/assets/images/projects/ted/ted-1.png";
import TT2 from "@/assets/images/projects/ted/ted-2.png";
import TT3 from "@/assets/images/projects/ted/ted-3.png";

const projects = [
  {
    name: "Hero Builder",
    link: "https://hero-services.com",
    caseStudyRoute: "/featured/hero-builder",
    shortDescription:
      "Led design and development of Hero Builder™, an ops platform for 100+ water/wastewater facilities with web, mobile, and SCADA integration.",
    description:
      "I designed, architected, and led development of <strong>Hero Builder™</strong>, an operations and maintenance platform for water and wastewater facilities under Hero Services. The stack uses React, Flask, PostgreSQL, and Redis, with a React Native app for field operators and SCADA integration via Ewon Flexy devices. The platform supports compliance management across 100+ facilities and 500+ users in the office and in the field.",
    type: "React, Flask",
    slides: [
      signin,
      facilitiesDashboard,
      facilityDashboardStats,
      facilityDashboardRecords,
      facilityDashboardRecord,
      facilityDashboardChecksheetEditor,
      checksheetBuilder,
      facilityBuilderPreview,
      tasks,
      checksheetRecord,
      calendar,
    ],
  },
  {
    name: "New Regency",
    link: "http://newregency.com",
    shortDescription:
      "Led relaunch of newregency.com with visual upgrades, internationalization, and custom analytics pages for regional teams.",
    description:
      'I lead development on the relaunch and revamp of <a href="http://newregency.com">newregency.com</a>. It involved some visual upgrades, new content, and new functionality for internationalization. New Regency was looking for a way to promote their new international team. I was in charge of implementing a solution that allowed for custom pages and analytics for their international teams. In the cms international team members could generate pages for their clients with specific movies for their region.',
    type: "Laravel",
    slides: [NR1, NR2, NR3, NR4],
  },
  {
    name: "Paramount",
    shortDescription:
      "Led frontend on Paramount's movie archive site with responsive sort/filter, Laravel API, and Vue frontend.",
    description:
      "I led frontend Development on Parmount's new website. This site leverages a large archive of movies with a user friendly and responsive sort and filter menu. I also assisted in api and database design/development, utilizing a Laravel (PHP) backend and a Vue (JS) frontend.",
    type: "Vue/Laravel",
    link: "https://paramountmovies.com",
    slides: [PM1, PM2, PM3, PM4, PM5],
  },
  {
    name: "Dreamworks Animation",
    link: "https://dreamworks.com",
    shortDescription:
      "Built custom Swiper sliders, fullscreen video backgrounds, and promotional movie pages for Dreamworks Animation.",
    description:
      "I worked the team that built Dreamworks Animation. I helped to build a custom Swiper.io slider with a responsive fullscreen video background, full screen video model for each featured movie, and custom slide transitions. I also contributed to the promotional movie pages and contact forms throughout the site.",
    type: "Vue/Laravel",
    slides: [DW1, DW2, DW3, DW4, DW5],
  },
  {
    name: "PXL Agency",
    link: "https://pxlagency.com",
    shortDescription:
      "Developed pxlagency.com during the brand relaunch and led ongoing maintenance as primary developer.",
    description:
      'Assisted in the development of <a href="https://www.pxlagency.com">pxlagency.com</a> during the brand relaunch at PXL Agency. Then was the lead developer on maintenance updates.',
    type: "Ember",
    slides: [PA1, PA2, PA3, PA4],
  },
  {
    name: "ReplaceHate.com",
    link: "https://pxlagency.com/our-work/replace-hate",
    shortDescription:
      "Built Fox Movies' #ReplaceHate campaign site for fast, easy generation of shareable Instagram posters.",
    description:
      'Frontend developement on <a href="https://www.instagram.com/explore/tags/replacehate/">#ReplaceHate</a> social campaign site. This site was built for Fox Movies and allows users to generate #replacehate posters to share on social media. This promotion for the movie lived mostly on Instagram and was a fun way for fans to get involved. The biggest challenge was trying to make the process of creating the share assets as easy in fast as possible for the user. Despite the changing requirements from the client and the challenges of creating the assets in a web app, the app was a success.',
    type: "Ember",
    slides: [RH1, RH2, RH3, RH4],
  },
  {
    name: "Wiere Weddings",
    link: "https://wiereweddings.com",
    shortDescription:
      "Designed and developed a portfolio site with pricing and Honeybook appointment booking integration.",
    description:
      "I designed and developed a new website for Wiere Weddings. It showcases recent work, pricing and integrates with Honeybook to obtain new appointments.",
    type: "Vue (Typescript), Wordpress (PHP)",
    slides: [WW1, WW2, WW3],
  },
  {
    name: "Ted Tobin's Portfolio",
    link: "https://tedtobin.com",
    shortDescription:
      "Built a writer-focused portfolio where copy is the hero, with a vanilla JS slider inspired by word scramble demos.",
    description:
      "This project was a portfolio website for Creative Director, Consultant, and Copy Writer Ted Tobin. During his transition to freelance work he needed a simple site that would showcase his skills and experience as a writer. In order to do this I designed and built a site where his words are the focus. The slider is built with vanilla js and inspired by word scramble code pens.",
    type: "Vue (JS)",
    slides: [TT1, TT2, TT3],
  },
];

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
