"use client"

import type { ReactNode } from "react"
import { m } from "motion/react"
import { Sparkles } from "@/components/motion/sparkles"
import { AnimatedGradient } from "@/components/motion/animated-gradient"
import { GradientText } from "@/components/motion/gradient-text"

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Jednotná animovaná hlavička podstránek (gradientové pozadí + jiskry +
 * animovaný nadpis). Používá se na většině stránek pro konzistenci.
 */
export function PageHeader({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/20 py-20">
      <AnimatedGradient className="opacity-60" />
      <Sparkles count={20} color="oklch(0.5 0.15 145 / 0.45)" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <m.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease }}
          className="mb-4 text-balance font-serif text-4xl font-bold lg:text-5xl"
        >
          <GradientText>{title}</GradientText>
        </m.h1>
        {subtitle && (
          <m.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground"
          >
            {subtitle}
          </m.p>
        )}
      </div>
    </section>
  )
}
