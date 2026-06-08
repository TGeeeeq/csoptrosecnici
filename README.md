# ČSOP Trosečníci — web

Web základní organizace **ZO ČSOP Trosečníci** (ochrana přírody, Ostrov u Lanškrouna).

Postaveno na **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui**, animace pomocí **motion**. Web je dvojjazyčný (čeština/angličtina, přepínač v navigaci).

## Lokální vývoj

```bash
pnpm install
pnpm dev          # vývojový server na http://localhost:3000
pnpm build        # produkční build
pnpm start        # spuštění produkční verze
```

> **Pozn. k restriktivní síti:** `next/font/google` stahuje fonty (Inter, Crimson Pro) při buildu z Google Fonts. Pokud build hlásí TLS chybu při stahování fontů (typicky za firemní proxy), spusťte ho s `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1`. **Na Vercelu to není potřeba.**

## Obrázky a PDF (`/public`)

Mediální soubory nejsou součástí repozitáře (jsou velké) — nahrajte je do složky **`public/`**:

- **`public/images/`** — obrázky stránek: `uvodni.jpg`, `logo.png`, `nature-reserve.jpg`, `wetland-restoration.jpg`, `cedule.JPG`, `monitoring.jpg`, `hnizdeni.JPEG`, `forest-restoration.jpg`, `karel-malek.jpg`, `highland-cattle.JPEG`, `kontakt.png`, `projekty.jpg`
- **`public/`** (přímo v kořeni) — fotky galerie: `IMG_*.JPEG`, `P*.JPG`, `education.jpg`, `nature-reserve.JPEG`, `42F27DC6-...jpg`
- **`public/`** — ikony: `icon.svg`, `icon-light-32x32.png`, `icon-dark-32x32.png`, `apple-icon.png`
- **`public/`** — knihy: `karel-malek-book-1.pdf`, `karel-malek-book-2.pdf`

⚠️ **Názvy souborů jsou na Vercelu (Linux) citlivé na velikost písmen** (`.JPG` ≠ `.jpg`). Nahrajte je přesně tak, jak jsou uvedené v kódu, jinak se obrázky zobrazí jen lokálně, ale ne v produkci. Dokud soubory nejsou nahrané, zobrazuje se `public/placeholder.svg`.

## Kontaktní formulář

Formulář (`/contact`) odesílá přes serverový route handler `app/api/contact/route.ts`. Nastavte **jeden** klíč v proměnných prostředí (viz `.env.example`):

- **`WEB3FORMS_ACCESS_KEY`** — doporučeno, zdarma, bez ověřování domény ([web3forms.com](https://web3forms.com)).
- **`RESEND_API_KEY`** — alternativa s lepší doručitelností (vyžaduje ověření domény).

Bez klíče formulář funguje v „degradovaném" režimu — nabídne návštěvníkovi přímý e-mail `csoptrosecnici@seznam.cz` (e-mail i číslo účtu jsou na stránce vždy viditelné). Proti spamu je nasazen honeypot a serverová validace.

## Nasazení na Vercel

1. Propojte tento GitHub repozitář s projektem na [Vercel](https://vercel.com) (Framework: Next.js — detekuje se automaticky).
2. Ve **Project → Settings → Environment Variables** přidejte klíč pro formulář (`WEB3FORMS_ACCESS_KEY`).
3. Vercel nasazuje automaticky při každém pushi. Produkční web jede z produkční větve (`main`).

### Doména `csoptrosecnici.cz` (registrovaná u Wedosu)

Ve Vercelu **Project → Settings → Domains** přidejte `csoptrosecnici.cz` i `www.csoptrosecnici.cz`. V DNS manageru Wedosu nastavte:

| Typ | Název | Hodnota |
|-----|-------|---------|
| `A` | `@` (kořen) | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Přesné hodnoty potvrdí Vercel po přidání domény. Pokud máte na doméně `CAA` záznamy, povolte `letsencrypt.org`. HTTPS certifikát zařídí Vercel automaticky, propagace DNS ~60 min.

## SEO (po nasazení)

Web má připravené: per-page meta tagy, OpenGraph/Twitter, dynamický náhledový obrázek (`/opengraph-image`), `sitemap.xml`, `robots.txt` (vč. `SeznamBot`), `manifest.webmanifest` a strukturovaná data JSON-LD (organizace, Karel Málek, drobečky).

Po spuštění domény doporučujeme:

1. Ověřit web v **[Google Search Console](https://search.google.com/search-console)** a odeslat `https://csoptrosecnici.cz/sitemap.xml`.
2. Ověřit web v **[Seznam Webmaster](https://search.seznam.cz/wmt)** (Seznam je klíčový český vyhledávač) a odeslat sitemapu.

## Struktura

```
app/                 # stránky (server page.tsx + klientské *-view.tsx), sitemap/robots/manifest/OG, API
components/          # sdílené komponenty, motion/ (animace), ui/ (shadcn)
lib/                 # seo.ts (schémata), contact-schema.ts, utils.ts
hooks/               # use-reduced-motion ad.
```
