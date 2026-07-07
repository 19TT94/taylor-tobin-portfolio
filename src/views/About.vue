<template>
  <div
    class="page about"
    :class="{ [`about-${store.state.theme}`]: store.state.theme }"
  >
    <div class="about-scroll">
      <header class="about-header">
        <router-link to="/" class="back-link">← Home</router-link>
        <h1 class="about-title">About Taylor Tobin</h1>
        <p class="status">
          <font-awesome-icon class="status-icon" :icon="['fas', 'circle']" />
          Open to work · Consulting &amp; contract
        </p>
        <p class="lede">
          Senior full-stack software engineer based in Grover Beach, California.
          I'm currently consulting and taking on contract work while looking for
          my next full-time role.
        </p>
      </header>

      <div class="about-content">
        <section class="about-section">
          <h2 class="section-title">Recent Work</h2>
          <div class="experience-card">
            <div class="experience-meta">
              <span class="experience-role">Software Engineer</span>
              <span class="experience-org">Ambry Genetics</span>
            </div>
            <p>
              Built software in biotechnology and genetic testing, providing
              solutions to help genetic counselors with variant interpretation,
              curation, and reporting.
            </p>
          </div>
        </section>

        <section class="about-section">
          <h2 class="section-title">Featured Project</h2>
          <div class="experience-card">
            <div class="experience-meta">
              <span class="experience-role">Founding Engineer</span>
              <span class="experience-org">Hero Services</span>
            </div>
            <p>
              Designed and led the full stack behind
              <router-link to="/featured/hero-builder">Hero Builder™</router-link>
              — a production platform for water and wastewater operations that
              grew to support 150+ facilities across California. Stack included
              React, Flask, PostgreSQL, Redis, and a React Native app for field
              operators, with a focus on compliance workflows, offline-first
              mobile, and multi-tenant architecture.
            </p>
          </div>
        </section>

        <section class="about-section">
          <h2 class="section-title">Earlier Experience</h2>
          <div class="experience-card">
            <div class="experience-meta">
              <span class="experience-role">Full-Stack Developer</span>
              <span class="experience-org">PXL Agency</span>
            </div>
            <p>
              Shipped sites and campaigns for entertainment brands like New
              Regency, Paramount, and DreamWorks. Across roles, I care about
              thoughtful UI/UX, reliable systems, and solving real operational
              problems — whether in biotech, utilities, or digital products.
            </p>
          </div>
        </section>
      </div>

      <footer class="about-footer">
        <p class="availability">
          Open to contract, consulting, and full-time opportunities.
        </p>
        <ul class="actions">
          <li>
            <router-link
              class="button action"
              :class="{ [`action-${store.state.theme}`]: store.state.theme }"
              to="/contact"
            >
              Get in touch
            </router-link>
          </li>
          <li>
            <a
              class="button action"
              :class="{ [`action-${store.state.theme}`]: store.state.theme }"
              :href="resumeUrl"
              download="Taylor-Tobin-Resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              class="button action"
              :class="{ [`action-${store.state.theme}`]: store.state.theme }"
              :href="calendlyUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </li>
        </ul>
        <ul class="social">
          <li>
            <a href="https://github.com/19TT94" aria-label="GitHub">
              <font-awesome-icon :icon="['fab', 'github-square']" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/taylor-tobin/"
              aria-label="LinkedIn"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/19tt94/" aria-label="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

import resumeUrl from "@/assets/documents/TTResume2026.pdf";

const store = useStore();
const calendlyUrl = "https://calendly.com/ttobin-dev";
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.about {
  background: $black;
  color: $white;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  &-light {
    background: $white;
    color: $black;

    .back-link {
      color: $black;
    }

    .experience-card {
      background: rgba(0, 0, 0, 0.04);
      border-color: rgba(0, 0, 0, 0.12);

      .experience-org {
        background: rgba(0, 0, 0, 0.08);
      }
    }

    .about-content p,
    .lede,
    .availability {
      color: rgba($black, 0.85);
    }

    .action {
      border-color: $black;
      color: $black;
    }
  }

  &-dark {
    .action {
      border-color: $gold;
      color: $gold;
    }
  }
}

.about-scroll {
  height: 100%;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding: calc($pad * 8) $pad calc($pad * 4);

  @media #{$small} {
    padding: calc($pad * 10) 2rem 4rem;
  }
}

.about-header {
  max-width: 42rem;
  margin: 0 auto 2.5rem;

  .back-link {
    display: inline-block;
    margin-bottom: 1rem;
    color: $gold;
    text-decoration: none;
    font-size: 0.95rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .about-title {
    font-size: 2.5rem;
    line-height: 1.1;
    margin: 0 0 1rem;
    padding: 0;

    @media #{$small} {
      font-size: 3.5rem;
    }
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: $black;
    color: $white;
    padding: 0.25rem 0.6rem;
    border-radius: 10px;
    font-size: 0.75rem;
    margin: 0 0 1.25rem;

    .status-icon {
      color: $green;
      width: 5px;
      height: 5px;
      padding: 0;
      font-size: 0.45rem;
    }
  }

  .lede {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
    color: rgba($white, 0.9);

    @media #{$small} {
      font-size: 1.1rem;
    }
  }
}

.about-content {
  max-width: 42rem;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 2.5rem;

  .section-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin: 0 0 1rem;
    padding: 0;
    color: $gold;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.35rem;
      left: 0;
      width: 2.5rem;
      height: 2px;
      background: $gold;
    }
  }
}

.experience-card {
  padding: 1.25rem;
  border: 1px solid rgba($white, 0.12);
  border-radius: $radius;
  background: rgba($white, 0.04);

  .experience-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .experience-role {
    font-family: $title-font;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
  }

  .experience-org {
    padding: 0.2rem 0.55rem;
    border-radius: 4px;
    font-size: 0.8rem;
    background: rgba($white, 0.1);
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba($white, 0.88);

    @media #{$small} {
      font-size: 1rem;
    }
  }

  a {
    color: $gold;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }
}

.about-footer {
  max-width: 42rem;
  margin: 0 auto;
  padding-top: 1rem;
  border-top: 1px solid rgba($white, 0.12);
  text-align: center;

  .availability {
    margin: 0 0 1.25rem;
    font-size: 0.9rem;
    color: rgba($white, 0.8);
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: calc($pad / 2);
    margin: 0 0 1.5rem;
    padding: 0;
    list-style: none;

    @media #{$small} {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    li {
      padding: 0;
    }

    .action {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      box-sizing: border-box;

      @media #{$small} {
        width: auto;
      }
    }
  }

  .social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 0;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .svg-inline--fa {
      padding: 0;
      font-size: 1.5rem;
    }
  }
}

.about-light .about-footer {
  border-top-color: rgba($black, 0.12);
}
</style>
