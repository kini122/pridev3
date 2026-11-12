"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Building2, Heart, Grid3x3 } from "lucide-react"

const services = [
  {
    icon: Building2,
    name: "Corporate Events",
    description: "Professional conferences, product launches, and business gatherings",
    href: "/services/corporate-events",
  },
  {
    icon: Grid3x3,
    name: "Exhibitions",
    description: "Trade shows and brand showcases with creative booth designs",
    href: "/services/exhibitions",
  },
  {
    icon: Heart,
    name: "Destination Weddings",
    description: "Celebrations and gatherings for memorable moments",
    href: "/services/destination-weddings",
  },
]

export function RelatedServices() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Explore Our Core Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
            Comprehensive production architectures tailored to corporate, social, and entertainment formats.
          </p>
        </div>

        {/* Panel-less Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="pt-8 border-t border-white/10 group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.14em] mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary hover:text-white transition-colors"
                  >
                    <span>Explore Discipline</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
