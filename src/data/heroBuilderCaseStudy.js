import { getProjectById } from "./projects.js";
import mobileAppScreenshot from "@/assets/images/projects/hero-builder/callout.png";

const caseStudyData = {
  id: "hero-builder",
  year: "2022-present",
  overview:
    "Hero Builder™ is an operations and maintenance platform for water and wastewater facilities—built from scratch as a solo developer, then scaled with a small team into production software used across California. Today it supports 150+ facilities, processes 1,100+ completed checksheet submissions per month, and maintains 99% uptime since 2022 while maintaining 50,000+ compliance records.",
  problem:
    "Initially I was brought on to help provide a centralized system for operations, compliance, and maintenance across all of Fluid Resource Management's water and wastewater facilities. When I arrived operators were managing facilities through a combination of paper check sheets and excel documents. At first the challenge was to determine the best path forward with existing technologies (Zoho at the time) and integrations or to build out something custom. Ultimately the feature set required a proprietary solution and gave the company options to move more into the consulting/tech space in the water industry.",
  solution:
    "Over the course of the first year, I iterated to design (UI/UX) and implement an MVP for a few select facilities that would go on to become what today is Hero Builder™. After the MVP and as we continued to iterate and bring on facilities I worked with contractors, and a new company Hero Services for water/wastewater consulting/solutions was formed around what we were building and I built up the small team that supports Hero Builder™. The product itself is a customizable microservices-based platform that provides comprehensive management capabilities through web and mobile interfaces. Facilities can be added through enterprise accounts that have their own set of resources and branding. This became relevant because Fluid Resource Management (Operations and Maintenance Company) and Cloacina (Manufacturer of Package Wastewater Plants) required isolated instances. I designed the platform to be modular and scalable, allowing for easy addition of new features and integrations. It is responsive and mobile-friendly, allowing for easy use on the go.",
  technicalDetails: true,
  techStack: [
    "React",
    "Flask",
    "PostgreSQL",
    "Redis",
    "React Native",
    "Python",
    "JavaScript",
  ],
  architecture:
    "Microservices architecture with React frontend, Flask API backend, PostgreSQL database, and Redis caching. Multi-tenant enterprise accounts isolate branding and data for separate organizations (e.g. Fluid Resource Management and Cloacina). Mobile app built with React Native for field operators.",
  keyFeatures: [
    "Multi-tenant architecture across 150+ facilities and enterprise environments",
    "Configurable checksheet builder for on-site compliance data collection",
    "1,100+ completed checksheet submissions per month in steady-state production",
    "~90 API endpoints, 60+ models, 128 migrations, 16 scheduled Lambdas",
    "400+ tests gated in CI before deploy",
    "Automated compliance alerts and notifications",
    "Mobile app for field operators",
  ],
  keyFeatureCallout: [
    {
      id: "mobile-app",
      title: "Hero Builder™ Operator App (Mobile)",
      description:
        "Field operators complete daily checksheets, log maintenance tasks, and review compliance records from iPhones and iPads on site. I designed the React Native app to mirror the web platform's checksheet workflows while optimizing for touch input, quick navigation between facilities and easier visibility.",
      image: mobileAppScreenshot,
      imageAlt: "Hero Builder™ mobile app checksheet record screen",
      imagePosition: "right",
    },
  ],
  process:
    "Led the entire development lifecycle from initial concept to deployment, managing a small development team and working closely with stakeholders to understand facility requirements.",
  processSteps: [
    {
      title: "Discovery & Requirements",
      description:
        "Analyzed existing facility management processes and identified key pain points around compliance tracking and data accessibility.",
    },
    {
      title: "Architecture Design",
      description:
        "Designed microservices architecture to ensure scalability and maintainability across multiple facility types.",
    },
    {
      title: "Development & Testing",
      description:
        "Led development team through iterative development cycles with regular stakeholder feedback and testing.",
    },
  ],
  results:
    "What started as paper checksheets and Excel grew into a system processing 1,100+ completed checksheet submissions every month across 150+ facilities, with 50,000+ compliance records on file and 99% uptime since 2022. Monthly submission volume scaled from early MVP levels into a steady ~1k+/month run rate as adoption expanded through 2024. Client onboarding dropped from 3-4 weeks to 1–2 days once enterprise accounts, reusable facility templates, and self-service configuration were in place. Hero Builder™ became the foundation for Hero Services as a company.",
  metrics: [
    { value: "150+", label: "Facilities Supported" },
    { value: "1,100+", label: "Monthly Checksheet Submissions" },
    { value: "50,000+", label: "Compliance Records" },
    { value: "99%", label: "Uptime Since 2022" },
    { value: "1-2 days", label: "Client Onboarding (from 3-4 weeks)" },
  ],
  lessonsLearned: [
    "Operational metrics (submissions, records, uptime) tell the adoption story better than user counts alone",
    "Multi-tenant architecture pays off when each enterprise needs isolated data and branding",
    "Reusable facility templates and self-service config were the biggest levers for faster onboarding",
    "Mobile workflows matter as much as the admin dashboard for day-to-day compliance in the field",
  ],
  team: "Led a small development team, working closely with facility managers and compliance managers.",
  role: "Lead Developer & Architect - Designed system architecture, led development team, managed stakeholder relationships, and oversaw deployment across multiple facilities.",
};

const baseProject = getProjectById(caseStudyData.id);

export const heroBuilderCaseStudy = {
  ...baseProject,
  ...caseStudyData,
};

export const heroBuilderSlides = baseProject?.slides ?? [];

export default heroBuilderCaseStudy;
