"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Events Managed (Last 5 Years)", value: 2100, unit: "", suffix: "+" },
  { label: "Corporate Clients", value: 350, unit: "", suffix: "+" },
  { label: "Brand Activations Globally", value: 1600, unit: "", suffix: "+" },
  { label: "Freelance Opportunities Created", value: 50, unit: "K", suffix: "+" },
  { label: "Client Satisfaction Rate", value: 99, unit: "", suffix: "%" },
]

export function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0])
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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-primary mb-3">
              Institutional Track Record
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Our Legacy in the Making
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
            With years of experience and countless successful events, we&apos;ve built an unshakeable reputation for excellence and innovation across India and beyond.
          </p>
        </div>

        {/* Stats Grid - 5 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0c] divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div>
                <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-mono font-bold text-white tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {counts[index]}
                  {stat.unit && <span className="text-white">{stat.unit}</span>}
                  <span className="text-primary ml-0.5">{stat.suffix}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-white/60 leading-relaxed mt-4 pt-4 border-t border-white/5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
