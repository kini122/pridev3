"use client"

import { useState, useEffect } from "react"
import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Corporate Event with Stage Lighting",
    category: "concerts",
    image: "/portfolio/grid/corporate-event-with-crowd-stage-lighting.jpg",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Under the Sea Balloon Decoration",
    category: "exhibitions",
    image: "/portfolio/grid/under-the-sea-themed-balloon-decoration-with-chara.jpg",
    date: "February 2024",
  },
  {
    id: 3,
    title: "Pidilite Brands Showcase",
    category: "brand-activation",
    image: "/portfolio/grid/corporate-presentation-pidilite-brands-showcase.jpg",
    date: "January 2024",
  },
  {
    id: 4,
    title: "Traditional Kerala Dancers",
    category: "rural-marketing",
    image: "/portfolio/grid/traditional-kerala-dancers-in-costumes-inauguratio.jpg",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Sunfeast Arrowroot Stage Branding",
    category: "brand-activation",
    image: "/portfolio/grid/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
    date: "November 2023",
  },
  {
    id: 6,
    title: "Mall Event Aerial View",
    category: "concerts",
    image: "/portfolio/grid/mall-event-with-massive-crowd-aerial-view.jpg",
    date: "October 2023",
  },
  {
    id: 7,
    title: "Purple Pink Butterfly Entrance",
    category: "weddings",
    image: "/portfolio/grid/decorative-entrance-purple-pink-lighting-butterfly.jpg",
    date: "September 2023",
  },
  {
    id: 8,
    title: "Idea Telecom Corporate Event",
    category: "brand-activation",
    image: "/portfolio/grid/idea-telecom-corporate-event-stage-branding.jpg",
    date: "August 2023",
  },
  {
    id: 9,
    title: "Elegant Wedding Stage",
    category: "weddings",
    image: "/portfolio/grid/elegant-wedding-stage-decoration.jpg",
    date: "July 2023",
  },
  {
    id: 10,
    title: "Trade Show Booth Setup",
    category: "exhibitions",
    image: "/portfolio/grid/trade-show-booth-setup-exhibition.jpg",
    date: "June 2023",
  },
  {
    id: 11,
    title: "Conference Room Setup",
    category: "mice",
    image: "/portfolio/grid/conference-room-setup-corporate-event.jpg",
    date: "May 2023",
  },
  {
    id: 12,
    title: "Live Performance with Lighting",
    category: "concerts",
    image: "/portfolio/grid/live-performance-with-professional-lighting.jpg",
    date: "April 2023",
  },
  // Added new gallery items from attachments
  {
    id: 13,
    title: "Rotary Governor Elect Seminar Stage",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd71f94c4968f48a3ad8e5933963902b1?format=webp&width=800",
    date: "December 2024",
  },
  {
    id: 14,
    title: "Godrej Unlocking 7 Product Launch",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6a3a0e7c5ad54f4099707bb3d66477b9?format=webp&width=800",
    date: "2024",
  },
  {
    id: 15,
    title: "HP x Microsoft Future Is Here Conference",
    category: "mice",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F996b029f5fcb4a51b6d3c7f8ad3661ef?format=webp&width=800",
    date: "2024",
  },
  {
    id: 16,
    title: "Carestream Partner Conference Welcome Stage",
    category: "mice",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa7beb0d255d14d0a9ac16dc1f44be26e?format=webp&width=800",
    date: "2025",
  },
  {
    id: 17,
    title: "Pidilite Premier Club Live Performance",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbeda75a87a2e4568b5d66d9671b4e4aa?format=webp&width=800",
    date: "2024",
  },
  {
    id: 18,
    title: "LED Infinity Dance Floor Setup",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F82c332469bd34e908924db10173dca0c?format=webp&width=800",
    date: "2024",
  },
  {
    id: 19,
    title: "Rotary Panel Discussion Stage with Dual Screens",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2426867686274f258daf5c5e650c4458?format=webp&width=800",
    date: "2024",
  },
  {
    id: 20,
    title: "Cultural Welcome Procession with Elephants",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbba071cdbc08433fad8260996e49be86?format=webp&width=800",
    date: "2024",
  },
  {
    id: 21,
    title: "Rotary Institute Grand Red Stage Lighting",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa2982656be3648e18012fc92e12b6518?format=webp&width=800",
    date: "2024",
  },
  {
    id: 22,
    title: "Event Check‑in and Wayfinding Branding",
    category: "brand-activation",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F87489872402d4dcfb6cc169bef7944f2?format=webp&width=800",
    date: "2024",
  },
  {
    id: 23,
    title: "Boardroom Seminar Setup",
    category: "mice",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F53f6b6ee8aa54930afa049e3d290424e?format=webp&width=800",
    date: "2024",
  },
  {
    id: 24,
    title: "Traditional Tilak Welcome Ceremony",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff1fcdd52c7b24426b70fb147487e6383?format=webp&width=800",
    date: "2024",
  },
  {
    id: 25,
    title: "Pidilite Premier Club Night Stage",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa40c787ed1f24d148e8284d95a08c247?format=webp&width=800",
    date: "2024",
  },
  {
    id: 26,
    title: "LEAP 2025 Ballroom Conference",
    category: "mice",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4d68f53b5629472c938e18e1dcf7c72f?format=webp&width=800",
    date: "2025",
  },
  {
    id: 27,
    title: "Premier Club Stage with Side LED Walls",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fded0f48caef74b2ea6dee2d191279da7?format=webp&width=800",
    date: "2024",
  },
  {
    id: 28,
    title: "Kajaria Kerovit Brand Conference Stage",
    category: "brand-activation",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4212bbd5c9244b83bf5cfba36dab8ea0?format=webp&width=800",
    date: "2024",
  },
  {
    id: 29,
    title: "Rotary Institute Main Hall Night Show",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F5e49c185a78d444585e93493f9bb4a92?format=webp&width=800",
    date: "2024",
  },
  {
    id: 30,
    title: "Corporate Annual Meet – Collections Team",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F13d418bdcef54491bccf791cd3692165?format=webp&width=800",
    date: "2024",
  },
  {
    id: 31,
    title: "Medtronic Exhibition Booth",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fc7af8a2f5cdc4da29f16df64c6dea0e2?format=webp&width=800",
    date: "2024",
  },
  {
    id: 32,
    title: "PREET Heavy Machinery Outdoor Stall",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fea0e9852f5984c498e38a14cd04d2d58?format=webp&width=800",
    date: "2024",
  },
  {
    id: 33,
    title: "Rotary International Terminal Check‑in Setup",
    category: "brand-activation",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F51c02e0fb16849aaa80a3af104b3f1c3?format=webp&width=800",
    date: "2024",
  },
  {
    id: 34,
    title: "Pharma Backlit Product Showcase Booth",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fb4b463a000684fdc8614f9dba5cf7960?format=webp&width=800",
    date: "2024",
  },
  {
    id: 35,
    title: "Premier Club Outdoor Night Stage",
    category: "concerts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa674fa8251e74b1ca18bee31d16aa87d?format=webp&width=800",
    date: "2024",
  },
  {
    id: 36,
    title: "Epson Branded Exhibition Pavilion",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6c0150dd8c4f4285a31c213ebae6def6?format=webp&width=800",
    date: "2024",
  },
  {
    id: 37,
    title: "KFC Onam Mall Activation",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F72800419188d4458b89d69eba8e971a7?format=webp&width=800",
    date: "2024",
  },
  {
    id: 38,
    title: "River EV Scooters Shopping Mall Display",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F799eef597d8a464fa3d9665d1fa90f25?format=webp&width=800",
    date: "2024",
  },
  {
    id: 39,
    title: "LinenClub Showroom on Wheels Van",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4186d12cddf648a4ba750d25117ddc4a?format=webp&width=800",
    date: "2024",
  },
  {
    id: 40,
    title: "Bosch Beach Roadshow Experience Truck",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd388df5ae1d24615bd441a7abd1f260e?format=webp&width=800",
    date: "2024",
  },
  {
    id: 41,
    title: "Canon Dealer Meet Roadshow Launch",
    category: "rural-marketing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbb9e53f019704f1d9ec3510043a91258?format=webp&width=800",
    date: "2024",
  },
]

interface PortfolioGridProps {
  filter?: string
}

const getProjectDescription = (item: (typeof portfolioItems)[0]) => {
  const categoryDescriptions: Record<string, string> = {
    corporate: "High-stakes corporate summit engineered with multi-screen LED sync, precision acoustics, and bespoke stagecraft.",
    weddings: "Bespoke luxury matrimonial celebration featuring custom floral architecture, atmospheric lighting, and flawless guest hospitality.",
    concerts: "Stadium-scale live concert engineering with concert-grade line arrays, intelligent moving heads, and certified crowd safety zoning.",
    mice: "Multi-track convention infrastructure with digital delegate management, simultaneous translation, and VIP logistics.",
    exhibitions: "Turnkey German hangar pavilion architecture with custom 3D stall fabrication and high-impact branding corridors.",
    "brand-activation": "High-impact experiential brand activation engaging thousands of consumers with interactive touchpoints.",
    "rural-marketing": "Grassroots Tier-2 and Tier-3 on-ground promotional campaign featuring custom mobile vans and localized outreach.",
  }
  return categoryDescriptions[item.category] || "Turnkey live event production engineered with architectural stagecraft, acoustic precision, and disciplined execution."
}

export function PortfolioGrid({ filter = "all" }: PortfolioGridProps) {
  const [displayedItems, setDisplayedItems] = useState(12)
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === filter))
    }
    setDisplayedItems(12)
  }, [filter])

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedItem])

  // Keyboard navigation for premium modal (Left/Right arrows + Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return
      if (e.key === "Escape") setSelectedItem(null)
      if (e.key === "ArrowLeft") {
        const currentIdx = filteredItems.findIndex((it) => it.id === selectedItem.id)
        const prevIdx = currentIdx > 0 ? currentIdx - 1 : filteredItems.length - 1
        setSelectedItem(filteredItems[prevIdx])
      }
      if (e.key === "ArrowRight") {
        const currentIdx = filteredItems.findIndex((it) => it.id === selectedItem.id)
        const nextIdx = currentIdx < filteredItems.length - 1 ? currentIdx + 1 : 0
        setSelectedItem(filteredItems[nextIdx])
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedItem, filteredItems])

  return (
    <>
      <section className="py-16 sm:py-24 px-0 bg-black border-t border-white/10">
        <div className="w-full">
          {/* Edge-to-edge seamless grid with zero gap between panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {filteredItems.slice(0, displayedItems).map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-none aspect-[4/3] cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-500 bg-[#0d0d10]"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content - No Category Heading */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                  <div className="w-full">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5 leading-snug tracking-tight group-hover:text-primary transition-colors uppercase [word-spacing:0.12em]">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider">
                      {item.date}
                    </p>
                  </div>

                  {/* Quick View Icon */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-200 border border-white/20">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Productions Button */}
          {displayedItems < filteredItems.length && (
            <div className="flex justify-center pt-14 pb-4">
              <button
                onClick={() => setDisplayedItems((prev) => prev + 12)}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-primary hover:text-black hover:border-primary px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>Load More</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Premium Modal View */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Simple Close Button (X) - Top Right: Small, no round panel or hover background */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-40 text-white/70 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
              aria-label="Close project preview"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md" />
            </button>

            {/* Simple Navigation - Left Arrow (<): Small, no round panel or hover background */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIdx = filteredItems.findIndex((it) => it.id === selectedItem.id)
                const prevIdx = currentIdx > 0 ? currentIdx - 1 : filteredItems.length - 1
                setSelectedItem(filteredItems[prevIdx])
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 text-white/70 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md" />
            </button>

            {/* Simple Navigation - Right Arrow (>): Small, no round panel or hover background */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIdx = filteredItems.findIndex((it) => it.id === selectedItem.id)
                const nextIdx = currentIdx < filteredItems.length - 1 ? currentIdx + 1 : 0
                setSelectedItem(filteredItems[nextIdx])
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 text-white/70 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md" />
            </button>

            {/* Fullscreen Image Display */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                className="w-full h-full object-contain bg-black"
              />

              {/* Description of Event at Bottom Left Over Image (Readable & Elegant) */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-32 pb-8 sm:pb-12 px-6 sm:px-12 md:px-16 z-30 pointer-events-none">
                <div className="max-w-3xl pointer-events-auto">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-2 block font-semibold">
                    {selectedItem.date}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-3 drop-shadow-md">
                    {selectedItem.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-2xl drop-shadow-md">
                    {getProjectDescription(selectedItem)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
