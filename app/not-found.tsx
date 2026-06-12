import type { Metadata } from "next"
import NotFoundIsland from "@/components/not-found-island"

export const metadata: Metadata = {
  title: "Stránka nenalezena",
  description: "Tento ostrov je pustý — stránka, kterou hledáte, neexistuje.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return <NotFoundIsland />
}
