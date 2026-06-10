"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { AnimatePresence, m } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [modalOpen, setModalOpen] = useState(false)
  const [filter, setFilter] = useState<string>("all")
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left")
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)

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
  const selectedMedia = currentIndex >= 0 && currentIndex < filtered.length ? filtered[currentIndex] : null
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < filtered.length - 1

  const closeModal = useCallback(() => {
    setCurrentIndex(-1)
    setModalOpen(false)
  }, [])

  const openModal = useCallback((index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
    window.history.pushState({ modal: true }, "")
  }, [])

  const navigatePrev = useCallback(() => {
    setSlideDirection("right")
    setCurrentIndex((prev: number) => Math.max(0, prev - 1))
  }, [])

  const navigateNext = useCallback((length: number) => {
    setSlideDirection("left")
    setCurrentIndex((prev: number) => Math.min(length - 1, prev + 1))
  }, [])

  const handleFilterChange = (newFilter: string) => {
    if (modalOpen) closeModal()
    setFilter(newFilter)
  }

  useEffect(() => {
    const handlePopState = () => {
      if (modalOpen) {
        setCurrentIndex(-1)
        setModalOpen(false)
      }
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [modalOpen])

  useEffect(() => {
    const len = filtered.length
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return
      if (e.key === "Escape") {
        e.preventDefault()
        if (window.history.state?.modal) window.history.back()
        else closeModal()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        navigatePrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        navigateNext(len)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [modalOpen, closeModal, navigatePrev, navigateNext, filtered.length])

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (window.history.state?.modal) window.history.back()
    else closeModal()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY)
    if (Math.abs(dx) > dy && Math.abs(dx) > 48) {
      if (dx > 0) navigateNext(filtered.length)
      else navigatePrev()
    }
  }

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
                onClick={() => handleFilterChange(cat.id)}
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
            {filtered.map((item, index) => (
              <StaggerItem key={item.id}>
                <Card
                  className="group cursor-pointer overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                  onClick={() => openModal(index)}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-black"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top bar */}
            <div className="relative z-20 flex flex-shrink-0 items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
              <m.span
                key={currentIndex}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-mono text-sm font-medium tabular-nums text-white/50"
              >
                {currentIndex + 1} / {filtered.length}
              </m.span>

              {/* Keyboard hint – visible only on desktop */}
              <span className="hidden select-none text-xs text-white/30 sm:block">
                {t("← → pro navigaci  ·  Esc pro zavření", "← → to navigate  ·  Esc to close")}
              </span>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
                onClick={handleCloseClick}
                aria-label="Zavřít"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image area */}
            <div className="relative min-h-0 flex-1">
              {/* Prev button */}
              <AnimatePresence>
                {hasPrev && (
                  <m.button
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/25 active:scale-95 sm:left-4 sm:h-14 sm:w-14"
                    onClick={(e) => { e.stopPropagation(); navigatePrev() }}
                    aria-label={t("Předchozí", "Previous")}
                  >
                    <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
                  </m.button>
                )}
              </AnimatePresence>

              {/* Next button */}
              <AnimatePresence>
                {hasNext && (
                  <m.button
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/25 active:scale-95 sm:right-4 sm:h-14 sm:w-14"
                    onClick={(e) => { e.stopPropagation(); navigateNext(filtered.length) }}
                    aria-label={t("Další", "Next")}
                  >
                    <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
                  </m.button>
                )}
              </AnimatePresence>

              {/* Animated photo */}
              <AnimatePresence mode="wait" custom={slideDirection}>
                <m.div
                  key={currentIndex}
                  custom={slideDirection}
                  variants={{
                    enter: (dir: string) => ({
                      opacity: 0,
                      x: dir === "left" ? 60 : -60,
                      scale: 0.97,
                    }),
                    center: { opacity: 1, x: 0, scale: 1 },
                    exit: (dir: string) => ({
                      opacity: 0,
                      x: dir === "left" ? -60 : 60,
                      scale: 0.97,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center px-14 sm:px-20"
                >
                  {selectedMedia.type === "image" ? (
                    <div className="relative h-full w-full">
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
                    <video
                      src={selectedMedia.src}
                      controls
                      className="max-h-full w-full"
                      autoPlay
                    />
                  )}
                </m.div>
              </AnimatePresence>

              {/* Tap zones on mobile for prev/next */}
              <button
                className="absolute inset-y-0 left-0 z-10 w-1/4 sm:hidden"
                onClick={(e) => { e.stopPropagation(); if (hasPrev) navigatePrev() }}
                aria-label={t("Předchozí", "Previous")}
              />
              <button
                className="absolute inset-y-0 right-0 z-10 w-1/4 sm:hidden"
                onClick={(e) => { e.stopPropagation(); if (hasNext) navigateNext(filtered.length) }}
                aria-label={t("Další", "Next")}
              />

              {/* Click backdrop to close */}
              <button
                className="absolute inset-0 z-0"
                onClick={handleCloseClick}
                aria-label={t("Zavřít", "Close")}
                tabIndex={-1}
              />
            </div>

            {/* Bottom bar */}
            <div className="relative z-20 flex-shrink-0 px-4 py-3 text-center sm:px-6 sm:py-4">
              <AnimatePresence mode="wait">
                <m.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-medium text-white/80"
                >
                  {t(selectedMedia.title.cs, selectedMedia.title.en)}
                </m.p>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="mx-auto mt-2 h-0.5 w-32 overflow-hidden rounded-full bg-white/10 sm:w-48">
                <m.div
                  className="h-full rounded-full bg-white/40"
                  animate={{ width: `${((currentIndex + 1) / filtered.length) * 100}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
