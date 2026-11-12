"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutIntroduction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Composition & Vertical Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0d0d10] group">
                <img
                  src="/about/introduction/luxury-event-party-celebration.jpg"
                  alt="Luxury party celebration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0d0d10] group">
                <img
                  src="/about/team/corporate-event-exhibition.jpg"
                  alt="Corporate event exhibition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6 flex flex-col justify-between">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0d0d10] group">
                <img
                  src="/about/introduction/elegant-event-venue-decoration.jpg"
                  alt="Elegant event venue decoration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3 Metrics Stacked Vertically - Minimal Unboxed Presentation */}
              <div className="space-y-4 pt-2">
                <div className="border-t border-white/10 pt-3">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                    15+
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-white mt-0.5">
                    Years of Mastery
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                    2100+
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-white mt-0.5">
                    Projects Executed
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                    100%
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-white mt-0.5">
                    In-House Staging Power
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Editorial Story */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary">
              OUR STORY &amp; PHILOSOPHY
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em]">
              An innovative group dedicated to crafting monumental event experiences.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
              <p>
                At Pride Eventz, we expertise in creating unforgettable moments across all event categories. From intimate corporate gatherings to grand social celebrations, our comprehensive services include event planning, creative decorations, thematic design, and seamless execution. Founded in 2014 in Kerala, we transform your vision into reality with meticulous attention to detail.
              </p>
              <p>
                Our commitment goes beyond logistics. We believe every event tells a story, and we&apos;re dedicated to creating stunning, organized experiences that leave lasting impressions on your guests. With over a decade of expertise, we manage every facet of production with zero delegation risk.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-black font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              >
                View Past Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
