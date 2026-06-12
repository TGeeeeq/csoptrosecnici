import { NextResponse } from "next/server"
import { contactServerSchema } from "@/lib/contact-schema"

const RECIPIENT = "david.hmira@csoptrosecnici.cz"

// Rate limit: 5 zpráv / 10 minut na IP. Mapa žije jen po dobu života serverless
// instance — to stačí, cílem je zastavit dávkový spam, ne vést trvalou evidenci.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const MAX_BODY_BYTES = 32_000
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key)
    }
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

// CSRF/abuse ochrana: prohlížečové požadavky musí přicházet z našeho originu.
// Chybějící Origin (např. striktní privátní režimy) propouštíme.
function isCrossOrigin(req: Request): boolean {
  const origin = req.headers.get("origin")
  if (!origin) return false
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host")
  try {
    return new URL(origin).host !== host
  } catch {
    return true
  }
}

export async function POST(req: Request) {
  if (isCrossOrigin(req)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 })
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 })
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  const parsed = contactServerSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 })
  }

  const { email, message, website } = parsed.data
  // Jméno jde do předmětu e-mailu — zalomení řádků by umožnilo podvrhnout hlavičky.
  const name = parsed.data.name.replace(/[\r\n]+/g, " ")

  // Honeypot: pokud je skryté pole vyplněné, jde o bota – tváříme se OK a nic neodesíláme.
  if (website && website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY
  const resendKey = process.env.RESEND_API_KEY

  const subject = `Zpráva z webu od ${name}`
  const text = `Jméno: ${name}\nE-mail: ${email}\n\n${message}`

  // 1) Web3Forms (doporučená cesta – stačí access key, bez ověřování domény)
  if (web3formsKey) {
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject,
          from_name: `${name} (web ČSOP Trosečníci)`,
          replyto: email,
          message: text,
        }),
      })
      const data = (await r.json().catch(() => ({}))) as { success?: boolean }
      if (!r.ok || !data.success) throw new Error("web3forms_failed")
      return NextResponse.json({ ok: true })
    } catch {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
    }
  }

  // 2) Resend (vyžaduje ověřenou odesílací doménu)
  if (resendKey) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "ČSOP Trosečníci <web@csoptrosecnici.cz>",
          to: [RECIPIENT],
          reply_to: email,
          subject,
          text,
        }),
      })
      if (!r.ok) throw new Error("resend_failed")
      return NextResponse.json({ ok: true })
    } catch {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
    }
  }

  // 3) Žádný klíč není nastaven → degradovaný režim (UI nabídne přímý e-mail).
  return NextResponse.json({ ok: false, degraded: true }, { status: 503 })
}
