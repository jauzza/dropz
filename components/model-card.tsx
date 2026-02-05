"use client"

import Image from "next/image"
import { HardDrive, FolderOpen, Clock, ExternalLink, Globe, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ModelCardProps {
  name: string
  size: string
  files: number
  posts: number
  timeAgo: string
  imageSrc: string
  isVerified?: boolean
}

export function ModelCard({
  name,
  size,
  files,
  posts,
  timeAgo,
  imageSrc,
  isVerified = true,
}: ModelCardProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] group">
      {/* Gradient Header */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-rose-500/40 via-rose-500/20 to-transparent z-10 pointer-events-none" />
      
      {/* Content Header */}
      <div className="relative z-20 p-4 pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground tracking-tight">{name}</h3>
          {isVerified && (
            <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
              <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Stats Row */}
        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <HardDrive className="w-3.5 h-3.5" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-1">
            <FolderOpen className="w-3.5 h-3.5" />
            <span>{files}</span>
          </div>
          <div className="flex items-center gap-1">
            <FolderOpen className="w-3.5 h-3.5" />
            <span>{posts}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[3/4] mx-4 mb-4 overflow-hidden rounded-xl bg-secondary/50">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 px-4 pb-4">
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex-1 bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs h-9"
        >
          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
          Open Link
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex-1 bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs h-9"
        >
          <Globe className="w-3.5 h-3.5 mr-1.5" />
          More
        </Button>
        <Button 
          variant="secondary" 
          size="icon" 
          className="bg-secondary/80 hover:bg-secondary text-secondary-foreground h-9 w-9"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
