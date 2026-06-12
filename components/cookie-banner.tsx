"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import { AnimatePresence, m } from "motion/react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

const STORAGE_KEY = "cookie-notice-dismissed"

/**
 * Informační cookie lišta. Web nepoužívá žádné sledovací cookies
 * (Vercel Analytics je cookieless), takže podle § 89 odst. 3 zák.
 * č. 127/2005 Sb. není potřeba souhlas — lišta jen plní informační
 * povinnost a odkazuje na zásady ochrany osobních údajů.
 */
export function CookieBanner() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString())
    } catch {
      // localStorage nedostupné (private mode) — lišta se zobrazí příště znovu
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 64 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label={t("Informace o cookies", "Cookie notice")}
          className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-xl border border-border bg-background/95 p-4 shadow-2xl shadow-black/10 backdrop-blur supports-[backdrop-filter]:bg-background/85 sm:flex-row sm:items-center sm:gap-4">
            <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
              <Cookie className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "Tento web nepoužívá žádné sledovací ani marketingové cookies. Návštěvnost měříme anonymně bez cookies a ukládáme jen to, co je technicky nezbytné.",
                "This website uses no tracking or marketing cookies. We measure traffic anonymously without cookies and store only what is technically necessary.",
              )}{" "}
              <Link href="/privacy" className="font-medium text-primary underline-offset-4 hover:underline">
                {t("Více informací", "Learn more")}
              </Link>
            </p>
            <Button onClick={dismiss} size="sm" className="shrink-0 sm:ml-auto">
              {t("Rozumím", "Got it")}
            </Button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
