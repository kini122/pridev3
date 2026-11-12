"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface FeaturedWork {
  id: number
  title: string
  category: string
  client: string
  location: string
  image: string
}

const featuredWorks: FeaturedWork[] = [
  {
    id: 1,
    title: "Arena Stage Lighting & Leadership Summit",
    category: "Corporate Events",
    client: "Tata Motors & Enterprise Partners",
    location: "Kochi International Centre",
    image: "/portfolio/grid/corporate-event-with-crowd-stage-lighting.jpg",
  },
  {
    id: 2,
    title: "National Brands Experiential Showcase",
    category: "Brand Activation",
    client: "Pidilite Industries",
    location: "Grand Hyatt Convention Centre",
    image: "/portfolio/grid/corporate-presentation-pidilite-brands-showcase.jpg",
  },
  {
    id: 3,
    title: "Annual Global Dealer Conference",
    category: "Conferences & MICE",
    client: "Hero MotoCorp",
    location: "Le Meridien Arena",
    image: "/home/hero/hero-motocorp-annual-conference-stage-setup.jpg",
  },
  {
    id: 4,
    title: "Stadium Live Arena & Concert Production",
    category: "Concerts & Live Shows",
    client: "Live Nation Arena Series",
    location: "JLN International Stadium",
    image: "/portfolio/grid/mall-event-with-massive-crowd-aerial-view.jpg",
  },
  {
    id: 5,
    title: "FMCG Brand Activation & Stagecraft",
    category: "Brand Activation",
    client: "Sunfeast & ITC Limited",
    location: "Calicut Trade Centre",
    image: "/portfolio/grid/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
  },
  {
    id: 6,
    title: "Cinematic Royal Matrimonial Mandap",
    category: "Destination Weddings",
    client: "Private Bespoke Wedding",
    location: "The Leela Kovalam",
    image: "/portfolio/grid/decorative-entrance-purple-pink-lighting-butterfly.jpg",
  },
]

export function FeaturedWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              Curated Portfolio
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Featured Productions
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
            A selection of landmark arena concerts, corporate summits, royal weddings, and immersive brand activations executed across India.
          </p>
        </div>

        {/* 6 Featured Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <Link
              key={work.id}
              href="/portfolio"
              className="group relative flex flex-col h-full bg-[#0d0d10] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image Container with Zoom & Gradient */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-black/20 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-200 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-xs font-mono text-white/50 mb-1">
                    Client: {work.client}
                  </p>
                  <p className="text-xs font-mono text-white/40">
                    Venue: {work.location}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-white/40 group-hover:text-primary transition-colors">
                  <span>View Production</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Works Action */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group"
          >
            <span>Explore All Productions</span>
            <ArrowUpRight className="w-4 h-4 text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

