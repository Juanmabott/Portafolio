import { profile } from "./data/profile";
import { site } from "./data/site";
import { LANGS, type Lang } from "./i18n/lang";
import { ui } from "./i18n/ui";

// Etiquetas de <head> para cada idioma: SEO + previews al compartir (LinkedIn, WhatsApp, etc.).
// Las inyecta scripts/prerender.js en el HTML estático.

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const pageUrl = (lang: Lang) => new URL(lang === "en" ? "en/" : "", site.url).href;

export function renderHead(lang: Lang): string {
  const meta = ui[lang].meta;
  const url = pageUrl(lang);
  const image = new URL(site.ogImage[lang], site.url).href;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role[lang],
    url: site.url,
    image: new URL(profile.photo, site.url).href,
    sameAs: [profile.linkedin, profile.github],
  };

  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="author" content="${escapeAttr(profile.name)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl("es")}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(profile.name)}" />`,
    `<meta property="og:locale" content="${meta.locale}" />`,
    ...LANGS.filter((l) => l !== lang).map(
      (l) => `<meta property="og:locale:alternate" content="${ui[l].meta.locale}" />`
    ),
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, "\\u003c")}</script>`,
  ];

  return tags.join("\n    ");
}
