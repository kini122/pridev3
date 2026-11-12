"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function TeamStatement() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Editorial Statement */}
          <div className="lg:col-span-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              CREW &amp; ETHOS
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] mb-8">
              A dynamic crew turning bold visions into reality.
            </h2>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 font-light max-w-xl">
              Our multidisciplinary team of seasoned show callers, stage architects, and logistics coordinators brings relentless creativity and calm precision to every brief. We operate as an agile extension of your brand to ensure memorable, friction-free events.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-primary text-black hover:bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group"
            >
              <span>Discover Our Story &amp; Team</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] bg-[#0d0d10]">
              <img
                src="/corporate/hero/corporate-event-presentation-stage-audience-pink-l.jpg"
                alt="Pride Eventz Arena Stage Production"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] mt-8 sm:mt-12 bg-[#0d0d10]">
              <img
                src="/portfolio/grid/corporate-event-with-crowd-stage-lighting.jpg"
                alt="Pride Eventz Live Spectacle Execution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
