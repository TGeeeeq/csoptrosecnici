"use client"

import { useLanguage } from "./language-provider"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { CountUp } from "@/components/motion/count-up"
import { Sparkles } from "@/components/motion/sparkles"

export default function Stats() {
  const { t } = useLanguage()

  const stats = [
    { number: "30+", label: t("let činnosti", "years of activity") },
    { number: "11+8", label: t("VKP (+navrhovaných)", "VKP (+proposed)") },
    { number: "120ha", label: t("chráněné přírody", "of protected nature") },
    { number: "7", label: t("biokoridorů", "biocorridors") },
    { number: "18ha", label: t("ručně sečeno ročně", "hand-cut annually") },
  ]

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      <Sparkles count={18} color="rgba(255,255,255,0.5)" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-1 gap-8 divide-y divide-primary-foreground/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="pt-8 text-center first:pt-0 sm:px-6 sm:pt-0 lg:px-4">
              <div className="mb-3 font-serif text-5xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
                <CountUp value={stat.number} />
              </div>
              <div className="text-sm leading-relaxed text-primary-foreground/90 lg:text-xs xl:text-sm">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
