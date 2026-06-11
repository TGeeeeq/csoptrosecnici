"use client"

import { Mountain, Trees, Droplet, Route, Leaf, Eye, Wrench, GraduationCap, Flower2, Fish } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function LocationsView() {
  const { t } = useLanguage()

  const natureReserves = [
    {
      icon: Flower2,
      title: t("Přírodní rezervace U Kaštánku", "U Kaštánku Nature Reserve"),
      description: t(
        "Vyhlášena v roce 1990 na ploše 23 ha za účelem ochrany vzácných lučních společenstev a mokřadů. Nachází se zde vzácné druhy jako prstnatec májový a pleťový, vachta trojlistá, ostřice trsnatá a latnatá, kruštík bahenní. Rezervace je unikátní díky zásaditému slatiništi uprostřed kyselých půd.",
        "Declared in 1990 on an area of 23 ha to protect rare meadow communities and wetlands. Rare species such as early marsh orchid, heath spotted orchid, bog bean, tufted sedge and panicled sedge, and marsh helleborine can be found here. The reserve is unique due to its alkaline fen in the middle of acidic soils.",
      ),
      area: t("Rozloha: 23 ha", "Area: 23 ha"),
      year: t("Vyhlášena: 1990", "Declared: 1990"),
    },
    {
      icon: Mountain,
      title: t("Přírodní rezervace Třebovské stěny", "Třebovské stěny Nature Reserve"),
      description: t(
        "Významná lokalita s vysokou biodiverzitou a přítomností původních lesních druhů, jako jsou jedle a buky. Severní strana rezervace je chladnější a poskytuje ideální podmínky pro růst různých rostlinných druhů.",
        "A significant site with high biodiversity and the presence of original forest species such as firs and beeches. The northern side of the reserve is cooler and provides ideal conditions for the growth of various plant species.",
      ),
      area: t("Rozloha: 45 ha", "Area: 45 ha"),
      year: t("Vyhlášena: 1990", "Declared: 1990"),
    },
  ]

  const vkpLocations = [
    {
      icon: Fish,
      title: t("VKP Ostrovské rybníky", "Ostrovské Ponds Significant Landscape Element"),
      badge: t("EVSK na LBK2", "EVSK on LBK2"),
      description: t(
        "Součást Přírodního parku Lanškrounských rybníků, tato lokalita je důležitým biokoridorem a domovem pro řadu ohrožených druhů, včetně modráska očkovaného a bahenního - nejdůležitější lokalita modrásků na Lanškrounsku. Důležité je zachovat mraveniště a krvavec toten. Rybníky byly vybudovány ve středověku a dnes slouží jako cenný ekosystém pro vodní ptactvo a obojživelníky.",
        "Part of the Lanškroun Ponds Nature Park, this site is an important biocorridor and home to a number of endangered species, including the Alcon blue butterfly and marsh fritillary - the most important site for blues in the Lanškroun region. It is important to preserve ant hills and burnet plants. The ponds were built in the Middle Ages and today serve as a valuable ecosystem for waterfowl and amphibians.",
      ),
    },
    {
      icon: Leaf,
      title: t("VKP U osady", "U osady Significant Landscape Element"),
      badge: t("spoj LBK 1 a 2, EVSK", "connection LBK 1 and 2, EVSK"),
      description: t(
        "Tato lokalita zahrnuje listnaté lesíky a křovinaté stráně s významnými druhy, jako je krvavec toten — živná rostlina modráska bahenního a modráska očkovaného. Je důležitým refugiem pro subtermofilní biotu a podporuje vysokou biodiverzitu. Výskyt druhů: hrušeň polnička, bradáček vejčitý, prvosenka jarní, žluva hajní.",
        "This site includes deciduous groves and shrubby slopes with significant species such as great burnet — the host plant of the dusky large blue and scarce large blue butterflies. It is an important refuge for sub-thermophilic biota and supports high biodiversity. Species occurrence: wild pear, common twayblade, cowslip, and golden oriole.",
      ),
    },
    {
      icon: Flower2,
      title: t("VKP Vřesoviště", "Vřesoviště Significant Landscape Element"),
      badge: t("LBC(7), lesoluční na LBK2", "LBC(7), forest-meadow on LBK2"),
      description: t(
        "Ojedinělý rudiment bezlesého vřesoviště, který představuje refugium pro acidofilní biotu. Tato lokalita je domovem pro vzácné druhy ptáků a hmyzu, včetně žluny zelené a bramborníčka. Výskyt vřesu a dalších teplomilných druhů.",
        "A unique remnant of treeless heathland, which represents a refuge for acidophilic biota. This site is home to rare bird and insect species, including the green woodpecker and stonechat. Occurrence of heather and other thermophilic species.",
      ),
    },
    {
      icon: Droplet,
      title: t("VKP U Ďáblíku", "U Ďáblíku Significant Landscape Element"),
      badge: t("EVSK", "EVSK"),
      description: t(
        "Biologicky hodnotné stanoviště zahrnující mokřadní biotopy a olšiny, je domovem pro vzácné rostliny jako ďáblík a vachta trojlistá. Lokalita má klíčový ekologický význam pro region.",
        "A biologically valuable site including wetland biotopes and alder forests, is home to rare plants such as devil's bit scabious and bog bean. The site has key ecological significance for the region.",
      ),
    },
    {
      icon: Droplet,
      title: t("VKP Pod Vodárnou", "Pod Vodárnou Significant Landscape Element"),
      badge: t("navrhovaná Přírodní památka, EVSK", "proposed Natural Monument, EVSK"),
      description: t(
        "Komplex olšin, řídkých březin a vrbových křovin, rákosin a mokřadů v mělkém údolí pravobřežního přítoku Ostrovského potoka. Jeho biologická rozmanitost zahrnuje rašeliniště s chráněnými druhy jako prstnatec májový a ostřici latnatou, blešní, černou břízou, bledulí a aronem.",
        "A complex of alder forests, sparse birch stands and willow shrubs, reed beds and wetlands in the shallow valley of a right-bank tributary of Ostrovský Brook. Its biological diversity includes peat bogs with protected species such as early marsh orchid and panicled sedge, flea sedge, black birch, snowdrop and cuckoo pint.",
      ),
    },
    {
      icon: Trees,
      title: t("VKP Za Dvojkou", "Za Dvojkou Significant Landscape Element"),
      badge: t("LBC (7) lesoluční na LBK2", "LBC (7) forest-meadow on LBK2"),
      description: t(
        "Komplex vypásaných mezofilních luk a mezofilních ponechalin a převážně listnatých lesíků na strmém JZ levobřežním svahu údolí Hadího potoka. Stepní charakter na kyselém podloží. Lesíky s převahou dubu, břízy, javorů, osiky a třešně s přimíšenou borovicí a modřínem.",
        "A complex of grazed mesophilic meadows and mesophilic fallows and predominantly deciduous forests on the steep SW left bank slope of the Hadí Brook valley. Steppe character on acidic substrate. Forests dominated by oak, birch, maples, aspen and cherry with mixed pine and larch.",
      ),
    },
    {
      icon: Droplet,
      title: t("Na Planíně", "Na Planíně"),
      badge: t("navrhované VKP, EVSK", "proposed Significant Landscape Element, EVSK"),
      description: t(
        "Komplex mokřadů a březového lesíka, který je navržen na registraci jako významný krajinný prvek. Obsahuje vzácné druhy rostlin a hraje klíčovou roli v ekologické stabilitě krajiny.",
        "A complex of wetlands and birch forest that is proposed for registration as a significant landscape element. It contains rare plant species and plays a key role in the ecological stability of the landscape.",
      ),
    },
    {
      icon: Fish,
      title: t("Hektárek", "Hektárek"),
      badge: t("LBC (4) lesoluční, mokřadní na K-82", "LBC (4) forest-meadow, wetland on K-82"),
      description: t(
        "Smíšený les a mokřad na prameništi Ostrovského potoka. Místo s vysokou ekologickou hodnotou - 3 tůně, hnízdiště. Významné druhy: čolek horský, bramborníček hnědý.",
        "Mixed forest and wetland at the source of Ostrovský Brook. A place with high ecological value - 3 pools, nesting site. Significant species: alpine newt, whinchat.",
      ),
    },
    {
      icon: Droplet,
      title: t("Rudoltička", "Rudoltička"),
      badge: t("LBK mokřadní, EVSK", "LBK wetland, EVSK"),
      description: t(
        "Prameniště a mokřady ve zhlaví mělkého údolí Rudoltičky (Rudoltického potoka). Mokřadní ponechaliny, rákosiny, olšiny a rybník. Letos probíhá velká revitalizace.",
        "Springs and wetlands at the head of the shallow valley of Rudoltička (Rudoltice Brook). Wetland fallows, reed beds, alder forests and pond. Major revitalization is underway this year.",
      ),
    },
    {
      icon: Fish,
      title: t("Paskunďák", "Paskunďák"),
      badge: t("LBC 3 lesní a mokřadní na LBK1", "LBC 3 forest and wetland on LBK1"),
      description: t(
        "Toto lokální biocentrum na Vraním potoce zahrnuje rybníček a přilehlé olšiny (ostřice, kozlík), které jsou důležité pro vodní živočichy a ptactvo.",
        "This local biocenter on Vraní Brook includes a small pond and adjacent alder forests (sedge, valerian), which are important for aquatic animals and birds.",
      ),
    },
    {
      icon: Fish,
      title: t("Bendův rybník", "Bendův rybník"),
      badge: t("LBC lesní a mokřadní", "LBC forest and wetland"),
      description: t(
        "Tato lokalita zahrnuje obtokový rybník s přirozeným litorálem a navazujícími mokřady. Je domovem pro řadu ohrožených druhů, včetně lakušníku niťolistého, bobra a mnoha obojživelníků.",
        "This site includes a bypass pond with natural littoral and adjacent wetlands. It is home to a number of endangered species, including thread-leaved water-crowfoot, beaver and many amphibians.",
      ),
    },
    {
      icon: Mountain,
      title: t("Kutnarova stráň", "Kutnarova stráň"),
      badge: t("navrhované VKP, EVSK na LBK1", "proposed Significant Landscape Element, EVSK on LBK1"),
      description: t(
        "Opukové skalky s výjimečnými teplomilnými druhy. Významný biotop chráněných živočichů (bobři, skokan). Druhová rozmanitost: vemeník dvoulistý, žluva hajní, ještěrka obecná.",
        "Marlstone rocks with exceptional thermophilic species. Important habitat of protected animals (beavers, frogs). Species diversity: two-leaved platanthera, wood avens, common lizard.",
      ),
    },
    {
      icon: Droplet,
      title: t("U dubu", "U dubu"),
      badge: t("navrhované VKP, EVSK na LBK1", "proposed Significant Landscape Element, EVSK on LBK1"),
      description: t(
        "Mokřadní louky v nivě Vraního potoka. Chráněné rostlinné druhy: bledule jarní, bobři. Napojení na přírodní park Lanškrounské rybníky.",
        "Wetland meadows in the floodplain of Vraní Brook. Protected plant species: spring snowflake, beavers. Connection to the Lanškroun Ponds Nature Park.",
      ),
    },
  ]

  const proposedVKP = [
    "Pod rančem",
    "V rokli",
    "Pod jedlí",
    "Vrbina",
    "Na rozvodí",
    "Na rychetském",
    "Nad Hadákem",
    "Na Humperku",
    "Habřina",
    "Na planiňě",
    "Pod Hřívou",
    "Janovcův rybníček",
    "Rybníček u Rudoltic",
    "Hraniční potok",
    "Za rozvodím",
  ]

  const otherVKP = ["Kopeckův rybníček", "Klímův rybníček", "Masopustův rybníček", "Za rozvodím", "Na rozvodí"]

  const biocoridors = [
    {
      icon: Route,
      title: t("Nadregionální lesní biokoridor K-82", "Supra-regional Forest Biocorridor K-82"),
      description: t(
        "Evropsky významný komplexní průvodce krajinou, propojující významné ekosystémy a umožňující migraci druhů.",
        "European significant complex guide through the landscape, connecting important ecosystems and enabling species migration.",
      ),
      type: t("Nadregionální", "Supra-regional"),
    },
    {
      icon: Route,
      title: t("Vraní potok (LBK1)", "Vraní Brook (LBK1)"),
      description: t("Lokální biokoridor propojující mokřadní a lesní ekosystémy.", "Local biocorridor connecting wetland and forest ecosystems."),
      type: t("Lokální", "Local"),
    },
    {
      icon: Route,
      title: t("Hadí potok (LBK2)", "Hadí Brook (LBK2)"),
      description: t("Lokální biokoridor s výskytem vzácných druhů.", "Local biocorridor with occurrence of rare species."),
      type: t("Lokální", "Local"),
    },
  ]

  const conservationPrinciples = [
    {
      icon: Eye,
      title: t("Neškodit", "Do No Harm"),
      description: t("Základní princip ochrany přírody - minimalizovat lidské zásahy", "Basic principle of nature conservation - minimize human interventions"),
    },
    {
      icon: Wrench,
      title: t("Ochrana přirozené vegetace", "Protection of Natural Vegetation"),
      description: t(
        "Zákaz těžby včetně spadlých a odumřelých stromů, zákaz ničení bobřích hrází",
        "Ban on logging including fallen and dead trees, ban on destroying beaver dams",
      ),
    },
    {
      icon: GraduationCap,
      title: t("Zachovat biodiverzitu", "Preserve Biodiversity"),
      description: t("Zachovat přirozenou druhovou rozmanitost a ekologickou stabilitu", "Preserve natural species diversity and ecological stability"),
    },
  ]

  return (
    <>
      <PageHeader
        title={t("Lokality, biocentra a biokoridory", "Locations, Biocenters and Biocoridors")}
        subtitle={t(
          "Přírodní rezervace, významné krajinné prvky a biokoridory v okolí Ostrova u Lanškrouna",
          "Nature reserves, significant landscape elements and biocorridors around Ostrov u Lanškrouna",
        )}
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 text-center font-serif text-3xl font-bold lg:text-4xl">
              {t("Přírodní rezervace", "Nature Reserves")}
            </h2>
          </Reveal>
          <Stagger className="grid gap-8 md:grid-cols-2">
            {natureReserves.map((location, index) => (
              <StaggerItem key={index}>
                <Card className="h-full border-2 border-primary/30 shadow-md transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                        <location.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-balance font-serif text-2xl font-bold">{location.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span>{location.area}</span>
                          <span>•</span>
                          <span>{location.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{location.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-accent/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-4 text-center font-serif text-3xl font-bold lg:text-4xl">
              {t("Významné krajinné prvky (VKP)", "Significant Landscape Elements (VKP)")}
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
              {t(
                "Tyto lokality představují důležité ekosystémy, které podporují biodiverzitu a ekologickou stabilitu v regionu Ostrova u Lanškrouna. Ochrana těchto lokalit je nezbytná pro zachování vzácných druhů a jejich přirozeného prostředí.",
                "These sites represent important ecosystems that support biodiversity and ecological stability in the Ostrov u Lanškrouna region. Protection of these sites is essential for the preservation of rare species and their natural environment.",
              )}
            </p>
          </Reveal>
          <Stagger className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vkpLocations.map((location, index) => (
              <StaggerItem key={index}>
                <Card className="h-full border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <location.icon className="h-6 w-6 text-primary" />
                      </div>
                      {location.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {location.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="mb-3 text-balance font-serif text-xl font-bold">{location.title}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{location.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="rounded-xl border border-border bg-background p-6 lg:p-8">
              <h3 className="mb-4 font-serif text-2xl font-bold">
                {t("Navrhované VKP", "Proposed Significant Landscape Elements")}
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                {proposedVKP.map((name, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {name}
                  </Badge>
                ))}
              </div>
              <h4 className="mb-3 mt-6 font-serif text-xl font-bold">
                {t("Navazující významné krajinné prvky", "Connected Significant Landscape Elements")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {otherVKP.map((name, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 text-center font-serif text-3xl font-bold lg:text-4xl">{t("Biokoridory", "Biocorridors")}</h2>
          </Reveal>
          <Stagger className="mb-8 grid gap-6 md:grid-cols-3">
            {biocoridors.map((corridor, index) => (
              <StaggerItem key={index}>
                <Card className="h-full border-2 border-primary/30 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <corridor.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={corridor.type === t("Nadregionální", "Supra-regional") ? "default" : "secondary"}>
                        {corridor.type}
                      </Badge>
                    </div>
                    <h3 className="mb-2 text-balance font-serif text-lg font-bold">{corridor.title}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{corridor.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(
                  "Biokoridory propojují izolované části krajiny a umožňují migraci rostlin a živočichů mezi jednotlivými biocentry, čímž zvyšují celkovou ekologickou stabilitu regionu.",
                  "Biocorridors connect isolated parts of the landscape and enable the migration of plants and animals between individual biocenters, thereby increasing the overall ecological stability of the region.",
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-4 text-center font-serif text-3xl font-bold">{t("Ochranářské zásady", "Conservation Principles")}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
              {t(
                "Majitel má nárok na odškodnění od EU při dodržování ochranných opatření",
                "The owner is entitled to compensation from the EU when complying with protective measures",
              )}
            </p>
          </Reveal>
          <Stagger className="mb-8 grid gap-8 md:grid-cols-3">
            {conservationPrinciples.map((item, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-2 font-serif text-xl font-bold">{item.title}</h4>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="rounded-xl border border-border bg-background p-6 text-center">
              <p className="text-sm text-muted-foreground">
                {t(
                  'Významný dokument: Elaborát "Významné krajinné prvky v okolí Ostrova u Lanškrouna" (Bureš et Málek, 2005)',
                  'Important document: Elaboration "Significant Landscape Elements around Ostrov u Lanškrouna" (Bureš et Málek, 2005)',
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
