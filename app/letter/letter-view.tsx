"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TreesIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function LetterView() {
  const { t } = useLanguage()

  const paragraphs: [string, string][] = [
    [
      "píšu vám tyto řádky s vědomím, že má cesta se pomalu chylí ke koncu, ale vaše teprve začíná nebo pokračuje. Za těch téměř třicet let, co jsme společně chránili naši krásnou ostrovskou přírodu, jsem poznal, že nejcennější není to, co dokážeme zachránit my, ale to, co dokážeme předat dalším generacím.",
      "I am writing these lines to you knowing that my journey is slowly coming to an end, but yours is just beginning or continuing. In the almost thirty years that we have protected our beautiful Ostrov nature together, I have learned that the most valuable thing is not what we can save, but what we can pass on to future generations.",
    ],
    [
      "Když jsem v roce 1989 zakládal naši organizaci, měl jsem sen. Sen o tom, že se podaří zachovat to nejcennější z naší krajiny - Třebovské stěny s jejich vzácnými rostlinami, Kaštánek s jeho původními lesy, mokřady plné života a všechny ty malé, ale o to důležitější kousky přírody, které dělají náš Ostrov skutečně zeleným.",
      "When I founded our organization in 1989, I had a dream. A dream that we would succeed in preserving the most precious parts of our landscape - Třebovské stěny with their rare plants, Kaštánek with its original forests, wetlands full of life and all those small but all the more important pieces of nature that make our Ostrov truly green.",
    ],
    [
      "Dnes, když se ohlížím zpět, vidím, že se nám mnoho podařilo. Naše rezervace jsou chráněné, biokoridor funguje, mladí lidé se učí milovat přírodu. Ale vidím také, že práce není nikdy hotová. Příroda potřebuje naši péči každý den, každý rok, každé desetiletí.",
      "Today, when I look back, I see that we have achieved a lot. Our reserves are protected, the biocorridor is functioning, young people are learning to love nature. But I also see that the work is never finished. Nature needs our care every day, every year, every decade.",
    ],
    [
      "Proto vás prosím - pokračujte. Pokračujte v tom, co jsme začali. Nejen proto, že je to naše povinnost, ale proto, že je to naše radost. Každé ráno, kdy jsem vyšel do terénu, každý den strávený v přírodě byl pro mě darem. Doufám, že i pro vás bude ochrana přírody zdrojem radosti a naplnění.",
      "Therefore, I ask you - continue. Continue what we started. Not only because it is our duty, but because it is our joy. Every morning when I went out into the field, every day spent in nature was a gift for me. I hope that nature conservation will also be a source of joy and fulfillment for you.",
    ],
    [
      "Nezapomínejte na to, že nejsme jen ochránci přírody - jsme také učitelé. Každý člověk, kterého dokážeme inspirovat k lásce k přírodě, je naší největší výhrou. Každé dítě, které se naučí rozpoznat zpěv ptáků nebo pozná vzácnou rostlinu, je zárukou toho, že naše práce bude pokračovat i v budoucnu.",
      "Don't forget that we are not just nature protectors - we are also teachers. Every person we can inspire to love nature is our greatest victory. Every child who learns to recognize bird songs or knows a rare plant is a guarantee that our work will continue in the future.",
    ],
    [
      "Buďte trpěliví. Příroda má svůj vlastní čas a my se mu musíme přizpůsobit. Někdy se výsledky naší práce projeví až za roky, někdy za desetiletí. Ale věřte mi - každá hodina strávená v terénu, každá vysazená rostlina, každý zachráněný biotop má smysl.",
      "Be patient. Nature has its own time and we must adapt to it. Sometimes the results of our work show up only after years, sometimes after decades. But believe me - every hour spent in the field, every planted plant, every saved biotope makes sense.",
    ],
    [
      "A nakonec - nezapomínejte se radovat. Radujte se z každého nového objevu, z každého úspěchu, z každého krásného okamžiku stráveného v přírodě. Radost je to, co nás žene vpřed, co nám dává sílu pokračovat i v těžkých chvílích.",
      "And finally - don't forget to rejoice. Rejoice in every new discovery, every success, every beautiful moment spent in nature. Joy is what drives us forward, what gives us strength to continue even in difficult times.",
    ],
  ]

  return (
    <>
      <PageHeader
        title={t("Charlieho dopis", "Charlie's Letter")}
        subtitle={t("Poslední vzkaz Karla Málka pro budoucí generace", "Karel Málek's final message for future generations")}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <div className="grid items-start gap-8 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted shadow-lg">
                <Image
                  src="/images/karel-malek.jpg"
                  alt={t("Karel Málek – Charlie", "Karel Málek – Charlie")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="md:sticky md:top-24">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {t(
                    'Tento dopis napsal Karel Málek "Charlie" krátce před svým odchodem. Je to jeho osobní vzkaz všem, kteří pokračují v ochraně přírody ostrovské kotliny. Dopis byl nalezen mezi jeho osobními věcmi a stal se duchovním odkazem naší organizace.',
                    'This letter was written by Karel Málek "Charlie" shortly before his departure. It is his personal message to all who continue to protect the nature of the Ostrov basin. The letter was found among his personal belongings and became the spiritual legacy of our organization.',
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mb-12">
            <div className="rounded-xl border border-border bg-card p-8 shadow-lg lg:p-12">
              <div className="mb-8">
                <div className="mb-4 text-right text-sm text-muted-foreground">
                  {t("Ostrov u Lanškrouna, podzim 2018", "Ostrov u Lanškroun, Autumn 2018")}
                </div>
                <div className="mb-6 font-serif text-lg">{t("Milí přátelé a pokračovatelé,", "Dear friends and successors,")}</div>
              </div>

              <Stagger className="space-y-4 leading-relaxed text-foreground/90">
                {paragraphs.map(([cs, en], index) => (
                  <StaggerItem key={index}>
                    <p className="text-pretty">{t(cs, en)}</p>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-8 border-t border-border pt-8">
                <p className="mb-6 text-pretty text-muted-foreground">
                  {t(
                    "Děkuji vám za všechno, co jste pro naši přírodu udělali, a za všechno, co ještě uděláte. Budu na vás myslet, kdykoli budete procházet našimi milovanými lokalitami.",
                    "Thank you for everything you have done for our nature, and for everything you will still do. I will think of you whenever you walk through our beloved sites.",
                  )}
                </p>
                <div className="text-right">
                  <p className="mb-2 text-muted-foreground">
                    {t("S láskou k přírodě a s vírou v budoucnost,", "With love for nature and faith in the future,")}
                  </p>
                  <p className="font-serif text-xl font-bold">Karel Málek &bdquo;Charlie&ldquo;</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-border bg-accent/20 p-8">
              <h2 className="mb-4 font-serif text-3xl font-bold">{t("Charlieho odkaz žije dál", "Charlie's Legacy Lives On")}</h2>
              <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                {t(
                  "Tento dopis se stal naším průvodcem a inspirací. Charlieho slova nás provázejí při každé naší činnosti a připomínají nám, proč je naše práce tak důležitá. Jeho vize zelené ostrovské kotliny se stala naším závazkem vůči budoucím generacím.",
                  "This letter has become our guide and inspiration. Charlie's words accompany us in all our activities and remind us why our work is so important. His vision of a green Ostrov basin has become our commitment to future generations.",
                )}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="outline" className="btn-shine">
                  <Link href="/karel">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    {t("Zpět na stránku o Karlovi", "Back to Karel's Page")}
                  </Link>
                </Button>
                <Button asChild className="btn-shine">
                  <Link href="/projects">
                    <TreesIcon className="mr-2 h-5 w-5" />
                    {t("Pokračovat v jeho díle", "Continue His Work")}
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
