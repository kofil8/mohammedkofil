/**
 * Utility functions for managing meta tags
 */

/**
 * Update or create a meta tag with name attribute
 */
export function updateMetaTag(name: string, content: string): void {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

/**
 * Update or create a meta tag with property attribute (for Open Graph)
 */
export function updateMetaProperty(property: string, content: string): void {
  let meta = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

/**
 * Update or create a meta tag with http-equiv attribute
 */
export function updateMetaHttpEquiv(httpEquiv: string, content: string): void {
  let meta = document.querySelector(
    `meta[http-equiv="${httpEquiv}"]`,
  ) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("http-equiv", httpEquiv);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

/**
 * Update or create a link tag
 */
export function updateLinkTag(
  rel: string,
  href: string,
  hrefLang?: string,
): void {
  const selector = `link[rel="${rel}"]${hrefLang ? `[hrefLang="${hrefLang}"]` : ""}`;
  let link = document.querySelector(selector) as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hrefLang) link.setAttribute("hrefLang", hrefLang);
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Update basic SEO meta tags
 */
export function updateBasicSeoTags(
  title: string,
  description: string,
  keywords?: string,
  author?: string,
): void {
  document.title = title;
  updateMetaTag("description", description);
  if (keywords) updateMetaTag("keywords", keywords);
  if (author) updateMetaTag("author", author);
  updateMetaTag("robots", "index, follow");
}

/**
 * Update canonical and alternate language links
 */
export function updateCanonicalAndAlternateLinks(
  canonicalUrl: string,
  languages: string[],
  baseUrl: string,
): void {
  updateLinkTag("canonical", canonicalUrl);

  // Update hreflang links for multilingual SEO
  languages.forEach((lang) => {
    updateLinkTag("alternate", `${baseUrl}/${lang}/`, lang);
  });

  // Set x-default to English
  updateLinkTag("alternate", `${baseUrl}/en/`, "x-default");
}
