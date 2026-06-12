import type { Metadata } from "next"
import PrivacyView from "./privacy-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů a cookies",
  description:
    "Zásady ochrany osobních údajů a používání cookies na webu ČSOP Trosečníci. Web nepoužívá žádné sledovací cookies, návštěvnost měříme anonymně.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Úvod", path: "/" },
            { name: "Ochrana osobních údajů", path: "/privacy" },
          ]),
        ]}
      />
      <PrivacyView />
    </>
  )
}
