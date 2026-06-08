"use client"

import { useReducedMotion as useMotionReducedMotion } from "motion/react"

/**
 * Vrací true, pokud uživatel preferuje omezený pohyb (prefers-reduced-motion).
 * Wrapper nad motion hookem – během SSR vrací false (žádné omezení) jako default.
 */
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false
}
