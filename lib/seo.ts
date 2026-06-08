/**
 * Centrální SEO konstanty a schémata strukturovaných dat (JSON-LD).
 * Renderuje se přes server komponentu <JsonLd> (components/json-ld.tsx).
 */

export const SITE = {
  url: "https://csoptrosecnici.cz",
  name: "ČSOP Trosečníci",
  legalName: "ZO ČSOP Trosečníci",
  fullName: "Základní organizace Českého svazu ochránců přírody Trosečníci",
  description:
    "Základní organizace Českého svazu ochránců přírody věnující se ochraně a obnově přírodních hodnot ostrovské kotliny v Ostrově u Lanškrouna.",
  email: "csoptrosecnici@seznam.cz",
  ico: "64772390",
  bankAccount: "236201335 / 0300",
  instagram: "https://www.instagram.com/csoptrosecnici",
  instagramHandle: "@csoptrosecnici",
  locality: "Ostrov u Lanškrouna",
  region: "Pardubický kraj",
  postalCode: "561 22",
  country: "CZ",
} as const

type JsonLdObject = Record<string, unknown>

export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.fullName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}/images/uvodni.jpg`,
    email: SITE.email,
    taxID: SITE.ico,
    identifier: { "@type": "PropertyValue", propertyID: "IČO", value: SITE.ico },
    foundingDate: "1989",
    founder: { "@type": "Person", name: "Karel Málek", alternateName: "Charlie" },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      postalCode: SITE.postalCode,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: { "@type": "Place", name: "Ostrov u Lanškrouna, Lanškrounsko" },
    sameAs: [SITE.instagram],
    knowsAbout: [
      "ochrana přírody",
      "biodiverzita",
      "mokřady",
      "významné krajinné prvky",
      "biokoridory",
      "péče o krajinu",
    ],
  }
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "cs-CZ",
    publisher: { "@id": `${SITE.url}/#organization` },
  }
}

export function personKarelSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karel Málek",
    alternateName: "Charlie",
    description:
      "Zakladatel ČSOP Trosečníci, výjimečný ochránce přírody ostrovské kotliny. Život zasvětil ochraně a obnově místní krajiny.",
    jobTitle: "Ochránce přírody",
    foundingDate: "1989",
    affiliation: { "@type": "NGO", name: SITE.legalName, url: SITE.url },
  }
}

export function contactPageSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt | ČSOP Trosečníci",
    url: `${SITE.url}/contact`,
    mainEntity: {
      "@type": "NGO",
      name: SITE.legalName,
      email: SITE.email,
      sameAs: [SITE.instagram],
    },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  }
}
