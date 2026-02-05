"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProductCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full max-w-[min(90vh,90vw)] aspect-square overflow-hidden rounded-3xl bg-card border border-border shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:scale-[1.02] group">
      {/* Media Container */}
      <div
        className="relative aspect-square overflow-hidden bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Static Image */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20Pro%20Orange%20Color-7Ieh5aMkW91gUqkYDJkW2Hf2e7QeFA.jpg"
          alt="iPhone 17 Pro in Orange"
          fill
          className={`object-cover transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"}`}
          priority
        />

        {/* Video Overlay */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <iframe
            src="https://www.youtube.com/embed/_-AS5DtDeqs?autoplay=1&mute=1&loop=1&playlist=_-AS5DtDeqs&controls=0&showinfo=0&rel=0&modestbranding=1"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            allow="autoplay; encrypted-media"
            style={{ border: "none", transform: "scale(1.5)" }}
          />
        </div>

        {/* Hover Indicator */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-4 left-4 text-white/90 text-sm font-medium tracking-wide">
            {"Hover to preview"}
          </div>
        </div>
      </div>

      {/* Content Section - Positioned absolutely at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card via-card to-transparent space-y-3">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wider uppercase">{"New Release"}</span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-foreground tracking-tight">{"iPhone 17 Pro"}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {"Advanced camera system with pro-level capabilities."}
          </p>
        </div>

        {/* Price & Features Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{"$1,199"}</span>
            <span className="text-xs text-muted-foreground line-through">{"$1,299"}</span>
          </div>
          <div className="flex gap-2">
            {["A18 Pro", "256GB"].map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            {"Pre-order Now"}
          </Button>
          <Button variant="outline" className="flex-1 border-border hover:bg-secondary bg-transparent">
            {"Learn More"}
          </Button>
        </div>
      </div>
    </div>
  )
}
