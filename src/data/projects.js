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
import DT1 from "@/assets/images/projects/devtab/devtab-1.png";
import DT2 from "@/assets/images/projects/devtab/devtab-2.png";
import DT3 from "@/assets/images/projects/devtab/devtab-3.png";
import DT4 from "@/assets/images/projects/devtab/devtab-4.png";

export const heroBuilderAllSlides = [
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
];

export const projects = [
  {
    id: "hero-builder",
    name: "Hero Builder",
    caseStudyRoute: "/featured/hero-builder",
    shortDescription:
      "I transformed paper checksheets and spreadsheets into a production operations platform used across 150+ water and wastewater facilities.",
    description:
      "I took <strong>Hero Builder™</strong> from initial concept to a production platform for managing operations, maintenance, and compliance at water and wastewater facilities. I designed and built the MVP independently, then assembled and led a small team as the product expanded into a configurable, multi-tenant web and mobile system. Today it supports 150+ facilities, processes 1,100+ checksheet submissions each month, maintains 50,000+ compliance records, and has achieved 99% uptime since 2022.",
    type: "React, Flask",
    slides: heroBuilderAllSlides,
  },
  {
    id: "devtab",
    name: "DevTab",
    link: "https://stage--dev-tab.netlify.app/",
    shortDescription:
      "A focused time-tracking and invoicing app I built after Clockify started putting core features behind paywalls—just the workflow I need, without the extras I don't.",
    description:
      'I built <a href="https://stage--dev-tab.netlify.app/">DevTab</a> as a personal alternative to Clockify after more of the day-to-day workflow started moving behind paywalls. I didn\'t need the bloated feature set—just a clean way to track time, manage clients and retainers, export reports, and invoice. So I designed and built a focused React + TypeScript app with Supabase for auth and data, covering timers, time entries, clients/projects, retainer-aware billing, PDF/CSV reports, and invoices.',
    type: "React, TypeScript, Supabase",
    slides: [DT1, DT2, DT3, DT4],
  },
  {
    id: "wiere-weddings",
    name: "Wiere Weddings",
    link: "https://wiereweddings.com",
    shortDescription:
      "Custom landing page with WordPress CMS on Netlify and HoneyBook intake to manage content and new client inquiries as the wedding business grew.",
    description:
      'I designed and built a custom, design-forward landing page for a wedding business, <a href="https://wiereweddings.com">Wiere Weddings</a>. As the business grew, the owner needed a better way to manage inquiries and update content, so I developed a custom WordPress theme and integrated WordPress as a CMS for flexible content management on a Netlify-hosted site. I also embedded a HoneyBook intake form to streamline new client inquiries and business triage.',
    type: "WordPress, Netlify",
    slides: [WW1, WW2, WW3],
  },
  {
    id: "new-regency",
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
    id: "paramount",
    name: "Paramount",
    link: "https://paramountmovies.com",
    shortDescription:
      "Led frontend on Paramount's movie archive site with responsive sort/filter, Laravel API, and Vue frontend.",
    description:
      "I led frontend Development on Parmount's new website. This site leverages a large archive of movies with a user friendly and responsive sort and filter menu. I also assisted in api and database design/development, utilizing a Laravel (PHP) backend and a Vue (JS) frontend.",
    type: "Vue/Laravel",
    slides: [PM1, PM2, PM3, PM4, PM5],
  },
  {
    id: "dreamworks-animation",
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
    id: "pxl-agency",
    name: "PXL Agency",
    link: "https://pxlagency.com",
    shortDescription:
      "Developed pxlagency.com during the brand relaunch and led ongoing maintenance as primary developer.",
    description:
      'Assisted in the development of <a href="https://www.pxlagency.com">pxlagency.com</a> during the brand relaunch at PXL Agency. Then was the lead developer on maintenance updates.',
    type: "Ember",
    slides: [PA1, PA2, PA3, PA4],
  },
  // {
  //   id: "replace-hate",
  //   name: "ReplaceHate.com",
  //   link: "https://pxlagency.com/our-work/replace-hate",
  //   shortDescription:
  //     "Built Fox Movies' #ReplaceHate campaign site for fast, easy generation of shareable Instagram posters.",
  //   description:
  //     'Frontend developement on <a href="https://www.instagram.com/explore/tags/replacehate/">#ReplaceHate</a> social campaign site. This site was built for Fox Movies and allows users to generate #replacehate posters to share on social media. This promotion for the movie lived mostly on Instagram and was a fun way for fans to get involved. The biggest challenge was trying to make the process of creating the share assets as easy in fast as possible for the user. Despite the changing requirements from the client and the challenges of creating the assets in a web app, the app was a success.',
  //   type: "Ember",
  //   slides: [RH1, RH2, RH3, RH4],
  // },
  // {
  //   id: "ted-tobin-portfolio",
  //   name: "Ted Tobin's Portfolio",
  //   link: "https://tedtobin.com",
  //   shortDescription:
  //     "Built a writer-focused portfolio where copy is the hero, with a vanilla JS slider inspired by word scramble demos.",
  //   description:
  //     "This project was a portfolio website for Creative Director, Consultant, and Copy Writer Ted Tobin. During his transition to freelance work he needed a simple site that would showcase his skills and experience as a writer. In order to do this I designed and built a site where his words are the focus. The slider is built with vanilla js and inspired by word scramble code pens.",
  //   type: "Vue (JS)",
  //   slides: [TT1, TT2, TT3],
  // },
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);

export const getProjectIndexById = (id) =>
  projects.findIndex((project) => project.id === id);

export const getNextProject = (id) => {
  const index = getProjectIndexById(id);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
};

export default projects;
