"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial"

interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  avatar: string
  position: "left" | "right"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pride Eventz brought unmatched energy and creative ingenuity to our corporate summit. The technical staging, AV setup, and execution exceeded all our expectations.",
    name: "Janeen Babu",
    title: "Regional Operations Director",
    avatar: "/professional-man-headshot.png",
    position: "left",
  },
  {
    id: 2,
    quote:
      "The dedication of the Pride team is unparalleled. Extremely humble, highly responsive, and capable of solving complex stage logistical challenges in real time.",
    name: "Gokul Anand",
    title: "Brand Marketing Lead",
    avatar: "/professional-headshot.png",
    position: "right",
  },
  {
    id: 3,
    quote:
      "Exceptional service and creativity! Pride Eventz transformed our brand activation into a massive viral attraction. Their crowd engagement strategies are truly world-class.",
    name: "Priya Sharma",
    title: "Senior Experiential Marketer",
    avatar: "/professional-woman-headshot.png",
    position: "left",
  },
  {
    id: 4,
    quote:
      "On-time delivery and outstanding execution. Pride Eventz's team went above and beyond to make our corporate event a huge success. I will definitely work with them again!",
    name: "Rajesh Kumar",
    title: "Head of Corporate Communications",
    avatar: "/professional-man-headshot.png",
    position: "right",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-secondary/40 border-t border-border/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Client Voices
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Hear from marketing heads, brand directors, and event partners who rely on our end-to-end production precision.
          </p>
        </div>

        <div className="py-2">
          <div className="max-w-5xl mx-auto px-4">
            {(() => {
              const cards = testimonials.map((t, i) => (
                <TestimonialCard
                  key={t.id}
                  testimonial={{
                    name: t.name,
                    designation: t.title,
                    description: t.quote,
                    profileImage: t.avatar,
                  }}
                  index={i}
                />
              ))

              return <Carousel items={cards} />
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
