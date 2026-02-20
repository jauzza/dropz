"use client"

import { Search, Camera, Clock, ChevronDown, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchFilterBar() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 py-4">
      {/* Search Input */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search & Filter"
            className="w-full h-11 sm:h-12 pl-12 pr-4 bg-card border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus-visible:ring-brand-500/50"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/[0.04] hover:bg-white/[0.08] text-foreground/70 border border-white/[0.08] h-10 w-10 rounded-xl flex-shrink-0"
        >
          <Camera className="w-5 h-5" />
        </Button>

        <Button
          variant="secondary"
          className="bg-white/[0.04] hover:bg-white/[0.08] text-foreground/70 border border-white/[0.08] h-10 px-3 sm:px-4 rounded-xl text-sm"
        >
          <Clock className="w-4 h-4 mr-1.5" />
          New
          <ChevronDown className="w-4 h-4 ml-1.5" />
        </Button>

        {/* Models Button */}
        <Button
          variant="outline"
          className="bg-transparent border-white/[0.08] hover:bg-white/[0.06] text-foreground/70 h-10 px-3 sm:px-4 rounded-xl text-sm"
        >
          <LayoutGrid className="w-4 h-4 mr-1.5" />
          <span className="hidden xs:inline">Models</span>
          <span className="xs:hidden">All</span>
        </Button>
      </div>
    </div>
  )
}
