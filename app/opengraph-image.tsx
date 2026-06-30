import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"
export const alt = "ČSOP Trosečníci — Ochrana přírody v Ostrově u Lanškrouna"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Náhledový obrázek pro sdílení (OpenGraph/Twitter).
 * Na pozadí je jemně rozmázlá fotka přírody z okolí (hero krajinka),
 * přes kterou je tmavý zelený gradient, aby byl text dobře čitelný.
 */
export default async function OpengraphImage() {
  const bg = await readFile(join(process.cwd(), "public", "og-background.jpg"))
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Rozmázlá fotka přírody */}
        <img
          src={bgSrc}
          width={size.width}
          height={size.height}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Tmavý zelený gradient pro čitelnost textu */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(12,38,24,0.78) 0%, rgba(20,60,38,0.55) 50%, rgba(23,63,41,0.72) 100%)",
          }}
        />

        {/* Obsah */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            padding: "90px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 28 }}>
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 9999,
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div style={{ fontSize: 30, letterSpacing: 2, opacity: 0.9, textTransform: "uppercase" }}>
              csoptrosecnici.cz
            </div>
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}>
            ČSOP Trosečníci
          </div>
          <div
            style={{
              fontSize: 40,
              marginTop: 24,
              opacity: 0.95,
              maxWidth: 900,
              textShadow: "0 2px 14px rgba(0,0,0,0.45)",
            }}
          >
            Ochrana přírody v Ostrově u Lanškrouna
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
