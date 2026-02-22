"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Bookmark,
  ChevronDown,
  Share2,
  User2,
  Calendar,
} from "lucide-react"

export interface BrowseModelData {
  name: string
  ethnicity: string
  age: number
  country: string
  flag: string
  imageSrc: string
}

interface BrowseModelCardProps extends BrowseModelData {
  onOpenModel?: () => void
  onBookmark?: () => void
  onShare?: () => void
}

export function BrowseModelCard({
  name,
  ethnicity,
  age,
  country,
  flag,
  imageSrc,
  onOpenModel,
  onBookmark,
  onShare,
}: BrowseModelCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_var(--brand-500)/0.1,inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/[0.14] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Info Bar */}
      <div className="p-2.5 sm:p-3 pb-1.5 sm:pb-2">
        <div className="flex flex-col gap-1.5">
          {/* Name + Flag */}
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight truncate">
              {name}
            </h3>
            <span className="text-base sm:text-lg flex-shrink-0" role="img" aria-label={`${country} flag`}>
              {flag}
            </span>
          </div>

          {/* Ethnicity + Age */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User2 className="w-3 h-3" />
              <span>{ethnicity}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{age} years old</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="px-2.5 sm:px-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:rounded-xl bg-black/20">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="p-2.5 sm:p-3 pt-1.5 sm:pt-2">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Open Model button */}
            <Button
              size="sm"
              className="flex-1 bg-brand-500/10 text-brand-400 hover:bg-brand-500/20 border border-brand-500/20 text-[10px] sm:text-xs h-7 sm:h-8 font-medium px-2 sm:px-3"
              onClick={(e) => {
                e.stopPropagation()
                onOpenModel?.()
              }}
            >
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
              Open Model
            </Button>

            {/* Bookmark button */}
            <Button
              size="icon"
              className={`h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 border transition-all ${
                isBookmarked
                  ? "bg-brand-500/20 text-brand-300 border-brand-500/30 hover:bg-brand-500/30"
                  : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border-white/[0.08]"
              }`}
              onClick={(e) => {
                e.stopPropagation()
                setIsBookmarked(!isBookmarked)
                onBookmark?.()
              }}
            >
              <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isBookmarked ? "fill-current" : ""}`} />
            </Button>

            {/* Dropdown arrow for bookmark */}
            <Button
              size="icon"
              className="bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.08] h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>

            {/* Share button */}
            <Button
              size="icon"
              className="bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.08] h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation()
                onShare?.()
              }}
            >
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
