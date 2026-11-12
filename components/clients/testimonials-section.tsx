"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pride Eventz brought unmatched energy and creative ingenuity to our corporate summit. The technical staging, AV setup, and execution exceeded all our expectations.",
    name: "Janeen Babu",
    title: "Regional Operations Director, Pidilite Industries",
    avatar: "/professional-man-headshot.png",
  },
  {
    id: 2,
    quote:
      "The dedication of the Pride team is unparalleled. Extremely humble, highly responsive, and capable of solving complex stage logistical challenges in real time.",
    name: "Gokul Anand",
    title: "Brand Marketing Lead, Hero MotoCorp",
    avatar: "/professional-headshot.png",
  },
  {
    id: 3,
    quote:
      "Exceptional service and creativity! Pride Eventz transformed our brand activation into a massive viral attraction. Their crowd engagement strategies are truly world-class.",
    name: "Priya Sharma",
    title: "Senior Experiential Marketer, Sunfeast & ITC Brands",
    avatar: "/professional-woman-headshot.png",
  },
  {
    id: 4,
    quote:
      "On-time delivery and outstanding execution. Pride Eventz's team went above and beyond to make our corporate event a huge success. I will definitely work with them again!",
    name: "Rajesh Kumar",
    title: "Head of Corporate Communications, Live Nation Arena",
    avatar: "/professional-man-headshot.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Infinite round loop: automatically advances every 7 seconds
  // Resetting on currentIndex ensures a fresh 7-second window if a user manually clicks a dot
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <section className="w-full py-16 sm:py-24 px-0 bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12">
        <p className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-2">
          VERIFIED TESTIMONIALS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-3">
          Trusted By Industry Leaders
        </h2>
        <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-xl mx-auto">
          Hear from marketing heads, brand directors, and event partners who rely on our end-to-end production precision.
        </p>
      </div>

      {/* Full-Screen Width Testimonial Carousel - Compact & Refined Scale */}
      <div className="w-full relative overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full min-w-full flex-shrink-0 px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center text-center box-border"
            >
              <div className="w-full max-w-3xl mx-auto">
                {/* Client Photo - Smaller */}
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-4 object-cover border border-white/20 shadow-xl"
                />

                {/* Editorial Quote - Refined & Smaller */}
                <blockquote className="text-sm sm:text-base md:text-lg text-white/90 mb-5 italic leading-relaxed font-light [word-spacing:0.12em]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Client Info */}
                <h3 className="font-bold text-white text-xs sm:text-sm tracking-wider uppercase [word-spacing:0.12em]">
                  {testimonial.name}
                </h3>
                <p className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] mt-1">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "w-7 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
