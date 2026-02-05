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
  AtSign,
  MoreHorizontal
} from "lucide-react"

interface ModelCardProps {
  name: string
  size: string
  downloads: number
  files: number
  timeAgo: string
  imageSrc: string
  isVerified?: boolean
}

export function ProductCard({
  name = "Yardenlasry",
  size = "6 GB",
  downloads = 1094,
  files = 108,
  timeAgo = "38 minutes ago",
  imageSrc = "/images/goy.png",
  isVerified = true,
}: ModelCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/15 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pink accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500" />
      
      {/* Top Bar Container */}
      <div className="p-4 pb-3">
        <div className="bg-secondary/50 rounded-xl p-3 border border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground tracking-tight truncate pr-2">{name}</h3>
            {isVerified && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/40 flex-shrink-0">
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
              <span>{downloads.toLocaleString()}</span>
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

      {/* Image Container - Contained within card */}
      <div className="px-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/20">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>
      </div>

      {/* Bottom Bar Container */}
      <div className="p-4 pt-3">
        <div className="bg-secondary/50 rounded-xl p-2.5 border border-border">
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-pink-500/15 text-pink-400 hover:bg-pink-500/25 border border-pink-500/30 text-xs h-8 font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Open Link
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1 bg-transparent text-foreground hover:bg-secondary border-border text-xs h-8 font-medium"
            >
              <AtSign className="w-3.5 h-3.5 mr-1.5" />
              More
            </Button>
            <Button 
              size="icon" 
              variant="outline"
              className="bg-transparent text-muted-foreground hover:bg-secondary border-border h-8 w-8"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
