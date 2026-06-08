import type { Metadata } from "next"
import ContactView from "./contact-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, contactPageSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte ČSOP Trosečníci — e-mail csoptrosecnici@seznam.cz, číslo účtu, Instagram. Nabízíme exkurze, členství a možnost podpořit ochranu ostrovské přírody.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt | ČSOP Trosečníci",
    description: "Spojte se s námi — exkurze, členství, podpora ochrany přírody.",
    url: "/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Úvod", path: "/" },
            { name: "Kontakt", path: "/contact" },
          ]),
        ]}
      />
      <ContactView />
    </>
  )
}
