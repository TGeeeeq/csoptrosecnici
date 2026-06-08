"use client"

import { cn } from "@/lib/utils"

/**
 * Plynule se pohybující barevný gradient (zelené přírodní odstíny).
 * Dekorativní vrstva – aria-hidden. Animace je čistě CSS (viz globals.css:
 * utilita .bg-animated-gradient + @keyframes gradient-pan), takže je levná
 * a sama se vypne při prefers-reduced-motion.
 */
export function AnimatedGradient({ className }: { className?: string }) {
  return <div aria-hidden className={cn("bg-animated-gradient pointer-events-none absolute inset-0", className)} />
}
