"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const WORK_ITEMS = [
  {
    id: "pidilite",
    location: "KOCHI, KERALA",
    client: "PIDILITE: NATIONAL BRANDS SHOWCASE",
    category: "Corporate Production",
    image: "/corporate-presentation-pidilite-brands-showcase.jpg",
    href: "/portfolio",
  },
  {
    id: "hero-motocorp",
    location: "MUMBAI, MAHARASHTRA",
    client: "HERO MOTOCORP: ANNUAL LEADERSHIP SUMMIT",
    category: "Conferences & MICE",
    image: "/hero-motocorp-annual-conference-stage-setup.jpg",
    href: "/portfolio",
  },
  {
    id: "wedding",
    location: "KOVALAM, KERALA",
    client: "ROYAL COASTAL: DESTINATION WEDDING",
    category: "Luxury Destination Weddings",
    image: "/elegant-wedding-stage-decoration.jpg",
    href: "/portfolio",
  },
  {
    id: "zee-concert",
    location: "CALICUT, KERALA",
    client: "ZEE ENTERTAINMENT: STADIUM CELEBRITY CONCERT",
    category: "Concert Audio & Lighting",
    image: "/live-performance-with-professional-lighting.jpg",
    href: "/portfolio",
  },
  {
    id: "atomfrost",
    location: "BENGALURU, KARNATAKA",
    client: "ATOMFROST: TECH EXPO & CUSTOM PAVILION",
    category: "3D Exhibition Stalls",
    image: "/exhibition-trade-show-atomfrost.jpg",
    href: "/portfolio",
  },
  {
    id: "sunfeast",
    location: "PAN-KERALA",
    client: "SUNFEAST: STATEWIDE RETAIL ACTIVATION",
    category: "Experiential Roadshow",
    image: "/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
    href: "/portfolio",
  },
]

export function TMWork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative w-full bg-[#121214] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header (Exact Total Management 'Our Work' Header) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              Our Work
            </h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Scroll Navigation Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous work"
                className="w-10 h-10 rounded-full border border-white/20 bg-card/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next work"
                className="w-10 h-10 rounded-full border border-white/20 bg-card/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/portfolio"
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-primary transition-colors border-b border-white/40 pb-1 hover:border-primary"
            >
              View All Work →
            </Link>
          </div>
        </div>

        {/* Horizontal Card Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {WORK_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex-none w-[280px] sm:w-[340px] md:w-[380px] h-[440px] sm:h-[500px] md:h-[540px] rounded-2xl overflow-hidden bg-card border border-white/10 snap-start block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url("${item.image}")` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 group-hover:via-black/20 transition-opacity duration-300" />

              {/* Top Location Tag */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.18em] text-white/80 uppercase">
                  {item.location}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-black/60 border border-white/15 text-white/70">
                  {item.category}
                </span>
              </div>

              {/* Bottom Client / Event Name */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.client}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Case Study</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
