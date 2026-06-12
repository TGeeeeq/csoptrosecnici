# Návod: jak upravit web (bez programování)

Tenhle návod popisuje, **kde co na webu najdeš a jak to změníš** přímo na GitHubu,
bez instalace čehokoliv.

## Jak se dělá úprava na GitHubu

1. Otevři soubor, který chceš upravit (seznam níže), a klikni na **ikonu tužky** ✏️
   vpravo nahoře („Edit this file").
2. Uprav text. Pro hledání na stránce použij **Ctrl+F** a hledej slova z návodu
   (např. `ongoingProjects`).
3. Klikni na zelené **Commit changes…** → do popisu napiš, co jsi změnil(a)
   (např. „Oprava nadpisu na úvodu") → **Commit directly to the `main` branch** → potvrdit.
4. Hotovo. **Vercel web automaticky přenasadí — změna je živá za ~2 minuty.**
   Zkontroluj ji na https://csoptrosecnici.cz (případně Ctrl+Shift+R pro obnovení bez cache).

## ⚠️ Zlaté pravidlo: web je dvojjazyčný

Skoro každý text je v kódu dvakrát — česky a anglicky — ve tvaru:

```
t("Český text", "English text")
```

**Vždy uprav oba.** První je čeština, druhý angličtina (přepínač EN v menu).
Pozor na uvozovky a čárky okolo — nemaž je, měň jen text uvnitř uvozovek.

---

## Kde co najdu

| Co chci změnit | Soubor | Co hledat (Ctrl+F) |
|---|---|---|
| Hlavní nadpis a text na úvodu | `components/hero.tsx` | `Ochrana přírody v Ostrově` |
| Čísla statistik (30+ let, 120 ha…) | `components/stats.tsx` | `30+` |
| Karty „co děláme" na úvodu | `components/features.tsx` | `features` |
| Spodní sekce úvodu (odkaz Karel) | `components/legacy.tsx` | — |
| Stránka **O nás** (texty, tým) | `app/about/about-view.tsx` | `Náš tým` |
| **Lokality** (rezervace, VKP) | `app/locations/locations-view.tsx` | `natureReserves`, `vkpLocations` |
| **Projekty** — běžící | `app/projects/projects-view.tsx` | `ongoingProjects` |
| **Projekty** — dokončené | `app/projects/projects-view.tsx` | `completedProjects` |
| **Projekty** — sekce Financování (PPK, loga) | `app/projects/projects-view.tsx` | `financovani` |
| Stránka **Karel Málek** (vč. PDF knih) | `app/karel/karel-view.tsx` | `karel-malek-book` |
| **Charlieho dopis** | `app/letter/letter-view.tsx` | — |
| **Galerie** — seznam fotek a popisky | `app/gallery/gallery-view.tsx` | `mediaItems` |
| **Galerie** — kategorie filtrů | `app/gallery/gallery-view.tsx` | `categories` |
| **Kontakty** — e-mail, účet, Instagram, Facebook, adresa | `lib/seo.ts` | `SITE` |
| Položky **menu** | `components/navigation.tsx` | `navItems` |
| **Patička** (texty, odkazy) | `components/footer.tsx` | — |
| **Cookie lišta** | `components/cookie-banner.tsx` | — |
| Stránka **Ochrana osobních údajů** | `app/privacy/privacy-view.tsx` | — |

> Kontakty stačí změnit jednou v `lib/seo.ts` — propíšou se do patičky, kontaktů
> i do dat pro vyhledávače.

---

## Časté úkony krok za krokem

### 1) Změna textu nadpisu

Příklad — hlavní nadpis úvodní stránky: otevři `components/hero.tsx`, najdi

```
{t("Ochrana přírody v Ostrově u Lanškrouna", "Nature Conservation in Ostrov near Lanškroun")}
```

a přepiš český i anglický text. Commit → hotovo.

### 2) Přidání fotky do galerie

1. **Nahraj fotku:** na GitHubu otevři složku `public/` → **Add file → Upload files**
   → přetáhni fotku → Commit. Ideálně do ~1 MB (velké fotky web zpomalují) a
   s jednoduchým názvem bez mezer a diakritiky (např. `pastva-2026.jpg`).
2. **Přidej ji do seznamu:** otevři `app/gallery/gallery-view.tsx`, najdi `mediaItems`
   a zkopíruj jeden řádek jako vzor, např.:

   ```
   { id: 33, type: "image", src: "/pastva-2026.jpg", title: { cs: "Pastva 2026", en: "Grazing 2026" }, category: "pastures" },
   ```

   - `id` musí být **nové číslo** (o 1 vyšší než nejvyšší v seznamu),
   - `src` je název souboru s lomítkem na začátku — **přesně včetně velikosti
     písmen v příponě** (`.JPG` ≠ `.jpg` — na serveru na tom záleží!),
   - `category` vyber z existujících: `meadows` (louky), `pastures` (pastviny),
     `wetlands` (mokřady), `landscape` (krajina)… — viz `categories` ve stejném souboru.

### 3) Výměna obrázku stránky (úvod, projekty…)

Obrázky stránek jsou v `public/images/` (např. `uvodni.jpg`, `projekty.jpg`).
Nejjednodušší je nahrát nový soubor **se stejným názvem** (Upload files přepíše
původní) — pak není potřeba měnit žádný kód.

### 4) Přidání nového projektu

Otevři `app/projects/projects-view.tsx`, najdi `ongoingProjects` (běžící) nebo
`completedProjects` (dokončené) a zkopíruj jeden blok `{ ... },` jako vzor.
U běžících projektů je i ikonka (`icon: Droplet` apod.) — můžeš nechat stejnou.

### 5) Změna členů týmu / textů O nás

`app/about/about-view.tsx` — text o týmu najdeš přes Ctrl+F `Náš tým`.

### 6) Kam chodí zprávy z formuláře „Napište nám"

Příjemce **není v kódu** — je navázaný na klíč ve Web3Forms. Změna se dělá na
[web3forms.com](https://web3forms.com) (vygenerovat klíč pro nový e-mail a vložit ho
do souboru `.env` jako `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`).

### 7) Loga financování (MŽP, SFŽP, AOPK)

Loga jsou v `public/images/` (`logo-mzp.png`, `logo-sfzp.png`, `logo-aopk.png`)
a zobrazují se v sekci Financování na stránce Projekty. Pravidla povinné
publicity PPK a oficiální podklady (grafický manuál, hotový banner pro sociální
sítě) jsou ve složce **`docs/publicita/`**.

---

## Na co nesahat

- `components/ui/` — hotové stavební prvky (tlačítka, karty…)
- `package.json`, `pnpm-lock.yaml`, `next.config.mjs`, `tsconfig.json` — technické nastavení
- `app/api/` — serverová logika formuláře

Když si nejsi jistý(á), commitni klidně i tak — každou změnu jde na GitHubu
jedním klikem vrátit (**History → Revert**), nebo se zeptej. Pokud by se web po
změně nenasadil (chyba buildu), Vercel nechá běžet poslední funkční verzi —
nic se nerozbije veřejně.
