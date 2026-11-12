"use client"

import React from "react"
import { Users, Heart, ShoppingCart, Globe, Activity, Truck, GraduationCap, Trophy, Sparkles, Building } from "lucide-react"

interface Industry {
  id: number
  name: string
  icon: React.ElementType
}

const industries: Industry[] = [
  { id: 1, name: "Corporate Summits", icon: Users },
  { id: 2, name: "Destination Weddings", icon: Heart },
  { id: 3, name: "Expos & Trade Shows", icon: ShoppingCart },
  { id: 4, name: "Concerts & Live Arenas", icon: Globe },
  { id: 5, name: "Brand & BTL Activations", icon: Activity },
  { id: 6, name: "Product Unveilings", icon: Truck },
  { id: 7, name: "Conferences & MICE", icon: GraduationCap },
  { id: 8, name: "Gala & Award Ceremonies", icon: Trophy },
  { id: 9, name: "Cultural & Public Festivals", icon: Sparkles },
  { id: 10, name: "Government & PSU Summits", icon: Building },
]

export function IndustrySectors() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Monospace Overline */}
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
          CROSS-SECTOR MASTERY
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
          Event Sectors We Specialize In
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Tailored production architectures, safety standards, and experiential designs across major commercial sectors.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.id}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0d0d10] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors leading-snug">
                  {industry.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
