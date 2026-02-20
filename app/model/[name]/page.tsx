"use client"

import { use, useState } from "react"
import Image from "next/image"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { SearchFilterBar } from "@/components/search-filter-bar"
import { ProductCard } from "@/components/product-card"
import type { ModelData } from "@/components/product-card"
import { ModelExpandedView } from "@/components/model-expanded-view"
import { UserSidebar } from "@/components/user-sidebar"
import { Button } from "@/components/ui/button"
import {
  Bookmark,
  Share2,
  LayoutGrid,
  Calendar,
  User2,
  MapPin,
  Heart,
} from "lucide-react"

/* ---------- demo data (per-model uploads) ---------- */
function getModelUploads(name: string): ModelData[] {
  return [
    { name, size: "10 GB", downloads: 493, files: 428, timeAgo: "13 uur geleden", imageSrc: "/images/goy.png", isVerified: true },
    { name: name.toUpperCase(), size: "238 MB", downloads: 0, files: 3, timeAgo: "2 maanden geleden", imageSrc: "/images/goy.png", isVerified: true },
    { name, size: "4 GB", downloads: 10, files: 108, timeAgo: "2 maanden geleden", imageSrc: "/images/goy.png", isVerified: true },
    { name, size: "4 GB", downloads: 2, files: 108, timeAgo: "2 maanden geleden", imageSrc: "/images/goy.png", isVerified: true },
    { name: name.toLowerCase(), size: "888 MB", downloads: 23, files: 67, timeAgo: "2 maanden geleden", imageSrc: "/images/goy.png", isVerified: false },
    { name: name.toLowerCase(), size: "144 MB", downloads: 1, files: 1, timeAgo: "3 maanden geleden", imageSrc: "/images/goy.png", isVerified: false },
    { name, size: "4 GB", downloads: 7, files: 108, timeAgo: "3 maanden geleden", imageSrc: "/images/goy.png", isVerified: true },
    { name, size: "21 GB", downloads: 666, files: 404, timeAgo: "4 maanden geleden", imageSrc: "/images/goy.png", isVerified: true },
  ]
}

/* ---------- static profile info ---------- */
const aliases = ["Genesis Lopez", "Genesis Mia Lopez", "Geniva", "Miss Genii"]

const tags = [
  "Creator", "Camgirl", "Fitness Model", "Gamer",
  "Influencer", "TikTok Ster", "Masturbatie", "Orale Seks", "Vaginale", "Anale",
]

const personalInfo = [
  { icon: MapPin, label: "Geboren in Miami, Florida, United States" },
  { icon: Calendar, label: "33 jaar oud" },
  { icon: User2, label: "Latina" },
  { icon: Heart, label: "Rechtdoor" },
]

const physicalTraits: { label: string; value: string }[] = [
  { label: "Haar", value: "bruin" },
  { label: "Ogen", value: "bruin" },
  { label: "Lichaam", value: "Atletisch" },
  { label: "Borst", value: "32G (Verbeterd)" },
  { label: "Hoogte", value: '5\'1" (154 cm)' },
  { label: "Gewicht", value: "141 lbs (64 kg)" },
]

/* ---------- component ---------- */
export default function ModelProfilePage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = use(params)
  const decodedName = decodeURIComponent(name)
  const uploads = getModelUploads(decodedName)

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleMoreClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const resolvedExpandedModel =
    expandedIndex !== null ? uploads[expandedIndex % uploads.length] : null

  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassHeader onUserClick={() => setSidebarOpen(true)} />
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="pt-16 sm:pt-20 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search bar (prefilled with model name) */}
        <SearchFilterBar />

        {/* ====== Profile Hero Section ====== */}
        <section className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 mb-10">
          {/* Left: Info */}
          <div className="flex-1 min-w-0">
            {/* Name row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">{decodedName}</h1>
              <span className="text-lg sm:text-xl flex-shrink-0" role="img" aria-label="flag">&#127482;&#127480;</span>
              <span className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                33 jaar oud
              </span>
              <span className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <User2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Latina
              </span>
            </div>

            {/* Bio */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3 sm:mt-4 max-w-2xl">
              Miami-born Latina stunner {decodedName}, 33 with an athletic 32G enhanced figure at
              5{"'"}1{'"'}, rose from fitness modeling dreams post-high school to adult camgirl fame.
              Married to Joe Taranto since 2017, this gamer and influencer shares solo full nudity,
              masturbation, plus hardcore boy/girl blowjobs, vaginal, and anal. Confident and
              body-positive after 605cc implants, she blends sultry workouts with explicit passion.
            </p>

            {/* Ook bekend als */}
            <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
              <span className="text-xs sm:text-sm text-muted-foreground">Ook bekend als</span>
              {aliases.map((alias) => (
                <span
                  key={alias}
                  className="text-xs sm:text-sm text-foreground/80 hover:text-brand-300 cursor-pointer transition-colors"
                >
                  {alias}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-foreground/70 hover:bg-brand-500/10 hover:text-brand-300 hover:border-brand-500/20 cursor-pointer transition-colors"
                >
                  # {tag}
                </span>
              ))}
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Personal Info */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-500/[0.04] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <h3 className="text-sm font-semibold text-foreground mb-4">Persoonlijke Informatie</h3>
                <div className="flex flex-col gap-3">
                  {personalInfo.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical Characteristics */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-500/[0.04] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <h3 className="text-sm font-semibold text-foreground mb-4">Fysieke Kenmerken</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {physicalTraits.map(({ label, value }) => (
                    <div key={label} className="flex items-baseline gap-1.5 text-sm">
                      <span className="text-muted-foreground">{label}:</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <Button
                size="icon"
                className="bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-10 w-10"
              >
                <Bookmark className="w-4.5 h-4.5" />
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-sm h-10 px-5 font-medium"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Delen
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-sm h-10 px-5 font-medium"
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Alle Profielen
              </Button>
            </div>
          </div>

          {/* Right: Large profile image */}
          <div className="flex-shrink-0 w-full max-w-[280px] mx-auto lg:mx-0 lg:w-[300px] xl:w-[340px]">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/goy.png"
                alt={decodedName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ====== Uploads Grid ====== */}
        <section className="pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4">
            {uploads.map((model, index) => (
              <ProductCard
                key={`${model.name}-${index}`}
                {...model}
                onMoreClick={() => handleMoreClick(index)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Expanded overlay */}
      {resolvedExpandedModel && expandedIndex !== null && (
        <ModelExpandedView
          model={resolvedExpandedModel}
          relatedModels={uploads.filter(
            (_, idx) => idx !== expandedIndex % uploads.length,
          )}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </main>
  )
}
