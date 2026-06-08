"use client"

import { useMemo } from "react"
import { m } from "motion/react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Dekorativní vrstva poletujících „jisker / pylu / světlušek". Pozice jsou
 * memoizované (stabilní). Čistě dekorativní – aria-hidden, pointer-events-none.
 * Při reduced-motion se nevykreslí vůbec.
 */
export function Sparkles({
  count = 26,
  className,
  color = "rgba(255,255,255,0.9)",
}: {
  count?: number
  className?: string
  color?: string
}) {
  const reduced = useReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 40,
      })),
    [count],
  )

  if (reduced) return null

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((p) => (
        <m.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 2.5}px ${color}`,
          }}
          initial={{ opacity: 0, y: 0, x: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -40, -80],
            x: [0, p.drift, p.drift * 1.4],
            scale: [0.4, 1, 0.4],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
