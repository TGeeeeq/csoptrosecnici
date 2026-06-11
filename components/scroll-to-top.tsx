"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Next.js po navigaci skroluje na začátek nového segmentu, což se sticky
 * navigací končí kousek pod vrškem dokumentu. Tady po každé změně cesty
 * resetujeme scroll okamžitě a úplně nahoru.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return null
}
