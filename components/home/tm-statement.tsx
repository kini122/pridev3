"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const CLIENT_LOGOS = [
  { name: "Pidilite", logo: "/corporate-presentation-pidilite-brands-showcase.jpg" },
  { name: "Hero MotoCorp", logo: "/hero-motocorp-annual-conference-stage-setup.jpg" },
  { name: "ICICI Bank", logo: "/clients/hero/concert-stage-lighting-event.jpg" },
  { name: "Zee TV", logo: "/live-performance-with-professional-lighting.jpg" },
  { name: "Radio Mirchi", logo: "/tech-brand-activation-event.jpg" },
]

export function TMStatement() {
  return (
    <section className="relative w-full bg-[#E5E3DC] text-neutral-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto text-center">
        {/* Centered Agency Statement (Exact Total Management Editorial Aesthetic) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.25] tracking-tight max-w-4xl mx-auto">
          Pride Event Management Group. We’re more than an agency. <br className="hidden sm:inline" />
          <span className="font-semibold text-black">We’re a full-service live experience solution.</span>
        </h2>

        <p className="mt-8 text-neutral-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          From high-stakes Fortune 500 summits and state-level exhibitions to stadium concerts and luxury destination weddings across South India, our end-to-end capabilities eliminate logistical friction.
        </p>

        {/* Minimal Link */}
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-widest text-neutral-950 hover:text-orange-600 transition-colors border-b-2 border-neutral-900 pb-1 hover:border-orange-600"
          >
            <span>Learn About Our Model</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Institutional Metrics Strip */}
        <div className="mt-20 pt-12 border-t border-neutral-300/80 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">15+</div>
            <div className="text-xs uppercase tracking-wider text-neutral-600 mt-1 font-medium">Years of Staging Excellence</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">500+</div>
            <div className="text-xs uppercase tracking-wider text-neutral-600 mt-1 font-medium">Landmark Events Delivered</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">100%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-600 mt-1 font-medium">In-House Production &amp; AV</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">Kerala</div>
            <div className="text-xs uppercase tracking-wider text-neutral-600 mt-1 font-medium">&amp; Pan-South India Reach</div>
          </div>
        </div>
      </div>
    </section>
  )
}
