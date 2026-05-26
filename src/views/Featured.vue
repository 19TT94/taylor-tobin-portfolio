<template>
  <div class="case-study" v-if="currentProject.mode == 'case'">
    <div
      class="section"
      :class="{
        move: down,
        [`section-${store.state.theme}`]: store.state.theme,
      }"
    >
    </div>
    
    <!-- Case Study Header -->
    <div class="case-header show">
      <div class="case-header-content">
        <div class="case-title-section">
          <h1 class="case-title">{{ currentProject.name }}</h1>
          <div class="case-meta">
            <span class="case-type" v-if="currentProject.type">{{ currentProject.type }}</span>
            <span class="case-year" v-if="currentProject.year">{{ currentProject.year }}</span>
          </div>
        </div>
        
        <div class="case-actions">
          <a
            v-if="currentProject.link"
            :href="currentProject.link"
            target="_blank"
            class="case-link"
            :class="{ [`case-link-${store.state.theme}`]: store.state.theme }"
          >
            Visit Site
          </a>
          <button 
            v-if="currentProject.caseStudyLink"
            @click="openCaseStudy"
            class="case-study-btn"
            :class="{ [`case-study-btn-${store.state.theme}`]: store.state.theme }"
          >
            View Full Case Study
          </button>
        </div>
      </div>
    </div>

    <!-- Case Study Content -->
    <div class="case-content show">
      <!-- Project Overview -->
      <section class="case-section case-overview" v-if="currentProject.overview">
        <h2 class="section-title">Project Overview</h2>
        <div class="section-content">
          <p class="overview-text">{{ currentProject.overview }}</p>
        </div>
      </section>

      <!-- Problem Statement -->
      <section class="case-section case-problem" v-if="currentProject.problem">
        <h2 class="section-title">The Challenge</h2>
        <div class="section-content">
          <p class="problem-text">{{ currentProject.problem }}</p>
        </div>
      </section>

      <!-- Solution -->
      <section class="case-section case-solution" v-if="currentProject.solution">
        <h2 class="section-title">The Solution</h2>
        <div class="section-content">
          <p class="solution-text">{{ currentProject.solution }}</p>
        </div>
      </section>

      <!-- Technical Details -->
      <section class="case-section case-technical" v-if="currentProject.technicalDetails">
        <h2 class="section-title">Technical Implementation</h2>
        <div class="section-content">
          <div class="tech-stack" v-if="currentProject.techStack">
            <h3>Technology Stack</h3>
            <div class="tech-tags">
              <span 
                v-for="tech in currentProject.techStack" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="architecture" v-if="currentProject.architecture">
            <h3>Architecture</h3>
            <p>{{ currentProject.architecture }}</p>
          </div>
          <div class="key-features" v-if="currentProject.keyFeatures">
            <h3>Key Features</h3>
            <ul class="features-list">
              <li v-for="feature in currentProject.keyFeatures" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Process & Methodology -->
      <section class="case-section case-process" v-if="currentProject.process">
        <h2 class="section-title">Process & Methodology</h2>
        <div class="section-content">
          <div class="process-steps" v-if="currentProject.processSteps">
            <div 
              v-for="(step, index) in currentProject.processSteps" 
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
          <p class="process-text" v-if="currentProject.process">{{ currentProject.process }}</p>
        </div>
      </section>

      <!-- Results & Impact -->
      <section class="case-section case-results" v-if="currentProject.results">
        <h2 class="section-title">Results & Impact</h2>
        <div class="section-content">
          <div class="metrics" v-if="currentProject.metrics">
            <div 
              v-for="metric in currentProject.metrics" 
              :key="metric.label"
              class="metric-item"
            >
              <div class="metric-value">{{ metric.value }}</div>
              <div class="metric-label">{{ metric.label }}</div>
            </div>
          </div>
          <p class="results-text">{{ currentProject.results }}</p>
        </div>
      </section>

      <!-- Lessons Learned -->
      <section class="case-section case-lessons" v-if="currentProject.lessonsLearned">
        <h2 class="section-title">Lessons Learned</h2>
        <div class="section-content">
          <ul class="lessons-list">
            <li v-for="lesson in currentProject.lessonsLearned" :key="lesson">
              {{ lesson }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Project Gallery -->
      <section class="case-section case-gallery" v-if="currentProject.slides && currentProject.slides.length > 0">
        <h2 class="section-title">Project Gallery</h2>
        <div class="section-content">
          <Slider
            ref="slider"
            class="case-slider"
            :projectIdx="projectIdx"
            :slides="currentProject.slides"
          />
        </div>
      </section>

      <!-- Team & Role -->
      <section class="case-section case-team" v-if="currentProject.team || currentProject.role">
        <h2 class="section-title">Team & Role</h2>
        <div class="section-content">
          <div class="role-info" v-if="currentProject.role">
            <h3>My Role</h3>
            <p>{{ currentProject.role }}</p>
          </div>
          <div class="team-info" v-if="currentProject.team">
            <h3>Team</h3>
            <p>{{ currentProject.team }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Navigation -->
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
  <div
    class="featured"
    :class="{ [`featured-${store.state.theme}`]: store.state.theme }"
    v-if="currentProject.mode == 'project'"
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
          <button type="button">Read More</button>
          <a
            area-label="Visit featured website"
            :class="{
              [`project-link-${store.state.theme}`]: store.state.theme,
            }"
            :href="currentProject.link"
            target="_blank"
            v-if="currentProject.link"
            >Visit Site</a
          >
          <div
            v-if="currentProject.name"
            class="description"
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
import { useStore } from "vuex";

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
    mode: "case",
    name: "Hero Builder",
    link: "https://hero-services.com",
    description:
      "Hero services is a Water/Wastewater Consulting company under the umbrella of Ellison Environmental, along with Fluid Resource Management (FRM) and Cloacina. I started with FRM and developed Hero BuilderTM, which spurred the start of Hero Services as a company. Designed, architected and led a small team in the development of Hero BuilderTM. Hero Builder is an operations/maintenance management tool designed to be customized for multiple applications. Hero BuilderTM was developed using several micro-services including a React App, Flask Api, Postgres DB and a Redis instance. Worked with Cloacina to develop a proof of concept for integrating with their onsite SCADA systems using an Ewon Flexy device. This featured a Java script that called our API from the device. Designed and scaffolded an operator Mobile App to bring more usability to onsite operators using React Native Hero BuilderTM is used to: Manage and maintain compliance standards at 100+ water/ wastewater facilities operated by Fluid Resource Management in CA. Maintain compliance during the warranty period of any Cloacina Package Plant that is deployed for the first 2 years. Support ~500 users in the office and in the field.",
    type: "React, Flask",
    year: "2023",
    overview: "A comprehensive operations and maintenance management platform designed for water/wastewater facilities, featuring real-time monitoring, compliance tracking, and mobile accessibility.",
    problem: "Water/wastewater facilities needed a centralized system to manage operations, maintain compliance standards, and provide real-time access to critical data for both office staff and field operators.",
    solution: "Developed Hero BuilderTM, a customizable microservices-based platform that integrates with existing SCADA systems and provides comprehensive management capabilities through web and mobile interfaces.",
    technicalDetails: true,
    techStack: ["React", "Flask", "PostgreSQL", "Redis", "React Native", "Python", "JavaScript"],
    architecture: "Microservices architecture with React frontend, Flask API backend, PostgreSQL database, and Redis caching. Mobile app built with React Native for field operators.",
    keyFeatures: [
      "Real-time compliance monitoring and reporting",
      "Customizable dashboard for different facility types",
      "Mobile app for field operators",
      "SCADA system integration via Ewon Flexy devices",
      "Multi-tenant architecture supporting 100+ facilities",
      "Automated compliance alerts and notifications"
    ],
    process: "Led the entire development lifecycle from initial concept to deployment, managing a small development team and working closely with stakeholders to understand facility requirements.",
    processSteps: [
      {
        title: "Discovery & Requirements",
        description: "Analyzed existing facility management processes and identified key pain points around compliance tracking and data accessibility."
      },
      {
        title: "Architecture Design",
        description: "Designed microservices architecture to ensure scalability and maintainability across multiple facility types."
      },
      {
        title: "Development & Testing",
        description: "Led development team through iterative development cycles with regular stakeholder feedback and testing."
      },
      {
        title: "Integration & Deployment",
        description: "Integrated with existing SCADA systems and deployed across multiple facilities with comprehensive training and support."
      }
    ],
    results: "Successfully deployed across 100+ facilities, supporting 500+ users while maintaining 100% compliance standards. The platform became the foundation for Hero Services as a company.",
    metrics: [
      { value: "100+", label: "Facilities Supported" },
      { value: "500+", label: "Active Users" },
      { value: "100%", label: "Compliance Rate" },
    ],
    lessonsLearned: [
      "Importance of stakeholder involvement throughout development process",
      "Value of microservices architecture for complex enterprise applications",
      "Critical role of mobile accessibility for field operations",
      "Need for comprehensive training and support during deployment"
    ],
    team: "Led a small development team of 3-4 developers, working closely with facility managers and compliance officers.",
    role: "Lead Developer & Architect - Designed system architecture, led development team, managed stakeholder relationships, and oversaw deployment across multiple facilities.",
    slides: [HB1, HB2, HB3],
  },
  {
    mode: "project",
    name: "New Regency",
    link: "http://newregency.com",
    description:
      'I lead development on the relaunch and revamp of <a href="http://newregency.com">newregency.com</a>. It involved some visual upgrades, new content, and new functionality for internationalization. New Regency was looking for a way to promote their new international team. I was in charge of implementing a solution that allowed for custom pages and analytics for their international teams. In the cms international team members could generate pages for their clients with specific movies for their region.',
    type: "Laravel",
    slides: [NR1, NR2, NR3, NR4],
  },
  {
    mode: "project",
    name: "Paramount",
    description:
      "I led frontend Development on Parmount's new website. This site leverages a large archive of movies with a user friendly and responsive sort and filter menu. I also assisted in api and database design/development, utilizing a Laravel (PHP) backend and a Vue (JS) frontend.",
    type: "Vue/Laravel",
    link: "https://paramountmovies.com",
    slides: [PM1, PM2, PM3, PM4, PM5],
  },
  {
    mode: "project",
    name: "Dreamworks Animation",
    link: "https://dreamworks.com",
    description:
      "I worked the team that built Dreamworks Animation. I helped to build a custom Swiper.io slider with a responsive fullscreen video background, full screen video model for each featured movie, and custom slide transitions. I also contributed to the promotional movie pages and contact forms throughout the site.",
    type: "Vue/Laravel",
    slides: [DW1, DW2, DW3, DW4, DW5],
  },
  {
    mode: "project",
    name: "PXL Agency",
    link: "https://pxlagency.com",
    description:
      'Assisted in the development of <a href="https://www.pxlagency.com">pxlagency.com</a> during the brand relaunch at PXL Agency. Then was the lead developer on maintenance updates.',
    type: "Ember",
    slides: [PA1, PA2, PA3, PA4],
  },
  {
    mode: "project",
    name: "ReplaceHate.com",
    link: "https://pxlagency.com/our-work/replace-hate",
    description:
      'Frontend developement on <a href="https://www.instagram.com/explore/tags/replacehate/">#ReplaceHate</a> social campaign site. This site was built for Fox Movies and allows users to generate #replacehate posters to share on social media. This promotion for the movie lived mostly on Instagram and was a fun way for fans to get involved. The biggest challenge was trying to make the process of creating the share assets as easy in fast as possible for the user. Despite the changing requirements from the client and the challenges of creating the assets in a web app, the app was a success.',
    type: "Ember",
    slides: [RH1, RH2, RH3, RH4],
  },
  {
    mode: "project",
    name: "Wiere Weddings",
    link: "https://wiereweddings.com",
    description:
      "I designed and developed a new website for Wiere Weddings. It showcases recent work, pricing and integrates with Honeybook to obtain new appointments.",
    type: "Vue (Typescript), Wordpress (PHP)",
    slides: [WW1, WW2, WW3],
  },
  {
    mode: "project",
    name: "Ted Tobin's Portfolio",
    link: "https://tedtobin.com",
    description:
      "This project was a portfolio website for Creative Director, Consultant, and Copy Writer Ted Tobin. During his transition to freelance work he needed a simple site that would showcase his skills and experience as a writer. In order to do this I designed and built a site where his words are the focus. The slider is built with vanilla js and inspired by word scramble code pens.",
    type: "Vue (JS)",
    slides: [TT1, TT2, TT3],
  },
];

const store = useStore();

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

  // Only add scroll listener for project mode
  if (currentProject.value.mode === 'project' && block.value) {
    block.value.addEventListener("scroll", handleScroll);
  }
});

onBeforeUnmount(() => {
  if (block.value) {
    block.value.removeEventListener("scroll", handleScroll);
  }
});

/** @returns length of projects */
const length = computed(() => projects.length - 1);

const preloadImages = (imageUrls) => {
  const promises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject(url);
      img.src = url;
    });
  });
  return Promise.all(promises);
};

/** @increments current project */
const next = async () => {
  show.value = false;
  
  const nextProjectIdx = (projectIdx.value + 1) % (length.value + 1);
  const nextProject = projects[nextProjectIdx];
  
  try {
    // For case studies, show immediately. For projects, wait for images to load
    if (nextProject.mode === 'case') {
      projectIdx.value = nextProjectIdx;
      currentProject.value = nextProject;
      show.value = true;
    } else {
      // Wait for all images to load before showing content for projects
      await preloadImages(nextProject.slides);
      
      projectIdx.value = nextProjectIdx;
      currentProject.value = nextProject;
      show.value = true;
    }
  } catch (error) {
    console.error('Failed to load images:', error);
    // Fallback: show content anyway after a reasonable delay
    setTimeout(() => {
      projectIdx.value = nextProjectIdx;
      currentProject.value = nextProject;
      show.value = true;
    }, 500);
  }
};

/** Opens the full case study */
const openCaseStudy = () => {
  if (currentProject.value.caseStudyLink) {
    window.open(currentProject.value.caseStudyLink, '_blank');
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.case-study {
  margin-top: calc($pad * 10);
  background: $black;
  color: $white;
  min-height: 100vh;
  padding: 2rem 0;
  overflow-y: auto;
  max-height: calc(100vh - calc($pad * 10));

  .next-project {
    padding: 0.5rem 1rem;
    position: absolute;
    width: 100%;
    bottom: 0;

    &-dark {
      color: $black;
      background: $gold;
    }

    &-light {
      color: $gold;
      background: $black;
    }
  }

  // Case Study Header
  .case-header {
    opacity: 1;
    transform: translateY(0);
    margin-bottom: 3rem;
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

    .case-title-section {
      flex: 1;

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
    }

    .case-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media #{$small} {
        flex-direction: row;
        align-items: center;
      }

      .case-link, .case-study-btn {
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        text-align: center;
        min-width: 140px;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      }

      .case-link {
        background: $gold;
        color: $black;

        &-light {
          background: $black;
          color: $white;
        }
      }

      .case-study-btn {
        background: transparent;
        color: $gold;
        border: 2px solid $gold;

        &-light {
          color: $black;
          border-color: $black;
        }
      }
    }
  }

  // Case Study Content
  .case-content {
    opacity: 1;
    transform: translateY(0);
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem 6rem 2rem; // Add bottom padding for next button

    .case-section {
      margin-bottom: 4rem;
      opacity: 1;
      transform: translateY(0);

      .section-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: $gold;
        position: relative;

        &:after {
          content: '';
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
              content: '•';
              position: absolute;
              left: 0;
              color: $gold;
              font-weight: bold;
            }
          }
        }
      }

      // Technology Stack
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

        .features-list {
          li {
            font-size: 1rem;
          }
        }
      }

      // Process Steps
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

      // Results & Metrics
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

      // Gallery
      &.case-gallery {
        .case-slider {
          width: 100% !important;
          height: 400px !important;
          border-radius: 8px;
          overflow: hidden;
        }
      }
    }
  }

  // Light theme adjustments
  &-light {
    background: $white;
    color: $black;

    .case-header {
      .case-meta span {
        background: rgba(0, 0, 0, 0.1);
      }

      .case-link-light {
        background: $black;
        color: $white;
      }

      .case-study-btn-light {
        color: $black;
        border-color: $black;
      }
    }

    .case-content {
      .case-section {
        .section-content {
          p, li {
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



.featured {
  color: $white;
  position: relative;
  width: 100%;
  height: 100%;

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
    padding: 0.5rem 1rem;
    position: absolute;
    width: 100%;
    bottom: 0;

    &-dark {
      color: $black;
      background: $gold;
    }

    &-light {
      color: $gold;
      background: $black;
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

      a {
        padding: 0 2rem;
        margin-bottom: 1rem;
        font-size: 12px;
        border: 0 !important;
        text-decoration: underline;
      }

      .description {
        display: none;

        @media #{$small} {
          display: block;
          overflow: hidden;
          position: relative;
          height: 50%;
          margin-bottom: 3rem;

          &-text {
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
    width: 100% !important;
    height: 50% !important;
    position: absolute !important;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
