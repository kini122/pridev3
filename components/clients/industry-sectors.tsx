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
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Cross-Sector Mastery
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">
          Event Sectors We Specialize In
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Tailored production architectures, safety standards, and experiential designs across major commercial sectors.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.id}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card/70 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">
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
