import { SITE_NAME, SITE_PHONE_TEL, SITE_URL } from "./site";
import type { City } from "./types";

export function localBusinessJsonLd(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: `Installation solaire photovoltaïque à ${city.name} pour entreprises et professionnels`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "58 Trav. des Marronniers",
      addressLocality: "Marseille",
      postalCode: "13012",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    telephone: SITE_PHONE_TEL,
    url: SITE_URL,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    hasCredential: "QualiPV RGE",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Installation panneaux solaires à ${city.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: SITE_PHONE_TEL,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    serviceType: "Installation photovoltaïque professionnelle",
  };
}

export function faqPageJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/articles/${post.slug}/`,
  };
}
