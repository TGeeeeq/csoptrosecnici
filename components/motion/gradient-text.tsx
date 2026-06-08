import type { ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Nadpis s plynule „přelévajícím se" gradientem (shimmer). Animace je CSS
 * (utilita .text-shimmer v globals.css), takže funguje i bez JS a vypne se
 * při reduced-motion. Renderovatelné jako libovolný tag přes `as`.
 */
export function GradientText({
  children,
  className,
  as: Tag = "span",
}: {
  children: ReactNode
  className?: string
  as?: ElementType
}) {
  return <Tag className={cn("text-shimmer", className)}>{children}</Tag>
}
