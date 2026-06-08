import type { Metadata } from "next"
import LocationsView from "./locations-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Lokality, biocentra a biokoridory",
  description:
    "Přírodní rezervace U Kaštánku a Třebovské stěny, významné krajinné prvky (VKP) a biokoridory v okolí Ostrova u Lanškrouna, o které ČSOP Trosečníci pečuje.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Lokality, biocentra a biokoridory | ČSOP Trosečníci",
    description: "Přírodní rezervace, významné krajinné prvky a biokoridory na Lanškrounsku.",
    url: "/locations",
    type: "website",
  },
}

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", path: "/" },
          { name: "Lokality", path: "/locations" },
        ])}
      />
      <LocationsView />
    </>
  )
}
