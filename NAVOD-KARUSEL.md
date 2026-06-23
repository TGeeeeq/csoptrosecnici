# Karusel studio — návod

Interní nástroj pro tvorbu instagramových karuselů ČSOP Trosečníci.
Najdete ho na adrese **`/studio`** (záměrně není v menu webu).

## Jak to funguje

1. **Téma → JSON.** Řeknete Claudovi v chatu, na jaké téma chcete karusel.
   Claude připraví **JSON soubor** s obsahem slajdů a třemi návrhy popisků
   (včetně hashtagů).
2. **Nahrání.** Na stránce `/studio` kliknete na **„Nahrát JSON"** a vyberete
   soubor. (Tlačítkem **„Ukázka"** si načtete vzorový karusel o invazních
   druzích.)
3. **Úpravy.** V pravém panelu upravíte:
   - **Obsah** — texty aktivního slajdu, jeho typ a zarovnání,
   - **Design** — barevné téma, akcentní barvu, velikost písma a loga
     (ČSOP + volitelná publicita MŽP/SFŽP/AOPK),
   - **Popisky** — tři varianty textu na Instagram, s tlačítkem „Kopírovat".
   Vlevo přepínáte, přidáváte, mažete a přesouváte slajdy.
4. **Výstup.**
   - **Stáhnout slajd** — aktuální slajd jako PNG (1080×1350),
   - **Stáhnout vše (ZIP)** — všechny slajdy v jednom ZIPu,
   - karta **Sdílení** — přímé publikování na Instagram (po nastavení, viz níže).

## Formát JSON

Viz `public/karusel/ukazka-invazni-druhy.json`. Zkrácený přehled:

```jsonc
{
  "version": 1,
  "topic": "Téma karuselu",
  "theme": "forest",            // forest | meadow | bark
  "fontScale": 1,                // 0.7–1.4
  "align": "left",              // left | center
  "branding": { "csopLogo": true, "publicita": false },
  "slides": [
    { "type": "cover", "eyebrow": "...", "title": "...", "subtitle": "..." },
    { "type": "plant", "status": "...", "name": "...", "latin": "...",
      "fact": "...", "use": "...", "warning": null },
    { "type": "fact",  "eyebrow": "...", "title": "...", "body": "..." },
    { "type": "tip",   "eyebrow": "Tip", "title": "...", "body": "..." },
    { "type": "outro", "title": "...", "body": "...", "cta": "..." }
  ],
  "captions": [
    { "label": "Varianta A", "text": "...", "hashtags": ["#..."] }
  ]
}
```

Chybějící pole se doplní výchozí hodnotou — ruční úpravy JSON tedy nahrávání
nerozbijí.

## Zapnutí přímého publikování na Instagram (volitelné)

Bez nastavení appka pouze stahuje obrázky. Pro přímé sdílení je potřeba:

1. **Instagram Business nebo Creator účet** (v aplikaci Instagram:
   Nastavení → Typ účtu).
2. **Meta aplikace** na <https://developers.facebook.com> s produktem
   *Instagram Graph API*; vygenerujte **dlouhodobý přístupový token** a zjistěte
   **ID Instagram Business účtu**.
3. **Vercel Blob** úložiště (Storage → Blob) — Instagram Graph API stahuje
   obrázky z veřejné URL, sem se dočasně nahrají vygenerované slajdy.
4. Do proměnných prostředí (Vercel → Settings → Environment Variables, nebo
   lokálně `.env`) doplňte podle `.env.example`:
   - `INSTAGRAM_ACCESS_TOKEN`
   - `INSTAGRAM_BUSINESS_ID`
   - `BLOB_READ_WRITE_TOKEN`

Po nasazení se na kartě **Sdílení** odemkne tlačítko *„Publikovat na Instagram"*.
Tokeny Instagramu mají omezenou platnost — počítejte s jejich občasným obnovením.

> Poznámka: Instagram karusel musí mít **2 až 10 slajdů**.
