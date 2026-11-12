"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ClientsCTA() {
  return (
    <section className="relative py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden">
      {/* Ambient warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Monospace Overline */}
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          JOIN OUR CLIENT NETWORK
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
          Ready to Elevate Your <br />
          <span className="text-white/40">Brand&apos;s Next Event?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Connect directly with our senior corporate production desk to explore turnkey event management and marquee brand activations across India.
        </p>

        {/* Pill Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-primary/20"
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-9 py-4 bg-white/5 border border-white/15 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Explore Client Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
