"use client"

import Link from "next/link"
import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react"

export function AboutIntroduction() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Composition */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card group">
                <img
                  src="/about/introduction/luxury-event-party-celebration.jpg"
                  alt="Luxury party celebration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card group">
                <img
                  src="/about/team/corporate-event-exhibition.jpg"
                  alt="Corporate event exhibition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card group">
                <img
                  src="/about/introduction/elegant-event-venue-decoration.jpg"
                  alt="Elegant event venue decoration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 rounded-2xl bg-card/60 border border-border/60 flex flex-col justify-center text-center">
                <span className="text-3xl font-extrabold text-primary mb-1">15+</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Years of Mastery</span>
              </div>
            </div>
          </div>

          {/* Right Column - Editorial Story */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
              Our Story &amp; Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              An innovative group dedicated to crafting monumental event experiences.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Pride Eventz, we expertise in creating unforgettable moments across all event categories. From intimate corporate gatherings to grand social celebrations, our comprehensive services include event planning, creative decorations, thematic design, and seamless execution. Founded in 2014 in Kerala, we transform your vision into reality with meticulous attention to detail.
              </p>
              <p>
                Our commitment goes beyond logistics. We believe every event tells a story, and we&apos;re dedicated to creating stunning, organized experiences that leave lasting impressions on your guests. With over a decade of expertise, we manage every facet of production with zero delegation risk.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card/40 border border-border/40">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm text-foreground mb-1">Precision First</h3>
                <p className="text-xs text-muted-foreground">Flawless scheduling and fail-safe redundancy.</p>
              </div>
              <div className="p-4 rounded-xl bg-card/40 border border-border/40">
                <Award className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm text-foreground mb-1">Scenic Mastery</h3>
                <p className="text-xs text-muted-foreground">Original 3D scenography and thematic designs.</p>
              </div>
              <div className="p-4 rounded-xl bg-card/40 border border-border/40">
                <Users className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm text-foreground mb-1">Dedicated Lead</h3>
                <p className="text-xs text-muted-foreground">Single-point senior show directorship.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-bold px-7 py-3.5 text-sm hover:bg-orange-400 transition-colors shadow-lg"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 text-foreground font-semibold px-6 py-3.5 text-sm hover:bg-white/5 transition-colors"
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
