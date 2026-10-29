"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface CaseStudy {
  id: number
  clientLogo: string
  title: string
  description: string
  results: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    clientLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F43685caaf33f477d8727c7c101d94598?format=webp&width=800",
    title: "Radio Mirchi Launch Event",
    description:
      "Organized a massive launch event for Radio Mirchi's new FM station with live performances and brand activations.",
    results: "Reached 50,000+ attendees with 200% social media engagement increase",
  },
  {
    id: 2,
    clientLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F8d0796d75587491cb48a4aef8f271f8a?format=webp&width=800",
    title: "ICICI Bank Corporate Summit",
    description:
      "Executed a large-scale corporate summit for ICICI Bank with keynote speakers and networking sessions.",
    results: "Successfully hosted 2,000+ participants with 95% satisfaction rating",
  },
  {
    id: 3,
    clientLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff973d20f7dc04da191c48d574a351db0?format=webp&width=800",
    title: "Zee TV Awards Ceremony",
    description: "Produced a glamorous awards ceremony for Zee TV with celebrity performances and live streaming.",
    results: "Garnered 5M+ TV viewership and trending on social media for 3 days",
  },
]

export function ClientSuccessStories() {
    const containerRef = useRef<HTMLDivElement>(null)

  

  return (
    <section className="py-24 px-4 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Measurable impact, massive engagement, and unforgettable live executions across India.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              data-story-id={study.id}
              className="bg-card p-8 rounded-xl border border-border/70 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="client-logo mb-6 p-4 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center h-20">
                  <img src={study.clientLogo} alt={`${study.title} logo`} className="max-h-12 w-auto object-contain dark:invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{study.description}</p>
              </div>
              <div>
                <div className="pt-4 border-t border-border/50 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">Impact</span>
                  <p className="text-sm font-medium text-foreground">{study.results}</p>
                </div>
                <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                  Explore Related Projects →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
