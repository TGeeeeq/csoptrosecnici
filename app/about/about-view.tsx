"use client"

import { HandHeart, Euro, Share2, Users } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function AboutView() {
  const { t } = useLanguage()

  const helps = [
    {
      icon: HandHeart,
      title: t("Dobrovolnictví", "Volunteering"),
      description: t(
        "Připojte se k našim aktivitám v terénu, pomáhejte s údržbou lokalit a monitoring přírody.",
        "Join our field activities, help with site maintenance and nature monitoring.",
      ),
    },
    {
      icon: Euro,
      title: t("Finanční podpora", "Financial Support"),
      description: t(
        "Vaše dary nám pomáhají financovat ochranné projekty a nákup potřebného vybavení.",
        "Your donations help us finance conservation projects and purchase necessary equipment.",
      ),
    },
    {
      icon: Share2,
      title: t("Šíření povědomí", "Raising Awareness"),
      description: t(
        "Pomozte nám šířit povědomí o důležitosti ochrany přírody ve vašem okolí.",
        "Help us raise awareness about the importance of nature conservation in your area.",
      ),
    },
  ]

  return (
    <>
      <PageHeader
        title={t("O nás", "About Us")}
        subtitle={t(
          "Základní organizace Českého svazu ochránců přírody",
          "Local organization of the Czech Union for Nature Conservation",
        )}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-lg">
                <Image
                  src="/images/highland-cattle.JPEG"
                  alt={t("Skotský náhorní skot na pastvině", "Highland cattle grazing on a pasture")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <div className="space-y-6">
              <Reveal>
                <div>
                  <h2 className="mb-4 font-serif text-3xl font-bold">{t("Naše mise", "Our Mission")}</h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {t(
                      "ČSOP Trosečníci je základní organizace Českého svazu ochránců přírody, která se věnuje ochraně přírody a krajiny v regionu Ostrova u Lanškrouna. Naše činnost zahrnuje praktickou ochranu přírody, vzdělávání veřejnosti a propagaci ekologického myšlení.",
                      "ČSOP Trosečníci is a local organization of the Czech Union for Nature Conservation, dedicated to protecting nature and landscape in the Ostrov u Lanškroun region. Our activities include practical nature conservation, public education, and promoting ecological thinking.",
                    )}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <h2 className="mb-4 font-serif text-3xl font-bold">{t("Naše hodnoty", "Our Values")}</h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {t(
                      "Věříme v důležitost zachování biodiverzity a přírodních ekosystémů pro budoucí generace. Naše práce je založena na vědeckých poznatcích, respektu k přírodě a spolupráci s místní komunitou.",
                      "We believe in the importance of preserving biodiversity and natural ecosystems for future generations. Our work is based on scientific knowledge, respect for nature, and cooperation with the local community.",
                    )}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <h2 className="mb-4 font-serif text-3xl font-bold">{t("Historie Trosečníků", "History of Trosečníci")}</h2>
                  <div className="space-y-4">
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {t(
                        "Jedná se o jednu z nejstarších, doposud fungujících ČSOP v Česku a na Slovensku! I když byl hlavní hybnou silou právě Charlie, hodí se podotknout, že na to rozhodně nebyl vždy sám.",
                        "This is one of the oldest, still functioning ČSOP organizations in the Czech Republic and Slovakia! Although Charlie was the main driving force, it's worth noting that he was definitely not alone in this endeavor.",
                      )}
                    </p>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {t(
                        "Trosečníci měli v roce 2000 18 aktivních členů, dnes je nás zapsaných 12. Navíc se můžeme opřít o dostatek přátel a rodinných příslušníků. Za dobu existence Trosečníků se stihlo spousty práce a kdybyste se podívali na letecké snímky předtím a nyní, byli byste přesvědčeni o smyslu této činnosti.",
                        "Trosečníci had 18 active members in 2000, today we have 12 registered members. Additionally, we can rely on plenty of friends and family members. During the existence of Trosečníci, a lot of work has been accomplished, and if you looked at aerial photos from before and now, you would be convinced of the purpose of this activity.",
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal className="mb-16">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold">{t("Náš tým", "Our Team")}</h2>
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-4 font-serif text-2xl font-bold">{t("Aktivní členové", "Active Members")}</h3>
                    <div className="prose prose-sm max-w-none space-y-3 text-muted-foreground">
                      <p className="text-pretty leading-relaxed">
                        {t(
                          "Předsedkyně Tereza je redaktorka Ostrovského zpravodaje a řeší smlouvy s AOPK. David s dobrovolníky a Daniel dělají praktickou část v terénu. Jarmila spravuje kasu, Honza pozoruje ptáky, René odborně radí ze zálohy a paní starostka je taky super.",
                          "President Tereza is the editor of the Ostrov newsletter and handles contracts with AOPK. David with volunteers and Daniel do the practical field work. Jarmila manages the finances, Honza observes birds, René provides expert advice from the background, and Mrs. Mayor is also great.",
                        )}
                      </p>
                      <p className="text-pretty leading-relaxed">
                        {t(
                          "Nicméně není vše tak růžové. Práce v ochraně přírody vyžaduje trvalé úsilí, odhodlání a mnoho dobrovolných hodin.",
                          "However, not everything is so rosy. Work in nature conservation requires constant effort, dedication, and many volunteer hours.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">{t("Jak můžete pomoci", "How You Can Help")}</h2>
            </Reveal>
            <Stagger className="grid gap-8 md:grid-cols-3">
              {helps.map((help, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <help.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-3 font-serif text-xl font-bold">{help.title}</h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">{help.description}</p>
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
