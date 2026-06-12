/** @type {import('next').NextConfig} */

// CSP: 'unsafe-inline' u skriptů je nutné kvůli inline hydrataci Next.js (bez
// nonce middleware); i tak politika blokuje skripty a připojení na cizí domény.
// va.vercel-scripts.com používá Vercel Analytics v dev režimu, v produkci běží
// přes /_vercel/* na vlastním originu.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
]

const nextConfig = {
  // Typy se validují při buildu (kód je type-clean). Optimalizace obrázků je
  // zapnutá (běžíme na Vercelu); všechny obrázky jsou ze stejného originu,
  // proto není potřeba images.remotePatterns.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }]
  },
}

export default nextConfig
