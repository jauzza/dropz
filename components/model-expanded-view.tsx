"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  X,
  Share2,
  Flag,
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
    <div className="flex-shrink-0 w-[220px] overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_6px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Top Info */}
      <div className="p-2.5 pb-1.5">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-lg p-2 border border-white/[0.07]">
          <h4 className="text-xs font-semibold text-foreground truncate">{model.name}</h4>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mt-1 text-[10px] text-muted-foreground">
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

      {/* Image */}
      <div className="px-2.5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black/20">
          <Image
            src={model.imageSrc || "/placeholder.svg"}
            alt={model.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-2.5 pt-1.5">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-lg p-1.5 border border-white/[0.07]">
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              className="flex-1 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/20 text-[10px] h-6 font-medium"
            >
              <ExternalLink className="w-2.5 h-2.5 mr-1" />
              Open Link
            </Button>
            <Button
              size="icon"
              className="bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.08] h-6 w-6"
            >
              <MoreHorizontal className="w-3 h-3" />
            </Button>
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

          {/* Top Actions Row */}
          <div className="flex items-center justify-between px-5 pb-3">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-xs h-8 font-medium"
              >
                <Share2 className="w-3.5 h-3.5 mr-1.5" />
                Share
              </Button>
              <Button
                size="sm"
                className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] text-xs h-8 font-medium"
              >
                <Flag className="w-3.5 h-3.5 mr-1.5" />
                Report
              </Button>
            </div>
            <Button
              size="icon"
              className="bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.08] h-8 w-8"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content area */}
          <div className="flex-1 flex gap-5 px-5 pb-5 overflow-hidden">
            {/* Main Model Card */}
            <div className="flex-shrink-0 w-[280px] overflow-y-auto scrollbar-thin">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]">
                {/* Top Info */}
                <div className="p-3 pb-2">
                  <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-3 border border-white/[0.07]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground truncate pr-2">
                        {model.name}
                      </h3>
                      {model.isVerified && (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500/15 border border-pink-500/25 flex-shrink-0">
                          <Zap className="w-3 h-3 text-pink-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mt-1.5 text-[10px] text-muted-foreground">
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

                {/* Image */}
                <div className="px-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/20">
                    <Image
                      src={model.imageSrc || "/placeholder.svg"}
                      alt={model.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-3 pt-2">
                  <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-2 border border-white/[0.07]">
                    <Button
                      size="sm"
                      className="w-full bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/20 text-xs h-7 font-medium"
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
