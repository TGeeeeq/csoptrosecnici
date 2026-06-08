"use client"

import { Leaf, Mail, Instagram } from "lucide-react"
import { useLanguage } from "./language-provider"
import { SITE } from "@/lib/seo"
import { Reveal } from "@/components/motion/reveal"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-serif text-xl font-bold text-foreground">ZO ČSOP Trosečníci</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{t("IČO: 64772390", "ID: 64772390")}</p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:csoptrosecnici@seznam.cz" className="transition-colors hover:text-primary">
                    csoptrosecnici@seznam.cz
                  </a>
                </p>
                <p>{t("Číslo účtu: 236201335 / 0300", "Account Number: 236201335 / 0300")}</p>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  {SITE.instagramHandle}
                </a>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="text-pretty">
                {t("Nabízíme komentovanou prohlídku ostrovské přírody", "We offer guided tours of Ostrov's nature")}
              </p>
              <p className="text-pretty">
                {t("Hledáme dobrovolníky, sponzory, kolegy", "We are looking for volunteers, sponsors, colleagues")}
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="font-semibold text-foreground">{t("Sledujte nás", "Follow us")}</p>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @csoptrosecnici"
                className="group inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white transition-transform group-hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">{SITE.instagramHandle}</span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ČSOP Trosečníci. {t("Všechna práva vyhrazena.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}
