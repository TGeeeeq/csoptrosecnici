"use client"

import { Shield, Droplet, Trees, Bird, Fence, Microscope } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "./language-provider"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { GradientText } from "@/components/motion/gradient-text"

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t("Péče o biotopy", "Habitat Care"),
      description: t(
        "Pravidelně se staráme o lesy, louky, mokřady a další cenné biotopy v regionu. Vytváříme a udržujeme ekosystémy prospěšné pro ohrožené druhy rostlin a živočichů.",
        "We regularly care for forests, meadows, wetlands and other valuable habitats in the region. We create and maintain ecosystems beneficial for endangered plant and animal species.",
      ),
      image: "/images/nature-reserve.jpg",
    },
    {
      icon: Droplet,
      title: t("Péče o louky a mokřady", "Meadow and Wetland Care"),
      description: t(
        "Věnujeme se péči o louky a mokřady, které jsou významné pro biodiverzitu a zachování vzácných druhů rostlin a živočichů.",
        "We care for meadows and wetlands that are significant for biodiversity and preservation of rare plant and animal species.",
      ),
      image: "/images/wetland-restoration.jpg",
    },
    {
      icon: Fence,
      title: t("Objasňování práce veřejnosti", "Public Outreach"),
      description: t(
        "Objasňujeme smysl naší práce veřejnosti, provádíme děti lokalitami a organizujeme komentované procházky.",
        "We explain the purpose of our work to the public, guide children through sites, and organize commented walks.",
      ),
      image: "/images/cedule.JPG",
    },
    {
      icon: Microscope,
      title: t("Monitoring a ochrana", "Monitoring and Protection"),
      description: t(
        "Monitorujeme vzácná rostlinná a živočišná společenstva, sledujeme stav biotopů a podnikáme kroky pro jejich ochranu před znečištěním a ztrátami.",
        "We monitor rare plant and animal communities, track habitat conditions, and take steps to protect them from pollution and losses.",
      ),
      image: "/images/monitoring.jpg",
    },
    {
      icon: Bird,
      title: t("Ochrana ptačího hnízdění", "Bird Nesting Protection"),
      description: t(
        "Chráníme ptačí hnízda a biotopy důležitých druhů ptáků v regionu. Spolupracujeme s ornitology a podnikáme kroky k zachování ptačí biodiverzity.",
        "We protect bird nests and habitats of important bird species in the region. We collaborate with ornithologists and take steps to preserve bird biodiversity.",
      ),
      image: "/images/hnizdeni.JPEG",
    },
    {
      icon: Trees,
      title: t("Obnova lesních ekosystémů", "Forest Ecosystem Restoration"),
      description: t(
        "Pracujeme na obnově a revitalizaci lesních porostů a obnově biodiverzity v lesích Lanškrounska. Vytváříme podmínky pro zdravý rozvoj lesů a zvyšujeme odolnost ekosystémů proti klimatické změně.",
        "We work on restoration and revitalization of forest stands and biodiversity renewal in Lanškroun forests. We create conditions for healthy forest development and increase ecosystem resilience to climate change.",
      ),
      image: "/images/forest-restoration.jpg",
    },
  ]

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="text-balance font-serif text-4xl font-bold lg:text-5xl">
            <GradientText>{t("Naše hlavní aktivity", "Our Main Activities")}</GradientText>
          </h2>
        </Reveal>

        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="group h-full overflow-hidden border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 transition-colors duration-300 group-hover:bg-primary/20">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
