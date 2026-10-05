import type { Metadata } from "next";

export const siteConfig = {
  name: "TMF México",
  legalName: "Tubos Mexicanos Flexibles",
  shortName: "TMF",
  tagline: "Más de seis décadas haciendo flexible cada instalación.",
  homeTitle:
    "TMF México | Tubería flexible para instalaciones eléctricas e industriales",
  description:
    "Diseñamos y fabricamos en México tubería flexible, conduit, conectores y accesorios para instalaciones eléctricas e industriales. Más de seis décadas de experiencia, ingeniería y manufactura.",
  keywords: [
    "TMF México",
    "Tubos Mexicanos Flexibles",
    "tubería flexible",
    "conduit flexible",
    "canalización eléctrica",
    "conectores eléctricos",
    "TMF Eléctrico",
    "TMF Industrial",
    "mangueras metálicas flexibles",
    "tubería conduit México",
  ],
  locale: "es_MX",
  language: "es-MX",
  socials: [
    {
      href: "https://www.facebook.com/share/19gq9s5m3A/",
      icon: "mdi:facebook",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/tubos.mexicanos.flexibles_tmf",
      icon: "mdi:instagram",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/tubos-mexicanos-flexibles-tmf/",
      icon: "mdi:linkedin",
      label: "LinkedIn",
    },
  ],
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

const defaultOgImage = {
  url: "/opengraph-image",
  alt: "TMF México — Tubería flexible para instalaciones eléctricas e industriales",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const ogImage = image
    ? { url: image, alt: imageAlt ?? fullTitle }
    : defaultOgImage;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export function organizationJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.shortName],
    url,
    logo: `${url}/icon.svg`,
    description: siteConfig.description,
    foundingDate: "1957",
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    sameAs: siteConfig.socials.map((social) => social.href),
  };
}

export function websiteJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };
}
