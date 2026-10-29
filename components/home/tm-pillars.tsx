"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const DIVISIONS = [
  {
    id: "events",
    division: "PRIDE EVENTS",
    title: "Corporate Summits & Grand Celebrations",
    subtitle: "Turnkey production for high-stakes enterprise conventions, awards ceremonies, and luxury destination weddings.",
    image: "/corporate-presentation-pidilite-brands-showcase.jpg",
    href: "/services/corporate-events",
  },
  {
    id: "studio",
    division: "PRIDE STUDIO",
    title: "3D Spatial Design & Brand Activations",
    subtitle: "Immersive experiential environments, mall kiosks, custom exhibition pavilions, and thematic concept design.",
    image: "/tech-brand-activation-event.jpg",
    href: "/services/brand-activation",
  },
  {
    id: "production",
    division: "PRIDE PRODUCTION",
    title: "Concert Audio, Intelligent Lighting & Rigging",
    subtitle: "Concert-grade line array sound, intelligent DMX lighting, LED video matrices, and in-house steel fabrication.",
    image: "/live-performance-with-professional-lighting.jpg",
    href: "/services/concerts",
  },
]

export function TMPillars() {
  return (
    <section className="relative w-full bg-black py-4 px-2 sm:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4">
        {DIVISIONS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative h-[480px] sm:h-[580px] lg:h-[680px] w-full overflow-hidden rounded-xl bg-card border border-white/10 block select-none"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url("${item.image}")` }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 transition-opacity duration-300 group-hover:opacity-85" />

            {/* Top Division Tag */}
            <div className="absolute top-6 left-6 z-10 flex items-center justify-between right-6">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/90 uppercase border-b border-primary/60 pb-1">
                {item.division}
              </span>
              <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-2 max-w-md">
                {item.subtitle}
              </p>

              {/* Action Link */}
              <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90 group-hover:text-primary transition-colors">
                <span>Explore {item.division.replace("PRIDE ", "")}</span>
                <span className="text-primary font-bold">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
