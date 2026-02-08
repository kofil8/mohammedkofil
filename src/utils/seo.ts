import {
  PRECONNECT_RESOURCES,
  SITE_CONFIG,
  SOCIAL_LINKS,
  VALID_LANGUAGES,
} from "@/constants";
import { type Language } from "@/i18n/types";
import { updateMetaProperty, updateMetaTag } from "./metaTags";

interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  image?: string;
  sameAs: string[];
  jobTitle: string;
  worksFor?: {
    "@type": string;
    name: string;
  };
  description: string;
  email?: string;
  telephone?: string;
  address?: {
    "@type": string;
    addressCountry: string;
  };
}

interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  author: {
    "@type": string;
    name: string;
  };
}

/**
 * Generate JSON-LD structured data for SEO
 */
export function generateStructuredData(
  lang: Language,
  title: string,
  description: string,
): string {
  const personSchema: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    image: SITE_CONFIG.ogImage,
    sameAs: Object.values(SOCIAL_LINKS),
    jobTitle: SITE_CONFIG.jobTitle,
    description: description,
  };

  const websiteSchema: WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: `${SITE_CONFIG.domain}/${lang}/`,
    description: description,
    inLanguage: VALID_LANGUAGES,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
  };

  return JSON.stringify([personSchema, websiteSchema]);
}

/**
 * Update or create JSON-LD script tag in document head
 */
export function updateStructuredData(jsonLd: string): void {
  let script = document.querySelector(
    'script[type="application/ld+json"]',
  ) as HTMLScriptElement;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = jsonLd;
}

/**
 * Set up preconnect hints for faster resource loading
 */
export function setupPreconnectHints(): void {
  PRECONNECT_RESOURCES.forEach((href) => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      if (href.includes("gstatic")) {
        link.crossOrigin = "anonymous";
      }
      document.head.appendChild(link);
    }
  });
}

/**
 * Update Open Graph and Twitter Card meta tags
 */
export function updateSocialMeta(
  title: string,
  description: string,
  url: string,
  locale: string,
): void {
  const twitterHandle = "@mohammedkofil";

  // Open Graph tags
  const ogTags: Record<string, string> = {
    "og:type": "website",
    "og:site_name": `${SITE_CONFIG.name} - Portfolio`,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": SITE_CONFIG.ogImage,
    "og:image:width": SITE_CONFIG.ogImageWidth,
    "og:image:height": SITE_CONFIG.ogImageHeight,
    "og:image:alt": title,
    "og:locale": locale,
  };

  // Twitter Card tags
  const twitterTags: Record<string, string> = {
    "twitter:card": "summary_large_image",
    "twitter:site": twitterHandle,
    "twitter:creator": twitterHandle,
    "twitter:url": url,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": SITE_CONFIG.ogImage,
    "twitter:image:alt": title,
  };

  // Update Open Graph tags
  Object.entries(ogTags).forEach(([property, content]) => {
    updateMetaProperty(property, content);
  });

  // Update Twitter tags
  Object.entries(twitterTags).forEach(([name, content]) => {
    updateMetaTag(name, content);
  });
}
