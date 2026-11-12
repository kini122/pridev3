"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Janeen Babu",
    company: "Head of Regional Marketing, Pidilite Industries",
    quote:
      "Pride Eventz delivered our national brand showcase with flawless technical execution. Their zero-downtime AV coordination, custom 3D scenography, and crowd management set an unprecedented benchmark for our brand across India.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    id: 2,
    name: "Ananya & Rohan Singhania",
    company: "Destination Matrimonial, The Leela Palace Udaipur",
    quote:
      "They didn't just plan our wedding; they sculpted a cinematic royal dream across three unforgettable days. From the sunset floral mandap to the midnight afterparty, our 600+ guests experienced flawless five-star hospitality.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 3,
    name: "Gokul Anand",
    company: "Senior Operations Director, Hero MotoCorp",
    quote:
      "Managing 1,800+ executive delegates across multi-track plenary halls requires absolute precision. Pride Eventz handled the complete stagecraft, live broadcast feeds, and VIP protocols with institutional rigor.",
    rating: 5,
    image: "/professional-headshot.png",
  },
  {
    id: 4,
    name: "Priya Sharma",
    company: "Experiential Marketing Head, Sunfeast & ITC Brands",
    quote:
      "The multi-state promotional van networks and shopping mall atrium installations managed by Pride Eventz delivered an immediate 35% surge in retail conversions. Their ground execution team is world-class.",
    rating: 5,
    image: "/portfolio/testimonials/professional-woman-headshot.png",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    company: "Festival Director, Live Nation Arena Concerts",
    quote:
      "Concert-grade acoustics, intelligent moving heads, and heavy-duty structural trussing safely holding 20,000+ attendees. Pride Eventz is our trusted production powerhouse for stadium-scale arena live events.",
    rating: 5,
    image: "/portfolio/testimonials/professional-man-headshot.png",
  },
]

export function TestimonialSlider() {
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
      {/* Section Header - Refined & Smaller */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12">
        <p className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-2">
          Client Voices
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase leading-tight">
          What Our Clients Say
        </h2>
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
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-4 object-cover border border-white/20 shadow-xl"
                />

                {/* Editorial Quote - Refined & Smaller */}
                <blockquote className="text-sm sm:text-base md:text-lg text-white/90 mb-5 italic leading-relaxed font-light [word-spacing:0.12em]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Client Info */}
                <h3 className="font-bold text-white text-xs sm:text-sm tracking-wider uppercase [word-spacing:0.12em]">
                  {testimonial.name}
                </h3>
                <p className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] mt-1">
                  {testimonial.company}
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
