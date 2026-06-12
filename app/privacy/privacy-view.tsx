"use client"

import type { ReactNode } from "react"
import { ShieldCheck, Cookie, Mail, Server, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { SITE } from "@/lib/seo"

function Section({ icon: Icon, title, children }: { icon: typeof ShieldCheck; title: ReactNode; children: ReactNode }) {
  return (
    <Reveal>
      <Card className="border-2 border-primary/20 shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="font-serif text-2xl font-bold">{title}</h2>
          </div>
          <div className="space-y-3 leading-relaxed text-muted-foreground">{children}</div>
        </CardContent>
      </Card>
    </Reveal>
  )
}

export default function PrivacyView() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        title={t("Ochrana osobních údajů a cookies", "Privacy & Cookies")}
        subtitle={t(
          "Jak nakládáme s vašimi údaji a proč po vás nechceme žádný souhlas s cookies.",
          "How we handle your data and why we don't ask you for cookie consent.",
        )}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <Section icon={ShieldCheck} title={t("Správce osobních údajů", "Data Controller")}>
            <p>
              {t(
                `Správcem osobních údajů je ${SITE.fullName} (ZO ČSOP Trosečníci), IČO ${SITE.ico}, se sídlem ${SITE.locality}, ${SITE.region}.`,
                `The data controller is ${SITE.fullName} (ZO ČSOP Trosečníci), Company ID ${SITE.ico}, based in ${SITE.locality}, ${SITE.region}, Czech Republic.`,
              )}
            </p>
            <p>
              {t("V záležitostech osobních údajů nás kontaktujte na", "For any privacy matters, contact us at")}{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </Section>

          <Section icon={Mail} title={t("Kontaktní formulář", "Contact Form")}>
            <p>
              {t(
                "Pokud nám napíšete přes kontaktní formulář, zpracováváme vaše jméno, e-mailovou adresu a obsah zprávy. Jediným účelem je odpovědět vám; právním základem je náš oprávněný zájem na vyřízení vašeho dotazu (čl. 6 odst. 1 písm. f) GDPR).",
                "If you write to us via the contact form, we process your name, e-mail address and the content of your message. The sole purpose is to reply to you; the legal basis is our legitimate interest in handling your inquiry (Art. 6(1)(f) GDPR).",
              )}
            </p>
            <p>
              {t(
                "Zpráva se doručuje na náš e-mail prostřednictvím technického zprostředkovatele odeslání (Web3Forms, příp. Resend), který údaje nepoužívá k žádným vlastním účelům. Zprávy uchováváme jen po dobu nezbytnou k vyřízení komunikace.",
                "The message is delivered to our e-mail via a technical sending provider (Web3Forms, or Resend), which does not use the data for any purposes of its own. We keep messages only for as long as needed to handle the conversation.",
              )}
            </p>
            <p>
              {t(
                "Formulář neukládá žádné cookies a neobsahuje žádné sledování.",
                "The form stores no cookies and contains no tracking.",
              )}
            </p>
          </Section>

          <Section icon={Cookie} title={t("Cookies a měření návštěvnosti", "Cookies & Analytics")}>
            <p>
              {t(
                "Tento web nepoužívá žádné sledovací, analytické ani marketingové cookies. Proto na něm podle § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích, a doporučení Úřadu pro ochranu osobních údajů není vyžadován souhlas s cookies.",
                "This website uses no tracking, analytical or marketing cookies. Under Section 89(3) of Czech Act No. 127/2005 Coll. on Electronic Communications and the guidance of the Czech Data Protection Authority (ÚOOÚ), no cookie consent is therefore required.",
              )}
            </p>
            <p>
              {t(
                "Návštěvnost měříme službou Vercel Web Analytics, která funguje zcela bez cookies: data jsou anonymní a agregovaná, neukládá se IP adresa ani žádný identifikátor umožňující sledování návštěvníka napříč weby a dočasný anonymní otisk relace je automaticky smazán po 24 hodinách.",
                "We measure traffic with Vercel Web Analytics, which works entirely without cookies: data is anonymous and aggregated, no IP address or any identifier enabling cross-site tracking is stored, and the temporary anonymous session hash is automatically discarded after 24 hours.",
              )}
            </p>
            <p>
              {t(
                "Jediné, co prohlížeč ukládá, je technicky nezbytný záznam v localStorage o tom, že jste zavřeli informační lištu — díky němu se vám nezobrazuje opakovaně.",
                "The only thing stored in your browser is a technically necessary localStorage record that you closed the notice bar — so it doesn't keep reappearing.",
              )}
            </p>
          </Section>

          <Section icon={Server} title={t("Hosting", "Hosting")}>
            <p>
              {t(
                "Web běží na platformě Vercel. Při návštěvě webu zpracovává poskytovatel hostingu běžné technické údaje (IP adresu) výhradně pro doručení obsahu a zabezpečení provozu.",
                "The website runs on the Vercel platform. When you visit, the hosting provider processes standard technical data (IP address) solely to deliver content and secure the service.",
              )}
            </p>
          </Section>

          <Section icon={Scale} title={t("Vaše práva", "Your Rights")}>
            <p>
              {t(
                "Máte právo na přístup ke svým údajům, jejich opravu či výmaz, omezení zpracování a právo vznést námitku. Stačí nám napsat na výše uvedený e-mail.",
                "You have the right to access, rectify or erase your data, restrict processing, and object to processing. Just write to the e-mail above.",
              )}
            </p>
            <p>
              {t("Můžete se také obrátit se stížností na Úřad pro ochranu osobních údajů,", "You may also lodge a complaint with the Czech Data Protection Authority (ÚOOÚ),")}{" "}
              <a
                href="https://uoou.gov.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                uoou.gov.cz
              </a>
              .
            </p>
            <p className="pt-2 text-sm">{t("Poslední aktualizace: červen 2026", "Last updated: June 2026")}</p>
          </Section>
        </div>
      </section>
    </>
  )
}
