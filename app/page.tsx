"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ProductCard } from "@/components/product-card"
import type { ModelData } from "@/components/product-card"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { SearchFilterBar } from "@/components/search-filter-bar"
import { ModelExpandedView } from "@/components/model-expanded-view"
import { UserSidebar } from "@/components/user-sidebar"

const baseModels: ModelData[] = [
  {
    name: "Yardenlasry",
    size: "6 GB",
    downloads: 1094,
    files: 108,
    timeAgo: "38 minutes ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "Xinia_official",
    size: "1 GB",
    downloads: 412,
    files: 41,
    timeAgo: "1 hour ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "Mythiccal",
    size: "25 GB",
    downloads: 320,
    files: 136,
    timeAgo: "1 hour ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "TitaSahara",
    size: "32 GB",
    downloads: 137,
    files: 321,
    timeAgo: "1 hour ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "SophiaRose",
    size: "8 GB",
    downloads: 892,
    files: 74,
    timeAgo: "2 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "EmmaStone",
    size: "12 GB",
    downloads: 654,
    files: 98,
    timeAgo: "3 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: false,
  },
  {
    name: "LunaBlaze",
    size: "4 GB",
    downloads: 1245,
    files: 52,
    timeAgo: "4 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "AvaWilliams",
    size: "18 GB",
    downloads: 423,
    files: 167,
    timeAgo: "5 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
]

export default function Home() {
  const [displayedModels, setDisplayedModels] = useState<ModelData[]>([...baseModels])
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)
    // Simulate a short load delay, then append the base set again
    setTimeout(() => {
      setDisplayedModels((prev) => [...prev, ...baseModels])
      setIsLoading(false)
    }, 300)
  }, [isLoading])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { rootMargin: "400px" }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  const handleMoreClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Resolve the actual model from the base set for the expanded view
  const resolvedExpandedModel = expandedIndex !== null
    ? baseModels[expandedIndex % baseModels.length]
    : null

  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassHeader onUserClick={() => setSidebarOpen(true)} />
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="pt-16 sm:pt-20 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <SearchFilterBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 mt-4 sm:mt-6 pb-4">
          {displayedModels.map((model, index) => (
            <ProductCard
              key={`${model.name}-${index}`}
              {...model}
              onMoreClick={() => handleMoreClick(index)}
            />
          ))}
        </div>

        {/* Sentinel for infinite scroll + loading indicator */}
        <div ref={sentinelRef} className="flex items-center justify-center py-8">
          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse [animation-delay:150ms]" />
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse [animation-delay:300ms]" />
            </div>
          )}
        </div>
      </div>

      {/* Overlay - cards stay visible underneath */}
      {resolvedExpandedModel && expandedIndex !== null && (
        <ModelExpandedView
          model={resolvedExpandedModel}
          relatedModels={baseModels.filter((_, idx) => idx !== expandedIndex % baseModels.length)}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </main>
  )
}
