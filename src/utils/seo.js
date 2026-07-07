import {
  DEFAULT_SEO,
  PERSON_SCHEMA,
  SITE_URL,
  WEBSITE_SCHEMA,
} from "@/data/seo.js";

const META_ATTRS = [
  { key: "description", attr: "name" },
  { key: "author", attr: "name", value: "Taylor Tobin" },
  { key: "robots", attr: "name" },
  { key: "og:title", attr: "property" },
  { key: "og:description", attr: "property" },
  { key: "og:type", attr: "property" },
  { key: "og:url", attr: "property" },
  { key: "og:image", attr: "property" },
  { key: "og:image:alt", attr: "property" },
  { key: "og:locale", attr: "property" },
  { key: "og:site_name", attr: "property", value: "Taylor Tobin" },
  { key: "twitter:card", attr: "name", value: "summary" },
  { key: "twitter:title", attr: "name" },
  { key: "twitter:description", attr: "name" },
  { key: "twitter:image", attr: "name" },
  { key: "twitter:image:alt", attr: "name" },
];

function upsertMeta({ attr, key, content }) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export function applySeo(routeSeo = {}, path = "/") {
  const canonicalUrl = new URL(path, SITE_URL).href;
  const title = routeSeo.title || DEFAULT_SEO.title;
  const description = routeSeo.description || DEFAULT_SEO.description;
  const image = routeSeo.image || DEFAULT_SEO.image;
  const imageAlt = routeSeo.imageAlt || DEFAULT_SEO.imageAlt;
  const type = routeSeo.type || DEFAULT_SEO.type;
  const robots = routeSeo.noindex ? "noindex, nofollow" : "index, follow";

  document.title = title;

  const values = {
    description,
    robots,
    "og:title": title,
    "og:description": description,
    "og:type": type,
    "og:url": canonicalUrl,
    "og:image": image,
    "og:image:alt": imageAlt,
    "og:locale": DEFAULT_SEO.locale,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:alt": imageAlt,
  };

  META_ATTRS.forEach(({ key, attr, value }) => {
    upsertMeta({
      attr,
      key,
      content: values[key] ?? value,
    });
  });

  upsertLink("canonical", canonicalUrl);
  upsertJsonLd("seo-person-schema", PERSON_SCHEMA);
  upsertJsonLd("seo-website-schema", WEBSITE_SCHEMA);
}
