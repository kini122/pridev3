"use client"

import Link from "next/link"
import { Quote, ArrowUpRight, Phone } from "lucide-react"

export function TestimonialQuote() {
  return (
    <section className="py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary mx-auto mb-10">
          <Quote className="w-5 h-5" />
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-12 leading-snug [word-spacing:0.18em] tracking-[0.02em]">
          &ldquo;Our commitment goes beyond logistics. Every event tells a story, and our mission is to ensure that story is told with unmistakable grandeur and precision.&rdquo;
        </blockquote>

        {/* CTA directly below quote */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-black font-bold px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919846596349"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 98465 96349</span>
          </a>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm font-bold text-white uppercase tracking-wider">Leadership Directorate</p>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mt-1">Pride Eventz Group</p>
        </div>
      </div>
    </section>
  )
}
