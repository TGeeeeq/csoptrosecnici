"use client"

import Image from "next/image"
import { Mail, Landmark, ZoomInIcon, Users, Heart, Instagram, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { ContactForm } from "@/components/contact-form"
import { SITE } from "@/lib/seo"

export default function ContactView() {
  const { t } = useLanguage()

  const ways = [
    {
      icon: ZoomInIcon,
      title: t("Exkurze", "Excursions"),
      description: t("Provázíme školy i veřejnost.", "Guided tours for schools and the public."),
    },
    {
      icon: Users,
      title: t("Členství", "Membership"),
      description: t("Staňte se členem.", "Become a member."),
    },
    {
      icon: Heart,
      title: t("Podpora", "Support"),
      description: t("Darujte na ochranu přírody.", "Donate to nature conservation."),
    },
  ]

  return (
    <>
      <PageHeader title={t("Kontaktujte nás", "Contact Us")} subtitle={t("Připojte se k nám", "Join us")} />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid items-start gap-12 lg:grid-cols-2">
            {/* Kontaktní údaje (vždy viditelné) */}
            <Reveal className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-lg">
                <Image
                  src="/images/kontakt.png"
                  alt={t("Náš psí parťák na posečené louce", "Our dog companion on a mown meadow")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <Card className="border-2 border-primary/30 shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-xl font-bold">Email</h3>
                      <a href="mailto:csoptrosecnici@seznam.cz" className="text-muted-foreground transition-colors hover:text-primary">
                        csoptrosecnici@seznam.cz
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Landmark className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-xl font-bold">{t("Bankovní účet", "Bank Account")}</h3>
                      <p className="text-muted-foreground">236201335 / 0300</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-xl font-bold">Instagram</h3>
                      <span className="text-muted-foreground transition-colors hover:text-primary">{SITE.instagramHandle}</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6">
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1877F2] text-white">
                      <Facebook className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-xl font-bold">Facebook</h3>
                      <span className="text-muted-foreground transition-colors hover:text-primary">{SITE.name}</span>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </Reveal>

            {/* Formulář */}
            <Reveal delay={0.1}>
              <Card className="border-2 border-primary/30 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="mb-2 font-serif text-2xl font-bold">{t("Napište nám", "Write to us")}</h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {t(
                      "Máte dotaz, chcete se zapojit nebo nás podpořit? Ozvěte se.",
                      "Have a question, want to get involved or support us? Get in touch.",
                    )}
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <Stagger className="grid gap-8 md:grid-cols-3">
            {ways.map((way, index) => (
              <StaggerItem key={index}>
                <Card className="h-full border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <way.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-bold">{way.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{way.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
