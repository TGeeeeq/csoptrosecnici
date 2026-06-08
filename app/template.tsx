"use client"

import type { ReactNode } from "react"
import { m } from "motion/react"

/**
 * Template (na rozdíl od layoutu) se při každé navigaci znovu připojí, takže
 * dává každé stránce čistý „enter" přechod. Exit přechody v App Routeru nejsou
 * spolehlivé, proto děláme jen nájezd.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}
