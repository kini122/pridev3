"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function TeamStatement() {
  return (
    <section className="py-24 sm:py-32 bg-[#ECEAE5] text-[#111111] relative overflow-hidden">
      {/* Subtle Ghost Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-[0.035] leading-none">
        <span className="text-[20vw] font-black uppercase tracking-tighter text-black">
          CREW
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Editorial Statement */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">
                02 / CREW &amp; ETHOS
              </span>
              <span className="h-[1px] w-12 bg-black/20" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] uppercase leading-[1.05] mb-8">
              A dynamic crew turning bold visions into reality.
            </h2>

            <p className="text-base sm:text-lg text-[#333333] leading-relaxed mb-10 font-normal max-w-xl">
              Our multidisciplinary team of seasoned show callers, stage architects, and logistics coordinators brings relentless creativity and calm precision to every brief. We operate as an agile extension of your brand to ensure memorable, friction-free events.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-black text-white hover:bg-primary hover:text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group"
            >
              <span>Discover Our Story &amp; Team</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Images with Total Management Framing */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl group aspect-[4/5] bg-neutral-200">
              <img
                src="/home/team/santa-party-decoration-event.jpg"
                alt="Pride Eventz Event Setup and Atmosphere"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl group aspect-[4/5] mt-8 sm:mt-12 bg-neutral-200">
              <img
                src="/home/team/exhibition-trade-show-atomfrost.jpg"
                alt="Pride Eventz Stagecraft and Production"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
