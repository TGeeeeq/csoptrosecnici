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

  // Seřazeno podle líbivosti (nejatraktivnější první)
  const mediaItems: MediaItem[] = [
    { id: 1, type: "image", src: "/prstnatec-majovy.jpeg", title: { cs: "Prstnatec májový", en: "Western Marsh-orchid" }, category: "meadows" },
    { id: 2, type: "image", src: "/IMG_4535.JPEG", title: { cs: "Skotský náhorní skot", en: "Highland Cattle" }, category: "pastures" },
    { id: 3, type: "image", src: "/exkurze-za-skotem.jpeg", title: { cs: "Exkurze za skotem", en: "Excursion to the Cattle" }, category: "pastures" },
    { id: 4, type: "image", src: "/IMG_4939.JPEG", title: { cs: "Zimní portrét", en: "Winter Portrait" }, category: "pastures" },
    { id: 5, type: "image", src: "/IMG_4503.JPEG", title: { cs: "Výhled do kotliny", en: "View of the Basin" }, category: "landscape" },
    { id: 6, type: "image", src: "/IMG_3892.JPEG", title: { cs: "Večer nad loukami", en: "Evening over the Meadows" }, category: "landscape" },
    { id: 7, type: "image", src: "/P3240116.JPG", title: { cs: "Lesní tůň", en: "Forest Pool" }, category: "wetlands" },
    { id: 8, type: "image", src: "/IMG_3674.JPEG", title: { cs: "Prstnatec v trávě", en: "Orchid in the Grass" }, category: "meadows" },
    { id: 9, type: "image", src: "/P3240118.JPG", title: { cs: "Blatouchy v březině", en: "Marsh Marigolds in the Birch Grove" }, category: "wetlands" },
    { id: 10, type: "image", src: "/P3240117.JPG", title: { cs: "Jarní mokřad", en: "Spring Wetland" }, category: "wetlands" },
    { id: 11, type: "image", src: "/IMG_4382.JPEG", title: { cs: "Křižák na stéble", en: "Orb-weaver on a Stem" }, category: "pastures" },
    { id: 12, type: "image", src: "/P3240129.JPG", title: { cs: "Ostřicové bulty", en: "Sedge Tussocks" }, category: "wetlands" },
    { id: 13, type: "image", src: "/IMG_3499.JPEG", title: { cs: "Mokřady", en: "Wetlands" }, category: "wetlands" },
    { id: 14, type: "image", src: "/P3240121.JPG", title: { cs: "Mokřadní louka", en: "Wetland Meadow" }, category: "wetlands" },
    { id: 15, type: "image", src: "/42F27DC6-5015-48FA-900C-366735B14931.jpg", title: { cs: "Jarní květy", en: "Spring Blossoms" }, category: "meadows" },
    { id: 16, type: "image", src: "/IMG_4153.JPEG", title: { cs: "Letní květy", en: "Summer Flowers" }, category: "meadows" },
    { id: 17, type: "image", src: "/IMG_4104.JPEG", title: { cs: "Vřesoviště", en: "Heathland" }, category: "meadows" },
    { id: 18, type: "image", src: "/IMG_4378.JPEG", title: { cs: "Žluté květy", en: "Yellow Flowers" }, category: "meadows" },
    { id: 19, type: "image", src: "/IMG_3906.JPEG", title: { cs: "Výhled na hřebeny", en: "View of the Ridges" }, category: "landscape" },
    { id: 20, type: "image", src: "/IMG_4086.JPEG", title: { cs: "Stráň se solitéry", en: "Hillside with Solitary Trees" }, category: "landscape" },
    { id: 21, type: "image", src: "/nature-reserve.JPEG", title: { cs: "Jarní pastvina", en: "Spring Pasture" }, category: "pastures" },
    { id: 22, type: "image", src: "/IMG_4076.JPEG", title: { cs: "Stín starého stromu", en: "Shade of an Old Tree" }, category: "landscape" },
    { id: 23, type: "image", src: "/P4220156.JPG", title: { cs: "Orchidejová louka", en: "Orchid Meadow" }, category: "meadows" },
    { id: 24, type: "image", src: "/IMG_3828.JPEG", title: { cs: "Vlhká údolnice", en: "Wet Valley" }, category: "wetlands" },
    { id: 25, type: "image", src: "/education.jpg", title: { cs: "Zimní pastva", en: "Winter Grazing" }, category: "pastures" },
    { id: 26, type: "image", src: "/P5170225.JPG", title: { cs: "Senoseč", en: "Haymaking" }, category: "meadows" },
    { id: 27, type: "image", src: "/IMG_3929.JPEG", title: { cs: "Pastvina s břízami", en: "Pasture with Birches" }, category: "landscape" },
    { id: 28, type: "image", src: "/P3240120.JPG", title: { cs: "Jarní les", en: "Spring Forest" }, category: "landscape" },
    { id: 29, type: "image", src: "/P3240132.JPG", title: { cs: "Březina", en: "Birch Grove" }, category: "landscape" },
    { id: 30, type: "image", src: "/P1010194.JPG", title: { cs: "Květnatá louka", en: "Flower-rich Meadow" }, category: "meadows" },
    { id: 31, type: "image", src: "/IMG_4365.JPEG", title: { cs: "Po kosení", en: "After Mowing" }, category: "meadows" },
    { id: 32, type: "image", src: "/P5170226.JPG", title: { cs: "Ostřicová louka", en: "Sedge Meadow" }, category: "meadows" },
    { id: 33, type: "image", src: "/IMG_4363.JPEG", title: { cs: "Luční rostliny", en: "Meadow Plants" }, category: "meadows" },
    { id: 34, type: "image", src: "/IMG_3677.JPEG", title: { cs: "Mladá vrba", en: "Young Willow" }, category: "meadows" },
    { id: 35, type: "image", src: "/IMG_3486.JPEG", title: { cs: "Jarní podrost", en: "Spring Undergrowth" }, category: "landscape" },
    { id: 36, type: "image", src: "/IMG_4318.JPEG", title: { cs: "Luční bylina", en: "Meadow Herb" }, category: "meadows" },
    { id: 37, type: "image", src: "/P1010129.JPG", title: { cs: "Bujný podrost", en: "Lush Undergrowth" }, category: "landscape" },
    { id: 38, type: "image", src: "/IMG_3804.JPEG", title: { cs: "Posečená louka", en: "Mown Meadow" }, category: "meadows" },
    { id: 39, type: "image", src: "/IMG_3968.JPEG", title: { cs: "Travní porost", en: "Grassland" }, category: "meadows" },
    { id: 40, type: "image", src: "/IMG_3824.JPEG", title: { cs: "Údolní louka", en: "Valley Meadow" }, category: "meadows" },
    { id: 41, type: "image", src: "/IMG_3900.JPEG", title: { cs: "Oprava křovinořezu", en: "Brushcutter Repair" }, category: "meadows" },
    { id: 42, type: "image", src: "/IMG_3898.JPEG", title: { cs: "Výjezd do terénu", en: "Out in the Field" }, category: "landscape" },
  ]

  const categories = [
    { id: "all", label: t("Vše", "All") },
    { id: "meadows", label: t("Louky a květiny", "Meadows & Flowers") },
    { id: "wetlands", label: t("Mokřady a tůně", "Wetlands & Pools") },
    { id: "pastures", label: t("Pastviny a zvířata", "Pastures & Animals") },
    { id: "landscape", label: t("Krajina a lesy", "Landscape & Forests") },
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
