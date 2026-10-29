import React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface CustomerLogo {
  src: string
  alt: string
  height: number
}

interface CustomersSectionProps {
  customers: CustomerLogo[]
  className?: string
}

export function CustomersSection({ customers = [], className }: CustomersSectionProps) {
  return (
    <div className={`w-full ${className ?? ""}`}>
      {/* Logos Grid (Obsidian Glass Tiles) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 items-center">
        {customers.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 h-28 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-white/30 hover:bg-[#121216] transition-all duration-300 hover:-translate-y-1 group shadow-lg"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 w-auto object-contain brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300 dark:invert"
            />
          </div>
        ))}
      </div>

      {/* Explore Clients Link */}
      <div className="mt-14 text-center">
        <Link
          href="/clients"
          className="inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 group"
        >
          <span>View All Client Case Studies &amp; Partners</span>
          <ArrowUpRight className="w-4 h-4 text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

