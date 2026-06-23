import { NextResponse } from "next/server"
import { igPost, instagramConfig } from "@/lib/instagram"

export const runtime = "nodejs"
export const maxDuration = 60

/** Zjistí, zda je publikování nakonfigurované (řídí stav tlačítka v UI). */
export async function GET() {
  return NextResponse.json({ configured: instagramConfig().configured })
}

/**
 * Publikuje karusel na Instagram z veřejných URL obrázků (Vercel Blob).
 * Postup Graph API: child kontejnery → CAROUSEL kontejner → media_publish.
 */
export async function POST(req: Request) {
  const cfg = instagramConfig()
  if (!cfg.configured || !cfg.token || !cfg.businessId) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 })
  }

  const { caption, imageUrls } = (await req.json().catch(() => ({}))) as {
    caption?: string
    imageUrls?: string[]
  }

  if (!Array.isArray(imageUrls) || imageUrls.length < 2 || imageUrls.length > 10) {
    return NextResponse.json(
      { error: "Instagram karusel potřebuje 2 až 10 obrázků." },
      { status: 400 },
    )
  }

  try {
    // 1) Kontejner pro každý slajd
    const children: string[] = []
    for (const url of imageUrls) {
      const child = await igPost(`${cfg.businessId}/media`, {
        image_url: url,
        is_carousel_item: "true",
        access_token: cfg.token,
      })
      children.push(child.id)
    }

    // 2) Kontejner celého karuselu
    const container = await igPost(`${cfg.businessId}/media`, {
      media_type: "CAROUSEL",
      children: children.join(","),
      caption: caption ?? "",
      access_token: cfg.token,
    })

    // 3) Publikace
    const published = await igPost(`${cfg.businessId}/media_publish`, {
      creation_id: container.id,
      access_token: cfg.token,
    })

    return NextResponse.json({ id: published.id })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Publikace selhala." },
      { status: 502 },
    )
  }
}
