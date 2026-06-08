"use client"

import { m } from "motion/react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Animovaný SVG vlnový předěl mezi sekcemi. Barvu řídí `text-*` třída
 * (SVG používá fill="currentColor"). Vlna se jemně vlní do stran.
 * Dekorativní – aria-hidden, pointer-events-none.
 */
export function SectionDivider({
  className,
  flip = false,
}: {
  className?: string
  /** převrátit vlnu (pro spodní okraj sekce) */
  flip?: boolean
}) {
  const reduced = useReducedMotion()

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative left-0 right-0 -my-px w-full overflow-hidden leading-[0]",
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        className="relative block h-[60px] w-[calc(100%+1.3px)] md:h-[90px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <m.path
          d="M0,40 C150,90 350,0 600,40 C850,80 1050,10 1200,40 L1200,120 L0,120 Z"
          fill="currentColor"
          animate={reduced ? undefined : { d: [
            "M0,40 C150,90 350,0 600,40 C850,80 1050,10 1200,40 L1200,120 L0,120 Z",
            "M0,50 C180,10 360,90 600,50 C840,15 1020,85 1200,50 L1200,120 L0,120 Z",
            "M0,40 C150,90 350,0 600,40 C850,80 1050,10 1200,40 L1200,120 L0,120 Z",
          ] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}
