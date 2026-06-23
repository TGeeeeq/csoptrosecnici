"use client"

import { useEffect, useState } from "react"
import { Instagram, Download, Loader2, Info } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { Caption } from "@/lib/carousel-schema"
import { nodesToDataUrls } from "./export"
import { composeCaption } from "./captions-panel"

export function PublishPanel({
  captions,
  getNodes,
  topic,
  onDownloadZip,
}: {
  captions: Caption[]
  getNodes: () => HTMLElement[]
  topic: string
  onDownloadZip: () => void
}) {
  const [configured, setConfigured] = useState<boolean | null>(null)
  const [captionIndex, setCaptionIndex] = useState(0)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let active = true
    fetch("/api/instagram/publish")
      .then((r) => r.json())
      .then((d) => active && setConfigured(Boolean(d?.configured)))
      .catch(() => active && setConfigured(false))
    return () => {
      active = false
    }
  }, [])

  const publish = async () => {
    const nodes = getNodes()
    if (nodes.length < 2) {
      toast.error("Instagram karusel potřebuje aspoň 2 slajdy.")
      return
    }
    setBusy(true)
    try {
      toast.info("Vykresluji slajdy…")
      const dataUrls = await nodesToDataUrls(nodes)

      toast.info("Nahrávám obrázky…")
      const imageUrls: string[] = []
      for (const image of dataUrls) {
        const res = await fetch("/api/instagram/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image, topic }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data?.error || "Nahrání selhalo.")
        imageUrls.push(data.url)
      }

      toast.info("Publikuji na Instagram…")
      const caption = captions[captionIndex] ? composeCaption(captions[captionIndex]) : ""
      const res = await fetch("/api/instagram/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caption, imageUrls }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Publikace selhala.")
      toast.success("Hotovo! Karusel byl publikován na Instagram.")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Publikace selhala.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-5">
      {captions.length > 0 ? (
        <div className="space-y-2">
          <Label>Popisek k publikaci</Label>
          <Select value={String(captionIndex)} onValueChange={(v) => setCaptionIndex(Number(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {captions.map((c, i) => (
                <SelectItem key={i} value={String(i)}>
                  {c.label || `Varianta ${i + 1}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : null}

      {configured ? (
        <Button onClick={publish} disabled={busy} className="w-full">
          {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Instagram className="mr-2 h-4 w-4" />}
          Publikovat na Instagram
        </Button>
      ) : (
        <div className="space-y-3">
          <Button disabled className="w-full" variant="secondary">
            <Instagram className="mr-2 h-4 w-4" />
            Publikování není nastavené
          </Button>
          <div className="flex gap-2 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              Přímé sdílení na Instagram se zapne po nastavení Meta aplikace a proměnných prostředí
              (viz <span className="font-medium">NAVOD-KARUSEL.md</span>). Mezitím stáhněte obrázky a
              nahrajte je ručně.
            </p>
          </div>
        </div>
      )}

      <Button variant="outline" onClick={onDownloadZip} className="w-full">
        <Download className="mr-2 h-4 w-4" />
        Stáhnout vše jako ZIP
      </Button>
    </div>
  )
}
