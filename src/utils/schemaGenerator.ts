import { SITE_CONFIG, DIVISIONS, FAQS } from "../data/siteData";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_CONFIG.siteUrl}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/assets/images/templatemo-eduwell.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    sameAs: Object.values(SITE_CONFIG.socialLinks),
    department: DIVISIONS.map((d) => ({
      "@type": "EducationalOrganization",
      name: d.title,
      url: `${SITE_CONFIG.siteUrl}${d.path}`,
      description: d.description,
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url?: string; path?: string }[] = [],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const targetUrl = item.url || item.path || "/";
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name || "",
        item: targetUrl.startsWith("http")
          ? targetUrl
          : `${SITE_CONFIG.siteUrl}${targetUrl}`,
      };
    }),
  };
}

export function getFAQSchema(faqs = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getCourseSchema(
  name: string,
  description: string,
  providerName: string = "Future Academy of Tourism & Hospitality",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: name,
    description: description,
    provider: {
      "@type": "EducationalOrganization",
      name: providerName,
      sameAs: SITE_CONFIG.siteUrl,
    },
  };
}
