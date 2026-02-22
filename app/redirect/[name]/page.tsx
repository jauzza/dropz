"use client"

import { use, useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import {
  HardDrive,
  FolderOpen,
  Clock,
  Zap,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Loader2,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Progress stages                                                    */
/* ------------------------------------------------------------------ */
const stages = [
  { label: "Validating request", duration: 1800 },
  { label: "Verifying access", duration: 2200 },
  { label: "Preparing secure link", duration: 2000 },
  { label: "Redirecting", duration: 1500 },
]

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function RedirectPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name: rawName } = use(params)
  const name = decodeURIComponent(rawName)
  const searchParams = useSearchParams()

  const size = searchParams.get("size") ?? "6 GB"
  const downloads = searchParams.get("downloads") ?? "1094"
  const files = searchParams.get("files") ?? "108"
  const timeAgo = searchParams.get("timeAgo") ?? "38 minutes ago"
  const imageSrc = searchParams.get("imageSrc") ?? "/images/goy.png"
  const isVerified = searchParams.get("verified") !== "false"

  const [currentStage, setCurrentStage] = useState(0)
  const [stageComplete, setStageComplete] = useState<boolean[]>(
    stages.map(() => false),
  )

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    function advance(index: number) {
      if (index >= stages.length) return

      setCurrentStage(index)

      timeout = setTimeout(() => {
        setStageComplete((prev) => {
          const next = [...prev]
          next[index] = true
          return next
        })

        if (index + 1 < stages.length) {
          setTimeout(() => advance(index + 1), 400)
        }
      }, stages[index].duration)
    }

    advance(0)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <LiquidGlassHeader />

      {/* Subtle radial glow behind card */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-500/[0.04] blur-[120px]" />
      </div>

      {/* ====== Content ====== */}
      <div className="relative z-10 flex flex-col items-center pt-24 sm:pt-32 px-4 pb-16">
        {/* Top message */}
        <div className="flex items-center gap-2 mb-8">
          <ShieldCheck className="w-5 h-5 text-brand-400" />
          <p className="text-sm sm:text-base text-muted-foreground text-center">
            We are redirecting you to the content you requested...
          </p>
        </div>

        {/* ====== Validation Steps ====== */}
        <div className="w-full max-w-sm mb-8">
          <div className="rounded-2xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.04] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex flex-col gap-3.5">
              {stages.map((stage, i) => {
                const isActive = currentStage === i && !stageComplete[i]
                const isDone = stageComplete[i]
                const isPending = currentStage < i

                return (
                  <div
                    key={stage.label}
                    className={`flex items-center gap-3 transition-opacity duration-300 ${
                      isPending ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      ) : isActive ? (
                        <Loader2 className="w-5 h-5 text-brand-300 animate-spin" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      )}
                    </div>

                    {/* Label */}
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDone
                          ? "text-brand-300"
                          : isActive
                            ? "text-foreground"
                            : "text-muted-foreground"
                      }`}
                    >
                      {stage.label}
                      {isActive && (
                        <span className="inline-block ml-0.5 animate-pulse">
                          ...
                        </span>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-700 ease-out"
                style={{
                  width: `${
                    stageComplete.every(Boolean)
                      ? 100
                      : ((currentStage + (stageComplete[currentStage] ? 1 : 0.5)) /
                          stages.length) *
                        100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* ====== Content Card ====== */}
        <div className="w-full max-w-sm">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/[0.06] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]">
            {/* Top info bar */}
            <div className="p-3 pb-2">
              <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-3 border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground tracking-tight truncate pr-2">
                    {name}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {isVerified && (
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/15 border border-brand-500/25">
                        <Zap className="w-3.5 h-3.5 text-brand-400" />
                      </div>
                    )}
                    {/* Premium badge */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-500/15 border border-brand-500/25">
                      <Lock className="w-3 h-3 text-brand-400" />
                      <span className="text-[10px] font-bold text-brand-300 uppercase tracking-wider">
                        Premium
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <HardDrive className="w-3 h-3" />
                    <span>{size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FolderOpen className="w-3 h-3" />
                    <span>{downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FolderOpen className="w-3 h-3" />
                    <span>{files}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{timeAgo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Model preview image */}
            <div className="px-3 pb-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/20">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={name}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay on image bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Security note */}
        <div className="flex items-center gap-2 mt-8 text-xs text-muted-foreground/60">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Secure redirect &middot; No ads &middot; Direct link</span>
        </div>
      </div>
    </main>
  )
}
