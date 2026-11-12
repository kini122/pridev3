"use client"

import { Crown, ShieldCheck, Award } from "lucide-react"

interface Tier {
  id: number
  name: string
  icon: React.ElementType
  scope: string
  features: string[]
  brands: string[]
}

const tiers: Tier[] = [
  {
    id: 1,
    name: "Enterprise Key Accounts",
    icon: Crown,
    scope: "Annual Turnkey & Multi-City Mandates",
    features: [
      "Dedicated executive show-caller & production director",
      "Priority stage rigging, German hanger & AV reserve",
      "SLA-backed timeline delivery with 24/7 on-site backup",
    ],
    brands: ["Pidilite", "ICICI Bank", "Zee Network", "Radio Mirchi"],
  },
  {
    id: 2,
    name: "Brand Activation Alliances",
    icon: Award,
    scope: "Seasonal Product Launches & BTL",
    features: [
      "Custom 3D experiential sets & roadshow pavilions",
      "Regional fabrication supervision across tier-1 & tier-2 cities",
      "Direct ground-level consumer engagement & lead generation",
    ],
    brands: ["Fevikwik", "Zespri", "Boroline", "Thomas Cook"],
  },
  {
    id: 3,
    name: "Bespoke Event Partners",
    icon: ShieldCheck,
    scope: "Curated Single-City Summits & Galas",
    features: [
      "Turnkey stage & acoustic systems tailored to venue constraints",
      "Full municipal, fire & local police safety compliance",
      "Comprehensive 4K multi-cam recording & post-event media",
    ],
    brands: ["Fast-growing regional enterprises", "Industry associations", "Institutional forums"],
  },
]

export function PartnershipTiers() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            ENGAGEMENT MODELS
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
            Our Enterprise Partnership Frameworks
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Tailored engagement tiers designed for corporate retainers, seasonal launch campaigns, and standalone marquee productions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.id}
                className="group p-8 sm:p-10 rounded-2xl bg-[#0d0d10] border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">{tier.name}</h3>
                  <p className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.2em] mb-6">{tier.scope}</p>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mb-2">REPRESENTATIVE ACCOUNTS</p>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {tier.brands.join(" • ")}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
