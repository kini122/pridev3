"use client"

import { useEffect, useRef, useState } from "react"
import { Smile, CalendarDays, Handshake, ShieldCheck } from "lucide-react"

interface Stat {
  id: number
  number: number
  label: string
  suffix: string
  icon: React.ElementType
}

const stats: Stat[] = [
  { id: 1, number: 500, label: "Corporate & Social Clients", suffix: "+", icon: Smile },
  { id: 2, number: 1000, label: "Live Event Days Delivered", suffix: "+", icon: CalendarDays },
  { id: 3, number: 50, label: "National Brand Partners", suffix: "+", icon: Handshake },
  { id: 4, number: 99, label: "Client Retention Rate", suffix: "%", icon: ShieldCheck },
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
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.id}
                className="group flex items-center gap-5 p-6 rounded-2xl border border-border/60 hover:border-primary/50 bg-card/60 backdrop-blur-sm transition-all duration-300 shadow-md"
              >
                {/* Emblem */}
                <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {counts[stat.id] || 0}
                    <span className="text-primary ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
