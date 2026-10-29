"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export function TailoredExperience() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 shadow-xl group">
            <img
              src="/about/tailored/balloon-decoration-setup-black-gold.jpg"
              alt="Pride Eventz tailored event atmosphere"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-xs text-white/90">
              <span className="font-semibold text-primary">Custom Atmosphere:</span> Bespoke stage and floral scenography for milestone celebrations.
            </div>
          </div>

          {/* Right Column - Text Card */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 shadow-xl flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Bespoke Execution
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6 leading-tight">
              Tailored, seamless event experiences.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                We understand that no two events share the same cadence. Whether designing an intimate private celebration or an all-hands corporate convention, our solutions are engineered ground-up around your vision, spatial requirements, and audience demographic.
              </p>
              <p>
                From structural safety clearances to bespoke lighting cues, we leave nothing to chance. Your success is our reputation.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>End-to-end dedicated show directorship</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Transparent billing and itemized milestone schedules</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>24/7 on-site technical crisis intervention</span>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-bold px-7 py-3.5 text-sm hover:bg-orange-400 transition-colors shadow-lg"
              >
                <span>Request Tailored Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
