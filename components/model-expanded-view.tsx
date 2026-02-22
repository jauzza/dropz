"use client"

import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
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

/* ---- Related model mini card ---- */
function MiniCard({ model }: { model: ModelData }) {
  return (
    <div className="flex-shrink-0 w-[160px] sm:w-[200px] overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.2)] group/mini cursor-pointer transition-all duration-300 hover:border-brand-500/20 hover:shadow-brand-500/10">
      <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
        <Image
          src={model.imageSrc || "/placeholder.svg"}
          alt={model.name}
          fill
          className="object-cover transition-transform duration-500 group-hover/mini:scale-105"
        />

        {/* Top overlay */}
        <div className="absolute top-0 left-0 right-0 p-2 sm:p-2.5">
          <div className="backdrop-blur-xl bg-black/40 rounded-lg p-1.5 sm:p-2 border border-white/10">
            <h4 className="text-[11px] sm:text-xs font-semibold text-white truncate">{model.name}</h4>
            <div className="flex items-center flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-0.5 mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] text-white/60">
              <div className="flex items-center gap-0.5">
                <HardDrive className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                <span>{model.size}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <FolderOpen className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                <span>{String(model.downloads)}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <FolderOpen className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                <span>{model.files}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5">
          <div className="backdrop-blur-xl bg-black/40 rounded-lg p-1 sm:p-1.5 border border-white/10">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Button
                size="sm"
                className="flex-1 bg-brand-500/15 text-brand-300 hover:bg-brand-500/25 border border-brand-500/25 text-[9px] sm:text-[10px] h-6 sm:h-7 font-medium"
              >
                <ExternalLink className="w-2.5 h-2.5 mr-0.5 sm:mr-1" />
                Open Link
              </Button>
              <Button
                size="icon"
                className="bg-white/10 text-white/60 hover:bg-white/20 border border-white/10 h-6 w-6 sm:h-7 sm:w-7"
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

/* ---- Main expanded view component ---- */
export function ModelExpandedView({
  model,
  relatedModels,
  onClose,
}: ModelExpandedViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom sheet -- taller on mobile for vertical scroll */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[75vh] sm:h-[55vh] animate-in slide-in-from-bottom duration-300">
        <div className="h-full rounded-t-2xl bg-gradient-to-br from-brand-500/[0.04] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] border-b-0 shadow-[0_-12px_48px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col overflow-hidden">

          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
            <div className="w-10 h-1 rounded-full bg-white/20" />
          </div>

          {/* ---- Header: model info + actions ---- */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 px-4 sm:px-5 pb-3 flex-shrink-0">
            {/* Left: Name + details */}
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-foreground truncate">{model.name}</h2>
                <span className="text-sm sm:text-base flex-shrink-0" role="img" aria-label="flag">&#127482;&#127480;</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-muted-foreground">
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

            {/* Right: Action buttons -- scrollable row on mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 overflow-x-auto">
              <Button
                size="icon"
                className="bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0"
              >
                <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-[11px] sm:text-xs h-8 sm:h-9 font-medium px-2.5 sm:px-3 flex-shrink-0 whitespace-nowrap"
                onClick={() => {
                  onClose()
                  router.push(`/model/${encodeURIComponent(model.name)}`)
                }}
              >
                <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
                Open Creator
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-[11px] sm:text-xs h-8 sm:h-9 font-medium px-2.5 sm:px-3 flex-shrink-0 whitespace-nowrap"
              >
                <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
                Alle Profielen
              </Button>
              <Button
                size="icon"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0"
                onClick={onClose}
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          {/* ---- Content: vertical on mobile, horizontal on desktop ---- */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-5 px-4 sm:px-5 pb-4 sm:pb-5 overflow-hidden">

            {/* Main model card */}
            <div className="flex-shrink-0 w-full sm:w-[240px] md:w-[260px] h-[220px] sm:h-full">
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <Image
                  src={model.imageSrc || "/placeholder.svg"}
                  alt={model.name}
                  fill
                  className="object-cover"
                />

                {/* Top overlay */}
                <div className="absolute top-0 left-0 right-0 p-2.5 sm:p-3">
                  <div className="backdrop-blur-xl bg-black/40 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-sm font-semibold text-white truncate pr-2">
                        {model.name}
                      </h3>
                      {model.isVerified && (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/25 flex-shrink-0">
                          <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] text-white/60">
                      <div className="flex items-center gap-0.5">
                        <HardDrive className="w-2.5 h-2.5" />
                        <span>{model.size}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <FolderOpen className="w-2.5 h-2.5" />
                        <span>{String(model.downloads)}</span>
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

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                  <div className="backdrop-blur-xl bg-black/40 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-white/10">
                    <Button
                      size="sm"
                      className="w-full bg-brand-500/15 text-brand-300 hover:bg-brand-500/25 border border-brand-500/25 text-[10px] sm:text-xs h-7 sm:h-8 font-medium"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
                      Open Link
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related models section */}
            <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 flex-shrink-0">
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
