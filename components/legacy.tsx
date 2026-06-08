"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Reveal } from "@/components/motion/reveal"
import { GradientText } from "@/components/motion/gradient-text"

export default function Legacy() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-br from-accent/30 via-background to-secondary/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border-2 border-primary/30 bg-card shadow-xl">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden bg-muted md:aspect-auto">
                <Image
                  src="/images/karel-malek.jpg"
                  alt={t("Karel Málek – Charlie, zakladatel ČSOP Trosečníci", "Karel Málek – Charlie, founder of ČSOP Trosečníci")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h2 className="mb-4 text-balance font-serif text-3xl font-bold lg:text-4xl">
                  <GradientText>{t("Charlieho odkaz žije dál", "Charlie's Legacy Lives On")}</GradientText>
                </h2>
                <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                  {t(
                    'Naše organizace byla založena Karlem Málkem "Charliem", který zasvětil svůj život ochraně ostrovské přírody. Jeho vize a nadšení nás inspirují dodnes.',
                    'Our organization was founded by Karel Málek "Charlie", who dedicated his life to protecting Ostrov\'s nature. His vision and enthusiasm continue to inspire us today.',
                  )}
                </p>
                <Button asChild size="lg" className="btn-shine w-fit shadow-md shadow-primary/20">
                  <Link href="/karel">
                    <Heart className="mr-2 h-5 w-5" />
                    {t("Více o Charliem", "More about Charlie")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
