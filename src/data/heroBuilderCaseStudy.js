import { getProjectById } from "./projects.js";
import mobileAppScreenshot from "@/assets/images/projects/hero-builder/callout.png";

const caseStudyData = {
  id: "hero-builder",
  year: "2023-present",
  overview:
    "The project is a comprehensive operations and maintenance management platform designed for water/wastewater facilities. It features comprehensive form building for on site data collection, compliance tracking, and mobile accessibility. This was the largest project of my professional career and something that I built from scratch as a solo developer over the course of a year before bringing on a small team. The project now serves 100+ facilities throughout California.",
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
    "Microservices architecture with React frontend, Flask API backend, PostgreSQL database, and Redis caching. Mobile app built with React Native for field operators.",
  keyFeatures: [
    "Compliance monitoring and reporting",
    "Customizable dashboard for different facility types",
    "Multi-tenant architecture supporting 100+ facilities",
    "~90 API endpoints, 60+ models, 128 migrations, 16 scheduled Lambdas.",
    "400+ tests gated in CI before deploy.",
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
    "Successfully deployed across 100+ facilities, supporting 500+ users while maintaining compliance standards. Client onboarding time improved from 2–3 weeks to 1–2 days as enterprise accounts, reusable facility templates, and self-service configuration matured. The platform became the foundation for Hero Services as a company.",
  metrics: [
    { value: "100+", label: "Facilities Supported" },
    { value: "1-2 days", label: "Client Onboarding (from 2-3 weeks)" },
    // { value: "500+", label: "Active Users" },
  ],
  lessonsLearned: [
    "Importance of stakeholder involvement throughout development process",
    "Value of microservices architecture for complex enterprise applications",
    "Critical role of mobile accessibility for field operations",
    "Need for comprehensive training and support during deployment",
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
