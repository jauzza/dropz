"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  HardDrive,
  FolderOpen,
  Clock,
  Zap,
  ExternalLink,
  Globe,
  MoreHorizontal,
} from "lucide-react"

export interface ModelData {
  name: string
  size: string
  downloads: number
  files: number
  timeAgo: string
  imageSrc: string
  isVerified?: boolean
}

interface ProductCardProps extends ModelData {
  onMoreClick?: () => void
}

export function ProductCard({
  name = "Yardenlasry",
  size = "6 GB",
  downloads = 1094,
  files = 108,
  timeAgo = "38 minutes ago",
  imageSrc = "/images/goy.png",
  isVerified = true,
  onMoreClick,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_var(--brand-500)/0.1,inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/[0.14] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Bar Container */}
      <div className="p-2 sm:p-3 pb-1.5 sm:pb-2">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-base font-semibold text-foreground tracking-tight truncate pr-2">
              {name}
            </h3>
            {isVerified && (
              <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-500/15 border border-brand-500/25 flex-shrink-0">
                <Zap className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-brand-400" />
              </div>
            )}
          </div>

          {/* Stats Row */}
          <div className="flex items-center flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <HardDrive className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{size}</span>
            </div>
            <div className="flex items-center gap-1">
              <FolderOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <FolderOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{files}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="truncate max-w-[80px] sm:max-w-none">{timeAgo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="px-2 sm:px-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:rounded-xl bg-black/20">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>
      </div>

      {/* Bottom Bar Container */}
      <div className="p-2 sm:p-3 pt-1.5 sm:pt-2">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              size="sm"
              className="flex-1 bg-brand-500/10 text-brand-400 hover:bg-brand-500/20 border border-brand-500/20 text-[10px] sm:text-xs h-7 sm:h-8 font-medium px-2 sm:px-3"
            >
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
              <span className="hidden xs:inline">Open </span>Link
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-white/[0.04] text-foreground hover:bg-white/[0.08] border border-white/[0.08] text-[10px] sm:text-xs h-7 sm:h-8 font-medium px-2 sm:px-3"
              onClick={(e) => {
                e.stopPropagation()
                onMoreClick?.()
              }}
            >
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
              More
            </Button>
            <Button
              size="icon"
              className="bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.08] h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation()
                onMoreClick?.()
              }}
            >
              <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
