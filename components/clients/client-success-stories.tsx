"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CaseStudy {
  id: number
  clientLogo: string
  clientName: string
  title: string
  category: string
  description: string
  results: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    clientLogo: "/clients/logos/tata-motors.webp",
    clientName: "Tata Motors",
    title: "National Commercial Vehicle Unveil & Dealer Summit",
    category: "Automotive & Arena Launch",
    description:
      "Engineered an arena-scale vehicle unveil featuring synchronized intelligent lighting, automated turntable stages, panoramic LED curves, and simultaneous multi-city executive telecast.",
    results: "Hosted 3,500+ national dealers and stakeholders with 100% on-schedule stage automation.",
  },
  {
    id: 2,
    clientLogo: "/clients/logos/icici-bank.webp",
    clientName: "ICICI Bank",
    title: "Leadership Conclave & High-Security Annual Summit",
    category: "Executive Summit & MICE",
    description:
      "Executed a high-security corporate leadership summit with interactive digital presentation sets, private breakout lounges, VIP protocol management, and zero-downtime audiovisual architecture.",
    results: "Successfully hosted 2,000+ elite delegates with 99.4% post-event satisfaction rating.",
  },
  {
    id: 3,
    clientLogo: "/clients/logos/radio-mirchi.webp",
    clientName: "Radio Mirchi",
    title: "Multi-City Concert Series & Music Festival Arena",
    category: "Concert & Broadcast Production",
    description:
      "Produced high-voltage stadium music concerts with concert-grade line arrays, bespoke stage pyrotechnics, crowd barrier architecture, and multi-camera live broadcast integration.",
    results: "Reached 45,000+ live music attendees across 3 weekend stadium shows with zero safety incidents.",
  },
]

export function ClientSuccessStories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            VERIFIED CASE STUDIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
            Client Success Stories
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Measurable impact, massive engagement, and unforgettable live executions engineered across India.
          </p>
        </div>

        {/* Editorial Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 sm:gap-x-16 sm:gap-y-20">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Client Logo with fine backdrop hue & logo-hugging filter */}
                <div className="mb-6 flex items-center justify-center w-full h-24 px-6 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300">
                  <img
                    src={study.clientLogo}
                    alt={`${study.clientName} logo`}
                    className="max-h-12 max-w-[170px] w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.4))_drop-shadow(0_0_10px_rgba(255,255,255,0.06))]"
                    loading="lazy"
                  />
                </div>

                <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                  {study.category}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                  {study.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary block mb-1">
                    KEY OUTCOME
                  </span>
                  <p className="text-xs text-white/80 font-mono">
                    {study.results}
                  </p>
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-white hover:text-primary transition-colors group/link"
                >
                  <span>Explore Production Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
