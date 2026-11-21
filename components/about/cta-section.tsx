"use client"

import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-22 lg:py-26 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Partner With Pride Eventz
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] mb-6">
          Ready to Create Your Next Unforgettable Event?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          From high-stakes enterprise summits to unforgettable luxury weddings, our production crew is ready to bring your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-black font-bold px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group w-full sm:w-auto"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+919895690349"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 98956 90349</span>
          </a>
        </div>
      </div>
    </section>
  )
}
