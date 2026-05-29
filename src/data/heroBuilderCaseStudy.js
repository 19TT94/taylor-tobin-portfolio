export const heroBuilderCaseStudy = {
  name: "Hero Builder",
  link: "https://hero-services.com",
  type: "React, Flask",
  year: "2023",
  overview:
    "A comprehensive operations and maintenance management platform designed for water/wastewater facilities, featuring real-time monitoring, compliance tracking, and mobile accessibility.",
  problem:
    "Water/wastewater facilities needed a centralized system to manage operations, maintain compliance standards, and provide real-time access to critical data for both office staff and field operators.",
  solution:
    "Developed Hero BuilderTM, a customizable microservices-based platform that integrates with existing SCADA systems and provides comprehensive management capabilities through web and mobile interfaces.",
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
    "SCADA system integration via Ewon Flexy devices",
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
    {
      title: "Integration & Deployment",
      description:
        "Integrated with existing SCADA systems and deployed across multiple facilities with comprehensive training and support.",
    },
  ],
  results:
    "Successfully deployed across 100+ facilities, supporting 500+ users while maintaining 100% compliance standards. The platform became the foundation for Hero Services as a company.",
  metrics: [
    { value: "100+", label: "Facilities Supported" },
    { value: "500+", label: "Active Users" },
    { value: "100%", label: "Compliance Rate" },
  ],
  lessonsLearned: [
    "Importance of stakeholder involvement throughout development process",
    "Value of microservices architecture for complex enterprise applications",
    "Critical role of mobile accessibility for field operations",
    "Need for comprehensive training and support during deployment",
  ],
  team: "Led a small development team of 3-4 developers, working closely with facility managers and compliance officers.",
  role: "Lead Developer & Architect - Designed system architecture, led development team, managed stakeholder relationships, and oversaw deployment across multiple facilities.",
};
