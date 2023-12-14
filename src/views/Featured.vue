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
          <h1>{{ current_project.name }}</h1>
          <p v-if="current_project.type">
            {{ current_project.type }}
          </p>
          <p
            class="description"
            v-if="current_project.name"
            v-html="current_project.description"
          ></p>
          <a
            class="button project-link"
            :href="current_project.link"
            target="_blank"
            v-if="current_project.link"
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

      <slider
        ref="slider"
        class="featured-slider hide"
        :class="{ show: show }"
        :slides="current_project.slides"
      />
    </div>
  </div>
</template>

<script>
import slider from "@/components/slider.vue";

export default {
  name: "Featured",

  components: {
    slider,
  },

  mounted() {
    setTimeout(() => {
      this.down = true;
    }, 500);
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },

  computed: {
    /** @returns index of selected project if it doesn't exceed the length */
    current_project() {
      return this.projects[this.project_index];
    },
    /** @returns length of projects */
    length() {
      return this.projects.length;
    },
  },

  methods: {
    /** @increments current project */
    next() {
      // reset current index on project change
      this.$refs.slider.currentIndex = 0;
      this.show = false;
      let check = this.project_index;
      setTimeout(() => {
        // this.show = true
        if (this.project_index === this.length - 1) {
          // reset index
          this.project_index = 0;
        } else {
          this.project_index = this.project_index + 1;
        }
        // this.show = true
        if (check !== this.project_index) {
          this.show = true;
        }
      }, 1500);
    },
  },

  data() {
    return {
      show: false,
      down: false,
      project_index: 0,
      projects: [
        {
          name: "New Regency",
          link: "http://newregency.com",
          description:
            'I lead development on the relaunch and revamp of <a href="http://newregency.com">newregency.com</a>. It involved some visual upgrades, new content, and new functionality for internationalization. New Regency was looking for a way to promote their new international team. I was in charge of implementing a solution that allowed for custom pages and analytics for their international teams. In the cms international team members could generate pages for their clients with specific movies for their region.',
          type: "Laravel",
          slides: [
            require("@/assets/images/projects/new-regency/new-regency-1.png"),
            require("@/assets/images/projects/new-regency/new-regency-2.png"),
            require("@/assets/images/projects/new-regency/new-regency-3.png"),
            require("@/assets/images/projects/new-regency/new-regency-4.png"),
          ],
        },
        {
          name: "Paramount",
          description:
            "I led frontend Development on Parmount's new website. This site leverages a large archive of movies with a user friendly and responsive sort and filter menu. I also assisted in api and database design/development, utilizing a Laravel (PHP) backend and a Vue (JS) frontend.",
          type: "Vue/Laravel",
          link: "https://paramountmovies.com",
          slides: [
            require("@/assets/images/projects/paramount/paramount1.png"),
            require("@/assets/images/projects/paramount/paramount2.png"),
            require("@/assets/images/projects/paramount/paramount3.png"),
            require("@/assets/images/projects/paramount/paramount4.png"),
            require("@/assets/images/projects/paramount/paramount5.png"),
          ],
        },
        {
          name: "Dreamworks Animation",
          link: "https://dreamworks.com",
          description:
            "I worked the team that built Dreamworks Animation. I helped to build a custom Swiper.io slider with a responsive fullscreen video background, full screen video model for each featured movie, and custom slide transitions. I also contributed to the promotional movie pages and contact forms throughout the site.",
          type: "Vue/Laravel",
          slides: [
            require("@/assets/images/projects/dreamworks/dreamworks-1.png"),
            require("@/assets/images/projects/dreamworks/dreamworks-2.png"),
            require("@/assets/images/projects/dreamworks/dreamworks-3.png"),
            require("@/assets/images/projects/dreamworks/dreamworks-4.png"),
            require("@/assets/images/projects/dreamworks/dreamworks-5.png"),
          ],
        },
        {
          name: "ReplaceHate.com",
          link: "https://pxlagency.com/our-work/replace-hate",
          description:
            'Frontend developement on <a href="https://www.instagram.com/explore/tags/replacehate/">#ReplaceHate</a> social campaign site. This site was built for Fox Movies and allows users to generate #replacehate posters to share on social media. This promotion for the movie lived mostly on Instagram and was a fun way for fans to get involved. The biggest challenge was trying to make the process of creating the share assets as easy in fast as possible for the user. Despite the changing requirements from the client and the challenges of creating the assets in a web app, the app was a success.',
          type: "Ember",
          slides: [
            require("@/assets/images/projects/replace-hate/replace-1.jpg"),
            require("@/assets/images/projects/replace-hate/replace-2.jpg"),
            require("@/assets/images/projects/replace-hate/replace-3.jpg"),
            require("@/assets/images/projects/replace-hate/replace-4.png"),
          ],
        },
        {
          name: "PXL White Elephant",
          description:
            'Lead Developer on the White Elephant website. PXL\'s Clients were given Holiday Cards with a code to recieve a gift from PXL and a link to the White Elephant Party. These codes generate a randomly selected gag gift, which is then sent to them for the holidays. Not only was this a fun way to wish our clients a happy holiday, but the project was featured in <a href="https://www.adweek.com/agencies/agency-holiday-cards-2018-inventive-and-creative-send-offs-to-the-year/?utm_content=position_4&utm_source=sailthru&utm_medium=email&utm_term=AWK_Agencies&utm_campaign=Agencies_Newsletter_2018122114&s_id=5b75d55320122e18f4031361" target="_blank">Adweek</a>. It also gave me my first experience leading both the frontend and backend development on a project. This site featured custom analytics, user generation, and a simple email service.',
          type: "Ember/Laravel",
          slides: [
            require("@/assets/images/projects/white-elephant/white-elephant-1.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-2.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-3.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-4.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-5.png"),
          ],
        },
        {
          name: "PXL Agency",
          link: "https://pxlagency.com",
          description:
            'Assisted in the development of <a href="https://www.pxlagency.com">pxlagency.com</a> during the brand relaunch at PXL Agency. Then was the lead developer on maintenance updates.',
          type: "Ember",
          slides: [
            require("@/assets/images/projects/pxl-agency/pxl-1.png"),
            require("@/assets/images/projects/pxl-agency/pxl-2.png"),
            require("@/assets/images/projects/pxl-agency/pxl-3.png"),
            require("@/assets/images/projects/pxl-agency/pxl-4.png"),
          ],
        },
        {
          name: "Ted Tobin's Portfolio",
          link: "https://tedtobin.com",
          description:
            "This project was a portfolio website for Creative Director, Consultant, and Copy Writer Ted Tobin. During his transition to freelance work he needed a simple site that would showcase his skills and experience as a writer. In order to do this I designed and built a site where his words are the focus. The slider is built with vanilla js and inspired by word scramble code pens.",
          type: "Vue",
          slides: [
            require("@/assets/images/projects/ted/ted-1.png"),
            require("@/assets/images/projects/ted/ted-2.png"),
            require("@/assets/images/projects/ted/ted-3.png"),
          ],
        },
      ],
    };
  },
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

    // @media #{$small} {
    //   width: 35%;
    //   height: 100%;
    // }

    .content {
      margin: 0 auto;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 80%;

      h1 {
        padding: 2rem 2rem 1rem;

        // @media #{$small} {
        //   padding: 0 2rem 1rem;
        // }
      }

      p {
        padding: 0 2rem 1rem;
        margin-bottom: 1rem;

        // @media #{$small} {
        //   margin-bottom: 0;
        // }
      }

      .description {
        display: none;
        margin-bottom: 1rem;

        // @media #{$small} {
        //   display: block;
        // }
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

    // @media #{$small} {
    //   width: 35%;
    //   height: 100%;
    //   transform: translateX(-100%);
    // }
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

    // @media #{$small} {
    //   width: 65% !important;
    //   height: 100% !important;
    //   right: 0;
    //   left: auto;
    // }
  }

  .move {
    transform: translateY(0);
    transition: all ease 0.5s;

    // @media #{$small} {
    //   transform: translateX(0);
    //   transition: all ease 0.5s;
    // }
  }
}
</style>
