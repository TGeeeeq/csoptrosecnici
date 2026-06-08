import { NextResponse } from "next/server"
import { contactServerSchema } from "@/lib/contact-schema"

const RECIPIENT = "csoptrosecnici@seznam.cz"

export async function POST(req: Request) {
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

  const { name, email, message, website } = parsed.data

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
