"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { UserSidebar } from "@/components/user-sidebar"
import { Button } from "@/components/ui/button"
import { Key, Crown, Zap, Infinity, Check, ArrowLeft, ShieldCheck, Ban } from "lucide-react"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$7.99",
    period: "/month",
    keysPerDay: "3",
    highlight: false,
    icon: Key,
    description: "Perfect for casual browsing",
    features: [
      "3 keys per day",
      "Access to all models",
      "Standard download speed",
      "Basic support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$14.99",
    period: "/month",
    keysPerDay: "10",
    highlight: true,
    icon: Zap,
    description: "Most popular for power users",
    badge: "Most Popular",
    features: [
      "10 keys per day",
      "Access to all models",
      "Priority download speed",
      "Priority support",
      "Early access to new content",
    ],
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: "$25.00",
    period: "/month",
    keysPerDay: "Unlimited",
    highlight: false,
    icon: Crown,
    description: "No limits, no ads, full access",
    features: [
      "Unlimited keys per day",
      "Access to all models",
      "Maximum download speed",
      "No ads",
      "Priority support",
      "Early access to new content",
      "Exclusive collections",
    ],
  },
]

export default function PricingPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassHeader onUserClick={() => setSidebarOpen(true)} />
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="pt-18 sm:pt-24 pb-16 px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium mb-4 sm:mb-5">
            <Crown className="w-3.5 h-3.5" />
            Premium Plans
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Unlock more with Premium
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto text-pretty">
            Get more keys, faster downloads, and an ad-free experience. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isSelected = selectedPlan === plan.id
            const isHighlighted = plan.highlight

            return (
              <div
                key={plan.id}
                className={`relative backdrop-blur-2xl rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer group ${
                  isHighlighted
                    ? "bg-gradient-to-b from-brand-500/[0.12] via-brand-500/[0.06] to-background/80 border-brand-400/25 shadow-[0_0_40px_var(--brand-500)/0.1,inset_0_1px_1px_rgba(255,255,255,0.08)] scale-[1.02] md:scale-105"
                    : "bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-background/80 border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.12)]"
                } ${
                  isSelected && !isHighlighted
                    ? "border-brand-400/30 shadow-[0_0_24px_var(--brand-500)/0.08]"
                    : ""
                } hover:border-brand-400/20 hover:shadow-[0_0_32px_var(--brand-500)/0.06]`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-500/20 border-b border-brand-400/15 py-1.5 text-center">
                    <span className="text-xs font-semibold text-brand-300 tracking-wide uppercase">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Ambient glow */}
                {isHighlighted && (
                  <>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-500/[0.1] blur-[60px] rounded-full" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-brand-500/[0.04] blur-[40px]" />
                  </>
                )}

                <div className={`relative p-6 ${plan.badge ? "pt-12" : ""}`}>
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        isHighlighted
                          ? "bg-brand-500/20 border-brand-400/25 shadow-[0_0_14px_var(--brand-500)/0.15]"
                          : "bg-white/[0.06] border-white/[0.1]"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isHighlighted ? "text-brand-400" : "text-foreground/60"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>

                  {/* Keys badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-6 ${
                      isHighlighted
                        ? "bg-brand-500/[0.1] border-brand-400/15"
                        : "bg-white/[0.04] border-white/[0.08]"
                    }`}
                  >
                    <Key
                      className={`w-3.5 h-3.5 ${
                        isHighlighted ? "text-brand-400" : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-sm font-semibold text-foreground">
                      {plan.keysPerDay}
                    </span>
                    <span className="text-xs text-muted-foreground">keys / day</span>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isHighlighted
                              ? "bg-brand-500/15 text-brand-400"
                              : "bg-white/[0.06] text-foreground/50"
                          }`}
                        >
                          {feature === "No ads" ? (
                            <Ban className="w-3 h-3" />
                          ) : (
                            <Check className="w-3 h-3" />
                          )}
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full h-11 font-semibold text-sm ${
                      isHighlighted
                        ? "bg-brand-500 hover:bg-brand-600 text-white shadow-[0_0_20px_var(--brand-500)/0.2]"
                        : "bg-white/[0.06] hover:bg-white/[0.1] text-foreground border border-white/[0.1]"
                    }`}
                  >
                    Get {plan.name}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-400/60" />
            Secure payments
          </span>
          <span className="flex items-center gap-1.5">
            <Key className="w-4 h-4 text-brand-400/60" />
            Instant key delivery
          </span>
          <span className="flex items-center gap-1.5">
            <Ban className="w-4 h-4 text-brand-400/60" />
            Cancel anytime
          </span>
        </div>
      </div>
    </main>
  )
}
