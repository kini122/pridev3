"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const PILLARS = [
  {
    number: "01",
    phase: "Concept & Spatial Design",
    title: "Bespoke Creative Direction",
    description:
      "Transforming client briefs into immersive experiential concepts, spatial 3D stagecraft, and environments that captivate audiences.",
  },
  {
    number: "02",
    phase: "Infrastructure & AV",
    title: "In-House Technical Power",
    description:
      "State-of-the-art line array acoustics, intelligent lighting rigs, LED processing, and custom fabrication executed without middlemen.",
  },
  {
    number: "03",
    phase: "Show Running & Delivery",
    title: "Precision Live Execution",
    description:
      "Disciplined show calling, timeline management, vendor orchestration, and crisis-proof on-ground coordination from setup to strike.",
  },
]

export function MissionStatement() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-border/40">
      {/* Subtle ambient atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Crafting unforgettable events with creativity and precision.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Pride Eventz, we expertise in creating unforgettable moments across all event categories. Since 2014, we have partnered with enterprise brands, visionary institutions, and families to design and execute live spectacles that leave lasting impressions.
          </p>
        </div>

        {/* Refined 3-Pillar Cards with Sequential Entrance and Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.18,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/70 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top border accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />
              
              {/* Ambient corner glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header with Animated Large Architectural Number */}
                <div className="flex items-baseline justify-between mb-8 border-b border-border/50 pb-5">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.18,
                      ease: "easeOut",
                    }}
                    className="text-4xl sm:text-5xl font-mono font-light text-white/20 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 inline-block drop-shadow-sm group-hover:drop-shadow-[0_0_18px_rgba(249,115,22,0.45)]"
                  >
                    {pillar.number}
                  </motion.span>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
                    {pillar.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom subtle indicator line */}
              <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                <span className="font-mono">Pillar {pillar.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Minimal CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border/80 text-white text-sm font-semibold hover:border-primary/50 hover:bg-secondary/70 transition-all duration-300 group"
          >
            <span>Discover Our Story &amp; Capabilities</span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
