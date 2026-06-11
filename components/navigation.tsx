"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, m } from "motion/react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("Úvod", "Home") },
    { href: "/about", label: t("O nás", "About Us") },
    { href: "/locations", label: t("Lokality", "Locations") },
    { href: "/projects", label: t("Projekty", "Projects") },
    { href: "/karel", label: t("O Karlu Málkovi", "About Karel Málek") },
    { href: "/letter", label: t("Charlieho dopis", "Charlie's Letter") },
    { href: "/gallery", label: t("Galerie", "Gallery") },
    { href: "/contact", label: t("Kontakt", "Contact") },
  ]

  // Při přechodu na jinou stránku scroll resetuje <ScrollToTop /> v layoutu;
  // plynule skrolujeme jen při kliknutí na odkaz stránky, na které už jsme.
  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href === pathname) window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 supports-[backdrop-filter]:bg-background/80",
        scrolled ? "border-border bg-background/90 shadow-sm" : "border-transparent bg-background/70",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn("flex items-center justify-between transition-all duration-300", scrolled ? "h-14" : "h-16")}>
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 transition-opacity hover:opacity-90" onClick={() => handleNavClick("/")}>
            <Image
              src="/images/logo.png"
              alt="ČSOP Trosečníci logo"
              width={40}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="font-serif text-xl font-bold text-foreground">ČSOP Trosečníci</span>
          </Link>

          {/* Desktop navigace */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "cs" ? "en" : "cs")}
              className="ml-2 font-semibold"
            >
              {language === "cs" ? "EN" : "CS"}
            </Button>
          </div>

          {/* Mobilní tlačítka */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "cs" ? "en" : "cs")}
              className="font-semibold"
            >
              {language === "cs" ? "EN" : "CS"}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu" aria-expanded={isOpen}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobilní navigace */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
