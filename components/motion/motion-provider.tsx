"use client"

import type { ReactNode } from "react"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"

/**
 * Jediný obal aplikace pro animace. LazyMotion + domAnimation drží bundle malý
 * (používáme `m.*` komponenty místo `motion.*`). MotionConfig s reducedMotion="user"
 * automaticky respektuje systémové nastavení prefers-reduced-motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
