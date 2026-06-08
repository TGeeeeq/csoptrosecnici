import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ČSOP Trosečníci",
    short_name: "Trosečníci",
    description: "Ochrana přírody v Ostrově u Lanškrouna",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f7d4f",
    lang: "cs",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  }
}
