"use client"

import { CustomersSection } from "@/components/ui/customers-section"
import clientsData from "@/data/clients.json"

export function ClientLogos() {
  // Select top 24 diverse, non-repeating enterprise clients for the homepage
  const selectedSlugs = [
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
    "fevicol",
    "kansai-nerolac",
    "cars24",
    "ather-energy",
    "jio-bp",
    "indianoil",
    "hsbc",
    "cipla",
    "dr-reddys",
    "loreal",
    "airasia",
    "raymond",
  ]

  const customers = selectedSlugs
    .map((slug) => clientsData.find((c) => c.slug === slug))
    .filter(Boolean)
    .map((c) => ({
      src: c!.logo,
      alt: c!.name,
      category: c!.category,
    }))

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              Institutional Trust
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Trusted By Industry Leaders
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
            We partner with Fortune 500 corporations, marquee consumer brands, and national institutions for their high-stakes productions.
          </p>
        </div>
        <CustomersSection customers={customers} />
      </div>
    </section>
  )
}
