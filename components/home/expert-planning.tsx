"use client"

import { Sparkles, Users, Zap, Clock } from "lucide-react"

const features = [
  {
    number: "01",
    title: "Bespoke Experiential Scenography",
    description: "Custom-designed stage architectures and scenic environments that reflect your brand identity with precision.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Complete Support & Guidance",
    description: "Dedicated team available throughout your event planning journey to oversee every single moment.",
    icon: Users,
  },
  {
    number: "03",
    title: "Tier-1 Technical Infrastructure",
    description: "State-of-the-art concert-grade line arrays, calibrated LED matrices, intelligent lighting, and fail-safe power.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Round-the-Clock Operational Readiness",
    description: "24/7 on-ground troubleshooting, agile stage modifications, and crisis management for mission-critical events.",
    icon: Clock,
  },
]

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0f18591e64d74651873c54c06db9c3d7",
    alt: "State of the art stage and audio setup",
    caption: "AV & Sound Engineering"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F9088b880cfb84b6987b31afac6b38ba2?format=webp",
    alt: "Thematic floral and stage decor",
    caption: "Thematic Décor"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0204cca0c7114c80b24a5817adb9416b",
    alt: "Architectural event lighting",
    caption: "Intelligent Lighting"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3",
    alt: "Concert crowd and stage energy",
    caption: "Crowd Experience"
  },
]

export function ExpertPlanning() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Features */}
          <div className="lg:col-span-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              Institutional Rigor
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05] mb-8">
              Elevate Your Events With Production Rigor
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-10 leading-relaxed font-light">
              We engineer seamless atmospheres where technical perfection meets artistic flair. Every detail is structured to ensure zero friction and maximum emotional resonance.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex gap-4 sm:gap-5 p-5 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-white/30 hover:bg-[#121216] transition-all duration-300 group"
                  >
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-primary">{feature.number}</span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0c] group shadow-2xl ${
                  i % 2 === 1 ? "mt-6 sm:mt-10" : ""
                }`}
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono font-semibold tracking-wider uppercase text-white/90">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
