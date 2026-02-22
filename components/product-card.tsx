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
      className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_var(--brand-500)/0.1,inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/[0.14] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Bar Container - Liquid Glass */}
      <div className="p-3 pb-2">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-3 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground tracking-tight truncate pr-2">
              {name}
            </h3>
            {isVerified && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/15 border border-pink-500/25 flex-shrink-0">
                <Zap className="w-3.5 h-3.5 text-pink-400" />
              </div>
            )}
          </div>

          {/* Stats Row */}
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <HardDrive className="w-3 h-3" />
              <span>{size}</span>
            </div>
            <div className="flex items-center gap-1">
              <FolderOpen className="w-3 h-3" />
              <span>{String(downloads)}</span>
            </div>
            <div className="flex items-center gap-1">
              <FolderOpen className="w-3 h-3" />
              <span>{files}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="px-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/20">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>
      </div>

      {/* Bottom Bar Container - Liquid Glass */}
      <div className="p-3 pt-2">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-2 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="flex-1 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/20 text-xs h-8 font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Open Link
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-white/[0.04] text-foreground hover:bg-white/[0.08] border border-white/[0.08] text-xs h-8 font-medium"
              onClick={(e) => {
                e.stopPropagation()
                onMoreClick?.()
              }}
            >
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              More
            </Button>
            <Button
              size="icon"
              className="bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.08] h-8 w-8"
              onClick={(e) => {
                e.stopPropagation()
                onMoreClick?.()
              }}
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
