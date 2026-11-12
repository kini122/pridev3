"use client"

import { useState } from "react"
import clientsData from "@/data/clients.json"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FeaturedClientsGrid() {
  const [showAll, setShowAll] = useState(false)

  // 12 premier initial enterprise alliances
  const featuredSlugs = [
    "tata-motors",
    "samsung",
    "lg",
    "bosch",
    "icici-bank",
    "pepsico",
    "itc-limited",
    "aditya-birla",
    "mahindra",
    "hp",
    "panasonic",
    "marriott-bonvoy",
  ]

  const initialClients = featuredSlugs
    .map((slug) => clientsData.find((c) => c.slug === slug))
    .filter(Boolean) as typeof clientsData

  // When showAll is true, display all 65 deduplicated brand cards
  const displayedClients = showAll ? clientsData : initialClients

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            STRATEGIC ALLIANCES
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
            Featured Client Partnerships
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
            From Fortune 500 conglomerates to household consumer powerhouses, we engineer brand worlds that command respect.
          </p>
        </div>

        {/* Editorial Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 sm:gap-x-16 sm:gap-y-16">
          {displayedClients.map((client) => (
            <div
              key={client.slug}
              className="group flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Logo Display with fine logo-hugging border & subtle ambient backdrop hue */}
                <div className="mb-6 flex items-center justify-center w-full h-24 px-6 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-[170px] w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.4))_drop-shadow(0_0_10px_rgba(255,255,255,0.06))]"
                    loading="lazy"
                  />
                </div>

                {/* Brand Name */}
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-1.5 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>

                {/* Category: subtle and below brand name */}
                <p className="text-xs font-mono text-white/40 tracking-wider mb-3">
                  {client.category}
                </p>

                {/* Description */}
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Brands Action */}
        <div className="mt-16 sm:mt-20 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 group cursor-pointer"
            >
              <span>Show More</span>
              <ChevronDown className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 group cursor-pointer"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4 text-primary group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
