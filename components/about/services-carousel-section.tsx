"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Briefcase, Heart, Music, Building2, LayoutGrid, Radio, ArrowRight } from "lucide-react"

const coreServices = [
  {
    icon: Briefcase,
    title: "Corporate Summits & Launches",
    description: "High-stakes townhalls, gala dinners, and product unveilings executed with business-class precision.",
    href: "/services/corporate-events",
  },
  {
    icon: Heart,
    title: "Destination Weddings",
    description: "Magical matrimonial celebrations with turnkey planning, bespoke decor, and guest hospitality.",
    href: "/services/destination-weddings",
  },
  {
    icon: Music,
    title: "Live Concerts & Festivals",
    description: "Concert-grade acoustics, stage fabrication, artist handling, and large-scale crowd management.",
    href: "/services/concerts",
  },
  {
    icon: Building2,
    title: "Conferences & MICE",
    description: "Comprehensive multi-track symposiums, delegate logistics, and VIP coordination across India.",
    href: "/services/conferences-mice",
  },
  {
    icon: LayoutGrid,
    title: "Exhibitions & Trade Shows",
    description: "Custom stall architecture, interactive display booths, and immersive consumer brand environments.",
    href: "/services/exhibitions",
  },
  {
    icon: Radio,
    title: "Brand Activations & BTL",
    description: "Experiential ground-level campaigns and roadshows that drive measurable consumer engagement.",
    href: "/services/brand-activation",
  },
]

export function ServicesCarouselSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(coreServices.length / itemsPerPage)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/40 border-t border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">Service Verticals</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Comprehensive Production Capabilities
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous services slide"
              className="p-3 rounded-full bg-card border border-border/80 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next services slide"
              className="p-3 rounded-full bg-card border border-border/80 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Grid (Responsive & Paginated) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((service) => {
              const Icon = service.icon
              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-wider text-primary">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === i ? "w-8 bg-primary" : "w-2 bg-border/80 hover:bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
