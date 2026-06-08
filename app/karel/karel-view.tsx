"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HandHeartIcon, Mail, Download, Heart, TreePine, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function KarelView() {
  const { t } = useLanguage()

  const achievements = [
    {
      icon: TreePine,
      title: t("Založení ČSOP Trosečníci", "Founded ČSOP Trosečníci"),
      description: t(
        "V 90. letech založil ČSOP Trosečníci a spolu s přáteli se podílel na obnově krajiny a zušlechtění přírody.",
        "In the 90s, he founded ČSOP Trosečníci and together with friends participated in landscape restoration and nature enhancement.",
      ),
    },
    {
      icon: Heart,
      title: t("Život v souladu s přírodou", "Life in Harmony with Nature"),
      description: t(
        "Mnoho let žil ve srubu bez elektřiny, v naprostém souladu se svými principy a téměř denně pracoval pro přírodu.",
        "For many years he lived in a cabin without electricity, in complete harmony with his principles and worked for nature almost daily.",
      ),
    },
    {
      icon: BookOpen,
      title: t("Dokumentace biodiverzity", "Biodiversity Documentation"),
      description: t(
        "Provedl průzkum místní přírody, spolupracoval s odborníky a nechal zaregistrovat mnoho prvků ÚSES.",
        "He conducted surveys of local nature, collaborated with experts and had many elements of the Territorial System of Ecological Stability registered.",
      ),
    },
  ]

  return (
    <>
      <PageHeader
        title={t("O Karlu Málkovi", "About Karel Málek")}
        subtitle={t("Výjimečný ochránce přírody ostrovské kotliny", "Exceptional protector of nature in the Ostrov basin")}
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/20 to-primary/5 p-8 lg:p-12">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-2 font-serif text-3xl font-bold">{t('Karel Málek "Charlie"', 'Karel Málek "Charlie"')}</h2>
                  <p className="mb-6 font-semibold text-primary">{t("Zakladatel ČSOP Trosečníci", "Founder of ČSOP Trosečníci")}</p>
                  <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                    <div className="mb-2 text-4xl text-primary/20">&ldquo;</div>
                    <blockquote className="mb-2 text-pretty italic leading-relaxed text-foreground/90">
                      {t(
                        "Skutečný ochránce přírody nepotřebuje akademické tituly, ale srdce, které cítí každý strom, každou bylinu.",
                        "A true nature conservationist doesn't need academic titles, but a heart that feels every tree, every herb.",
                      )}
                    </blockquote>
                    <cite className="text-sm font-semibold not-italic text-foreground">- Karel Málek</cite>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-muted shadow-lg">
                  <Image
                    src="/images/karel-malek.jpg"
                    alt={t("Karel Málek – Charlie", "Karel Málek – Charlie")}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mb-12">
            <h2 className="mb-6 font-serif text-3xl font-bold">{t("Cesta ochránce přírody", "Journey of a Nature Protector")}</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p className="text-pretty">
                {t(
                  "Karel Málek byl výjimečný ochránce přírody, jehož život byl hluboce spjatý s ostrovskou kotlinou. Navzdory systémovým překážkám zasvětil svůj život ochraně místní krajiny a dokázal to, co málokdo v ČR v rámci revitalizace přírody.",
                  "Karel Málek was an exceptional nature conservationist whose life was deeply connected to the Ostrov basin. Despite systemic obstacles, he dedicated his life to protecting the local landscape and accomplished what few in the Czech Republic have achieved in nature revitalization.",
                )}
              </p>
              <p className="text-pretty">
                {t(
                  "Původně dřevorubec, absolvent lesnické školy, Karel Málek alias Charlie vnímal přírodu jako živý organismus. V devadesátých letech založil ČSOP Trosečníci a spolu s dalšími přáteli - Trosečníky se podíleli na obnově krajiny a zušlechtění přírody. Provedl průzkum skoro všeho, co se v ostrovské přírodě dalo najít. Spolupracoval s předními odborníky a nechal zaregistrovat mnoho prvků Územního systému ekologické stability (ÚSES).",
                  "Originally a woodcutter and graduate of a forestry school, Karel Málek, aka Charlie, perceived nature as a living organism. In the 1990s, he founded ČSOP Trosečníci and together with other friends - the Trosečníci - participated in landscape restoration and nature enhancement. He surveyed almost everything that could be found in Ostrov's nature. He collaborated with leading experts and had many elements of the Territorial System of Ecological Stability (ÚSES) registered.",
                )}
              </p>
            </div>
          </Reveal>

          <Reveal className="mb-12">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
              <h2 className="mb-6 font-serif text-3xl font-bold">{t("Filosofie ochrany přírody", "Philosophy of Nature Conservation")}</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p className="text-pretty">
                  {t(
                    'Charlie věřil v sílu, kterou nazýval "Wakantanka" - Velké tajemství. Necítil se být majitelem přírody, ale jejím nástrojem a ochráncem. Mnoho let žil ve srubu bez elektřiny, v naprostém souladu se svými principy a téměř denně pracoval pro přírodu.',
                    'Charlie believed in a force he called "Wakantanka" - the Great Mystery. He did not feel like the owner of nature, but its instrument and protector. For many years he lived in a cabin without electricity, in complete harmony with his principles and worked for nature almost daily.',
                  )}
                </p>
                <p className="text-pretty">
                  {t(
                    "Pro Charlieho nešlo jen o vědecký přístup, ale o hluboký citový vztah k místu. Každá lokalita v ostrovské kotlině měla pro něj svůj příběh, každý strom a keř byl součástí komplexního ekosystému, který je třeba chránit.",
                    "For Charlie, it wasn't just about a scientific approach, but a deep emotional relationship with the place. Every location in the Ostrov basin had its own story for him, every tree and shrub was part of a complex ecosystem that needed to be protected.",
                  )}
                </p>
                <p className="text-pretty">
                  {t(
                    "Charlie ukazoval, že skutečný ochránce přírody nepotřebuje akademické tituly, ale srdce, které cítí každý strom, každou bylinu. Jeho odkaz zůstává živým svědectvím toho, jak jedna výjimečná osobnost může změnit pohled na ochranu místního ekosystému.",
                    "Charlie showed that a true nature conservationist doesn't need academic titles, but a heart that feels every tree, every herb. His legacy remains a living testament to how one exceptional personality can change the perspective on protecting the local ecosystem.",
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mb-12">
            <Reveal>
              <h2 className="mb-8 font-serif text-3xl font-bold">{t("Hlavní úspěchy", "Major Achievements")}</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-3">
              {achievements.map((achievement, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2 font-serif text-lg font-bold">{achievement.title}</h4>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="mb-8">
            <div className="rounded-xl border border-border bg-accent/20 p-8">
              <h2 className="mb-4 font-serif text-3xl font-bold">{t("Odkaz pro budoucnost", "Legacy for the Future")}</h2>
              <div className="mb-6 space-y-4 leading-relaxed text-muted-foreground">
                <p className="text-pretty">
                  {t(
                    "Po jeho smrti převzali štafetu místní ochránci přírody - David Hmíra, Tereza Kočí a Daniel Málek. Pokračují v jeho tradici a duchu ochrany přírody ostrovské kotliny.",
                    "After his death, local nature conservationists - David Hmíra, Tereza Kočí and Daniel Málek - took over the baton. They continue in his tradition and spirit of protecting nature in the Ostrov basin.",
                  )}
                </p>
                <p className="text-pretty">
                  {t(
                    "I když stál v ochraně přírody téměř osamocen, nevzdával se. Až do smrti dokumentoval změny v krajině, lokální biodiverzitu a předával své zkušenosti dalším generacím. Nyní Charlie chybí. Praktickou část sice zastává David Hmíra, ale bydlí 15km daleko a není to jeho rodné místo. Vše se celkem daří, avšak ta 'piplačka' chybí. Budeme rádi za dobrovolníky.",
                    "Although he stood almost alone in nature conservation, he never gave up. Until his death, he documented changes in the landscape, local biodiversity and passed on his experience to future generations. Charlie is now missed. David Hmíra handles the practical part, but he lives 15km away and it's not his native place. Everything is going reasonably well, but the 'fine-tuning' is missing. We would be happy for volunteers.",
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="btn-shine">
                  <Link href="/letter">
                    <Mail className="mr-2 h-5 w-5" />
                    {t("Přečíst Charlieho dopis", "Read Charlie's Letter")}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-shine">
                  <Link href="/projects">
                    <HandHeartIcon className="mr-2 h-5 w-5" />
                    {t("Zapojit se jako dobrovolník", "Get Involved as a Volunteer")}
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
              <h2 className="mb-4 font-serif text-3xl font-bold">{t("Charlieho knihy", "Charlie's Books")}</h2>
              <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                {t(
                  "Zde jsou ke stažení Charlieho knihy, které na poslední chvíli napsal. V té první Charlie popisuje historické souvislosti a procesy a ta druhá se zaměřuje na realizaci managementu a popis lokalit.",
                  "Here are Charlie's books available for download, which he wrote at the last minute. In the first one Charlie describes historical context and processes, and the second one focuses on management implementation and site descriptions.",
                )}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="outline" className="btn-shine w-full bg-transparent sm:w-auto" asChild>
                  <a href="/karel-malek-book-1.pdf" download="Karel-Malek.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    {t("Stáhnout knihu 1", "Download Book 1")}
                  </a>
                </Button>
                <Button variant="outline" className="btn-shine w-full bg-transparent sm:w-auto" asChild>
                  <a href="/karel-malek-book-2.pdf" download="Karel-Malek-Realizace-USES.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    {t("Stáhnout knihu 2 (PDF)", "Download Book 2 (PDF)")}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
