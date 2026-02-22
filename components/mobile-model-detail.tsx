"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Bookmark,
  ChevronDown,
  Share2,
  LayoutGrid,
  Calendar,
  User2,
  MapPin,
  Heart,
  HardDrive,
  FolderOpen,
  Clock,
  Zap,
  Lock,
  ImageIcon,
  Film,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ModelData } from "@/components/product-card"

/* ---------- types ---------- */
interface MobileModelDetailProps {
  name: string
  uploads: ModelData[]
  onMoreClick: (index: number) => void
}

/* ---------- static data ---------- */
const aliases = ["Genesis Lopez", "Genesis Mia Lopez", "Geniva", "Miss Genii"]

const tags = [
  "Creator",
  "Camgirl",
  "Fitness Model",
  "Gamer",
  "Influencer",
  "TikTok Ster",
  "Masturbatie",
  "Orale Seks",
  "Vaginale",
  "Anale",
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

export function MobileModelDetail({
  name,
  uploads,
  onMoreClick,
}: MobileModelDetailProps) {
  const router = useRouter()
  const [bioExpanded, setBioExpanded] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const bioText = `Miami-born Latina stunner ${name}, 33 with an athletic 32G enhanced figure at 5'1", rose from fitness modeling dreams post-high school to adult camgirl fame. Married to Joe Taranto since 2017, this gamer and influencer shares solo full nudity, masturbation, plus hardcore boy/girl blowjobs, vaginal, and anal. Confident and body-positive after 605cc implants, she blends sultry workouts with explicit passion.`

  const firstUpload = uploads[0]

  return (
    <div className="relative min-h-screen">
      {/* ====== Blurred Background ====== */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/goy.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-[60px] bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      </div>

      {/* ====== Content ====== */}
      <div className="relative z-10 px-4 pb-28">
        {/* ---- Model Info ---- */}
        <div className="pt-4">
          <h1 className="text-2xl font-bold text-foreground text-balance">
            {name}
          </h1>

          {/* Flag + Age + Ethnicity row */}
          <div className="flex items-center gap-2 mt-1.5">
            <span
              className="text-lg flex-shrink-0"
              role="img"
              aria-label="flag"
            >
              &#127482;&#127480;
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              33 jaar oud
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <User2 className="w-3.5 h-3.5" />
              Latina
            </span>
          </div>

          {/* Bio with Read more */}
          <div className="mt-4">
            <p
              className={`text-sm text-muted-foreground leading-relaxed ${
                !bioExpanded ? "line-clamp-3" : ""
              }`}
            >
              {bioText}
            </p>
            <button
              onClick={() => setBioExpanded(!bioExpanded)}
              className="flex items-center gap-1 mt-1.5 text-sm text-brand-300 font-medium"
            >
              {bioExpanded ? "Read less" : "Read more"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  bioExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ---- Accordion Sections ---- */}
        <div className="mt-4">
          <Accordion type="multiple" className="w-full">
            {/* Also Known As */}
            <AccordionItem
              value="aliases"
              className="border-white/[0.08]"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3.5">
                Also known as
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center flex-wrap gap-1.5">
                  {aliases.map((alias) => (
                    <span
                      key={alias}
                      className="text-sm text-foreground/80 hover:text-brand-300 cursor-pointer transition-colors"
                    >
                      {alias}
                      {alias !== aliases[aliases.length - 1] && ","}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Tags */}
            <AccordionItem value="tags" className="border-white/[0.08]">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3.5">
                Tags
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-foreground/70 hover:bg-brand-500/10 hover:text-brand-300 hover:border-brand-500/20 cursor-pointer transition-colors"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Personal Information */}
            <AccordionItem
              value="personal"
              className="border-white/[0.08]"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3.5">
                Personal Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {personalInfo.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 text-sm text-foreground/80"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Physical Attributes */}
            <AccordionItem
              value="physical"
              className="border-white/[0.08]"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3.5">
                Physical Attributes
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {physicalTraits.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-baseline gap-1.5 text-sm"
                    >
                      <span className="text-muted-foreground">{label}:</span>
                      <span className="text-foreground font-medium">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* ---- Content Pack Card ---- */}
        {firstUpload && (
          <div className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer transition-all duration-300 active:scale-[0.98]"
              onClick={() => onMoreClick(0)}
            >
              {/* Card Header */}
              <div className="p-3 pb-2">
                <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-3 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  {/* Name row with premium badge */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-foreground tracking-tight leading-tight flex-1">
                      {name} {aliases[0]} {name.toLowerCase().replace(/\s/g, "")}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {/* Verified icon */}
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/25">
                        <Zap className="w-3 h-3 text-brand-400" />
                      </div>
                      {/* Premium badge */}
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-500/15 border border-brand-500/25">
                        <span className="text-[10px] font-bold text-brand-300 tracking-wide uppercase">
                          Premium
                        </span>
                        <Lock className="w-3 h-3 text-brand-400" />
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3" />
                      <span>{firstUpload.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      <span>{firstUpload.files}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Film className="w-3 h-3" />
                      <span>{firstUpload.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{firstUpload.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image preview */}
              <div className="px-3 pb-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black/20">
                  <Image
                    src={firstUpload.imageSrc || "/placeholder.svg"}
                    alt={firstUpload.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---- More Uploads ---- */}
        <div className="mt-6">
          <div className="flex flex-col gap-4">
            {uploads.slice(1).map((upload, index) => (
              <div
                key={`${upload.name}-${index}`}
                className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer transition-all duration-300 active:scale-[0.98]"
                onClick={() => onMoreClick(index + 1)}
              >
                <div className="p-3 pb-2">
                  <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-3 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground tracking-tight truncate pr-2">
                        {upload.name}
                      </h3>
                      {upload.isVerified && (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/25 flex-shrink-0">
                          <Zap className="w-3 h-3 text-brand-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <HardDrive className="w-3 h-3" />
                        <span>{upload.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FolderOpen className="w-3 h-3" />
                        <span>{upload.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FolderOpen className="w-3 h-3" />
                        <span>{upload.files}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{upload.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black/20">
                    <Image
                      src={upload.imageSrc || "/placeholder.svg"}
                      alt={upload.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== Sticky Bottom Action Bar ====== */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-background/80 backdrop-blur-2xl border-t border-white/[0.08] shadow-[0_-4px_24px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-center gap-2 px-4 py-3">
            {/* Bookmark */}
            <Button
              size="icon"
              className={`h-10 w-10 rounded-xl border transition-all ${
                isBookmarked
                  ? "bg-brand-500/20 text-brand-300 border-brand-500/30 hover:bg-brand-500/30"
                  : "bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border-white/[0.08]"
              }`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark
                className={`w-4.5 h-4.5 ${isBookmarked ? "fill-current" : ""}`}
              />
            </Button>

            {/* Dropdown arrow for bookmark lists */}
            <Button
              size="icon"
              className="bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-10 w-10 rounded-xl"
            >
              <ChevronDown className="w-4.5 h-4.5" />
            </Button>

            {/* Share */}
            <Button
              size="sm"
              className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-sm h-10 px-5 font-medium rounded-xl"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            {/* All Models */}
            <Button
              size="sm"
              className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-sm h-10 px-5 font-medium rounded-xl"
              onClick={() => router.push("/models")}
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              All Models
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
