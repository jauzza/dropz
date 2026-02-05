"use client"

import { Search, Camera, Clock, ChevronDown, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchFilterBar() {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      {/* Search Input */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search & Filter"
            className="w-full h-12 pl-12 pr-4 bg-card border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/50"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        <Button 
          variant="secondary" 
          size="icon" 
          className="bg-secondary/60 hover:bg-secondary/80 text-secondary-foreground h-10 w-10 rounded-xl"
        >
          <Camera className="w-5 h-5" />
        </Button>
        
        <Button 
          variant="secondary" 
          className="bg-secondary/60 hover:bg-secondary/80 text-secondary-foreground h-10 px-4 rounded-xl"
        >
          <Clock className="w-4 h-4 mr-2" />
          New
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Models Button */}
      <Button 
        variant="outline" 
        className="bg-transparent border-border/50 hover:bg-secondary/50 text-foreground h-10 px-4 rounded-xl"
      >
        <LayoutGrid className="w-4 h-4 mr-2" />
        Models
      </Button>
    </div>
  )
}
