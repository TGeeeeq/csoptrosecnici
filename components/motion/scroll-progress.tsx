"use client"

import { m, useScroll, useSpring } from "motion/react"

/**
 * Tenký ukazatel průběhu scrollování přilepený k hornímu okraji okna.
 * Dekorativní – aria-hidden.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-primary via-emerald-400 to-primary"
    />
  )
}
