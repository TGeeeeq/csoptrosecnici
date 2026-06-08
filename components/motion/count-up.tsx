"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useMotionValue } from "motion/react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Animované odpočítání čísla při zobrazení ve viewportu. Zvládne řetězce jako
 * "30+", "120ha", "18ha", "7" i "11+8" – animuje úvodní celé číslo a zbytek
 * ponechá jako statickou příponu. Respektuje reduced-motion (ukáže rovnou cíl).
 */
export function CountUp({
  value,
  className,
  duration = 1.8,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reduced = useReducedMotion()
  const mv = useMotionValue(0)

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number.parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ""

  const [display, setDisplay] = useState(() => (match ? "0" : value))

  useEffect(() => {
    if (!match) return
    if (!inView) return
    if (reduced) {
      setDisplay(String(target))
      return
    }
    const controls = animate(mv, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    })
    return () => controls.stop()
  }, [inView, reduced, target, match, duration, mv])

  return (
    <span ref={ref} className={cn(className)}>
      {match ? `${display}${suffix}` : value}
    </span>
  )
}
