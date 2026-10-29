"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/60 border-t border-border/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Partner With Pride Eventz
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          Ready to Create Your Next Unforgettable Event?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          From high-stakes enterprise summits to unforgettable luxury weddings, our production director is ready to bring your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-bold px-8 py-4 text-base hover:bg-orange-400 transition-all shadow-xl hover:shadow-primary/20 w-full sm:w-auto"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+919846596349"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-card border border-border/80 text-foreground font-semibold px-7 py-4 text-base hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>Call +91 9846596349</span>
          </a>
        </div>
      </div>
    </section>
  )
}
