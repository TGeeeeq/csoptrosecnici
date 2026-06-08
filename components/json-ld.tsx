/**
 * Server komponenta vykreslující strukturovaná data (JSON-LD) jako <script>.
 * Obsah je statický (z lib/seo.ts), žádný uživatelský vstup → bezpečné.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
