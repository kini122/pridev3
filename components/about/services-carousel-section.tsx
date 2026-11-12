"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

interface ServiceItem {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  href: string
  image: string
}

const allServices: ServiceItem[] = [
  {
    id: "corporate",
    number: "01",
    title: "Corporate Summits & Launches",
    subtitle: "High-Stakes Productions",
    description: "Townhalls, annual general meetings, and milestone product unveilings executed with business-class precision.",
    href: "/services/corporate-events",
    image: "/tech-product-launch-event-stage-lighting.jpg",
  },
  {
    id: "weddings",
    number: "02",
    title: "Destination Weddings",
    subtitle: "Turnkey Matrimonial Arenas",
    description: "Bespoke matrimonial celebrations across Kerala, Goa, and Rajasthan with complete guest hospitality.",
    href: "/services/destination-weddings",
    image: "/elegant-wedding-stage-decoration.jpg",
  },
  {
    id: "concerts",
    number: "03",
    title: "Live Concerts & Arena Festivals",
    subtitle: "Large-Scale Crowd Acoustics",
    description: "Concert-grade line arrays, intelligent moving heads, artist coordination, and crowd safety zoning.",
    href: "/services/concerts",
    image: "/concert-event-stage-with-crowd-pink-lighting.jpg",
  },
  {
    id: "mice",
    number: "04",
    title: "Conferences & MICE",
    subtitle: "Pan-India Symposiums",
    description: "Multi-track academic and industrial conventions, simultaneous translation, and VIP delegate protocols.",
    href: "/services/conferences-mice",
    image: "/hero-motocorp-annual-conference-stage-setup.jpg",
  },
  {
    id: "exhibitions",
    number: "05",
    title: "Exhibitions & Trade Shows",
    subtitle: "Custom Pavilion Architecture",
    description: "Turnkey German hanger erections, bespoke 3D stall fabrications, and interactive visitor corridors.",
    href: "/services/exhibitions",
    image: "/busy-exhibition-hall.jpg",
  },
  {
    id: "activation",
    number: "06",
    title: "Brand Activations & BTL",
    subtitle: "Experiential Ground Engagement",
    description: "High-impact mall atrium installations, retail pop-ups, and interactive consumer touchpoints.",
    href: "/services/brand-activation",
    image: "/mall-activation-aerial-view-shopping-mall-crowd-co.jpg",
  },
  {
    id: "rural",
    number: "07",
    title: "Rural Marketing Campaigns",
    subtitle: "Grassroots Tier-2 & Tier-3 Outreach",
    description: "Multi-city promotional van networks, market activations, and localized experiential consumer touchpoints.",
    href: "/services/rural-marketing",
    image: "/roadshow-event.jpg",
  },
  {
    id: "bespoke",
    number: "08",
    title: "Bespoke Execution & Experiences",
    subtitle: "Tailored, Seamless Milestones",
    description: "Curated private celebrations, luxury galas, and bespoke thematic environments built ground-up around your vision.",
    href: "/contact",
    image: "/about/hero/luxury-event-venue-with-elegant-decorations.jpg",
  },
]

export function ServicesCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    // 1. IntersectionObserver for seamless, high-performance mobile scroll tracking
    let observer: IntersectionObserver | null = null
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idxAttr = entry.target.getAttribute("data-index")
              if (idxAttr !== null) {
                const index = parseInt(idxAttr, 10)
                if (!isNaN(index)) {
                  setActiveIndex(index)
                }
              }
            }
          })
        },
        {
          root: null,
          rootMargin: "-28% 0px -28% 0px",
          threshold: [0.1, 0.5],
        }
      )

      rowRefs.current.forEach((el) => {
        if (el) observer?.observe(el)
      })
    }

    // 2. Fallback scroll handler with requestAnimationFrame
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const centerY = windowHeight * 0.5

        let closestIndex = 0
        let minDistance = Infinity

        rowRefs.current.forEach((el, index) => {
          if (!el) return
          const r = el.getBoundingClientRect()
          const elCenter = r.top + r.height / 2
          const distance = Math.abs(elCenter - centerY)
          if (distance < minDistance) {
            minDistance = distance
            closestIndex = index
          }
        })

        setActiveIndex(closestIndex)
        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Dynamic Full-Bleed Background Images Changing on Scroll / Hover */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {allServices.map((service, index) => {
          const isActive = activeIndex === index
          return (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "opacity-80 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          )
        })}

        {/* Directional Gradient: Left is dark for text readability, Right & Center let the image shine through vibrantly */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/35 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-30">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            SERVICE VERTICALS
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] drop-shadow-md">
            Production Capabilities
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light mt-4 max-w-xl leading-relaxed drop-shadow-sm">
            Scroll or hover through each vertical to explore our production disciplines. Each offering is delivered with 100% in-house staging, audio, and safety management.
          </p>
        </div>

        {/* Non-Panel Interactive Editorial Service List (No Floating Popups, No Circular Arrows) */}
        <div className="divide-y divide-white/15 border-y border-white/15">
          {allServices.map((service, index) => {
            const isActive = activeIndex === index
            return (
              <Link
                key={service.id}
                ref={(el) => {
                  rowRefs.current[index] = el
                }}
                data-index={index}
                href={service.href}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onTouchStart={() => setActiveIndex(index)}
                className={`group py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8 transition-all duration-300 block -mx-4 px-4 rounded-xl ${
                  isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.02]"
                }`}
              >
                {/* Left: Number & Title */}
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span
                    className={`text-sm sm:text-base font-mono font-bold transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-white/40 group-hover:text-primary"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.02em] [word-spacing:0.16em] transition-colors duration-300 drop-shadow-sm ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/50 font-light mt-1.5 md:hidden leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right: Description for Desktop (Clean, Minimal, No Arrows) */}
                <div className="hidden md:block text-right">
                  <p
                    className={`text-xs font-light max-w-sm leading-relaxed transition-colors duration-300 drop-shadow-sm ${
                      isActive ? "text-white/90" : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
