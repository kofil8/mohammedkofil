import { LOCALE_MAPPING, SITE_CONFIG, VALID_LANGUAGES } from "@/constants";
import type { Language } from "@/i18n/types";
import {
  updateBasicSeoTags,
  updateCanonicalAndAlternateLinks,
  updateMetaHttpEquiv,
} from "@/utils/metaTags";
import {
  generateStructuredData,
  setupPreconnectHints,
  updateSocialMeta,
  updateStructuredData,
} from "@/utils/seo";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Custom hook to manage SEO meta tags, structured data, and social media tags
 */
export function useSeo(lang?: string) {
  const { t } = useTranslation("meta");

  useEffect(() => {
    if (!lang) return;

    const title = t("title");
    const description = t("description");
    const url = `${SITE_CONFIG.domain}/${lang}/`;
    const ogLocale = LOCALE_MAPPING[lang as Language];

    // Update basic SEO tags
    updateBasicSeoTags(
      title,
      description,
      "Mohammed Kofil, Full Stack Developer, Web Developer, Portfolio, React, Node.js",
      SITE_CONFIG.name,
    );

    // Update language meta
    updateMetaHttpEquiv("content-language", lang);

    // Update social media meta tags
    updateSocialMeta(title, description, url, ogLocale);

    // Update structured data for rich search results
    const structuredData = generateStructuredData(
      lang as Language,
      title,
      description,
    );
    updateStructuredData(structuredData);

    // Update canonical and hreflang links
    updateCanonicalAndAlternateLinks(url, VALID_LANGUAGES, SITE_CONFIG.domain);
  }, [lang, t]);

  // Setup preconnect hints once
  useEffect(() => {
    setupPreconnectHints();
  }, []);
}
