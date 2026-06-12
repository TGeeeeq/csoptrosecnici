"use client"

import Link from "next/link"
import { m } from "motion/react"
import { Compass, Mail, TreePalm } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

const ease = [0.22, 1, 0.36, 1] as const

function IslandScene({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      role="img"
      aria-label={title}
      className="mx-auto h-auto w-full max-w-xl drop-shadow-sm"
    >
      <defs>
        <linearGradient id="island-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.96 0.025 200)" />
          <stop offset="100%" stopColor="oklch(0.97 0.02 140)" />
        </linearGradient>
        <linearGradient id="island-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.75 0.08 200)" />
          <stop offset="100%" stopColor="oklch(0.6 0.09 210)" />
        </linearGradient>
        <linearGradient id="island-sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.06 85)" />
          <stop offset="100%" stopColor="oklch(0.78 0.08 80)" />
        </linearGradient>
        <clipPath id="island-frame">
          <rect x="0" y="0" width="600" height="400" rx="24" />
        </clipPath>
      </defs>

      <g clipPath="url(#island-frame)">
        {/* Obloha */}
        <rect width="600" height="400" fill="url(#island-sky)" />

        {/* Slunce */}
        <g className="island-sun">
          <circle cx="500" cy="80" r="34" fill="oklch(0.88 0.12 90)" />
          <circle cx="500" cy="80" r="46" fill="oklch(0.88 0.12 90)" opacity="0.25" />
        </g>

        {/* Mraky */}
        <g className="island-cloud-1" opacity="0.85">
          <ellipse cx="0" cy="70" rx="38" ry="13" fill="white" />
          <ellipse cx="26" cy="62" rx="26" ry="11" fill="white" />
        </g>
        <g className="island-cloud-2" opacity="0.6">
          <ellipse cx="0" cy="120" rx="30" ry="10" fill="white" />
          <ellipse cx="-22" cy="126" rx="20" ry="8" fill="white" />
        </g>

        {/* Pták v dálce */}
        <g className="island-bird" stroke="oklch(0.45 0.03 220)" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <path d="M0 150 q6 -7 12 0 q6 -7 12 0" />
        </g>

        {/* Moře — zadní vlny (širší pruh, posouvá se) */}
        <g className="island-wave-back">
          <path
            d="M-90 312 q22 -10 45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 V400 H-90 Z"
            fill="url(#island-sea)"
            opacity="0.55"
          />
        </g>

        {/* Ostrov */}
        <g>
          <ellipse cx="370" cy="332" rx="150" ry="42" fill="url(#island-sand)" />
          <ellipse cx="370" cy="322" rx="118" ry="30" fill="oklch(0.9 0.05 88)" />
          {/* Trsy trávy */}
          <path d="M268 318 q-3 -10 2 -16 M274 318 q0 -11 6 -15 M280 318 q3 -9 -1 -16" stroke="oklch(0.55 0.12 145)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Mušle a kamínek */}
          <circle cx="430" cy="338" r="4" fill="oklch(0.8 0.04 60)" />
          <ellipse cx="320" cy="345" rx="6" ry="3.5" fill="oklch(0.72 0.03 90)" />
        </g>

        {/* Palma — kýve se celá od paty kmene */}
        <g className="island-palm">
          <path
            d="M318 322 C322 295 328 268 344 246"
            stroke="oklch(0.5 0.07 70)"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M321 305 h9 M325 285 h9 M330 266 h9" stroke="oklch(0.42 0.06 70)" strokeWidth="2" strokeLinecap="round" />
          {/* Listy */}
          <g fill="oklch(0.48 0.15 145)">
            <path d="M344 246 q-42 -26 -78 -8 q40 -10 78 16 Z" />
            <path d="M344 246 q-18 -42 -58 -48 q36 16 50 54 Z" />
            <path d="M344 246 q14 -44 54 -50 q-32 18 -44 56 Z" />
            <path d="M344 246 q44 -20 76 4 q-38 -14 -76 8 Z" />
            <path d="M344 246 q-2 -48 -28 -64 q14 28 18 66 Z" opacity="0.9" />
          </g>
          {/* Kokosy */}
          <circle cx="338" cy="250" r="6" fill="oklch(0.45 0.06 70)" />
          <circle cx="350" cy="253" r="6" fill="oklch(0.4 0.05 70)" />
        </g>

        {/* Cedule 404 */}
        <g className="island-sign">
          <rect x="428" y="268" width="8" height="56" rx="2" fill="oklch(0.5 0.07 70)" />
          <g transform="rotate(-4 432 252)">
            <rect x="392" y="234" width="80" height="38" rx="6" fill="oklch(0.62 0.08 75)" />
            <rect x="392" y="234" width="80" height="38" rx="6" fill="none" stroke="oklch(0.48 0.06 70)" strokeWidth="2.5" />
            <text
              x="432"
              y="261"
              textAnchor="middle"
              fontFamily="var(--font-serif)"
              fontSize="26"
              fontWeight="700"
              fill="oklch(0.32 0.04 70)"
            >
              404
            </text>
          </g>
          <circle cx="432" cy="240" r="2.5" fill="oklch(0.4 0.05 70)" />
        </g>

        {/* Vzkaz v láhvi — houpe se na vlnách */}
        <g className="island-bottle">
          <g transform="rotate(-18 120 318)">
            <rect x="100" y="306" width="40" height="17" rx="8" fill="oklch(0.78 0.06 170)" opacity="0.85" />
            <rect x="138" y="309.5" width="9" height="10" rx="2.5" fill="oklch(0.6 0.06 70)" />
            <rect x="108" y="309" width="18" height="11" rx="2" fill="oklch(0.93 0.03 90)" />
          </g>
        </g>

        {/* Moře — přední vlny */}
        <g className="island-wave-front">
          <path
            d="M-90 330 q22 -12 45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 V400 H-90 Z"
            fill="url(#island-sea)"
          />
          <path
            d="M-90 338 q22 -8 45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
          />
        </g>
      </g>
    </svg>
  )
}

export default function NotFoundIsland() {
  const { t } = useLanguage()

  const sceneTitle = t(
    "Ilustrace pustého ostrova s palmou, cedulí 404 a vzkazem v láhvi",
    "Illustration of a deserted island with a palm tree, a 404 sign and a message in a bottle",
  )

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
          >
            <TreePalm className="h-4 w-4 text-primary" aria-hidden />
            {t("Chyba 404 — ztroskotání", "Error 404 — shipwrecked")}
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mb-5 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            {t("Tento ostrov je pustý", "This island is deserted")}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="mx-auto mb-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            {t(
              "Stránku, kterou hledáš, odnesl odliv — nebo tu nikdy neztroskotala. Prohledali jsme každou palmu, ale našli jsme jen kokosy. A těch se nevzdáme.",
              "The page you're looking for was carried away by the tide — or it never washed ashore. We searched every palm tree but only found coconuts. And we're keeping those.",
            )}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button asChild size="lg">
              <Link href="/">
                <Compass className="h-5 w-5" aria-hidden />
                {t("Zpátky na pevninu", "Back to the mainland")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Mail className="h-5 w-5" aria-hidden />
                {t("Poslat vzkaz v láhvi", "Send a message in a bottle")}
              </Link>
            </Button>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-6 text-sm text-muted-foreground"
          >
            {t("…nebo prozkoumej naše skutečné ostrovy přírody — ", "…or explore our real islands of nature — ")}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              {t("lokality, o které pečujeme", "the sites we care for")}
            </Link>
            .
          </m.p>
        </div>

        {/* Ilustrace */}
        <m.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="order-1 lg:order-2"
        >
          <IslandScene title={sceneTitle} />
        </m.div>
      </div>
    </section>
  )
}
