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
        <div className="h-full bg-gradient-to-bl from-pink-500/[0.04] via-background/90 to-background/95 backdrop-blur-3xl border-l border-white/[0.06] overflow-y-auto scrollbar-thin shadow-[inset_1px_0_0_rgba(255,255,255,0.04),-20px_0_60px_rgba(0,0,0,0.3)]">
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
                  <div className="w-5 h-5 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-[9px] text-pink-300">
                    {"?"}
                  </div>
                  ThePornDude
                </button>
              </div>
            </div>

            {/* User Profile Card */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-2xl p-6 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-1px_1px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.15)] mb-5 overflow-hidden">
              {/* Soft pink glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-pink-500/10 blur-3xl rounded-full" />
              
              <div className="relative flex justify-center mb-3">
                <span className="px-4 py-1 text-xs font-bold tracking-wide text-yellow-300 bg-yellow-500/10 rounded-full border border-yellow-400/20 backdrop-blur-sm shadow-[0_0_12px_rgba(234,179,8,0.1)]">
                  Basic
                </span>
              </div>
              <h3 className="relative text-xl font-bold text-foreground text-center">Anonymous</h3>
              <div className="relative flex items-center justify-center gap-2 mt-3">
                <div className="w-7 h-7 rounded-full bg-pink-500/15 border border-pink-500/25 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.15)]">
                  <Key className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <span className="text-xl font-bold text-foreground">3</span>
              </div>
              <p className="relative text-center text-sm text-pink-400/80 mt-2 flex items-center justify-center gap-1.5">
                <Key className="w-3.5 h-3.5" />
                3 keys per day
              </p>
            </div>

            {/* Settings Card */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5">
              <h4 className="text-sm font-semibold text-foreground mb-4">Settings</h4>

              {/* Display Mode */}
              <div className="flex items-center justify-between mb-5">
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
              <div className="flex gap-3">
                <Button className="flex-1 bg-pink-500/15 text-pink-300 hover:bg-pink-500/25 border border-pink-500/25 h-10 font-medium text-sm backdrop-blur-xl shadow-[0_0_16px_rgba(236,72,153,0.1),inset_0_1px_0_rgba(255,255,255,0.06)]">
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

            {/* Need More Keys */}
            <h4 className="text-base font-semibold text-foreground mb-3">{"Need more keys?"}</h4>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Premium */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500/8 blur-2xl rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-pink-400" />
                  <span className="text-lg font-bold text-foreground">Premium</span>
                </div>
                <p className="relative text-xs text-foreground/50 mb-3">
                  {"starting at "}
                  <span className="text-pink-400 font-semibold">$7.99</span>
                </p>
                <button className="relative w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <ShoppingCart className="w-3 h-3" />
                  Get Premium
                </button>
              </div>

              {/* AdMaven */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-pink-500/[0.08] to-rose-500/[0.04] rounded-2xl p-4 border border-pink-500/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-500/10 blur-2xl rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <Megaphone className="w-5 h-5 text-pink-400" />
                  <span className="text-lg font-bold text-foreground">AdMaven</span>
                </div>
                <p className="relative text-xs text-pink-400/70 mb-3">5 Key Refills Remaining</p>
                <button className="relative w-full flex items-center justify-center gap-1 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  Free <span className="font-bold mx-0.5">3</span> <Key className="w-3 h-3 mx-0.5 text-pink-400/60" /> Keys
                </button>
              </div>

              {/* Lockr */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-rose-500/[0.06] to-pink-500/[0.03] rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-rose-500/8 blur-2xl rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <Lock className="w-5 h-5 text-pink-400" />
                  <span className="text-lg font-bold text-foreground">Lockr</span>
                </div>
                <p className="relative text-xs text-pink-400/70 mb-3">5 Key Refills Remaining</p>
                <button className="relative w-full flex items-center justify-center gap-1 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  Free <span className="font-bold mx-0.5">3</span> <Key className="w-3 h-3 mx-0.5 text-pink-400/60" /> Keys
                </button>
              </div>

              {/* Rewards */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-pink-500/[0.06] to-fuchsia-500/[0.04] rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute -top-4 left-1/2 w-16 h-16 bg-fuchsia-500/8 blur-2xl rounded-full" />
                <div className="relative flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-pink-400" />
                  <span className="text-lg font-bold text-foreground">Rewards</span>
                </div>
                <p className="relative text-xs text-foreground/50 mb-3">Trade for keys</p>
                <button className="relative w-full flex items-center justify-center gap-1 py-2 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <Gift className="w-3 h-3 mr-0.5 text-pink-400/60" />
                  Free <span className="font-bold mx-0.5">25</span> <Key className="w-3 h-3 mx-0.5 text-pink-400/60" />
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5">
              <h4 className="text-base font-semibold text-foreground mb-1">Support</h4>
              <p className="text-xs text-foreground/40 mb-4">
                For any support related queries feel free to contact us below.
              </p>

              <div className="flex gap-2 mb-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Support-Chat
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <Send className="w-3.5 h-3.5" />
                  Telegram
                  <ExternalLink className="w-2.5 h-2.5 opacity-40" />
                </button>
              </div>

              <button className="w-full flex items-center justify-between py-2.5 px-3 text-xs font-medium text-foreground/70 backdrop-blur-xl bg-white/[0.04] rounded-lg border border-white/[0.08] hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Help Center
                </span>
                <ExternalLink className="w-3 h-3 opacity-40" />
              </button>
            </div>

            {/* Service Availability */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/15 flex items-center justify-center backdrop-blur-xl shadow-[0_0_12px_rgba(34,197,94,0.08)]">
                    <CircleCheck className="w-5 h-5 text-green-400/80" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Service Availability</h4>
                    <p className="text-xs text-foreground/40">{"4/4 Services \u2022 100% uptime"}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-foreground/30 flex-shrink-0 mt-1" />
              </div>
              <div className="mt-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-green-400/80 bg-green-500/8 rounded-full border border-green-500/12 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                  4 Online
                </span>
              </div>
            </div>

            {/* Daily Content Chart */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)] mb-5">
              <h4 className="text-base font-bold text-foreground">Daily Content</h4>
              <p className="text-xs text-foreground/40 mb-4">images and videos uploaded daily</p>

              <div className="relative h-40 w-full">
                <svg viewBox="0 0 320 120" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pinkArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="roseArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(244, 114, 182)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(244, 114, 182)" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="320" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="0" y1="55" x2="320" y2="55" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="0" y1="100" x2="320" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  {/* Area 1 */}
                  <path
                    d="M0,60 C30,45 60,20 100,15 C140,10 160,40 200,30 C240,20 280,25 320,35 L320,120 L0,120Z"
                    fill="url(#pinkArea)"
                  />
                  <path
                    d="M0,60 C30,45 60,20 100,15 C140,10 160,40 200,30 C240,20 280,25 320,35"
                    fill="none"
                    stroke="rgba(236, 72, 153, 0.6)"
                    strokeWidth="1.5"
                  />
                  {/* Area 2 */}
                  <path
                    d="M0,75 C30,65 60,50 100,55 C140,60 160,48 200,55 C240,62 280,50 320,55 L320,120 L0,120Z"
                    fill="url(#roseArea)"
                  />
                  <path
                    d="M0,75 C30,65 60,50 100,55 C140,60 160,48 200,55 C240,62 280,50 320,55"
                    fill="none"
                    stroke="rgba(244, 114, 182, 0.5)"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="absolute top-0 left-0 text-[10px] text-foreground/30">130K</span>
                <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[10px] text-foreground/30">65K</span>
                <span className="absolute bottom-0 left-0 text-[10px] text-foreground/30">0K</span>
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

              <div className="flex items-center gap-4 mt-4 text-xs">
                <span className="flex items-center gap-1 text-pink-400/80 font-medium">
                  31.96%
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <span className="flex items-center gap-1 text-foreground/40">
                  <Package className="w-3.5 h-3.5" />
                  {"3 TB / 125 posts a day"}
                </span>
              </div>
              <p className="text-[10px] text-foreground/30 mt-1">from 2/9 to 2/15</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
