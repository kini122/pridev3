"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function ClientsCTA() {
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/60 border-t border-border/40 overflow-hidden">
      {/* Background warm glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Join Our Client Network
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          Ready to Elevate Your Brand&apos;s Next Event?
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Connect directly with our senior corporate production desk to explore turnkey event management and brand activations across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-orange-400 transition-all shadow-xl hover:shadow-primary/20 text-base"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-card border border-border/80 text-foreground font-semibold rounded-xl hover:bg-white/5 transition-colors text-base"
          >
            Explore Client Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
