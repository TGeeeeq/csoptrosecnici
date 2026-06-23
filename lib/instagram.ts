/**
 * Sdílené pomůcky pro publikování na Instagram přes Graph API.
 *
 * Funkce je aktivní, jen když jsou nastavené ENV proměnné:
 *   INSTAGRAM_ACCESS_TOKEN  – dlouhodobý token (Instagram Business/Creator)
 *   INSTAGRAM_BUSINESS_ID   – ID Instagram Business účtu
 *   BLOB_READ_WRITE_TOKEN   – token Vercel Blob (veřejné URL obrázků)
 *
 * Bez nich appka spadne zpět na pouhé stažení obrázků (viz publish-panel).
 */

export const IG_GRAPH = "https://graph.facebook.com/v21.0"

export type InstagramConfig = {
  token?: string
  businessId?: string
  blobToken?: string
  configured: boolean
}

export function instagramConfig(): InstagramConfig {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const businessId = process.env.INSTAGRAM_BUSINESS_ID
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN
  return {
    token,
    businessId,
    blobToken,
    configured: Boolean(token && businessId && blobToken),
  }
}

/** POST na Graph API s form-url-encoded tělem; vyhodí čitelnou chybu. */
export async function igPost(
  path: string,
  params: Record<string, string>,
): Promise<{ id: string }> {
  const res = await fetch(`${IG_GRAPH}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params).toString(),
  })
  const data = (await res.json().catch(() => ({}))) as {
    id?: string
    error?: { message?: string }
  }
  if (!res.ok || !data.id) {
    throw new Error(data?.error?.message || `Graph API chyba (${res.status})`)
  }
  return { id: data.id }
}
