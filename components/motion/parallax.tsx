"use client"

import { useRef, type ReactNode } from "react"
import { m, useScroll, useTransform } from "motion/react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Parallax vrstva navázaná na scroll. Vnitřní obsah se posouvá pomaleji než
 * stránka, čímž vzniká hloubka (typicky pozadí hera). Při reduced-motion stojí.
 */
export function Parallax({
  children,
  className,
  /** o kolik px se vrstva posune napříč celým rozsahem scrollu */
  offset = 120,
}: {
  children: ReactNode
  className?: string
  offset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <m.div style={{ y: reduced ? 0 : y }} className="absolute inset-0 h-full w-full">
        {children}
      </m.div>
    </div>
  )
}
