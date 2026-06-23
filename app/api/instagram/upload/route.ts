import { NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { instagramConfig } from "@/lib/instagram"

export const runtime = "nodejs"

/**
 * Nahraje jeden slajd (data URL PNG) na Vercel Blob a vrátí veřejné URL.
 * Klient nahrává obrázky po jednom, aby se vešly do limitu těla požadavku.
 */
export async function POST(req: Request) {
  const cfg = instagramConfig()
  if (!cfg.configured) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 })
  }

  const { image, topic } = (await req.json().catch(() => ({}))) as {
    image?: string
    topic?: string
  }

  const match = /^data:(image\/\w+);base64,([\s\S]+)$/.exec(image ?? "")
  if (!match) {
    return NextResponse.json({ error: "Neplatný obrázek (očekává se data URL)." }, { status: 400 })
  }

  const contentType = match[1]
  const buffer = Buffer.from(match[2], "base64")
  const ext = contentType === "image/png" ? "png" : "jpg"
  const slug = (topic ?? "karusel").normalize("NFD").replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase().slice(0, 40)
  const name = `instagram/${slug}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

  try {
    const { url } = await put(name, buffer, {
      access: "public",
      contentType,
      token: cfg.blobToken,
    })
    return NextResponse.json({ url })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Nahrání obrázku selhalo." },
      { status: 500 },
    )
  }
}
