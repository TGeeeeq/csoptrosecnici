"use client"

import Image from "next/image"
import {
  Droplet,
  TreeDeciduous,
  CheckCircle2,
  Sprout,
  Fence,
  Cog as Cow,
  MapPin,
  Mountain,
  Trash2,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function ProjectsView() {
  const { t } = useLanguage()

  const ongoingProjects = [
    {
      icon: Droplet,
      title: t("Obnova mokřadů", "Wetland Restoration"),
      description: t("Revitalizace vodního režimu a podpora biodiverzity.", "Revitalization of water regime and biodiversity support."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Sprout,
      title: t("Zabranování zarůstání", "Preventing Overgrowth"),
      description: t("Ruční seč a údržba lučních porostů.", "Manual mowing and meadow maintenance."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Droplet,
      title: t("Čištění tůní", "Pond Cleaning"),
      description: t("Údržba a čištění vodních ploch.", "Maintenance and cleaning of water bodies."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Droplet,
      title: t("Správa Rudoltičky", "Rudoltička Stream Management"),
      description: t("Údržba revitalizovaného mokřadního toku Rudoltičky.", "Management of revitalized wetland stream."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Fence,
      title: t("Kontrola oplocenek", "Fence Inspection"),
      description: t("Kontrola a oprava oplocenek a pletiva u mladých stromů.", "Inspection and repair of fencing around young trees."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Cow,
      title: t("Pastva skotu na Kaštánku", "Cattle Grazing at Kaštánek"),
      description: t("Pastva náhorním skotským plemenem na PR U Kaštánku.", "Highland cattle grazing at Kaštánek Nature Reserve."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: MapPin,
      title: t("Obnova hraničních kůlů", "Boundary Marker Restoration"),
      description: t("Obnova a údržba hraničních značení.", "Restoration and maintenance of boundary markers."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: TreeDeciduous,
      title: t("Výsadba doprovodných dřevin", "Companion Tree Planting"),
      description: t("Výsadba původních dřevin pro obnovu ekosystémů.", "Planting native trees for ecosystem restoration."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Trash2,
      title: t("Kompostování biomateriálu", "Biomaterial Composting"),
      description: t("Zpracování organického materiálu z terénu.", "Processing organic material from the field."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Cow,
      title: t("Pastva koňmi", "Horse Grazing"),
      description: t("Údržba luk pastevními koňmi.", "Meadow maintenance with grazing horses."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Shield,
      title: t("Boj s invazivními rostlinami", "Invasive Species Control"),
      description: t("Odstranění invazivních druhů jako turanky kanadské.", "Removal of invasive species such as Canada goldenrod."),
      status: t("Probíhá", "Active"),
    },
    {
      icon: Mountain,
      title: t("Individuální péče o chráněné druhy", "Individual Care for Protected Species"),
      description: t("Péče o druhy na červeném seznamu.", "Care for red-list species."),
      status: t("Probíhá", "Active"),
    },
  ]

  const completedProjects = [
    {
      title: t("Projekty 2023", "2023 Projects"),
      subtitle: t(
        "4 tůně v PR U kaštánku, hráz s tůní v PP U vodárny, výsadba lesa zvláštního určení vč. následné péče, vyčištění louky u Bendova rybníku od kušiny.",
        "4 ponds at Kaštánek Reserve, dam with pond at Vodárna Monument, special purpose forest planting with care, clearing meadow at Bendův pond.",
      ),
    },
    {
      title: t("Sezóna 2025", "Season 2025"),
      subtitle: t(
        "Ruční seč cca 18ha vč. úklidu, pasení cca 10ha prvním rokem na Kaštánku, dokončená revitalizace potoka Rudoltička, příprava vodních ploch pro hnízdění ptactva, boj s turankou kanadskou, rákosem a třtinou. Volně žijící mufloni cca 8ks na Kaštánku.",
        "Manual mowing of ~18ha incl. cleanup, grazing ~10ha first year at Kaštánek, completed Rudoltička stream revitalization, water body preparation for bird nesting, control of Canadian goldenrod, reeds and cane. Free-living mouflon ~8 individuals at Kaštánek.",
      ),
    },
    {
      title: t("Informační tabule", "Information Boards"),
      subtitle: t("Instalace 2021", "Installed 2021"),
    },
  ]

  return (
    <>
      <PageHeader title={t("Naše Projekty", "Our Projects")} subtitle={t("Aktuální činnost v terénu", "Current fieldwork")} />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-lg">
              <Image
                src="/images/projekty.jpg"
                alt={t("Přírodní rezervace – projekty Trosečníků", "Nature reserve – Trosečníci projects")}
                fill
                sizes="(max-width: 1024px) 100vw, 80rem"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <div className="mb-16">
            <Reveal>
              <h2 className="mb-8 font-serif text-3xl font-bold">{t("Běžící projekty", "Ongoing Projects")}</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ongoingProjects.map((project, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="rounded-lg bg-primary/10 p-3">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge className="bg-primary">{project.status}</Badge>
                      </div>
                      <h3 className="mb-2 font-serif text-xl font-bold">{project.title}</h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal>
              <h2 className="mb-8 font-serif text-3xl font-bold">{t("Dokončeno", "Completed")}</h2>
            </Reveal>
            <Stagger className="space-y-4">
              {completedProjects.map((project, index) => (
                <StaggerItem key={index}>
                  <Card className="border-2 border-primary/30 shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                        <div>
                          <h4 className="mb-1 font-serif text-lg font-bold">{project.title}</h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">{project.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  )
}
