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
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
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
        <div className="h-full bg-background/80 backdrop-blur-2xl border-l border-white/10 overflow-y-auto scrollbar-thin">
          <div className="p-5">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Top Actions Row */}
            <div className="flex items-center gap-2 mb-5">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 hover:bg-white/10 border-white/10 text-foreground h-9 text-xs"
              >
                <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                Plans
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 hover:bg-white/10 border-white/10 text-foreground h-9 text-xs"
              >
                {"ToS & Privacy"}
                <ChevronDown className="w-3.5 h-3.5 ml-1.5" />
              </Button>
              <div className="ml-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 hover:bg-white/10 border-white/10 text-foreground h-9 text-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-teal-500/30 mr-1.5 flex items-center justify-center text-[10px]">
                    {"?"}
                  </div>
                  ThePornDude
                </Button>
              </div>
            </div>

            {/* User Profile Card */}
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)] mb-5">
              <div className="flex justify-center mb-3">
                <span className="px-3 py-1 text-xs font-semibold text-yellow-400 bg-yellow-500/15 rounded-full border border-yellow-500/25">
                  Basic
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground text-center">Anonymous</h3>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Key className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <span className="text-lg font-bold text-foreground">3</span>
              </div>
              <p className="text-center text-sm text-teal-400 mt-2 flex items-center justify-center gap-1">
                <Key className="w-3.5 h-3.5" />
                3 keys per day
              </p>
            </div>

            {/* Settings Card */}
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)] mb-5">
              <h4 className="text-sm font-semibold text-foreground mb-4">Settings</h4>

              {/* Display Mode */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-foreground">Display-Mode</span>
                <div className="flex bg-white/[0.04] rounded-lg border border-white/[0.08] overflow-hidden">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    Cover
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-foreground bg-white/[0.06] border-l border-white/[0.08]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Contain
                  </button>
                </div>
              </div>

              {/* Register / Login */}
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 border border-teal-500/30 h-10 font-medium text-sm"
                >
                  <UserPlus className="w-4 h-4 mr-1.5" />
                  Register
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-white/5 text-foreground hover:bg-white/10 border-white/10 h-10 font-medium text-sm"
                >
                  <LogIn className="w-4 h-4 mr-1.5" />
                  Login
                </Button>
              </div>
            </div>

            {/* Need More Keys Section */}
            <h4 className="text-base font-semibold text-foreground mb-3">{"Need more keys?"}</h4>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Premium */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-foreground">Premium</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  {"starting at "}
                  <span className="text-teal-400 font-semibold">$7.99</span>
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-8"
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Get Premium
                </Button>
              </div>

              {/* AdMaven */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 mb-2">
                  <Megaphone className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-foreground">AdMaven</span>
                </div>
                <p className="text-xs text-teal-400 mb-3">5 Key Refills Remaining</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-8"
                >
                  Free <span className="font-bold mx-1">3</span> <Key className="w-3 h-3 mx-0.5" /> Keys
                </Button>
              </div>

              {/* Lockr */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-stone-500/10 rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-foreground">Lockr</span>
                </div>
                <p className="text-xs text-teal-400 mb-3">5 Key Refills Remaining</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-8"
                >
                  Free <span className="font-bold mx-1">3</span> <Key className="w-3 h-3 mx-0.5" /> Keys
                </Button>
              </div>

              {/* Rewards */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/15 to-indigo-500/10 rounded-2xl p-4 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-purple-400" />
                  <span className="text-lg font-bold text-foreground">Rewards</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Trade for keys</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-8"
                >
                  <Gift className="w-3 h-3 mr-1" />
                  Free <span className="font-bold mx-1">25</span> <Key className="w-3 h-3 mx-0.5" />
                </Button>
              </div>
            </div>

            {/* Support Card */}
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)] mb-5">
              <h4 className="text-base font-semibold text-foreground mb-1">Support</h4>
              <p className="text-xs text-muted-foreground mb-4">
                For any support related queries feel free to contact us below.
              </p>

              <div className="flex gap-2 mb-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-9"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  Support-Chat
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-9"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  Telegram
                  <ExternalLink className="w-3 h-3 ml-1.5 text-muted-foreground" />
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-foreground text-xs h-9 justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Help Center
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Button>
            </div>

            {/* Service Availability Card */}
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)] mb-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Service Availability</h4>
                    <p className="text-xs text-muted-foreground">{"4/4 Services \u2022 100% uptime"}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
              </div>
              <div className="mt-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  4 Online
                </span>
              </div>
            </div>

            {/* Daily Content Card with Chart */}
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-5 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.15)] mb-5">
              <h4 className="text-base font-bold text-foreground">Daily Content</h4>
              <p className="text-xs text-muted-foreground mb-4">images and videos uploaded daily</p>

              {/* SVG Area Chart */}
              <div className="relative h-40 w-full">
                <svg viewBox="0 0 320 120" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="areaFill2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="320" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="55" x2="320" y2="55" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="100" x2="320" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  {/* Area 1 */}
                  <path
                    d="M0,60 C30,45 60,20 100,15 C140,10 160,40 200,30 C240,20 280,25 320,35 L320,120 L0,120Z"
                    fill="url(#areaFill)"
                  />
                  <path
                    d="M0,60 C30,45 60,20 100,15 C140,10 160,40 200,30 C240,20 280,25 320,35"
                    fill="none"
                    stroke="rgb(20, 184, 166)"
                    strokeWidth="1.5"
                  />
                  {/* Area 2 */}
                  <path
                    d="M0,75 C30,65 60,50 100,55 C140,60 160,48 200,55 C240,62 280,50 320,55 L320,120 L0,120Z"
                    fill="url(#areaFill2)"
                  />
                  <path
                    d="M0,75 C30,65 60,50 100,55 C140,60 160,48 200,55 C240,62 280,50 320,55"
                    fill="none"
                    stroke="rgb(6, 182, 212)"
                    strokeWidth="1.5"
                  />
                </svg>
                {/* Y-axis labels */}
                <span className="absolute top-0 left-0 text-[10px] text-muted-foreground">130K</span>
                <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[10px] text-muted-foreground">65K</span>
                <span className="absolute bottom-0 left-0 text-[10px] text-muted-foreground">0K</span>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between mt-1 text-[10px] text-muted-foreground px-1">
                <span>2/9</span>
                <span>2/10</span>
                <span>2/11</span>
                <span>2/12</span>
                <span>2/13</span>
                <span>2/14</span>
                <span>2/15</span>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center gap-4 mt-4 text-xs">
                <span className="flex items-center gap-1 text-teal-400 font-medium">
                  31.96%
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Package className="w-3.5 h-3.5" />
                  {"3 TB / 125 posts a day"}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">from 2/9 to 2/15</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
