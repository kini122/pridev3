"use client"

import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Ghost Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="text-[22vw] font-black uppercase tracking-tighter text-white">
          CREATE
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Seamless Event Production
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] mb-6">
          Everything You Need To Captivate Your Audience.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          From stage conception to the final applause, let us orchestrate an unforgettable experience that elevates your brand and delights your guests.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-black font-bold px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group w-full sm:w-auto"
          >
            <span>Plan Your Event Today</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+919846596349"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 98465 96349</span>
          </a>
        </div>
      </div>
    </section>
  )
}
