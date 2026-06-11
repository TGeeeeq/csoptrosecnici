import type { Metadata } from "next"
import LetterView from "./letter-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Charlieho dopis",
  description:
    "Poslední vzkaz Karla Málka pro další generace — dopis, kterým si přál, aby péče o přírodu ostrovské kotliny pokračovala.",
  alternates: { canonical: "/letter" },
  openGraph: {
    title: "Charlieho dopis | ČSOP Trosečníci",
    description: "Poslední vzkaz Karla Málka pro další generace.",
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
