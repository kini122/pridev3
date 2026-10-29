"use client"

import { Lightbulb, Target, Zap, ShieldCheck } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Artistic Innovation",
    tagline: "Bold Conceptual Design",
    description: "We refuse templated thinking. Every production is built around an original scenographic narrative tailored to your specific audience.",
  },
  {
    icon: Target,
    title: "Surgical Precision",
    tagline: "Absolute Operational Control",
    description: "Every minute on our cue-sheets is calibrated. From technical run-throughs to live staging, nothing is left to chance.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    tagline: "Concert-Grade Infrastructure",
    description: "We deploy industry-standard line arrays, high-resolution calibrated LED walls, and intelligent lighting rigs with full redundancy.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional Trust",
    tagline: "Pan-India Compliance",
    description: "Full statutory compliance, police and municipal permissions, insurance coverage, and seasoned crisis management.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">Core Pillars</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">Values That Drive Every Production</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">The guiding principles underpinning over a decade of benchmark event execution.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="group p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
                    {value.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
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
