"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Lock, ChevronDown, User, Key } from "lucide-react"
import Image from "next/image"

const languages = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png", short: "EN" },
  { code: "nl", label: "Nederlands", flag: "https://flagcdn.com/w40/nl.png", short: "NL" },
  { code: "de", label: "Deutsch", flag: "https://flagcdn.com/w40/de.png", short: "DE" },
  { code: "fr", label: "Fran\u00e7ais", flag: "https://flagcdn.com/w40/fr.png", short: "FR" },
  { code: "es", label: "Espa\u00f1ol", flag: "https://flagcdn.com/w40/es.png", short: "ES" },
  { code: "pt", label: "Portugu\u00eas", flag: "https://flagcdn.com/w40/pt.png", short: "PT" },
]

interface LiquidGlassHeaderProps {
  onUserClick?: () => void
  remainingKeys?: number
}

export function LiquidGlassHeader({ onUserClick, remainingKeys = 5 }: LiquidGlassHeaderProps) {
  const router = useRouter()
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const langRef = useRef<HTMLDivElement>(null)

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
      <div className="absolute inset-0 bg-background/60 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.2)]" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* ---- Left: Logo + Get Access ---- */}
          <div className="flex items-center gap-2.5 sm:gap-3">
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

            {/* Get Access CTA — frosted glass pink */}
            <button
              onClick={() => router.push("/pricing")}
              className="flex items-center gap-1.5 h-9 sm:h-10 px-3.5 sm:px-5 rounded-xl bg-brand-500/[0.12] hover:bg-brand-500/[0.22] backdrop-blur-xl border border-brand-400/20 text-brand-300 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_hsl(330,80%,55%,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] active:scale-[0.97]"
            >
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Get Access</span>
            </button>
          </div>

          {/* ---- Right: Language + User pill ---- */}
          <div className="flex items-center gap-2 sm:gap-2.5">

            {/* Language selector with real flags */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 h-9 sm:h-10 px-2 sm:px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-foreground/80 text-xs sm:text-sm font-medium transition-colors backdrop-blur-xl"
              >
                <Image
                  src={selectedLang.flag}
                  alt={selectedLang.label}
                  width={20}
                  height={15}
                  className="rounded-[2px] object-cover flex-shrink-0"
                  unoptimized
                />
                <span className="hidden sm:inline">{selectedLang.label}</span>
                <span className="sm:hidden text-[11px] font-medium text-muted-foreground">{selectedLang.short}</span>
                <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-48 rounded-xl bg-card/95 backdrop-blur-2xl border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.4)] py-1.5 z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang)
                        setLangOpen(false)
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
                        selectedLang.code === lang.code
                          ? "text-brand-300 bg-brand-500/10"
                          : "text-foreground/80 hover:bg-white/[0.06]"
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={22}
                        height={16}
                        className="rounded-[2px] object-cover flex-shrink-0"
                        unoptimized
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User pill — icon + keys remaining */}
            <button
              onClick={() => onUserClick?.()}
              className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 pl-2.5 pr-3 sm:pl-3 sm:pr-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-foreground/80 transition-colors backdrop-blur-xl cursor-pointer"
              aria-label="User menu"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-500/15 border border-brand-400/20 flex items-center justify-center flex-shrink-0">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-300" />
              </div>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-medium text-muted-foreground whitespace-nowrap">
                <Key className="w-3 h-3 text-brand-400 flex-shrink-0" />
                <span><span className="text-brand-300 font-semibold">{remainingKeys}</span> keys</span>
              </div>
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}
