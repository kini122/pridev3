"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "2014",
    title: "Founded in Kerala",
    description: "Pride Eventz was established with an uncompromising vision to revolutionize stagecraft and event management in Kerala.",
    image: "/about/timeline/2010-founding-event.jpg",
  },
  {
    year: "2017",
    title: "Pan-India Corporate Expansions",
    description: "Expanded our operations to manage high-stakes corporate summits, annual shareholder meets, and Tier-1 brand activations across India.",
    image: "/about/timeline/corporate-event-2013.jpg",
  },
  {
    year: "2020",
    title: "Hybrid & Virtual Broadcasts",
    description: "Pioneered broadcast-quality virtual stages and hybrid live-streaming ecosystems during unprecedented global logistical constraints.",
    image: "/about/timeline/virtual-event-2020.jpg",
  },
  {
    year: "2024",
    title: "2100+ Projects Milestone",
    description: "Celebrated our 2100+ projects milestone, solidifying our reputation as Kerala's leading turnkey event and wedding production powerhouse.",
    image: "/about/timeline/celebration-200-projects.jpg",
  },
  {
    year: "2026",
    title: "Global Scale & Stadium Tours",
    description: "Executing large-format stadium concert engineering, mega expo pavilions, and international brand activations across borders.",
    image: "/about/timeline/celebration-100-events.jpg",
  },
]

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalHeight = rect.height
      const scrolled = windowHeight * 0.6 - rect.top
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1)
      setLineProgress(progress * 100)
    }

    window.addEventListener("scroll", updateScroll, { passive: true })
    updateScroll()
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">OUR HISTORY</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-4">
            Milestones of Excellence
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">From an ambitious local crew to one of India&apos;s premier full-service event institutions.</p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline Center Background Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Dynamic Fill Line Dropping Down on Scroll */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-orange-400 to-amber-300 -translate-x-1/2 transition-all duration-150 ease-out z-10 shadow-[0_0_12px_rgba(249,115,22,0.6)]"
            style={{ height: `${lineProgress}%` }}
          />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0
              const threshold = ((index + 0.5) / milestones.length) * 100
              const isPast = lineProgress >= threshold

              return (
                <div key={milestone.year} className="relative">
                  {/* Center Dot for Desktop */}
                  <div
                    className={`hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-black z-20 transition-all duration-300 ${
                      isPast
                        ? "bg-primary scale-125 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                        : "bg-white/20 scale-100"
                    }`}
                  />

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                    {/* Content - Panel-less, Minimal Typography */}
                    <div className={`order-2 ${isEven ? "md:order-1 md:text-right md:pr-12" : "md:order-2 md:text-left md:pl-12"}`}>
                      <div>
                        <span className="text-3xl sm:text-5xl font-mono font-bold text-primary block mb-2">{milestone.year}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.14em] mb-3">{milestone.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed font-light">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Image Card */}
                    <div className={`order-1 ${isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"}`}>
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group shadow-xl">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
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
