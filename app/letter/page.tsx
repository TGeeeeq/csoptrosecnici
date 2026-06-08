import type { Metadata } from "next"
import LetterView from "./letter-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Charlieho dopis",
  description:
    "Poslední vzkaz Karla Málka pro budoucí generace ochránců přírody ostrovské kotliny — osobní dopis a duchovní odkaz ČSOP Trosečníci.",
  alternates: { canonical: "/letter" },
  openGraph: {
    title: "Charlieho dopis | ČSOP Trosečníci",
    description: "Poslední vzkaz Karla Málka pro budoucí generace.",
    url: "/letter",
    type: "article",
  },
}

export default function LetterPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", path: "/" },
          { name: "Charlieho dopis", path: "/letter" },
        ])}
      />
      <LetterView />
    </>
  )
}
