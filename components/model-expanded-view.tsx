"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  X,
  Bookmark,
  BookOpen,
  LayoutGrid,
  Calendar,
  User2,
  HardDrive,
  FolderOpen,
  Clock,
  Zap,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react"
import type { ModelData } from "@/components/product-card"

interface ModelExpandedViewProps {
  model: ModelData
  relatedModels: ModelData[]
  onClose: () => void
}

function MiniCard({ model }: { model: ModelData }) {
  return (
    <div className="flex-shrink-0 w-[200px] overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.2)] group/mini cursor-pointer transition-all duration-300 hover:border-pink-500/20 hover:shadow-pink-500/10">
      {/* Image with overlaid info */}
      <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
        <Image
          src={model.imageSrc || "/placeholder.svg"}
          alt={model.name}
          fill
          className="object-cover transition-transform duration-500 group-hover/mini:scale-105"
        />

        {/* Top: Name + stats overlay */}
        <div className="absolute top-0 left-0 right-0 p-2.5">
          <div className="backdrop-blur-xl bg-black/40 rounded-lg p-2 border border-white/10">
            <h4 className="text-xs font-semibold text-white truncate">{model.name}</h4>
            <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mt-1 text-[10px] text-white/60">
              <div className="flex items-center gap-0.5">
                <HardDrive className="w-2.5 h-2.5" />
                <span>{model.size}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <FolderOpen className="w-2.5 h-2.5" />
                <span>{model.downloads.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <FolderOpen className="w-2.5 h-2.5" />
                <span>{model.files}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Open Link button overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5">
          <div className="backdrop-blur-xl bg-black/40 rounded-lg p-1.5 border border-white/10">
            <div className="flex items-center gap-1.5">
              <Button
                size="sm"
                className="flex-1 bg-pink-500/15 text-pink-300 hover:bg-pink-500/25 border border-pink-500/25 text-[10px] h-6 font-medium"
              >
                <ExternalLink className="w-2.5 h-2.5 mr-1" />
                Open Link
              </Button>
              <Button
                size="icon"
                className="bg-white/10 text-white/60 hover:bg-white/20 border border-white/10 h-6 w-6"
              >
                <MoreHorizontal className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ModelExpandedView({
  model,
  relatedModels,
  onClose,
}: ModelExpandedViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <>
      {/* Backdrop overlay - click to close */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom sheet overlay - 50% viewport height */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[50vh] animate-in slide-in-from-bottom duration-300">
        <div className="h-full rounded-t-2xl bg-gradient-to-br from-pink-500/[0.04] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] border-b-0 shadow-[0_-12px_48px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
          
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-white/20" />
          </div>

          {/* Model Info Header */}
          <div className="flex items-center justify-between px-5 pb-3">
            {/* Left: Name + details */}
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground truncate">{model.name}</h2>
                <span className="text-base flex-shrink-0" role="img" aria-label="flag">🇺🇸</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {'33 jaar oud'}
                </span>
                <span className="flex items-center gap-1">
                  <User2 className="w-3 h-3" />
                  {'Latina'}
                </span>
              </div>
            </div>

            {/* Right: Action buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                size="icon"
                className="bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-9 w-9"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-xs h-9 font-medium"
              >
                <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                Open Creator
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-xs h-9 font-medium"
              >
                <LayoutGrid className="w-3.5 h-3.5 mr-1.5" />
                Alle Profielen
              </Button>
              <Button
                size="icon"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-9 w-9"
                onClick={onClose}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 flex gap-5 px-5 pb-5 overflow-hidden">
            {/* Main Model Card - image-first with overlaid bars */}
            <div className="flex-shrink-0 w-[260px] h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <Image
                  src={model.imageSrc || "/placeholder.svg"}
                  alt={model.name}
                  fill
                  className="object-cover"
                />

                {/* Top overlay: name + stats */}
                <div className="absolute top-0 left-0 right-0 p-3">
                  <div className="backdrop-blur-xl bg-black/40 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white truncate pr-2">
                        {model.name}
                      </h3>
                      {model.isVerified && (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500/15 border border-pink-500/25 flex-shrink-0">
                          <Zap className="w-3 h-3 text-pink-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mt-1.5 text-[10px] text-white/60">
                      <div className="flex items-center gap-0.5">
                        <HardDrive className="w-2.5 h-2.5" />
                        <span>{model.size}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <FolderOpen className="w-2.5 h-2.5" />
                        <span>{model.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <FolderOpen className="w-2.5 h-2.5" />
                        <span>{model.files}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{model.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom overlay: Open Link */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="backdrop-blur-xl bg-black/40 rounded-xl p-2 border border-white/10">
                    <Button
                      size="sm"
                      className="w-full bg-pink-500/15 text-pink-300 hover:bg-pink-500/25 border border-pink-500/25 text-xs h-7 font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Open Link
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Models Section */}
            <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
              <p className="text-sm text-muted-foreground mb-3 flex-shrink-0">
                You might also like...
              </p>
              <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin flex-1 items-start"
              >
                {relatedModels.map((related, i) => (
                  <MiniCard key={i} model={related} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
