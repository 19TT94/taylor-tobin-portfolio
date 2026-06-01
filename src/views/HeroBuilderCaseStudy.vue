<template>
  <div
    class="case-study"
    :class="{ [`case-study-${store.state.theme}`]: store.state.theme }"
  >
    <div class="case-header show">
      <div class="case-header-content">
        <div class="case-title-section">
          <router-link to="/featured" class="back-link">← Projects</router-link>
          <h1 class="case-title">{{ project.name }}</h1>
          <div class="case-meta">
            <span class="case-type" v-if="project.type">{{ project.type }}</span>
            <span class="case-year" v-if="project.year">{{ project.year }}</span>
          </div>
        </div>

        <div class="case-actions" v-if="project.link">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="case-link"
            :class="{ [`case-link-${store.state.theme}`]: store.state.theme }"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>

    <div class="case-content show">
      <section class="case-section case-overview" v-if="project.overview">
        <h2 class="section-title">Project Overview</h2>
        <div class="section-content">
          <p class="overview-text">{{ project.overview }}</p>
        </div>
      </section>

      <section class="case-section case-problem" v-if="project.problem">
        <h2 class="section-title">The Challenge</h2>
        <div class="section-content">
          <p class="problem-text">{{ project.problem }}</p>
        </div>
      </section>

      <section class="case-section case-solution" v-if="project.solution">
        <h2 class="section-title">The Solution</h2>
        <div class="section-content">
          <p class="solution-text">{{ project.solution }}</p>
        </div>
      </section>

      <section class="case-section case-technical" v-if="project.technicalDetails">
        <h2 class="section-title">Technical Implementation</h2>
        <div class="section-content">
          <div class="tech-stack" v-if="project.techStack">
            <h3>Technology Stack</h3>
            <div class="tech-tags">
              <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="architecture" v-if="project.architecture">
            <h3>Architecture</h3>
            <p>{{ project.architecture }}</p>
          </div>
          <div class="key-features" v-if="project.keyFeatures">
            <h3>Key Features</h3>
            <ul class="features-list">
              <li v-for="feature in project.keyFeatures" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="case-section case-process" v-if="project.process">
        <h2 class="section-title">Process & Methodology</h2>
        <div class="section-content">
          <div class="process-steps" v-if="project.processSteps">
            <div
              v-for="(step, index) in project.processSteps"
              :key="index"
              class="process-step"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
          <p class="process-text" v-if="project.process">{{ project.process }}</p>
        </div>
      </section>

      <section class="case-section case-results" v-if="project.results">
        <h2 class="section-title">Results & Impact</h2>
        <div class="section-content">
          <div class="metrics" v-if="project.metrics">
            <div
              v-for="metric in project.metrics"
              :key="metric.label"
              class="metric-item"
            >
              <div class="metric-value">{{ metric.value }}</div>
              <div class="metric-label">{{ metric.label }}</div>
            </div>
          </div>
          <p class="results-text">{{ project.results }}</p>
        </div>
      </section>

      <section class="case-section case-lessons" v-if="project.lessonsLearned">
        <h2 class="section-title">Lessons Learned</h2>
        <div class="section-content">
          <ul class="lessons-list">
            <li v-for="lesson in project.lessonsLearned" :key="lesson">
              {{ lesson }}
            </li>
          </ul>
        </div>
      </section>

      <section class="case-section case-gallery" v-if="slides.length > 0">
        <h2 class="section-title">Project Gallery</h2>
        <div class="section-content">
          <Slider
            class="case-slider"
            :projectIdx="0"
            :slides="slides"
            :limit-mobile-slides="false"
          />
        </div>
      </section>

      <section class="case-section case-team" v-if="project.team || project.role">
        <h2 class="section-title">Team & Role</h2>
        <div class="section-content">
          <div class="role-info" v-if="project.role">
            <h3>My Role</h3>
            <p>{{ project.role }}</p>
          </div>
          <div class="team-info" v-if="project.team">
            <h3>Team</h3>
            <p>{{ project.team }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Slider from "@/components/slider.vue";
import {
  heroBuilderCaseStudy,
  heroBuilderSlides,
} from "@/data/heroBuilderCaseStudy.js";

const store = useStore();
const project = heroBuilderCaseStudy;
const slides = heroBuilderSlides;
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.case-study {
  background: $black;
  color: $white;
  min-height: 100vh;
  padding: 2rem 0;
  overflow-y: auto;
  max-height: calc(100vh - calc($pad * 10));

  .case-header {
    opacity: 1;
    transform: translateY(0);
    margin: calc($pad * 10) 0;
    padding: 0 2rem;

    .case-header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media #{$small} {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    }

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

    .case-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.1;

      @media #{$small} {
        font-size: 4rem;
      }
    }

    .case-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;

      span {
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    .case-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media #{$small} {
        flex-direction: row;
        align-items: center;
      }

      .case-link {
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        text-align: center;
        min-width: 140px;
        background: $gold;
        color: $black;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        &-light {
          background: $black;
          color: $white;
        }
      }
    }
  }

  .case-content {
    opacity: 1;
    transform: translateY(0);
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem 4rem 2rem;

    .case-section {
      margin-bottom: 4rem;

      .section-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: $gold;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 3rem;
          height: 3px;
          background: $gold;
        }
      }

      .section-content {
        h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: $gold;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.75rem;
            line-height: 1.6;

            &:before {
              content: "•";
              position: absolute;
              left: 0;
              color: $gold;
              font-weight: bold;
            }
          }
        }
      }

      &.case-technical {
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;

          .tech-tag {
            padding: 0.5rem 1rem;
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 20px;
            color: $gold;
            font-size: 0.9rem;
            font-weight: 500;
          }
        }
      }

      &.case-process {
        .process-steps {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;

          @media #{$small} {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }

          .process-step {
            display: flex;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            border-left: 4px solid $gold;

            .step-number {
              width: 2.5rem;
              height: 2.5rem;
              background: $gold;
              color: $black;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 1.1rem;
              flex-shrink: 0;
            }

            .step-content {
              h4 {
                margin-bottom: 0.5rem;
                color: $white;
              }

              p {
                margin-bottom: 0;
                font-size: 1rem;
              }
            }
          }
        }
      }

      &.case-results {
        .metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;

          .metric-item {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 215, 0, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(255, 215, 0, 0.2);

            .metric-value {
              font-size: 2.5rem;
              font-weight: 700;
              color: $gold;
              margin-bottom: 0.5rem;
            }

            .metric-label {
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.8);
              font-weight: 500;
            }
          }
        }
      }

      &.case-gallery {
        .section-content {
          max-width: 100%;
        }

        .case-slider {
          width: 100% !important;
          height: auto !important;
          min-height: 420px;
          display: flex !important;
          flex-direction: column;
          border-radius: 8px;
          overflow: visible;

          @media #{$small} {
            min-height: 560px;
          }

          :deep(.slider) {
            flex: 1;
            position: relative;
            min-height: 340px;
            width: 100%;
            margin: 0;
            padding: 0;

            @media #{$small} {
              min-height: 480px;
            }
          }

          :deep(.slide .content img) {
            max-width: 92%;
            max-height: 92%;

            @media #{$small} {
              max-width: 96%;
              max-height: 94%;
            }
          }

          :deep(.pagination) {
            position: relative;
            bottom: auto;
            flex-shrink: 0;
            padding: 0.75rem 0 0.25rem;
            margin-top: auto;
          }

          :deep(.pagination .item-list) {
            flex-wrap: wrap;
            gap: 0.15rem;
          }

          :deep(.pagination span) {
            padding: 0.2rem 0.35rem;
            font-size: 0.95rem;

            @media #{$small} {
              padding: 0.3rem 0.45rem;
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }

  &-light {
    background: $white;
    color: $black;

    .case-header {
      .back-link {
        color: $black;
      }

      .case-meta span {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    .case-content {
      .case-section {
        .section-content {
          p,
          li {
            color: rgba(0, 0, 0, 0.8);
          }
        }

        &.case-technical {
          .tech-tag {
            background: rgba(0, 0, 0, 0.1);
            border-color: rgba(0, 0, 0, 0.3);
            color: $black;
          }
        }

        &.case-process {
          .process-step {
            background: rgba(0, 0, 0, 0.05);

            .step-content h4 {
              color: $black;
            }
          }
        }

        &.case-results {
          .metric-item {
            background: rgba(0, 0, 0, 0.05);
            border-color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
}
</style>
