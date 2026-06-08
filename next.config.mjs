/** @type {import('next').NextConfig} */
const nextConfig = {
  // Typy se validují při buildu (kód je type-clean). Optimalizace obrázků je
  // zapnutá (běžíme na Vercelu); všechny obrázky jsou ze stejného originu,
  // proto není potřeba images.remotePatterns.
}

export default nextConfig
