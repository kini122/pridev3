"use client"

import { ChevronDown } from "lucide-react"

export function ClientsHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-cover bg-center">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/clients/hero/concert-stage-lighting-event.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
          Trusted by India&apos;s Foremost Brands
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Delivering turnkey event management, brand activations, and large-scale summits with relentless consistency and poise.
        </p>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="p-2 rounded-full bg-card/40 border border-white/10 text-primary">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
