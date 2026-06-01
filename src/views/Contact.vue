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
          quality responsive user experiences. Available for contract work —
          reach out to discuss your project. Cheers!
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

        <dl
          class="hire-details"
          :class="{ [`hire-details-${store.state.theme}`]: store.state.theme }"
        >
          <div class="hire-item">
            <dt>Engagement types</dt>
            <dd>
              Fixed-scope project, monthly retainer, short audit, fractional
              lead dev
            </dd>
          </div>
          <div class="hire-item">
            <dt>To get started</dt>
            <dd>
              Discovery call, project brief, codebase or repo access (as
              needed), and a stakeholder or decision-maker
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="get-in-touch">
      <NetlifyForm />
    </section>

    <section
      class="footer"
      :class="{
        reveal: reveal,
        [`footer-${store.state.theme}`]: store.state.theme,
      }"
    >
      <ul class="links">
        <li>
          <a href="https://github.com/19TT94"
            ><font-awesome-icon
              :class="{ [store.state.theme]: store.state.theme }"
              :icon="['fab', 'github-square']"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/taylor-tobin/"
            ><font-awesome-icon
              :class="{ [store.state.theme]: store.state.theme }"
              :icon="['fab', 'linkedin']"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/19tt94/"
            ><font-awesome-icon
              :class="{ [store.state.theme]: store.state.theme }"
              :icon="['fab', 'instagram']"
          /></a>
        </li>
      </ul>
      <div class="resources">
        <ul class="action-buttons">
          <li>
            <a
              class="button"
              :class="{ [`resume-${store.state.theme}`]: store.state.theme }"
              href="mailto:ttobin.dev@gmail.com"
              >Email</a
            >
          </li>
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
import dayjs from "dayjs";

import Resume from "@/assets/documents/TTResume2025.pdf";

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
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media #{$small} {
    position: relative;
  }

  .section {
    display: none;
    width: 100%;
    background: $black;
    z-index: $default;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.6);

    &-light {
      background: $white;
      color: $black;
    }

    &-dark {
      background: $black;
      color: $white;
    }

    @media #{$small} {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      width: 42%;
      height: 100%;
      align-items: center;
      justify-content: center;
      margin: 0;
      overflow-y: auto;
    }

    .info {
      text-align: center;
      padding: 0 1rem;
      width: 85%;

      @media #{$medium} {
        width: 80%;
      }

      h2 {
        font-size: 1.25rem;

        @media #{$medium} {
          font-size: inherit;
        }
      }

      .subtitle {
        display: none;
        text-align: center;
        font-size: 0.85rem;

        @media #{$medium} {
          display: block;
        }
      }

      .services {
        display: none;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        color: $gold;
        font-size: 0.85rem;
        margin-bottom: calc($pad * 1.5);

        @media #{$small} {
          display: flex;
        }

        &-light {
          color: $black;
        }

        &-dark {
          color: $gold;
        }

        li {
          padding: calc($pad / 2);
        }
      }

      .hire-details {
        display: none;
        text-align: left;
        font-size: 0.75rem;
        line-height: 1.4;

        @media #{$medium} {
          display: block;
          text-align: center;
        }

        &-light {
          dt {
            color: $black;
          }

          dd {
            color: rgba($black, 0.85);
          }
        }

        &-dark {
          dt {
            color: $gold;
          }

          dd {
            color: rgba($white, 0.85);
          }
        }

        .hire-item {
          margin-bottom: calc($pad * 0.75);

          &:last-child {
            margin-bottom: 0;
          }
        }

        dt {
          font-family: $title-font;
          font-weight: 600;
          font-size: 0.75rem;
          margin-bottom: 0.15rem;
        }

        dd {
          margin: 0;
        }
      }
    }
  }

  .get-in-touch {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    padding: calc($pad * 3) $pad;
    min-height: 0;
    box-sizing: border-box;

    @media #{$small} {
      position: absolute;
      top: 0;
      right: 0;
      width: 58%;
      height: 100%;
      margin: 0;
      padding: 2rem;
    }
  }

  .footer {
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc($pad * 1.5);
    padding: calc($pad * 1.5) $pad calc($pad * 2);

    &-dark {
      background: $black;
    }

    &-light {
      background: $white;
    }

    @media #{$small} {
      background: transparent;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 42%;
      padding: 5px 0;
      z-index: 2;
      gap: calc($pad / 2);
    }

    .links {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 12rem;
      margin: 0 auto;

      @media #{$small} {
        width: 50%;
        margin: 10px auto 0;
      }

      li a {
        display: inline-flex;
        line-height: 0;

        &:focus,
        &:focus-visible {
          outline: none;
          box-shadow: none;

          .svg-inline--fa {
            filter: drop-shadow(1px 0 0 $turquiose)
              drop-shadow(-1px 0 0 $turquiose) drop-shadow(0 1px 0 $turquiose)
              drop-shadow(0 -1px 0 $turquiose);
          }
        }
      }

      .svg-inline--fa {
        padding-right: 0;

        &.dark {
          color: $gold;
        }

        &.light {
          color: $black;
        }
      }
    }

    .resources {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      font-size: 0.75rem;

      @media #{$small} {
        width: 90%;
        justify-content: space-between;
      }

      .action-buttons {
        display: flex;
        gap: $pad;
        align-items: center;
        justify-content: center;
        width: auto;

        @media #{$small} {
          justify-content: space-between;
          width: 100%;
        }
      }

      a {
        width: fit-content;

        &:focus,
        &:focus-visible {
          outline: none;
          box-shadow: none;
          -webkit-text-stroke: 1px $turquiose;
        }
      }
    }
  }

  .dark {
    color: $gold;
  }

  .light {
    color: $black;
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

  .move {
    transform: none;
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
