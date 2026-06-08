"use client"

import Link from "next/link"
import Image from "next/image"
import { m } from "motion/react"
import { Button } from "@/components/ui/button"
import { Mail, Info, ChevronDown } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Parallax } from "@/components/motion/parallax"
import { Sparkles } from "@/components/motion/sparkles"
import { AnimatedGradient } from "@/components/motion/animated-gradient"

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      {/* Parallax pozadí */}
      <Parallax className="absolute inset-0" offset={120}>
        <Image
          src="/images/uvodni.jpg"
          alt={t("Jarní les s kvetoucími sasankami", "Spring forest with blooming anemones")}
          fill
          priority
          sizes="100vw"
          className="scale-125 object-cover blur-[2px]"
        />
      </Parallax>

      {/* Ztmavení + animovaný barevný nádech + poletující jiskry */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/65" />
      <AnimatedGradient className="opacity-70 mix-blend-soft-light" />
      <Sparkles count={32} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <m.h1
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease }}
          className="mb-6 text-balance font-serif text-5xl font-bold text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
        >
          ČSOP Trosečníci
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mx-auto mb-4 max-w-3xl text-balance text-xl text-white/95 drop-shadow-md sm:text-2xl"
        >
          {t("Ochrana přírody v Ostrově u Lanškrouna", "Nature Conservation in Ostrov near Lanškroun")}
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease }}
          className="mx-auto mb-10 max-w-3xl text-pretty text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg"
        >
          {t(
            "Věnujeme se podpoře biodiverzity a zachování, snad i zlepšení dosaženého rázu ostrovské přírody po Karlovi Málkovi, který toto vše zapříčinil.",
            "We are dedicated to supporting biodiversity and preserving, perhaps even improving, the achieved character of Ostrov's nature following Karel Málek, who made all this possible.",
          )}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46, ease }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="btn-shine min-w-[160px] shadow-lg shadow-primary/30">
            <Link href="/about">
              <Info className="mr-2 h-5 w-5" />
              {t("Více o nás", "Learn More")}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-shine min-w-[160px] border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              {t("Kontaktujte nás", "Contact Us")}
            </Link>
          </Button>
        </m.div>
      </div>

      {/* Indikátor scrollování */}
      <m.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <m.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8, ease: "easeInOut" }}>
          <ChevronDown className="h-7 w-7 text-white/80" />
        </m.div>
      </m.div>
    </section>
  )
}
