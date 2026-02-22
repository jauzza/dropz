"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { UserSidebar } from "@/components/user-sidebar"
import { BrowseModelCard } from "@/components/browse-model-card"
import type { BrowseModelData } from "@/components/browse-model-card"
import {
  ChevronLeft,
  ChevronDown,
  Search,
  Flame,
  Clock,
  Rss,
  Eye,
  Shuffle,
  HardDrive,
  History,
  ArrowDownWideNarrow,
  Check,
} from "lucide-react"

/* ─── Sort options ─── */
const sortOptions = [
  { label: "New", icon: Clock, id: "new" },
  { label: "Hot", icon: Flame, id: "hot" },
  { label: "My Feed", icon: Rss, id: "feed", badge: "AI" },
  { label: "Views", icon: Eye, id: "views" },
  { label: "Random", icon: Shuffle, id: "random" },
  { label: "Size", icon: HardDrive, id: "size" },
  { label: "History", icon: History, id: "history" },
  { label: "Oldest", icon: ArrowDownWideNarrow, id: "oldest" },
] as const

/* ─── Filter options ─── */
const bodyTypes = ["All", "Slim", "Athletic", "Average", "Curvy", "Thick"]
const cupSizes = ["All", "A", "B", "C", "D", "DD+"]
const ethnicities = ["All", "Arab", "Asian", "Ebony", "Indian", "Latina", "White"]
const countries = [
  { label: "All Countries", value: "all" },
  { label: "United States", value: "us", flag: "\u{1F1FA}\u{1F1F8}" },
  { label: "United Kingdom", value: "uk", flag: "\u{1F1EC}\u{1F1E7}" },
  { label: "Canada", value: "ca", flag: "\u{1F1E8}\u{1F1E6}" },
  { label: "Mexico", value: "mx", flag: "\u{1F1F2}\u{1F1FD}" },
  { label: "Brazil", value: "br", flag: "\u{1F1E7}\u{1F1F7}" },
  { label: "Australia", value: "au", flag: "\u{1F1E6}\u{1F1FA}" },
]

/* ─── Model data ─── */
const allModels: BrowseModelData[] = [
  { name: "Sophie Rain", ethnicity: "Asian", age: 24, country: "United States", flag: "\u{1F1FA}\u{1F1F8}", imageSrc: "/images/goy.png" },
  { name: "Kira Pregiato", ethnicity: "White", age: 21, country: "United States", flag: "\u{1F1FA}\u{1F1F8}", imageSrc: "/images/goy.png" },
  { name: "Layla Dream", ethnicity: "White", age: 21, country: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", imageSrc: "/images/goy.png" },
  { name: "Bbyanni", ethnicity: "Asian", age: 22, country: "Mexico", flag: "\u{1F1F2}\u{1F1FD}", imageSrc: "/images/goy.png" },
  { name: "Cece Rose", ethnicity: "White", age: 27, country: "Mexico", flag: "\u{1F1F2}\u{1F1FD}", imageSrc: "/images/goy.png" },
  { name: "Lara Rose", ethnicity: "White", age: 27, country: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", imageSrc: "/images/goy.png" },
  { name: "Waifumiia", ethnicity: "Asian", age: 22, country: "Canada", flag: "\u{1F1E8}\u{1F1E6}", imageSrc: "/images/goy.png" },
  { name: "Breckie Hill", ethnicity: "White", age: 23, country: "United States", flag: "\u{1F1FA}\u{1F1F8}", imageSrc: "/images/goy.png" },
  { name: "Yardenlasry", ethnicity: "White", age: 25, country: "United States", flag: "\u{1F1FA}\u{1F1F8}", imageSrc: "/images/goy.png" },
  { name: "Xinia Official", ethnicity: "Latina", age: 26, country: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", imageSrc: "/images/goy.png" },
  { name: "Mythiccal", ethnicity: "White", age: 24, country: "United States", flag: "\u{1F1FA}\u{1F1F8}", imageSrc: "/images/goy.png" },
  { name: "TitaSahara", ethnicity: "Arab", age: 28, country: "United States", flag: "\u{1F1FA}\u{1F1F8}", imageSrc: "/images/goy.png" },
]

/* ─── Dropdown component ─── */
function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const display = value === "All" || value === "all" ? label : value

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 h-10 px-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/[0.08] text-foreground/70 text-sm font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] whitespace-nowrap"
      >
        {display}
        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1.5 min-w-[160px] rounded-xl overflow-hidden border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.5)] z-50">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/[0.08] via-background/95 to-background backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          <div className="relative py-1.5">
            {options.map((opt) => {
              const isActive = value === opt
              return (
                <button
                  key={opt}
                  onClick={() => {
                    onChange(opt)
                    setOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "text-brand-300 bg-brand-500/10"
                      : "text-foreground/80 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="flex-1 text-left">{opt}</span>
                  {isActive && <Check className="w-4 h-4 text-brand-300 flex-shrink-0" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ModelsPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [displayedModels, setDisplayedModels] = useState<BrowseModelData[]>([...allModels])
  const [isLoading, setIsLoading] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  /* Filters */
  const [bodyType, setBodyType] = useState("All")
  const [cupSize, setCupSize] = useState("All")
  const [ethnicity, setEthnicity] = useState("All")
  const [country, setCountry] = useState("All Countries")
  const [tagFilter, setTagFilter] = useState("")
  const [selectedSort, setSelectedSort] = useState("hot")
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  /* Close sort dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  /* Infinite scroll */
  const loadMore = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedModels((prev) => [...prev, ...allModels])
      setIsLoading(false)
    }, 300)
  }, [isLoading])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore()
      },
      { rootMargin: "400px" },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  const currentSort = sortOptions.find((s) => s.id === selectedSort)!
  const CurrentSortIcon = currentSort.icon

  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassHeader onUserClick={() => setSidebarOpen(true)} />
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="pt-16 sm:pt-20 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* ─── Page Header ─── */}
        <div className="flex items-center justify-between py-4 sm:py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-brand-400 tracking-tight">
            Models Search
          </h1>
        </div>

        {/* ─── Filter Bar ─── */}
        <div className="flex items-center gap-2 pb-4 sm:pb-6 overflow-x-auto scrollbar-thin">
          <FilterDropdown label="Body Type" options={bodyTypes} value={bodyType} onChange={setBodyType} />
          <FilterDropdown label="Cup Size" options={cupSizes} value={cupSize} onChange={setCupSize} />
          <FilterDropdown label="Ethnicity" options={ethnicities} value={ethnicity} onChange={setEthnicity} />
          <FilterDropdown
            label="Select country"
            options={countries.map((c) => c.label)}
            value={country}
            onChange={setCountry}
          />

          {/* Tag filter input */}
          <div className="relative flex-shrink-0 min-w-[160px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by tags"
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
              className="w-full h-10 pl-9 pr-3 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-brand-400/30 focus:ring-1 focus:ring-brand-400/20 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative flex-shrink-0 ml-auto" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 h-10 px-4 rounded-xl bg-brand-500/[0.08] hover:bg-brand-500/[0.15] backdrop-blur-xl border border-brand-400/[0.15] text-brand-300 text-sm font-semibold transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] whitespace-nowrap"
            >
              <CurrentSortIcon className="w-4 h-4" />
              {currentSort.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>

            {sortOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-52 rounded-xl overflow-hidden border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.5)] z-50">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/[0.08] via-background/95 to-background backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
                <div className="relative py-1.5">
                  {sortOptions.map((option) => {
                    const Icon = option.icon
                    const isActive = selectedSort === option.id
                    return (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSelectedSort(option.id)
                          setSortOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          isActive
                            ? "text-brand-300 bg-brand-500/10"
                            : "text-foreground/80 hover:bg-white/[0.06]"
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 text-left">{option.label}</span>
                        {"badge" in option && option.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-300 bg-brand-500/15 border border-brand-400/20 rounded">
                            {option.badge}
                          </span>
                        )}
                        {isActive && <Check className="w-4 h-4 text-brand-300 flex-shrink-0" />}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── Model Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 pb-4">
          {displayedModels.map((model, index) => (
            <BrowseModelCard
              key={`${model.name}-${index}`}
              {...model}
              onOpenModel={() => router.push(`/model/${encodeURIComponent(model.name)}`)}
            />
          ))}
        </div>

        {/* Sentinel for infinite scroll */}
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
    </main>
  )
}
