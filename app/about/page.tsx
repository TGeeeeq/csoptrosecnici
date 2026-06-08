import type { Metadata } from "next"
import AboutView from "./about-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Základní organizace Českého svazu ochránců přírody v Ostrově u Lanškrouna — naše mise, hodnoty, historie a tým ochránců ostrovské přírody.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "O nás | ČSOP Trosečníci",
    description: "Naše mise, hodnoty, historie a tým ochránců přírody ostrovské kotliny.",
    url: "/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", path: "/" },
          { name: "O nás", path: "/about" },
        ])}
      />
      <AboutView />
    </>
  )
}
