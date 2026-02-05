"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  HardDrive, 
  FolderOpen, 
  Clock, 
  BadgeCheck,
  ExternalLink,
  Globe,
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
      className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full-bleed Background Image */}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={name}
        fill
        className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      
      {/* Pink accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500" />
      
      {/* Top Bar Container - Floating with rounded corners */}
      <div className="absolute top-3 left-3 right-3">
        <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white tracking-tight truncate pr-2">{name}</h3>
            {isVerified && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/40 flex-shrink-0">
                <BadgeCheck className="w-3.5 h-3.5 text-pink-400" />
              </div>
            )}
          </div>
          
          {/* Stats Row */}
          <div className="flex items-center gap-3 mt-2 text-xs text-white/70">
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

      {/* Bottom Bar Container - Floating with rounded corners */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="bg-black/60 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border border-pink-500/30 text-xs h-8 font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Open Link
            </Button>
            <Button 
              size="sm" 
              className="flex-1 bg-white/10 text-white/90 hover:bg-white/20 border border-white/20 text-xs h-8 font-medium"
            >
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              More
            </Button>
            <Button 
              size="icon" 
              className="bg-white/10 text-white/70 hover:bg-white/20 border border-white/20 h-8 w-8"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
