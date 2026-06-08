import type { Metadata } from "next"
import GalleryView from "./gallery-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Fotogalerie ČSOP Trosečníci — pohled na naši práci v terénu a krásu ostrovské přírody: přírodní rezervace, mokřady, louky a ochranářské aktivity.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Galerie | ČSOP Trosečníci",
    description: "Pohled na naši práci a krásu ostrovské přírody.",
    url: "/gallery",
    type: "website",
  },
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", path: "/" },
          { name: "Galerie", path: "/gallery" },
        ])}
      />
      <GalleryView />
    </>
  )
}
