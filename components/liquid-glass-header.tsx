"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User, ChevronDown, ShoppingCart } from "lucide-react"

const languages = [
  { code: "en", label: "English", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
  { code: "nl", label: "Nederlands", flag: "\uD83C\uDDF3\uD83C\uDDF1" },
  { code: "de", label: "Deutsch", flag: "\uD83C\uDDE9\uD83C\uDDEA" },
  { code: "fr", label: "Fran\u00e7ais", flag: "\uD83C\uDDEB\uD83C\uDDF7" },
  { code: "es", label: "Espa\u00f1ol", flag: "\uD83C\uDDEA\uD83C\uDDF8" },
  { code: "pt", label: "Portugu\u00eas", flag: "\uD83C\uDDF5\uD83C\uDDF9" },
]

interface LiquidGlassHeaderProps {
  onUserClick?: () => void
}

export function LiquidGlassHeader({ onUserClick }: LiquidGlassHeaderProps) {
  const router = useRouter()
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const langRef = useRef<HTMLDivElement>(null)

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass backdrop */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.18)]" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* ---- Left: Logo + Buy Access ---- */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Logo */}
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-400/25 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-foreground hidden sm:block">PimpDrops</span>
            </button>

            {/* Buy Access CTA */}
            <button
              onClick={() => router.push("/pricing")}
              className="flex items-center gap-1.5 h-9 px-3 sm:px-4 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs sm:text-sm font-semibold transition-colors shadow-[0_0_16px_var(--brand-500)/0.2]"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Buy</span> Access
            </button>
          </div>

          {/* ---- Right: Language + User ---- */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 h-9 px-2.5 sm:px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-foreground/80 text-xs sm:text-sm font-medium transition-colors"
              >
                <span className="text-base leading-none">{selectedLang.flag}</span>
                <span className="hidden sm:inline">{selectedLang.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown */}
              {langOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-44 rounded-xl bg-card/95 backdrop-blur-2xl border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.35)] py-1.5 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang)
                        setLangOpen(false)
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors ${
                        selectedLang.code === lang.code
                          ? "text-brand-300 bg-brand-500/10"
                          : "text-foreground/80 hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Icon */}
            <button
              onClick={() => onUserClick?.()}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-500/10 border border-brand-400/20 text-brand-300 hover:bg-brand-500/20 hover:text-brand-200 transition-colors cursor-pointer"
              aria-label="User menu"
            >
              <User className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
