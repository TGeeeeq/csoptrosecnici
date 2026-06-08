"use client"

import type { ReactNode } from "react"
import { m } from "motion/react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** zpoždění startu animace v sekundách */
  delay?: number
  /** počáteční posun zdola (px) */
  y?: number
  /** jednorázově (default) nebo opakovaně */
  once?: boolean
}

/**
 * Nájezd obsahu při scrollování do viewportu: fade + jemný posun zdola.
 * GPU-friendly (jen opacity/transform). Respektuje reduced-motion přes MotionConfig.
 */
export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}
