"use client"

import { useEffect, useRef, useState } from "react"

interface Stat {
  id: number
  number: number
  label: string
  suffix: string
  sublabel: string
}

const stats: Stat[] = [
  { id: 1, number: 500, label: "Corporate & Social Clients", suffix: "+", sublabel: "Trusted partnerships across South India" },
  { id: 2, number: 1000, label: "Live Event Days Delivered", suffix: "+", sublabel: "Zero production failures logged" },
  { id: 3, number: 50, label: "National Brand Partners", suffix: "+", sublabel: "Blue-chip & enterprise accounts" },
  { id: 4, number: 99, label: "Client Retention Rate", suffix: "%", sublabel: "Year-on-year repeat contracts" },
]

export function StatsIndicators() {
  const [counts, setCounts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
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

            const updated: Record<number, number> = {}
            stats.forEach((s) => {
              updated[s.id] = Math.min(s.number, Math.round(s.number * easeOut))
            })
            setCounts(updated)

            if (step >= steps) {
              clearInterval(timer)
              const final: Record<number, number> = {}
              stats.forEach((s) => {
                final[s.id] = s.number
              })
              setCounts(final)
            }
          }, stepTime)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#0a0a0c] border-y border-white/10">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="py-12 sm:py-16 px-6 sm:px-8 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {counts[stat.id] || 0}
                  <span className="text-primary ml-1">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-white/80 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-white/40 font-light">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
