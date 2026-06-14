"use client"

import Link from "next/link"
import Image from "next/image"
import { Leaf, Mail, MapPin, Landmark, Instagram, Facebook, ArrowUpRight, HandHeart } from "lucide-react"
import { useLanguage } from "./language-provider"
import { SITE } from "@/lib/seo"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function Footer() {
  const { t } = useLanguage()

  const navItems = [
    { href: "/about", label: t("O nás", "About Us") },
    { href: "/locations", label: t("Lokality", "Locations") },
    { href: "/projects", label: t("Projekty", "Projects") },
    { href: "/karel", label: t("O Karlu Málkovi", "About Karel Málek") },
    { href: "/letter", label: t("Charlieho dopis", "Charlie's Letter") },
    { href: "/gallery", label: t("Galerie", "Gallery") },
    { href: "/contact", label: t("Kontakt", "Contact") },
  ]

  const columnTitle = "mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/60"

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[oklch(0.28_0.06_148)] to-[oklch(0.18_0.05_152)] text-white/75">
      {/* animovaná "rosa" na horní hraně */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="footer-shimmer-line h-full w-full" />
      </div>

      {/* dekorativní plující listy */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Leaf className="animate-leaf-drift absolute left-[6%] top-16 h-12 w-12 text-emerald-200/[0.07]" />
        <Leaf className="animate-leaf-drift absolute right-[10%] top-32 h-20 w-20 -scale-x-100 text-emerald-200/[0.05] [animation-delay:-3.5s]" />
        <Leaf className="animate-leaf-drift absolute bottom-20 left-[42%] h-14 w-14 rotate-45 text-emerald-200/[0.04] [animation-delay:-7s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.2fr] lg:gap-8">
          {/* Značka */}
          <StaggerItem>
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ČSOP Trosečníci logo"
                width={61}
                height={40}
                className="h-10 w-auto transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:scale-105"
              />
              <span className="font-serif text-2xl font-bold text-white">ZO ČSOP Trosečníci</span>
            </Link>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/60">
              {t(
                "Pečujeme o přírodu a krajinu Ostrovské kotliny u Lanškrouna — od mokřadů a rybníků po vřesoviště, ve stopách Karla Málka.",
                "We care for the nature and landscape of the Ostrov basin near Lanškroun — from wetlands and ponds to heathland, following in Karel Málek's footsteps.",
              )}
            </p>
            <p className="mt-5 text-xs tracking-wide text-white/40">{t("IČO 64772390", "Company ID 64772390")}</p>
            <p className="mt-2 text-xs leading-relaxed text-white/40">
              <Link href="/projects#financovani" className="underline-offset-4 transition-colors hover:text-white/70 hover:underline">
                {t(
                  "Péči o krajinu financuje Program péče o krajinu MŽP se spolufinancováním SFŽP ČR a obce Ostrov.",
                  "Landscape care is funded by the Ministry of the Environment's Landscape Management Programme, co-financed by the State Environmental Fund and the municipality of Ostrov.",
                )}
              </Link>
            </p>
          </StaggerItem>

          {/* Navigace */}
          <StaggerItem>
            <p className={columnTitle}>{t("Navigace", "Navigation")}</p>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-emerald-300/70 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Kontakt */}
          <StaggerItem>
            <p className={columnTitle}>{t("Kontakt", "Contact")}</p>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-3 text-white/65 transition-colors hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 transition-colors group-hover:bg-emerald-400/15 group-hover:ring-emerald-300/30">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10">
                  <Landmark className="h-4 w-4" />
                </span>
                <span>
                  {t("Účet", "Account")} {SITE.bankAccount}
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  {SITE.locality}, {SITE.region}
                </span>
              </li>
            </ul>
          </StaggerItem>

          {/* Sledujte nás + zapojení */}
          <StaggerItem>
            <p className={columnTitle}>{t("Sledujte nás", "Follow Us")}</p>
            <div className="space-y-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${SITE.instagramHandle}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/20"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Instagram className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm text-white/75 transition-colors group-hover:text-white">{SITE.instagramHandle}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 -translate-x-1 text-emerald-300/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-emerald-300/90" />
              </a>
              {SITE.facebook && (
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook ČSOP Trosečníci"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/20"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Facebook className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm text-white/75 transition-colors group-hover:text-white">ČSOP Trosečníci</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 -translate-x-1 text-emerald-300/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-emerald-300/90" />
                </a>
              )}
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/15"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <HandHeart className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm text-emerald-100/90">
                  {t("Hledáme dobrovolníky", "We're looking for volunteers")}
                </span>
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        {/* spodní lišta */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} ZO ČSOP Trosečníci. {t("Všechna práva vyhrazena.", "All rights reserved.")}{" "}
            <Link href="/privacy" className="underline-offset-4 transition-colors hover:text-white/80 hover:underline">
              {t("Ochrana osobních údajů", "Privacy policy")}
            </Link>
          </p>
          <p className="inline-flex items-center gap-2">
            <Leaf className="animate-leaf-sway h-3.5 w-3.5 text-emerald-300/80" />
            {t("S láskou k přírodě Ostrovské kotliny", "With love for the nature of the Ostrov basin")}
          </p>
        </div>

        {/* podpis tvůrce webu */}
        <div className="flex justify-center border-t border-white/10 py-5">
          <a
            href="https://www.antoninfigueroa.cz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web vytvořil Antonín Figueroa"
            className="group inline-flex items-center gap-2.5 text-xs text-white/40 transition-colors duration-300 hover:text-white/75"
          >
            <span className="overflow-hidden rounded-full ring-1 ring-white/10 transition-all duration-300 group-hover:ring-amber-300/40">
              <Image
                src="/images/af-logo-dark.svg"
                alt="Antonín Figueroa"
                width={24}
                height={24}
                className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
              />
            </span>
            <span className="tracking-wide">
              {t("Web vytvořil", "Website by")}{" "}
              <span className="font-medium text-white/55 transition-colors group-hover:text-amber-200/90">
                Antonín Figueroa
              </span>
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-amber-300/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-amber-300/80" />
          </a>
        </div>
      </div>
    </footer>
  )
}
