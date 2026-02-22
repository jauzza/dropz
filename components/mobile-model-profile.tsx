"use client"

import { useState } from "react"
import Image from "next/image"
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
  Video,
  Search,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

/* ---------- types ---------- */
interface ContentPack {
  name: string
  size: string
  photos: number
  videos: number
  timeAgo: string
  imageSrc: string
  isPremium?: boolean
}

interface MobileModelProfileProps {
  name: string
  flag: string
  age: string
  ethnicity: string
  bio: string
  aliases: string[]
  tags: string[]
  personalInfo: { icon: React.ComponentType<{ className?: string }>; label: string }[]
  physicalTraits: { label: string; value: string }[]
  profileImage: string
  contentPacks: ContentPack[]
}

/* ---------- sub-components ---------- */

function ReadMoreBio({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)
  const truncated = text.length > 180

  return (
    <div className="mt-4">
      <p
        className={`text-sm text-muted-foreground leading-relaxed ${
          !expanded && truncated ? "line-clamp-4" : ""
        }`}
      >
        {text}
      </p>
      {truncated && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  )
}

function ContentPackCard({ pack }: { pack: ContentPack }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Top info bar */}
      <div className="p-3 pb-2">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-3 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground truncate pr-2">
              {pack.name}
            </h3>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {pack.isPremium && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-300 bg-brand-500/15 rounded-full border border-brand-500/25">
                  <Lock className="w-2.5 h-2.5" />
                  Premium
                </span>
              )}
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/25">
                <Zap className="w-3 h-3 text-brand-400" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <HardDrive className="w-3 h-3" />
              <span>{pack.size}</span>
            </div>
            <div className="flex items-center gap-1">
              <ImageIcon className="w-3 h-3" />
              <span>{pack.photos}</span>
            </div>
            <div className="flex items-center gap-1">
              <Video className="w-3 h-3" />
              <span>{pack.videos}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{pack.timeAgo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="px-3 pb-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/20">
          <Image
            src={pack.imageSrc || "/placeholder.svg"}
            alt={pack.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

/* ---------- main mobile component ---------- */
export function MobileModelProfile({
  name,
  flag,
  age,
  ethnicity,
  bio,
  aliases,
  tags,
  personalInfo,
  physicalTraits,
  profileImage,
  contentPacks,
}: MobileModelProfileProps) {
  return (
    <div className="relative min-h-screen pb-24">
      {/* Blurred full-screen background */}
      <div className="fixed inset-0 z-0">
        <Image
          src={profileImage}
          alt=""
          fill
          className="object-cover scale-110 blur-[40px] brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 px-4 pt-4">
        {/* ---- Mobile Search Bar ---- */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 flex items-center gap-2.5 h-11 px-3.5 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-sm text-foreground/60 truncate">{`"${name}"`}</span>
          </div>
          <button className="flex items-center justify-center h-11 w-11 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] text-muted-foreground hover:text-foreground transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Camera className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-1.5 h-11 px-3.5 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] text-muted-foreground hover:text-foreground transition-colors text-xs font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Clock className="w-4 h-4" />
            New
            <ChevronDown className="w-3 h-3 opacity-50" />
          </button>
        </div>

        {/* ---- Model Info ---- */}
        <section className="mt-2">
          <h1 className="text-3xl font-bold text-foreground text-balance">
            {name}
          </h1>
          <div className="flex items-center gap-2 mt-1.5">
            <span
              className="text-lg flex-shrink-0"
              role="img"
              aria-label="flag"
              dangerouslySetInnerHTML={{ __html: flag }}
            />
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {age}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <User2 className="w-3.5 h-3.5" />
              {ethnicity}
            </span>
          </div>

          {/* Bio with Read more */}
          <ReadMoreBio text={bio} />
        </section>

        {/* ---- Accordion Sections ---- */}
        <section className="mt-6">
          <Accordion type="multiple" className="w-full">
            {/* Also Known As */}
            <AccordionItem
              value="aliases"
              className="border-white/[0.08]"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3.5">
                Also Known As
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {aliases.map((alias) => (
                    <span
                      key={alias}
                      className="text-sm text-foreground/80 hover:text-brand-300 cursor-pointer transition-colors"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Tags */}
            <AccordionItem
              value="tags"
              className="border-white/[0.08]"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3.5">
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
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3.5">
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
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3.5">
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
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ---- Action Buttons Row (inline, not sticky) ---- */}
        <section className="flex items-center gap-2 mt-6 mb-8">
          <div className="flex items-center">
            <Button
              size="icon"
              className="bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-10 w-10 rounded-r-none border-r-0"
            >
              <Bookmark className="w-4.5 h-4.5" />
            </Button>
            <Button
              size="icon"
              className="bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-10 w-8 rounded-l-none"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </Button>
          </div>

          <Button
            size="sm"
            className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-sm h-10 px-4 font-medium"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>

          <Button
            size="sm"
            className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-sm h-10 px-4 font-medium"
          >
            <LayoutGrid className="w-4 h-4 mr-2" />
            All Models
          </Button>
        </section>

        {/* ---- Content Packs ---- */}
        <section className="flex flex-col gap-4 pb-8">
          {contentPacks.map((pack, i) => (
            <ContentPackCard key={i} pack={pack} />
          ))}
        </section>
      </div>
    </div>
  )
}
