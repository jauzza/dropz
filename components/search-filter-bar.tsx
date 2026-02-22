"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import {
  Search,
  Camera,
  Clock,
  ChevronDown,
  LayoutGrid,
  Flame,
  Rss,
  Eye,
  Shuffle,
  HardDrive,
  History,
  ArrowDownWideNarrow,
  Check,
  Bookmark,
  Sparkles,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/* ─── Sort options (second-state dropdown) ─── */
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

/* ─── Trending tags ─── */
const trendingTags = [
  "Sophie Rain",
  "Kira Pregiato",
  "Layla Dream",
  "Bbyanni",
  "Cece Rose",
  "Lara Rose",
  "Waifumiia",
  "Breckie Hill",
]

/* ─── Ethnicity filters ─── */
const ethnicities = [
  "All Ethnicities",
  "Arab",
  "Asian",
  "Ebony",
  "Indian",
  "Latina",
  "White",
]

export function SearchFilterBar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("new")
  const [selectedEthnicity, setSelectedEthnicity] = useState("All Ethnicities")
  const [searchQuery, setSearchQuery] = useState("")

  const popupRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const sortRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  /* Close popup when clicking outside */
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false)
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false)
      }
    },
    []
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  /* Auto-focus the search input when popup opens */
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  /* Escape to close */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false)
        setSortOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const currentSort = sortOptions.find((s) => s.id === selectedSort)!

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 py-4">
      {/* ─── Search Input (trigger) ─── */}
      <div className="flex-1 max-w-2xl relative" ref={triggerRef}>
        <div
          className="relative cursor-pointer"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <div className="w-full h-11 sm:h-12 pl-12 pr-4 bg-card border border-border/50 rounded-xl text-muted-foreground flex items-center text-sm sm:text-base select-none">
            {searchQuery || "Search & Filter"}
          </div>
        </div>

        {/* ─── Search Popup (State 1: main popup) ─── */}
        {searchOpen && (
          <div
            ref={popupRef}
            className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/[0.06] via-background/95 to-background backdrop-blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

            <div className="relative p-4">
              {/* ── Top Row: Search input + Sort button ── */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search models..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-brand-400/30 focus:ring-1 focus:ring-brand-400/20 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Sort button (opens dropdown) */}
                <div className="relative" ref={sortRef}>
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-1.5 h-11 px-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/[0.08] text-foreground/80 text-sm font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    {currentSort.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${sortOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* ─── Sort Dropdown (State 2) ─── */}
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
                              {isActive && (
                                <Check className="w-4 h-4 text-brand-300 flex-shrink-0" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Trending Tags ── */}
              <div className="flex flex-wrap gap-2 mb-5">
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-full hover:bg-brand-500/10 hover:text-brand-300 hover:border-brand-400/20 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <Sparkles className="w-3 h-3 text-brand-400/60" />
                    {tag}
                  </button>
                ))}
              </div>

              {/* ── Two Action Buttons ── */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <Button className="h-12 bg-brand-500/[0.08] hover:bg-brand-500/[0.15] text-brand-300/90 border border-brand-400/[0.12] backdrop-blur-xl font-medium text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_16px_var(--brand-500)/0.06] rounded-xl">
                  <Camera className="w-4 h-4 mr-2" />
                  Visual Image Search
                </Button>
                <Button className="h-12 bg-white/[0.04] hover:bg-white/[0.08] text-foreground/70 border border-white/[0.08] backdrop-blur-xl font-medium text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] rounded-xl">
                  <LayoutGrid className="w-4 h-4 mr-2" />
                  Browse all models
                </Button>
              </div>

              {/* ── Ethnicity Filters ── */}
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-foreground mb-3">Ethnicity</h4>
                <div className="flex flex-wrap gap-2">
                  {ethnicities.map((eth) => {
                    const isActive = selectedEthnicity === eth
                    return (
                      <button
                        key={eth}
                        onClick={() => setSelectedEthnicity(eth)}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all ${
                          isActive
                            ? "bg-brand-500/20 text-brand-300 border-brand-400/30 shadow-[0_0_12px_var(--brand-500)/0.15,inset_0_1px_0_rgba(255,255,255,0.06)]"
                            : "bg-white/[0.04] text-foreground/60 border-white/[0.08] hover:bg-white/[0.08] hover:text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                        }`}
                      >
                        {eth}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* ── Bookmark Lists (empty state) ── */}
              <div className="relative rounded-xl bg-white/[0.02] border border-white/[0.06] p-8 flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-3">
                  <Bookmark className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground/80 mb-1">
                  No Bookmark Lists Yet
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  Start bookmarking content to create your first list!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── Filter Buttons (outside popup) ─── */}
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/[0.04] hover:bg-white/[0.08] text-foreground/70 border border-white/[0.08] h-10 w-10 rounded-xl flex-shrink-0"
        >
          <Camera className="w-5 h-5" />
        </Button>

        <Button
          variant="secondary"
          className="bg-white/[0.04] hover:bg-white/[0.08] text-foreground/70 border border-white/[0.08] h-10 px-3 sm:px-4 rounded-xl text-sm"
        >
          <Clock className="w-4 h-4 mr-1.5" />
          {currentSort.label}
          <ChevronDown className="w-4 h-4 ml-1.5" />
        </Button>

        {/* Models Button */}
        <Button
          variant="outline"
          className="bg-transparent border-white/[0.08] hover:bg-white/[0.06] text-foreground/70 h-10 px-3 sm:px-4 rounded-xl text-sm"
        >
          <LayoutGrid className="w-4 h-4 mr-1.5" />
          <span className="hidden xs:inline">Models</span>
          <span className="xs:hidden">All</span>
        </Button>
      </div>
    </div>
  )
}
