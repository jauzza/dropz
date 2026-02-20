"use client"

import Link from "next/link"
import { useState } from "react"
import { Mail, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { UserSidebar } from "@/components/user-sidebar"
import { EtheralShadow } from "@/components/ui/etheral-shadow"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated pink dust particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <EtheralShadow
          color="rgba(180, 40, 100, 0.35)"
          animation={{ scale: 40, speed: 30 }}
          noise={{ opacity: 0.3, scale: 1.4 }}
          sizing="fill"
        />
      </div>

      <LiquidGlassHeader onUserClick={() => setSidebarOpen(true)} />
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="backdrop-blur-2xl bg-card/80 border border-white/[0.08] rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]">
            {/* Title */}
            <h1 className="text-2xl font-bold text-foreground mb-2">Aanmelden</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Voer uw gegevens in om een account aan te maken
            </p>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              {/* Username (optional) */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold text-foreground">
                    Gebruikersnaam
                  </label>
                  <span className="text-xs text-muted-foreground">(Optioneel)</span>
                </div>
                <input
                  type="text"
                  placeholder="Gebruikersnaam"
                  className="h-11 w-full rounded-lg bg-background border border-white/[0.1] px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="m@example.com"
                  className="h-11 w-full rounded-lg bg-background border border-white/[0.1] px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Wachtwoord
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Wachtwoord"
                    className="h-11 w-full rounded-lg bg-background border border-white/[0.1] px-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-11 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-lg shadow-[0_0_20px_var(--brand-500)/0.25] transition-all"
              >
                Maak een account aan
              </Button>

              {/* Magic Link */}
              <Button
                type="button"
                variant="outline"
                className="w-full h-11 bg-background hover:bg-white/[0.06] border-white/[0.1] text-foreground font-medium text-sm rounded-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Inloggen met Magische Link
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/[0.08]" />
              <span className="text-xs text-muted-foreground">
                Of ga door met
              </span>
              <div className="flex-1 h-px bg-white/[0.08]" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-3 gap-3">
              {/* Google */}
              <Button
                variant="outline"
                className="h-11 bg-background hover:bg-white/[0.06] border-white/[0.1]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </Button>

              {/* X / Twitter */}
              <Button
                variant="outline"
                className="h-11 bg-background hover:bg-white/[0.06] border-white/[0.1]"
              >
                <svg
                  className="w-5 h-5 text-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>

              {/* Reddit */}
              <Button
                variant="outline"
                className="h-11 bg-background hover:bg-white/[0.06] border-white/[0.1]"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="#FF4500"
                >
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </Button>
            </div>

            {/* Terms */}
            <p className="text-xs text-muted-foreground mt-6 text-center leading-relaxed">
              {"Ik ga akkoord met de "}
              <button className="text-foreground underline underline-offset-4 hover:text-brand-300 transition-colors">
                Servicevoorwaarden
              </button>
              {" en accepteer dat ik ouder dan 18 jaar ben."}
            </p>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              {"Al een account? "}
              <Link
                href="/auth/sign-in"
                className="font-semibold text-foreground underline underline-offset-4 hover:text-brand-300 transition-colors"
              >
                Inloggen
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
