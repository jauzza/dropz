"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import type { ModelData } from "@/components/product-card"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { SearchFilterBar } from "@/components/search-filter-bar"
import { ModelExpandedView } from "@/components/model-expanded-view"

const models: ModelData[] = [
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Figure out which row the expanded card is in (4 cols on xl, 3 on lg, etc.)
  // We insert the expanded view after the last card in the same row
  const getInsertionIndex = (index: number, cols: number) => {
    const row = Math.floor(index / cols)
    return Math.min((row + 1) * cols, models.length)
  }

  const handleMoreClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Build the card grid with inline expanded views
  const renderGrid = () => {
    const items: React.ReactNode[] = []
    let insertedExpanded = false

    for (let i = 0; i < models.length; i++) {
      items.push(
        <ProductCard
          key={`card-${i}`}
          {...models[i]}
          onMoreClick={() => handleMoreClick(i)}
        />
      )

      // Check if we should insert the expanded view after this card
      // We use xl:4 cols as the default; the expanded view spans all columns
      if (expandedIndex !== null && !insertedExpanded) {
        const insertAt = getInsertionIndex(expandedIndex, 4)
        if (i + 1 === insertAt || i === models.length - 1) {
          const relatedModels = models.filter((_, idx) => idx !== expandedIndex)
          items.push(
            <ModelExpandedView
              key="expanded"
              model={models[expandedIndex]}
              relatedModels={relatedModels}
              onClose={() => setExpandedIndex(null)}
            />
          )
          insertedExpanded = true
        }
      }
    }

    // Edge case: if expanded was requested but not yet inserted
    if (expandedIndex !== null && !insertedExpanded) {
      const relatedModels = models.filter((_, idx) => idx !== expandedIndex)
      items.push(
        <ModelExpandedView
          key="expanded"
          model={models[expandedIndex]}
          relatedModels={relatedModels}
          onClose={() => setExpandedIndex(null)}
        />
      )
    }

    return items
  }

  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassHeader />

      <div className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <SearchFilterBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 pb-8">
          {renderGrid()}
        </div>
      </div>
    </main>
  )
}
