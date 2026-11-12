import React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface CustomerLogo {
  src: string
  alt: string
  category?: string
}

interface CustomersSectionProps {
  customers: CustomerLogo[]
  className?: string
}

export function CustomersSection({ customers = [], className }: CustomersSectionProps) {
  return (
    <div className={`w-full ${className ?? ""}`}>
      {/* Logos Grid with fine logo-hugging hue and subtle ambient separation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center">
        {customers.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex items-center justify-center w-full h-20 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all duration-300 group"
          >
            <img
              src={logo.src}
              alt={`${logo.alt} logo`}
              className="max-h-10 max-w-[140px] w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.4))_drop-shadow(0_0_8px_rgba(255,255,255,0.06))]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Explore Clients Link */}
      <div className="mt-14 text-center">
        <Link
          href="/clients"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group"
        >
          <span>View All Clients</span>
          <ArrowUpRight className="w-4 h-4 text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
