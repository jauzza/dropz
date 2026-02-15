"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  X,
  ShoppingCart,
  ChevronDown,
  Key,
  LayoutGrid,
  Maximize2,
  UserPlus,
  LogIn,
  Crown,
  Megaphone,
  Lock,
  Gift,
  MessageSquare,
  Send,
  HelpCircle,
  ExternalLink,
  CircleCheck,
  TrendingUp,
  Package,
} from "lucide-react"

interface UserSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function UserSidebar({ isOpen, onClose }: UserSidebarProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-[420px] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-gradient-to-bl from-brand-500/[0.07] via-background/95 to-background backdrop-blur-3xl border-l border-brand-400/[0.08] overflow-y-auto scrollbar-thin shadow-[inset_1px_0_0_rgba(255,255,255,0.06),-20px_0_60px_rgba(0,0,0,0.4)]">
          <div className="p-5">

            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full backdrop-blur-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.1] transition-all"
                aria-label="Close sidebar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Top Actions Row */}
            <div className="flex items-center gap-2 mb-5">
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-foreground/80 backdrop-blur-xl bg-white/[0.04] rounded-full border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <ShoppingCart className="w-3.5 h-3.5" />
                Plans
              </button>
              <button className="flex items-center gap-1 px-3.5 py-2 text-xs font-medium text-foreground/80 backdrop-blur-xl bg-white/[0.04] rounded-full border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                {"ToS & Privacy"}
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-50" />
              </button>
              <div className="ml-auto">
                <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-foreground/80 backdrop-blur-xl bg-white/[0.04] rounded-full border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-[9px] text-brand-300">
                    {"?"}
                  </div>
                  ThePornDude
                </button>
              </div>
            </div>

            {/* User Profile Card — horizontal layout using the full width */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-r from-brand-950/50 via-brand-900/20 to-brand-950/40 rounded-2xl p-5 border border-brand-400/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.12)] mb-5 overflow-hidden">
              {/* Ambient side glows */}
              <div className="absolute top-0 -left-8 w-28 h-full bg-brand-500/[0.12] blur-[40px] rounded-full" />
              <div className="absolute top-0 -right-8 w-28 h-full bg-brand-500/[0.08] blur-[40px] rounded-full" />

              <div className="relative flex items-center gap-5">
                {/* Avatar */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute -inset-2 rounded-full bg-brand-500/[0.08] blur-[8px]" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-brand-900/60 to-brand-950/40 border-2 border-brand-400/25 flex items-center justify-center shadow-[0_0_24px_var(--brand-500)/0.15,inset_0_1px_2px_rgba(255,255,255,0.08)]">
                    <span className="text-2xl font-bold text-brand-300/90">A</span>
                  </div>
                </div>

                {/* Info — right side */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground truncate">Anonymous</h3>
                    <span className="flex-shrink-0 px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase text-yellow-300 bg-yellow-500/10 rounded-full border border-yellow-400/25">
                      Basic
                    </span>
                  </div>

                  {/* Keys row */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-500/[0.08] border border-brand-400/[0.12] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="w-6 h-6 rounded-full bg-brand-500/20 border border-brand-400/25 flex items-center justify-center shadow-[0_0_10px_var(--brand-500)/0.2]">
                        <Key className="w-3 h-3 text-brand-400" />
                      </div>
                      <span className="text-base font-bold text-foreground">3</span>
                    </div>
                    <span className="text-xs text-brand-400/60 flex items-center gap-1">
                      <Key className="w-3 h-3" />
                      3 keys per day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Card — spread horizontally */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-r from-brand-500/[0.04] via-white/[0.03] to-brand-500/[0.03] rounded-2xl p-5 border border-brand-400/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5 overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-500/[0.06] blur-[30px] rounded-full" />
              <h4 className="relative text-sm font-semibold text-foreground mb-4">Settings</h4>

              {/* Display Mode */}
              <div className="relative flex items-center justify-between mb-5">
                <span className="text-sm text-foreground/80">Display-Mode</span>
                <div className="flex backdrop-blur-xl bg-white/[0.03] rounded-lg border border-white/[0.08] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs text-foreground/50 hover:text-foreground/80 hover:bg-white/[0.04] transition-all">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    Cover
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs text-foreground bg-white/[0.06] border-l border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Contain
                  </button>
                </div>
              </div>

              {/* Register / Login */}
              <div className="relative flex gap-3">
                <Button className="flex-1 bg-brand-500/15 text-brand-300 hover:bg-brand-500/25 border border-brand-500/25 h-10 font-medium text-sm backdrop-blur-xl shadow-[0_0_16px_var(--brand-500)/0.08,inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <UserPlus className="w-4 h-4 mr-1.5" />
                  Register
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-white/[0.04] text-foreground/80 hover:bg-white/[0.08] border-white/[0.08] h-10 font-medium text-sm backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <LogIn className="w-4 h-4 mr-1.5" />
                  Login
                </Button>
              </div>
            </div>

            {/* Need More Keys — 2x2 grid */}
            <h4 className="text-base font-semibold text-foreground mb-3">{"Need more keys?"}</h4>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Premium */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-brand-500/[0.08] via-white/[0.04] to-white/[0.02] rounded-2xl p-4 border border-brand-400/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-400/[0.1] blur-[30px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-brand-500/[0.06] blur-[25px] rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-400/20 flex items-center justify-center shadow-[0_0_10px_var(--brand-500)/0.1]">
                    <Crown className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Premium</span>
                </div>
                <p className="relative text-xs text-foreground/50 mb-3">
                  {"starting at "}
                  <span className="text-brand-400 font-semibold">$7.99</span>
                </p>
                <button className="relative w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-brand-300/80 backdrop-blur-xl bg-brand-500/[0.08] rounded-lg border border-brand-400/[0.12] hover:bg-brand-500/[0.15] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <ShoppingCart className="w-3 h-3" />
                  Get Premium
                </button>
              </div>

              {/* AdMaven */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-brand-500/[0.1] via-brand-500/[0.05] to-white/[0.02] rounded-2xl p-4 border border-brand-400/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-500/[0.1] blur-[30px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-500/[0.07] blur-[25px] rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-400/20 flex items-center justify-center shadow-[0_0_10px_var(--brand-500)/0.1]">
                    <Megaphone className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-lg font-bold text-foreground">AdMaven</span>
                </div>
                <p className="relative text-xs text-brand-400/70 mb-3">5 Key Refills Remaining</p>
                <button className="relative w-full flex items-center justify-center gap-1 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  Free <span className="font-bold mx-0.5">3</span> <Key className="w-3 h-3 mx-0.5 text-brand-400/60" /> Keys
                </button>
              </div>

              {/* Lockr */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-brand-500/[0.07] via-brand-500/[0.04] to-white/[0.02] rounded-2xl p-4 border border-brand-400/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-500/[0.1] blur-[30px] rounded-full" />
                <div className="absolute top-0 left-0 w-16 h-16 bg-brand-400/[0.06] blur-[25px] rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-400/20 flex items-center justify-center shadow-[0_0_10px_var(--brand-500)/0.1]">
                    <Lock className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Lockr</span>
                </div>
                <p className="relative text-xs text-brand-400/70 mb-3">5 Key Refills Remaining</p>
                <button className="relative w-full flex items-center justify-center gap-1 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  Free <span className="font-bold mx-0.5">3</span> <Key className="w-3 h-3 mx-0.5 text-brand-400/60" /> Keys
                </button>
              </div>

              {/* Rewards */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-brand-500/[0.08] via-brand-500/[0.04] to-white/[0.02] rounded-2xl p-4 border border-brand-400/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -top-4 left-1/2 w-20 h-20 bg-brand-500/[0.1] blur-[30px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-brand-400/[0.06] blur-[25px] rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-400/20 flex items-center justify-center shadow-[0_0_10px_var(--brand-500)/0.1]">
                    <Gift className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Rewards</span>
                </div>
                <p className="relative text-xs text-foreground/50 mb-3">Trade for keys</p>
                <button className="relative w-full flex items-center justify-center gap-1 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <Gift className="w-3 h-3 mr-0.5 text-brand-400/60" />
                  Free <span className="font-bold mx-0.5">25</span> <Key className="w-3 h-3 mx-0.5 text-brand-400/60" />
                </button>
              </div>
            </div>

            {/* Support Card — horizontal button row */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-r from-brand-500/[0.04] via-white/[0.03] to-brand-500/[0.03] rounded-2xl p-5 border border-brand-400/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5 overflow-hidden">
              <div className="absolute -top-6 left-1/2 w-32 h-20 bg-brand-500/[0.06] blur-[30px] rounded-full" />
              <div className="relative flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-base font-semibold text-foreground">Support</h4>
                  <p className="text-xs text-foreground/40">
                    For any support related queries feel free to contact us below.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-3 gap-2">
                <button className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat
                </button>
                <button className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <Send className="w-3.5 h-3.5" />
                  Telegram
                </button>
                <button className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Help
                </button>
              </div>
            </div>

            {/* Service Availability — horizontal layout */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-r from-brand-500/[0.03] via-white/[0.03] to-white/[0.02] rounded-2xl p-5 border border-brand-400/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/[0.04] blur-[25px] rounded-full" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/15 flex items-center justify-center backdrop-blur-xl shadow-[0_0_12px_rgba(34,197,94,0.08)]">
                    <CircleCheck className="w-5 h-5 text-green-400/80" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Service Availability</h4>
                    <p className="text-xs text-foreground/40">{"4/4 Services \u2022 100% uptime"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-green-400/80 bg-green-500/8 rounded-full border border-green-500/12 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                    4 Online
                  </span>
                  <ExternalLink className="w-4 h-4 text-foreground/30 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Daily Content Chart */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-r from-brand-500/[0.04] via-white/[0.03] to-brand-500/[0.03] rounded-2xl p-5 border border-brand-400/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-24 bg-brand-500/[0.04] blur-[30px] rounded-full" />

              {/* Header row — title left, stats right */}
              <div className="relative flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-foreground">Daily Content</h4>
                  <p className="text-xs text-foreground/40">images and videos uploaded daily</p>
                </div>
                <div className="text-right">
                  <span className="text-brand-400/80 text-sm font-medium flex items-center gap-1">
                    31.96%
                    <TrendingUp className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-[10px] text-foreground/30 mt-0.5">from 2/9 to 2/15</p>
                </div>
              </div>

              <div className="relative h-32 w-full">
                <svg viewBox="0 0 320 100" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="brandArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="brandArea2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="10" x2="320" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="320" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="0" y1="90" x2="320" y2="90" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <path
                    d="M0,50 C30,38 60,15 100,12 C140,8 160,35 200,25 C240,15 280,20 320,30 L320,100 L0,100Z"
                    fill="url(#brandArea)"
                  />
                  <path
                    d="M0,50 C30,38 60,15 100,12 C140,8 160,35 200,25 C240,15 280,20 320,30"
                    fill="none"
                    stroke="var(--brand-500)"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0,65 C30,55 60,42 100,47 C140,52 160,40 200,47 C240,54 280,42 320,47 L320,100 L0,100Z"
                    fill="url(#brandArea2)"
                  />
                  <path
                    d="M0,65 C30,55 60,42 100,47 C140,52 160,40 200,47 C240,54 280,42 320,47"
                    fill="none"
                    stroke="var(--brand-400)"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-foreground/30 px-1">
                <span>2/9</span>
                <span>2/10</span>
                <span>2/11</span>
                <span>2/12</span>
                <span>2/13</span>
                <span>2/14</span>
                <span>2/15</span>
              </div>

              <div className="relative flex items-center gap-4 mt-3 text-xs text-foreground/40">
                <Package className="w-3.5 h-3.5" />
                {"3 TB / 125 posts a day"}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
