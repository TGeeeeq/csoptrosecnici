import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Crimson_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { MotionProvider } from "@/components/motion/motion-provider"
import { ScrollProgress } from "@/components/motion/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackToTop } from "@/components/motion/back-to-top"
import { JsonLd } from "@/components/json-ld"
import { CookieBanner } from "@/components/cookie-banner"
import { Toaster } from "@/components/ui/sonner"
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ČSOP Trosečníci — Ochrana přírody v Ostrově u Lanškrouna",
    template: "%s | ČSOP Trosečníci",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "ČSOP",
    "Trosečníci",
    "ochrana přírody",
    "Ostrov u Lanškrouna",
    "Lanškrounsko",
    "Karel Málek",
    "biodiverzita",
    "mokřady",
    "přírodní rezervace",
    "významné krajinné prvky",
    "VKP",
    "biokoridory",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Environment",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE.url,
    siteName: SITE.name,
    title: "ČSOP Trosečníci — Ochrana přírody v Ostrově u Lanškrouna",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "ČSOP Trosečníci",
    description: SITE.description,
  },
  verification: {
    other: {
      "seznam-wmt": "VpzWkCEeYFA8kqXy97kzkxwqbt8he8u4",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#2f7d4f",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonPro.variable} font-sans antialiased`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LanguageProvider>
          <MotionProvider>
            <ScrollToTop />
            <ScrollProgress />
            <Navigation />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <CookieBanner />
          </MotionProvider>
        </LanguageProvider>
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
