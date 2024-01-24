<template>
  <div class="featured">
    <div class="section" :class="{ move: down }"></div>
    <div class="featured-wrapper">
      <section class="featured-info hide" :class="{ show: show }">
        <button
          class="next-project hide"
          :class="{ show: down }"
          @click="next()"
        >
          Next
        </button>

        <div class="content">
          <h1>{{ currentProject.name }}</h1>
          <p v-if="currentProject.type">
            {{ currentProject.type }}
          </p>
          <div
            v-if="currentProject.name"
            class="description"
            :class="{ 'show-top': scrollTop, 'show-bottom': scrollBottom }"
          >
            <p
              class="description-text"
              ref="block"
              v-html="currentProject.description"
            ></p>
          </div>
          <a
            class="button project-link"
            :href="currentProject.link"
            target="_blank"
            v-if="currentProject.link"
            >Visit Site</a
          >
        </div>
        <button
          class="next-project hide"
          :class="{ show: down }"
          @click="next()"
        >
          Next Project
        </button>
      </section>

      <Slider
        ref="slider"
        class="featured-slider hide"
        :class="{ show: show }"
        :projectIdx="projectIdx"
        :slides="currentProject.slides"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Components
import Slider from "@/components/slider.vue";

// Slides
import HB1 from "@/assets/images/projects/hero-builder/hero-builder-1.png";
import HB2 from "@/assets/images/projects/hero-builder/hero-builder-2.png";
import HB3 from "@/assets/images/projects/hero-builder/hero-builder-3.png";
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
    description:
      "Hero services is a Water/Wastewater Consulting company under the umbrella of Ellison Environmental, along with Fluid Resource Management (FRM) and Cloacina. I started with FRM and developed Hero BuilderTM, which spurred the start of Hero Services as a company. Designed, architected and led a small team in the development of Hero BuilderTM. Hero Builder is an operations/maintenance management tool designed to be customized for multiple applications. Hero BuilderTM was developed using several micro-services including a React App, Flask Api, Postgres DB and a Redis instance. Worked with Cloacina to develop a proof of concept for integrating with their onsite SCADA systems using an Ewon Flexy device. This featured a Java script that called our API from the device. Designed and scaffolded an operator Mobile App to bring more usability to onsite operators using React Native Hero BuilderTM is used to: Manage and maintain compliance standards at 100+ water/ wastewater facilities operated by Fluid Resource Management in CA. Maintain compliance during the warranty period of any Cloacina Package Plant that is deployed for the first 2 years. Support ~500 users in the office and in the field.",
    type: "React, Flask",
    slides: [HB1, HB2, HB3],
  },
  {
    name: "New Regency",
    link: "http://newregency.com",
    description:
      'I lead development on the relaunch and revamp of <a href="http://newregency.com">newregency.com</a>. It involved some visual upgrades, new content, and new functionality for internationalization. New Regency was looking for a way to promote their new international team. I was in charge of implementing a solution that allowed for custom pages and analytics for their international teams. In the cms international team members could generate pages for their clients with specific movies for their region.',
    type: "Laravel",
    slides: [NR1, NR2, NR3, NR4],
  },
  {
    name: "Paramount",
    description:
      "I led frontend Development on Parmount's new website. This site leverages a large archive of movies with a user friendly and responsive sort and filter menu. I also assisted in api and database design/development, utilizing a Laravel (PHP) backend and a Vue (JS) frontend.",
    type: "Vue/Laravel",
    link: "https://paramountmovies.com",
    slides: [PM1, PM2, PM3, PM4, PM5],
  },
  {
    name: "Dreamworks Animation",
    link: "https://dreamworks.com",
    description:
      "I worked the team that built Dreamworks Animation. I helped to build a custom Swiper.io slider with a responsive fullscreen video background, full screen video model for each featured movie, and custom slide transitions. I also contributed to the promotional movie pages and contact forms throughout the site.",
    type: "Vue/Laravel",
    slides: [DW1, DW2, DW3, DW4, DW5],
  },
  {
    name: "PXL Agency",
    link: "https://pxlagency.com",
    description:
      'Assisted in the development of <a href="https://www.pxlagency.com">pxlagency.com</a> during the brand relaunch at PXL Agency. Then was the lead developer on maintenance updates.',
    type: "Ember",
    slides: [PA1, PA2, PA3, PA4],
  },

  {
    name: "ReplaceHate.com",
    link: "https://pxlagency.com/our-work/replace-hate",
    description:
      'Frontend developement on <a href="https://www.instagram.com/explore/tags/replacehate/">#ReplaceHate</a> social campaign site. This site was built for Fox Movies and allows users to generate #replacehate posters to share on social media. This promotion for the movie lived mostly on Instagram and was a fun way for fans to get involved. The biggest challenge was trying to make the process of creating the share assets as easy in fast as possible for the user. Despite the changing requirements from the client and the challenges of creating the assets in a web app, the app was a success.',
    type: "Ember",
    slides: [RH1, RH2, RH3, RH4],
  },
  {
    name: "Wiere Weddings",
    link: "https://wiere-wedding.com",
    description:
      "I designed and developed a new website for Wiere Weddings. It showcases recent work, pricing and integrates with Honeybook to obtain new appointments.",
    type: "Vue (Typescript)",
    slides: [WW1, WW2, WW3],
  },
  {
    name: "Ted Tobin's Portfolio",
    link: "https://tedtobin.com",
    description:
      "This project was a portfolio website for Creative Director, Consultant, and Copy Writer Ted Tobin. During his transition to freelance work he needed a simple site that would showcase his skills and experience as a writer. In order to do this I designed and built a site where his words are the focus. The slider is built with vanilla js and inspired by word scramble code pens.",
    type: "Vue (JS)",
    slides: [TT1, TT2, TT3],
  },
];

// DOM elements
const block = ref(null);

// States
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

  block.value.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  block.value.removeEventListener("scroll", handleScroll);
});

/** @returns length of projects */
const length = computed(() => projects.length - 1);

/** @increments current project */
const next = () => {
  // reset current index on project change
  show.value = false;

  setTimeout(() => {
    if (projectIdx.value === length.value) projectIdx.value = 0;
    else projectIdx.value += 1;
    currentProject.value = projects[projectIdx.value];
    show.value = true;
  }, 200);
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.featured {
  color: $white;
  position: relative;
  width: 100%;
  height: 100%;

  &-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .next-project {
    color: $black;
    background: $gold;
    padding: 0 1rem;
    position: absolute;
    width: 100%;
    z-index: $front;
    bottom: 0;
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
      margin: 0 auto;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 80%;

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

      .description {
        display: none;

        @media #{$small} {
          display: block;
          overflow: hidden;
          position: relative;
          margin-bottom: 2rem;
          height: 50%;

          &-text {
            overflow: auto;
            height: 100%;
            margin: 0;
          }
        }

        &:before,
        &:after {
          content: "";
          z-index: $front;
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
      }

      .show-top:before {
        opacity: 1;
      }

      .show-bottom:after {
        opacity: 1;
      }

      .project-link {
        padding: 0.5rem 1rem;
        margin: 1rem 2rem;
      }
    }
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50%;
    background: $black;
    z-index: -1;
    transform: translateY(-100%);
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.8);

    @media #{$small} {
      width: 35%;
      height: 100%;
      transform: translateX(-100%);
    }
  }

  &-slider {
    width: 100% !important;
    height: 50% !important;
    position: absolute !important;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: $base;
    transition-delay: 0.5s;

    @media #{$small} {
      width: 65% !important;
      height: 100% !important;
      right: 0;
      left: auto;
    }
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
