import type { Metadata } from "next"
import ProjectsView from "./projects-view"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Aktuální i dokončené projekty ČSOP Trosečníci: obnova mokřadů, ruční seč, pastva skotu a koní, čištění tůní, výsadba dřevin a péče o chráněné druhy na Lanškrounsku.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projekty | ČSOP Trosečníci",
    description: "Aktuální činnost v terénu – obnova mokřadů, ruční seč, pastva, výsadba dřevin a další.",
    url: "/projects",
    type: "website",
  },
}

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", path: "/" },
          { name: "Projekty", path: "/projects" },
        ])}
      />
      <ProjectsView />
    </>
  )
}
