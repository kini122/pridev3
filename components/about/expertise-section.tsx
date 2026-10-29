"use client"

import { CheckCircle2, ShieldCheck, Sparkles, Sliders, Layers } from "lucide-react"

const capabilities = [
  {
    icon: Layers,
    title: "Stage Architecture & Scenography",
    metric: "100% In-House 3D Renders",
    description: "Custom stage fabrication, thematic backdrops, and immersive environmental branding tailored to venue dimensions.",
  },
  {
    icon: Sliders,
    title: "Acoustic Engineering & Light Shows",
    metric: "Concert-Grade Rigs",
    description: "Multi-point line array acoustics, intelligent moving heads, laser programming, and live broadcast audio mixing.",
  },
  {
    icon: ShieldCheck,
    title: "Operational & Statutory Compliance",
    metric: "Zero-Incident Safety Standard",
    description: "Local government liaison, crowd safety zoning, fire & electrical permits, and certified on-site medical protocols.",
  },
  {
    icon: Sparkles,
    title: "Experiential Ground Activations",
    metric: "Tier 1 to Tier 3 Reach",
    description: "High-impact consumer engagement roadshows, promotional setups, and interactive product demo pavilions.",
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Technical Competence
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6 leading-tight">
              Institutional Expertise in Live Event Production
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Over fifteen years of high-pressure live show execution have honed our capabilities into an exact science. We eliminate the guesswork from live productions.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our multidisciplinary engineers, show callers, and project managers work under synchronized run-sheets to ensure your event runs smoothly from the first soundcheck to the final applause.
            </p>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-md group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                      {item.metric}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
