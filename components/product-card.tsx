"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Files, Clock, Zap } from "lucide-react"

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
      className="relative w-full overflow-hidden rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />
      
      {/* Header Section */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground tracking-tight">{name}</h3>
          {isVerified && (
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 border border-primary/30">
              <Zap className="w-4 h-4 text-primary" />
            </div>
          )}
        </div>
        
        {/* Stats Row */}
        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Files className="w-3.5 h-3.5" />
            <span>{downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Files className="w-3.5 h-3.5" />
            <span>{files}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black/50 mx-4 rounded-lg">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />
      </div>

      {/* Action Buttons */}
      <div className="p-4 pt-3 flex items-center gap-2">
        <Button 
          size="sm" 
          className="flex-1 bg-secondary/80 text-secondary-foreground hover:bg-secondary text-xs h-8"
        >
          <span className="mr-1.5">M</span>
          Open Link
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex-1 border-border hover:bg-secondary bg-transparent text-xs h-8"
        >
          <span className="mr-1.5">@</span>
          More
        </Button>
        <Button 
          size="icon" 
          variant="outline" 
          className="border-border hover:bg-secondary bg-transparent h-8 w-8"
        >
          <span className="text-muted-foreground">...</span>
        </Button>
      </div>
    </div>
  )
}
