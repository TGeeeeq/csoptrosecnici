import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "ČSOP Trosečníci — Ochrana přírody v Ostrově u Lanškrouna"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Dynamicky generovaný náhledový obrázek pro sdílení (OpenGraph/Twitter).
 * Bez nutnosti assetu – vykreslí se z JSX/CSS přes next/og.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #173f29 0%, #2f7d4f 55%, #6aa84f 100%)",
          color: "white",
          fontFamily: "sans-serif",
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
          <div style={{ fontSize: 30, letterSpacing: 2, opacity: 0.85, textTransform: "uppercase" }}>
            csoptrosecnici.cz
          </div>
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>ČSOP Trosečníci</div>
        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.92, maxWidth: 900 }}>
          Ochrana přírody v Ostrově u Lanškrouna
        </div>
      </div>
    ),
    { ...size },
  )
}
