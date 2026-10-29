"use client"

import { Quote } from "lucide-react"

export function TestimonialQuote() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-8 shadow-sm">
          <Quote className="w-6 h-6" />
        </div>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 leading-snug tracking-tight">
          &ldquo;Our commitment goes beyond logistics. Every event tells a story, and our mission is to ensure that story is told with unmistakable grandeur and precision.&rdquo;
        </blockquote>
        <div className="flex flex-col items-center">
          <p className="text-base font-bold text-foreground">Leadership Directorate</p>
          <p className="text-xs uppercase tracking-wider text-primary font-semibold mt-1">Pride Eventz Group</p>
        </div>
      </div>
    </section>
  )
}
