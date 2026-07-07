export const SITE_URL = "https://ttobin.com";

export const SITE_NAME = "Taylor Tobin";

export const DEFAULT_SEO = {
  title: "Taylor Tobin | Software Engineer",
  description:
    "Taylor Tobin is a software engineer based in Grover Beach, California. Explore portfolio projects, case studies, and contact information.",
  image: `${SITE_URL}/static/tail-bw.png`,
  imageAlt: "Taylor Tobin portfolio logo",
  type: "website",
  locale: "en_US",
};

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taylor Tobin",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  email: "ttobin.dev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Grover Beach",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/taylor-tobin/",
    "https://github.com/19TT94",
    "https://www.instagram.com/19tt94/",
    "https://calendly.com/ttobin-dev",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Taylor Tobin",
  url: SITE_URL,
  description: DEFAULT_SEO.description,
  author: {
    "@type": "Person",
    name: "Taylor Tobin",
    url: SITE_URL,
  },
};

export const ROUTE_SEO = {
  home: {
    title: "Taylor Tobin | Software Engineer & Developer",
    description:
      "Taylor Tobin — software engineer, designer, and consultant based in Grover Beach, CA. Open to freelance and contract work.",
  },
  featured: {
    title: "Featured Projects | Taylor Tobin",
    description:
      "Featured web development and design projects by Taylor Tobin, software engineer and full-stack developer.",
  },
  "hero-builder-case-study": {
    title: "Hero Builder Case Study | Taylor Tobin",
    description:
      "Case study: Hero Builder operator app — full-stack development by Taylor Tobin for water utility compliance workflows.",
  },
  projects: {
    title: "Projects | Taylor Tobin",
    description:
      "Portfolio of web and mobile projects by Taylor Tobin, including work for New Regency, Paramount, DreamWorks, and more.",
  },
  about: {
    title: "About Taylor Tobin | Software Engineer",
    description:
      "Taylor Tobin is a senior full-stack software engineer based in Grover Beach, CA. Currently consulting and open to contract work. Previously at Ambry Genetics and founding engineer of Hero Builder.",
  },
  contact: {
    title: "Contact Taylor Tobin | Software Engineer",
    description:
      "Get in touch with Taylor Tobin for freelance, contract, and consulting work. UI/UX, web, mobile, and database development.",
  },
  card: {
    title: "Taylor Tobin | Digital Business Card",
    description:
      "Taylor Tobin — software engineer. Contact details, resume, and links to GitHub, LinkedIn, and Instagram.",
  },
  "not-found": {
    title: "Page Not Found | Taylor Tobin",
    description: "The page you are looking for could not be found on Taylor Tobin's portfolio.",
    noindex: true,
  },
};
