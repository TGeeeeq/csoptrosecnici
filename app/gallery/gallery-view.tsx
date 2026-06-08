"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, m } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { X, Play } from "lucide-react"
import Image from "next/image"
import { Sparkles } from "@/components/motion/sparkles"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { cn } from "@/lib/utils"

type MediaItem = {
  id: number
  type: "image" | "video"
  src: string
  thumbnail?: string
  title: { cs: string; en: string }
  category: string
}

export default function GalleryView() {
  const { t } = useLanguage()
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [filter, setFilter] = useState<string>("all")

  const closeModal = useCallback(() => {
    setSelectedMedia(null)
    setModalOpen(false)
  }, [])

  const openModal = useCallback((item: MediaItem) => {
    setSelectedMedia(item)
    setModalOpen(true)
    window.history.pushState({ modal: true }, "")
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      if (modalOpen) {
        setSelectedMedia(null)
        setModalOpen(false)
      }
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [modalOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedMedia) {
        e.preventDefault()
        if (window.history.state?.modal) {
          window.history.back()
        } else {
          closeModal()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedMedia, closeModal])

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (window.history.state?.modal) {
      window.history.back()
    } else {
      closeModal()
    }
  }

  const mediaItems: MediaItem[] = [
    { id: 1, type: "image", src: "/IMG_3486.JPEG", title: { cs: "PR U Kaštánku", en: "Nature Reserve U Kaštánku" }, category: "reserves" },
    { id: 2, type: "image", src: "/IMG_3499.JPEG", title: { cs: "Mokřady", en: "Wetlands" }, category: "reserves" },
    { id: 3, type: "image", src: "/IMG_3674.JPEG", title: { cs: "Práce v terénu", en: "Field Work" }, category: "activities" },
    { id: 4, type: "image", src: "/IMG_3677.JPEG", title: { cs: "Ochrana přírody", en: "Nature Conservation" }, category: "activities" },
    { id: 5, type: "image", src: "/IMG_3804.JPEG", title: { cs: "Ostrovská příroda", en: "Ostrov Nature" }, category: "reserves" },
    { id: 6, type: "image", src: "/IMG_3824.JPEG", title: { cs: "Biotop", en: "Biotope" }, category: "reserves" },
    { id: 7, type: "image", src: "/IMG_3828.JPEG", title: { cs: "Krajina", en: "Landscape" }, category: "reserves" },
    { id: 8, type: "image", src: "/IMG_3892.JPEG", title: { cs: "Revitalizace", en: "Revitalization" }, category: "projects" },
    { id: 9, type: "image", src: "/IMG_3898.JPEG", title: { cs: "Ekosystém", en: "Ecosystem" }, category: "reserves" },
    { id: 10, type: "image", src: "/IMG_3900.JPEG", title: { cs: "Louky", en: "Meadows" }, category: "reserves" },
    { id: 11, type: "image", src: "/IMG_3905.JPEG", title: { cs: "Péče o přírodu", en: "Nature Care" }, category: "activities" },
    { id: 12, type: "image", src: "/IMG_3906.JPEG", title: { cs: "Biodiverzita", en: "Biodiversity" }, category: "reserves" },
    { id: 13, type: "image", src: "/IMG_3929.JPEG", title: { cs: "Terénní práce", en: "Field Activities" }, category: "activities" },
    { id: 14, type: "image", src: "/IMG_3968.JPEG", title: { cs: "Projekt revitalizace", en: "Revitalization Project" }, category: "projects" },
    { id: 15, type: "image", src: "/IMG_4076.JPEG", title: { cs: "Ochranářská činnost", en: "Conservation Activity" }, category: "activities" },
    { id: 16, type: "image", src: "/IMG_4086.JPEG", title: { cs: "Příroda Lanškrounska", en: "Lanškroun Nature" }, category: "reserves" },
    { id: 17, type: "image", src: "/IMG_4104.JPEG", title: { cs: "Management biotopů", en: "Biotope Management" }, category: "projects" },
    { id: 18, type: "image", src: "/IMG_4153.JPEG", title: { cs: "Dobrovolnictví", en: "Volunteering" }, category: "activities" },
    { id: 19, type: "image", src: "/education.jpg", title: { cs: "Pastva dobytka", en: "Cattle Grazing" }, category: "activities" },
    { id: 20, type: "image", src: "/IMG_4318.JPEG", title: { cs: "Rybníky", en: "Ponds" }, category: "reserves" },
    { id: 21, type: "image", src: "/IMG_4363.JPEG", title: { cs: "Krajinná péče", en: "Landscape Care" }, category: "activities" },
    { id: 22, type: "image", src: "/IMG_4365.JPEG", title: { cs: "Obnova ekosystémů", en: "Ecosystem Restoration" }, category: "projects" },
    { id: 23, type: "image", src: "/IMG_4378.JPEG", title: { cs: "Mokřadní biotop", en: "Wetland Biotope" }, category: "reserves" },
    { id: 24, type: "image", src: "/IMG_4382.JPEG", title: { cs: "Terénní monitoring", en: "Field Monitoring" }, category: "activities" },
    { id: 25, type: "image", src: "/IMG_4503.JPEG", title: { cs: "Výsadba", en: "Planting" }, category: "projects" },
    { id: 26, type: "image", src: "/IMG_4535.JPEG", title: { cs: "Ochrana lokalit", en: "Site Protection" }, category: "reserves" },
    { id: 27, type: "image", src: "/IMG_4939.JPEG", title: { cs: "Příroda", en: "Nature" }, category: "reserves" },
    { id: 28, type: "image", src: "/P1010129.JPG", title: { cs: "Dokumentace", en: "Documentation" }, category: "activities" },
    { id: 29, type: "image", src: "/nature-reserve.JPEG", title: { cs: "Přírodní rezervace", en: "Nature Reserve" }, category: "reserves" },
    { id: 30, type: "image", src: "/P1010194.JPG", title: { cs: "Terénní výzkum", en: "Field Research" }, category: "activities" },
    { id: 31, type: "image", src: "/P3240116.JPG", title: { cs: "Jarní krajina", en: "Spring Landscape" }, category: "reserves" },
    { id: 32, type: "image", src: "/P3240117.JPG", title: { cs: "Příroda na jaře", en: "Nature in Spring" }, category: "reserves" },
    { id: 33, type: "image", src: "/P3240118.JPG", title: { cs: "Biotop na jaře", en: "Spring Biotope" }, category: "reserves" },
    { id: 34, type: "image", src: "/P3240120.JPG", title: { cs: "Revitalizovaná lokalita", en: "Revitalized Site" }, category: "projects" },
    { id: 35, type: "image", src: "/P3240121.JPG", title: { cs: "Mokřady U Vodárny", en: "Wetlands U Vodárny" }, category: "reserves" },
    { id: 36, type: "image", src: "/P3240122.JPG", title: { cs: "VKP", en: "Important Landscape Element" }, category: "reserves" },
    { id: 37, type: "image", src: "/P3240129.JPG", title: { cs: "Péče o louky", en: "Meadow Care" }, category: "activities" },
    { id: 38, type: "image", src: "/P3240131.JPG", title: { cs: "Lučnatá krajina", en: "Meadow Landscape" }, category: "reserves" },
    { id: 39, type: "image", src: "/P3240132.JPG", title: { cs: "Travnaté porosty", en: "Grassland" }, category: "reserves" },
    { id: 40, type: "image", src: "/P4220153.JPG", title: { cs: "Dubnová příroda", en: "April Nature" }, category: "reserves" },
    { id: 41, type: "image", src: "/P4220156.JPG", title: { cs: "Jarní biotop", en: "Spring Biotope" }, category: "reserves" },
    { id: 42, type: "image", src: "/P5170225.JPG", title: { cs: "Květnová krajina", en: "May Landscape" }, category: "reserves" },
    { id: 43, type: "image", src: "/P5170226.JPG", title: { cs: "Kvetoucí louky", en: "Flowering Meadows" }, category: "reserves" },
    { id: 44, type: "image", src: "/42F27DC6-5015-48FA-900C-366735B14931.jpg", title: { cs: "Ochranářská práce", en: "Conservation Work" }, category: "activities" },
  ]

  const categories = [
    { id: "all", label: t("Vše", "All") },
    { id: "reserves", label: t("Rezervace", "Reserves") },
    { id: "activities", label: t("Aktivity", "Activities") },
    { id: "projects", label: t("Projekty", "Projects") },
  ]

  const filtered = filter === "all" ? mediaItems : mediaItems.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
        <Sparkles count={22} color="rgba(255,255,255,0.5)" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <m.h1
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 font-serif text-4xl font-bold sm:text-5xl"
          >
            {t("Galerie", "Gallery")}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto max-w-2xl text-lg text-primary-foreground/90"
          >
            {t("Pohled na naši práci a krásu ostrovské přírody", "A glimpse into our work and the beauty of Ostrov nature")}
          </m.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtr kategorií */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  filter === cat.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-secondary text-secondary-foreground hover:bg-accent",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <Stagger key={filter} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <StaggerItem key={item.id}>
                <Card
                  className="group cursor-pointer overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                  onClick={() => openModal(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {item.type === "image" ? (
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={t(item.title.cs, item.title.en)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <>
                        <Image
                          src={item.thumbnail || item.src}
                          alt={t(item.title.cs, item.title.en)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90">
                            <Play className="ml-1 h-8 w-8 text-primary-foreground" fill="currentColor" />
                          </div>
                        </div>
                      </>
                    )}
                    {/* Titulek při hoveru */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                      {t(item.title.cs, item.title.en)}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={handleCloseClick}
          >
            <button
              className="absolute right-4 top-4 z-10 text-white transition-colors hover:text-primary"
              onClick={handleCloseClick}
              aria-label="Zavřít"
            >
              <X className="h-8 w-8" />
            </button>
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedMedia.src || "/placeholder.svg"}
                    alt={t(selectedMedia.title.cs, selectedMedia.title.en)}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              ) : (
                <video src={selectedMedia.src} controls className="h-auto max-h-[80vh] w-full" autoPlay />
              )}
              <p className="mt-4 text-center text-sm text-white/80">{t(selectedMedia.title.cs, selectedMedia.title.en)}</p>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
