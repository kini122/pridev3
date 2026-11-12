"use client"

import { useEffect, useRef, useState } from "react"
import clientsData from "@/data/clients.json"

export function ClientLogosCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Use the full roster of 65 unique clients
  const logos = clientsData

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 0.75

    const animate = () => {
      if (!isHovered) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0
        }
        container.scrollLeft = scrollPosition
      }
    }

    const interval = setInterval(animate, 25)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-16 sm:py-24 px-4 bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            PAN-INDIA CORPORATE &amp; BRAND ALLIANCES ({logos.length}+ CLIENTS)
          </span>
        </div>

        {/* Continuous marquee with fine logo-hugging hue */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-hide py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Duplicate set for seamless continuous circular marquee */}
          {[...logos, ...logos].map((client, index) => (
            <div
              key={`${client.slug}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-20 w-40 sm:w-48 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-10 max-w-[140px] w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.4))_drop-shadow(0_0_8px_rgba(255,255,255,0.06))]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
