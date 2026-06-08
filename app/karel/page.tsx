import type { Metadata } from "next"
import KarelView from "./karel-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, personKarelSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "O Karlu Málkovi",
  description:
    'Karel Málek "Charlie" — zakladatel ČSOP Trosečníci, výjimečný ochránce přírody ostrovské kotliny. Jeho cesta, filosofie, úspěchy a odkaz pro budoucí generace.',
  alternates: { canonical: "/karel" },
  openGraph: {
    title: "O Karlu Málkovi | ČSOP Trosečníci",
    description: "Zakladatel ČSOP Trosečníci a jeho odkaz ochrany ostrovské přírody.",
    url: "/karel",
    type: "profile",
  },
}

export default function KarelPage() {
  return (
    <>
      <JsonLd
        data={[
          personKarelSchema(),
          breadcrumbSchema([
            { name: "Úvod", path: "/" },
            { name: "O Karlu Málkovi", path: "/karel" },
          ]),
        ]}
      />
      <KarelView />
    </>
  )
}
