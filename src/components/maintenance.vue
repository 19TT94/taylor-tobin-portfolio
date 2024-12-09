<template>
  <div class="maintenance">
    <section
      class="container info hide"
      :class="{ show: show }"
      v-if="!landscape"
    >
      <h1>Taylor Tobin</h1>
      <h3>Software Engineer</h3>

      <ul class="contact">
        <li>
          <span>Email:</span>
          <a
            href="mailto:19tt94@gmail.com"
            area-label="Email me at 19tt94@gmail.com"
            >19tt94@gmail.com</a
          >
        </li>
        <span>Phone:</span>
        <a
          class="mobile"
          href="tel:805-434-7559"
          area-label="Call me at (805) 434-7559"
          >(805) 434-7559</a
        >
        <span class="desktop">(805) 434-7559</span>
      </ul>

      <ul class="links">
        <li>
          <a
            href="https://github.com/19TT94"
            area-label="View my profile on Github"
          >
            <font-awesome-icon :icon="['fab', 'github-square']" />
            <span class="amp">@</span>19tt94
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/taylor-tobin/"
            area-label="View my profile on LinkedIn"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            <span class="amp">@</span>taylor-tobin
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/19tt94/"
            area-label="View my profile on Instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <span class="amp">@</span>19tt94
          </a>
        </li>
      </ul>

      <button>
        <a
          class="button resume"
          :href="Resume"
          download="resume.pdf"
          area-label="Download Resume"
          >Resume</a
        >
      </button>
    </section>

    <div class="overlay" :class="{ hide: !intro }">
      <p class="note special">
        Down for maintenance! Here's the basics for now.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Resume from "@/assets/TTResume2025.pdf";

import { isMobileDevice, isMobileSize } from "@/utils/index.js";

const intro = ref(true);
const show = ref(false);
const landscape = ref(false);

onMounted(() => {
  setTimeout(() => {
    intro.value = false;
    setTimeout(() => {
      show.value = true;
    }, 500);
  }, 2000);

  // intial orientation check
  landscape.value =
    (isMobileDevice() && isMobileSize() && screen.orientation === 90) ||
    screen.orientation === -90;

  // set landscape state on orientation change
  window.addEventListener("orientationchange", () => {
    landscape.value =
      (isMobileDevice() && isMobileSize() && screen.orientation === 90) ||
      screen.orientation === -90;
  });
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.maintenance {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: $white;
  display: flex;
  align-items: center;
  z-index: $front;
}

.info {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: $black;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.8);

  h1,
  h3 {
    text-align: center;
  }

  button {
    margin-top: 20px;
  }
}

.overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: $black;
  z-index: $front;

  .note {
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    color: $gold;
    max-width: 75%;
  }
}

.amp {
  padding-left: 0.5rem;
}

.mobile {
  @media #{$small} {
    display: none;
  }
}

.desktop {
  display: none;

  @media #{$small} {
    display: inline-block;
  }
}
</style>
