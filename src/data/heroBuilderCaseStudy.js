import { getProjectById } from "./projects.js";

const caseStudyData = {
  id: "hero-builder",
  year: "2023-present",
  overview:
    "A comprehensive operations and maintenance management platform designed for water/wastewater facilities, featuring real-time monitoring, compliance tracking, and mobile accessibility.",
  problem:
    "I was brought on to help provide a centralized system to manage operations, maintain compliance standards, and provide real-time access to critical data for both office staff and field operators. When I arrived operators were managing facilities thorugh a combination of paper check sheets and excel documents. Over the course of the first year I designed an MVP that would allow these varying methods of data collection to a single proprietary platform.",
  solution:
    "Following the approval and implementation of the initial MVP, I iterated to build out what today is Hero Builder™ and build up the team that supports it. It is a customizable microservices-based platform that provides comprehensive management capabilities through web and mobile interfaces. I designed the platform to be modular and scalable, allowing for easy addition of new features and integrations. I also designed the platform to be responsive and mobile-friendly, allowing for easy use on the go.",
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
    "Real-time compliance monitoring and reporting",
    "Customizable dashboard for different facility types",
    "Mobile app for field operators",
    "Multi-tenant architecture supporting 100+ facilities",
    "Automated compliance alerts and notifications",
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
    "Successfully deployed across 100+ facilities, supporting 500+ users while maintaining 100% compliance standards. The platform became the foundation for Hero Services as a company.",
  metrics: [
    { value: "100+", label: "Facilities Supported" },
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
