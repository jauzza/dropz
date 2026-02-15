"use client"

import { ShoppingCart, Sparkles, Globe, Link2, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LiquidGlassHeaderProps {
  onUserClick?: () => void
}

export function LiquidGlassHeader({ onUserClick }: LiquidGlassHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Liquid Glass Effect */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-border/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo & Nav */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">Leakshaven</span>
            </div>

            {/* Nav Buttons */}
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-secondary/60 hover:bg-secondary/80 text-secondary-foreground h-9"
            >
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              Purchase
            </Button>
            
            <Button 
              size="sm" 
              className="bg-teal-600 hover:bg-teal-700 text-white h-9"
            >
              Undress
              <Sparkles className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-secondary/60 hover:bg-secondary/80 text-secondary-foreground h-9"
            >
              <Globe className="w-4 h-4 mr-1.5" />
              English
            </Button>

            {/* Icon Buttons */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground h-9 w-9"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground h-9 w-9"
            >
              <Link2 className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground h-9 w-9"
              onClick={onUserClick}
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
