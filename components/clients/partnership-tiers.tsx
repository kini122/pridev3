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
    features: ["Dedicated executive show-caller", "Priority stage rigging & AV reserve", "SLA-backed timeline delivery"],
    brands: ["Pidilite", "ICICI Bank", "Zee Network", "Radio Mirchi"],
  },
  {
    id: 2,
    name: "Brand Activation Alliances",
    icon: Award,
    scope: "Seasonal Product Launches & BTL",
    features: ["Custom 3D experiential sets", "Regional fabrication supervision", "Direct ground-level consumer engagement"],
    brands: ["Fevikwik", "Zespri", "Boroline", "Thomas Cook"],
  },
  {
    id: 3,
    name: "Bespoke Event Partners",
    icon: ShieldCheck,
    scope: "Curated Single-City Summits & Galas",
    features: ["Turnkey stage & acoustic systems", "Full municipal & safety compliance", "Comprehensive post-event media"],
    brands: ["Fast-growing regional enterprises", "Industry associations", "Institutional forums"],
  },
]

export function PartnershipTiers() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Engagement Models
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">
            Our Enterprise Partnership Frameworks
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tailored engagement tiers designed for corporate retainers, seasonal launch campaigns, and standalone marquee productions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.id}
                className="group p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">{tier.scope}</p>

                  <div className="space-y-2.5 mb-8">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-2">Representative Accounts:</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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
