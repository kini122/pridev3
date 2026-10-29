"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Corporate Events",
    description: "High-level annual general meetings, corporate galas, awards ceremonies, and leadership summits executed with precision.",
    href: "/services/corporate-events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Destination Weddings",
    description: "Ultra-luxury bespoke wedding productions across Kerala, Rajasthan, and international venues with cinematic flair.",
    href: "/services/destination-weddings",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Concerts & Live Shows",
    description: "Stadium-scale concerts, festivals, concert sound engineering, intelligent light shows, and master security planning.",
    href: "/services/concerts",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Conferences & MICE",
    description: "Multi-track international conventions, exhibition pavilions, badge management, and seamless VIP logistics.",
    href: "/services/conferences-mice",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Exhibitions & Trade Shows",
    description: "Custom modular stall architecture, 3D experiential spaces, high-impact branding, and visitor engagement booths.",
    href: "/services/exhibitions",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Brand Activation",
    description: "Immersive consumer touchpoints, experiential pop-ups, viral photo opportunities, and influencer launch events.",
    href: "/services/brand-activation",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "07",
    title: "Rural Marketing",
    description: "Grassroots BTL campaigns, branded mobile vans, and Tier 2/3 city roadshows spanning across South India.",
    href: "/services/rural-marketing",
    image: "https://images.unsplash.com/photo-1506869640319-ce1a44e1e0cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "08",
    title: "Bespoke Stagecraft",
    description: "Custom architectural fabrication, kinetic structures, projection mapping, and turnkey technical show management.",
    href: "/contact",
    image: "/home/hero/hero-motocorp-annual-conference-stage-setup.jpg",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Total Management Monospace Label & Clean Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              Capabilities &amp; Disciplines
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              End-to-End Event Production
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
            From strategic concept development to master stage fabrication and real-time show running across India.
          </p>
        </div>

        {/* 8 Luxury Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              href={service.href} 
              key={service.number}
              className="group relative flex flex-col h-full bg-[#0d0d10] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Top Image Container with Zoom & Gradient */}
              <div className="relative h-56 overflow-hidden bg-zinc-900">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-black/30 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-200 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-white/40 group-hover:text-primary transition-colors">
                  <span>Explore Division</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
