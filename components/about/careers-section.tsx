"use client"

import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

export function CareersSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            CAREERS &amp; CULTURE
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-4">
            Join Our Crew. <br />
            <span className="text-white/40">Shape Live Spectacles.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
            We are always seeking passionate producers, creative visualizers, and disciplined technicians who thrive under the lights. Step into an environment where big imaginations become unforgettable live realities.
          </p>
        </div>

        {/* 3 Pillars of our culture - clean unboxed layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 py-12 mb-14">
          <div className="py-6 md:py-0 md:px-8">
            <h3 className="text-lg font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2">
              Creative Autonomy
            </h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Every production offers genuine creative freedom. We trust our creators to take risks, innovate on-stage, and set new industry benchmarks.
            </p>
          </div>

          <div className="py-6 md:py-0 md:px-8">
            <h3 className="text-lg font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2">
              Technical Excellence
            </h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Collaborate directly with top-tier show callers, lighting designers, and acousticians managing high-stakes live environments.
            </p>
          </div>

          <div className="py-6 md:py-0 md:px-8">
            <h3 className="text-lg font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2">
              Pan-India Impact
            </h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              From stadium concerts and Fortune 500 summits to royal destination weddings, produce spectacles that captivate tens of thousands.
            </p>
          </div>
        </div>

        {/* Action Call */}
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
            ALWAYS OPEN TO EXCEPTIONAL TALENT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:careers@prideeventz.in"
              className="inline-flex items-center gap-3 rounded-full px-9 py-4 bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl"
            >
              <Mail className="w-4 h-4" />
              <span>Send Your Portfolio / CV</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 bg-white/5 border border-white/15 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span>Connect With Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

