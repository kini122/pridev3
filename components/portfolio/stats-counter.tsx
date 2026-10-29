"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Events Completed", value: 200, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
]

export function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1600
          const steps = 40
          const stepTime = duration / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const easeOut = 1 - Math.pow(1 - progress, 3)

            setCounts(stats.map((s) => Math.min(s.value, Math.round(s.value * easeOut))))

            if (step >= steps) {
              clearInterval(timer)
              setCounts(stats.map((s) => s.value))
            }
          }, stepTime)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center border-t border-border/40 overflow-hidden"
      style={{
        backgroundImage: 'url("/portfolio/statistics/collage-event-photos-celebration.jpg")',
      }}
    >
      {/* Dark Overlay with subtle backdrop blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10"
            >
              {/* Large Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-2 tracking-tight">
                {counts[index]}
                <span className="text-primary/70">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-white/80 font-medium text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
