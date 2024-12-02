<template>
  <div class="page contact">
    <section
      class="section"
      :class="{
        move: show,
        [`section-${store.state.theme}`]: store.state.theme,
      }"
    >
      <div class="info">
        <h2>What I can do for you</h2>
        <h3 class="subtitle">
          I'm a Software Engineer with an interest in great visual design and
          quality responsive user experiences. Reach out for inquiries. Cheers!
        </h3>
        <ul
          class="services"
          :class="{ [`services-${store.state.theme}`]: store.state.theme }"
        >
          <li>UI/UX</li>
          <li>Web</li>
          <li>Mobile</li>
          <li>Database</li>
        </ul>
      </div>
    </section>

    <section class="get-in-touch">
      <NetlifyForm />
    </section>

    <section class="footer" :class="{ reveal: reveal }">
      <ul class="links">
        <li>
          <a href="https://github.com/19TT94"
            ><font-awesome-icon :icon="['fab', 'github-square']"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/taylor-tobin/"
            ><font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/19tt94/"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </li>
      </ul>
      <div class="resources">
        <ul>
          <li>
            <a class="email" href="mailto:19tt94@gmail.com">19tt94@gmail.com</a>
          </li>
          <li>
            <a class="mobile" href="tel:805-434-7559">805.434.7559</a>
            <span class="desktop">805.434.7559</span>
          </li>
        </ul>
        <ul>
          <li>
            <a
              class="button"
              :class="{ [`resume-${store.state.theme}`]: store.state.theme }"
              :href="Resume"
              download="resume.pdf"
              >Resume</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import Resume from "@/assets/TTResume2024.pdf";

import NetlifyForm from "@/components/form.vue";

const store = useStore();

const show = ref(false);
const reveal = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
    setTimeout(() => {
      reveal.value = true;
    }, 650);
  }, 500);
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.contact {
  .section {
    width: 100%;
    height: 40%;
    background: $black;
    z-index: $default;
    transform: translateY(-100%);
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.6);

    &-light {
      background: $white;
      color: $black;
    }

    &-dark {
      background: $black;
      color: $white;
    }

    @media #{$small} {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    .info {
      text-align: center;
      padding: 25% 1rem 0;

      @media #{$small} {
        text-align: center;
        padding: 0;
        width: 80%;
      }

      .subtitle {
        text-align: center;
        font-size: 0.75rem;

        @media #{$small} {
          font-size: inherit;
        }
      }

      .services {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: $gold;
        font-size: 0.75rem;

        &-light {
          color: $black;
        }

        &-dark {
          color: $gold;
        }

        @media #{$small} {
          font-size: inherit;
        }

        li {
          padding: $pad / 2;
        }
      }
    }
  }

  .get-in-touch {
    padding: 15px 0 0;
    text-align: center;

    @media #{$small} {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      padding: 40px 0;
    }
  }

  .footer {
    opacity: 0;
    visibility: hidden;
    padding: 10px 0 20px;
    background: $black;

    @media #{$small} {
      background: transparent;
      position: absolute;
      left: auto;
      left: 0;
      bottom: 0;
      width: 50%;
      padding: 5px 0;
      z-index: 2;
    }

    .links {
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: 10px auto 0;
    }
  }

  .resume-dark {
    border: 1px solid $gold;
    color: $gold;
  }

  .resume-light {
    border: 1px solid $black;
    color: $black;
  }

  .reveal {
    opacity: 1;
    visibility: visible;
    transition: all ease 0.5s;
  }

  .resources {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 0.75rem;
  }

  .move {
    transform: translateY(0%);
    transition: all 1s ease;

    @media #{$small} {
      transform: translateX(0%);
    }
  }

  .amp {
    padding-left: 0.5rem;
  }
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
