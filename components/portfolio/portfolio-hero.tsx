"use client"

import { useEffect, useState } from "react"

export function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/portfolio/hero/luxury-event-party-concert-pink-purple-lighting-cr.jpg")',
        }}
      />
      {/* Dark overlay & cinematic gradient */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
          Portfolio
        </h1>
        <p className="text-lg sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Where every detail counts, and every experience makes history.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className=" text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
