"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Quote, ArrowRight, ArrowUpRight, MessageCircle, ChevronDown } from "lucide-react"

export interface ServicePortfolioItem {
  title: string
  category: string
  description: string
  image: string
  result?: string
}

export interface ServiceFeature {
  title: string
  description: string
  image?: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

interface ServicePageLayoutProps {
  title: string
  heroSubheadline: string
  heroImage: string
  detailedOverview: {
    intro: string
    whoFor: string
    problemSolved: string
    whyUs: string
  }
  whatWeOffer: ServiceFeature[]
  ourApproach: ServiceFeature[]
  portfolioItems: ServicePortfolioItem[]
  testimonial: {
    client: string
    quote: string
  }
  keyHighlights?: ServiceFeature[]
  faqs?: ServiceFAQ[]
  ctaHeadline: string
  ctaSubheadline?: string
}

const SERVICE_CAPABILITY_IMAGES: Record<string, string[]> = {
  "Corporate Events": [
    "/tech-product-launch-event-stage-lighting.jpg",
    "/corporate-presentation-pidilite-brands-showcase.jpg",
    "/corporate/shows/corporate-show-audience-engagement-presentation.jpg",
    "/corporate/case-studies/company-anniversary-gala-elegant-setup.jpg",
    "/corporate-conference-stage-setup-professional-ligh.jpg",
    "/about/introduction/luxury-event-party-celebration.jpg",
  ],
  "Destination Weddings": [
    "/beach-wedding-setup.jpg",
    "/elegant-wedding-stage-decoration.jpg",
    "/about/hero/luxury-event-venue-with-elegant-decorations.jpg",
    "/traditional-kerala-dancers-in-costumes-inauguratio.jpg",
    "/traditional-kerala-dancers-in-costumes-inauguratio.jpg",
    "/about/introduction/elegant-event-venue-decoration.jpg",
  ],
  "Live Concerts": [
    "/live-performance-with-professional-lighting.jpg",
    "/concert-stage-lighting-event.jpg",
    "/live-performance-with-professional-lighting.jpg",
    "/corporate-event-with-crowd-stage-lighting.jpg",
    "/concert-event-stage-with-crowd-pink-lighting.jpg",
    "/mall-event-with-massive-crowd-aerial-view.jpg",
  ],
  "Conferences & MICE": [
    "/conference-room-setup-corporate-event.jpg",
    "/corporate-presentation-pidilite-brands-showcase.jpg",
    "/hero-motocorp-annual-conference-stage-setup.jpg",
    "/corporate-conference-stage-setup-professional-ligh.jpg",
    "/conference-room-setup-corporate-event.jpg",
    "/company-anniversary-gala-elegant-setup.jpg",
  ],
  "Exhibitions & Trade Shows": [
    "/trade-show-booth-setup-exhibition.jpg",
    "/modern-tech-exhibition-booth-blue-branding.jpg",
    "/tech-trade-show-expo-video-screens-displays.jpg",
    "/tech-company-annual-expo.jpg",
    "/busy-exhibition-hall.jpg",
    "/mall-exhibition-hall-event-space.jpg",
  ],
  "Brand Activation": [
    "/mall-activation-aerial-view-shopping-mall-crowd-co.jpg",
    "/mall-retail-activation-red-branded-booth-checkered.jpg",
    "/sampling-campaign.jpg",
    "/tech-brand-activation-event.jpg",
    "/mall-event-with-massive-crowd-aerial-view.jpg",
    "/brand-promotion-event.jpg",
  ],
  "Rural Marketing": [
    "/roadshow-event.jpg",
    "/promotional-event-crowd.jpg",
    "/street-marketing-campaign.jpg",
    "/promotional-event-product-launch.jpg",
    "/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
    "/idea-telecom-corporate-event-stage-branding.jpg",
  ],
}

const DEFAULT_FAQS: Record<string, ServiceFAQ[]> = {
  "Corporate Events": [
    {
      question: "What lead time is required to plan and execute a high-stakes corporate summit?",
      answer: "While our turnkey production crew can handle expedited setups on 2-week notice, standard lead times for multi-track summits and product launches typically range between 4 to 8 weeks for complete 3D scenography, venue licensing, and rehearsals.",
    },
    {
      question: "Do you handle complete venue and statutory permits across India?",
      answer: "Yes. Our operations directorate manages end-to-end liaison with municipal authorities, fire & electrical safety boards, venue management, and copyright/licensing bodies to ensure 100% compliance.",
    },
    {
      question: "Can you accommodate hybrid live-streaming and broadcast requirements?",
      answer: "Absolutely. We engineer fail-safe broadcast setups with multi-camera line cuts, redundant bonded internet connections, low-latency live streaming, and interactive delegate platforms.",
    },
    {
      question: "How do you ensure strict brand consistency across all physical touchpoints?",
      answer: "Our spatial architects adhere strictly to corporate identity guidelines, color-calibrating lighting washes, precision vinyl fabrication, and ultra-high-definition environmental LED branding.",
    },
  ],
  "Destination Weddings": [
    {
      question: "Which destinations across India do you specialize in?",
      answer: "We produce luxury matrimonial celebrations across Kerala (backwaters, beaches, tea estates), Rajasthan (heritage palaces of Udaipur, Jaipur, Jodhpur), Goa, and metropolitan luxury properties.",
    },
    {
      question: "Do you provide dedicated shadow coordinators for the couple and families?",
      answer: "Yes. Every destination wedding is assigned dedicated hospitality directors and personal shadow leads who manage guest transfers, itineraries, rituals, and private requirements round-the-clock.",
    },
    {
      question: "How do you handle backup plans for outdoor weather changes?",
      answer: "Every outdoor installation is planned with certified German hangar structures, waterproof cabling, and an immediate parallel indoor transition blueprint.",
    },
    {
      question: "Can we preview our wedding stages and floral decor before the event?",
      answer: "We develop photorealistic 3D virtual walkthroughs and material swatch mockups well in advance, ensuring complete visual certainty before ground fabrication begins.",
    },
  ],
  "Live Concerts": [
    {
      question: "What acoustic and lighting scale can your rigs support?",
      answer: "Our in-house inventory includes concert-grade line array acoustic systems, intelligent moving heads, laser arrays, and heavy-duty structural trussing capable of stadium tours up to 50,000+ attendees.",
    },
    {
      question: "How do you manage crowd safety and emergency response?",
      answer: "We design multi-layered perimeter zoning, Mojo crowd barriers, certified emergency egress corridors, on-site medical stations, and dedicated liaison with local law enforcement.",
    },
    {
      question: "Do you fulfill complex technical riders for international artists?",
      answer: "Yes. Our technical team works directly with artist management and tour managers to fulfill specific backline, monitor mix, and hospitality rider specifications without compromise.",
    },
  ],
  "Conferences & MICE": [
    {
      question: "How do you coordinate simultaneous multi-track breakout sessions?",
      answer: "We deploy synchronized AV infrastructure and dedicated hall directors for each session track, backed by digital signage and live schedule management systems.",
    },
    {
      question: "Do you handle delegate registration and badge management?",
      answer: "We provide high-speed QR check-in kiosks, RFID badge printing, delegate kits, and real-time attendance analytics for all conference sessions.",
    },
    {
      question: "What translation and accessibility options are supported?",
      answer: "We provide multi-channel infrared simultaneous translation headsets, certified interpreters, and ADA-compliant stage access infrastructure.",
    },
  ],
  "Exhibitions & Trade Shows": [
    {
      question: "What is your stall design and 3D fabrication process?",
      answer: "We provide bespoke 3D CAD renders matching exact floor dimensions, followed by off-site pre-fabrication in our workshop to guarantee rapid, pristine assembly on expo move-in day.",
    },
    {
      question: "Can you provide turnkey exhibition hangars and public pavilions?",
      answer: "Yes. We engineer large-span German hangars with acoustic insulation, heavy-duty flooring, centralized HVAC, and certified electrical distribution.",
    },
    {
      question: "Do you assist with exhibitor manual compliance and permissions?",
      answer: "Our project managers handle all documentation, height clearances, structural stability certificates, and venue insurance documentation on your behalf.",
    },
  ],
  "Brand Activation": [
    {
      question: "What high-footfall venues do you activate across South India?",
      answer: "We regularly execute activations in Tier-1 to Tier-3 mall atriums, tech parks, college campuses, airport transit zones, and high-street retail corridors.",
    },
    {
      question: "How are promoters and brand ambassadors trained?",
      answer: "Our talent undergoes comprehensive product briefings, script rehearsals, and customer engagement training before deployment, overseen by on-site supervisors.",
    },
    {
      question: "What engagement metrics and lead data do you capture?",
      answer: "We deliver real-time digital dashboards tracking sample distributions, footfall count, dwell time, consumer contact leads, and qualitative consumer feedback.",
    },
  ],
  "Rural Marketing": [
    {
      question: "How do you manage multi-city mobile van campaigns?",
      answer: "We operate fully custom-fabricated promotional vans equipped with audio systems, folding stages, and GPS tracking, supported by local field supervisors.",
    },
    {
      question: "How do you overcome regional language and dialect barriers?",
      answer: "We cast local emcees, street theatre (Nukkad Natak) performers, and village influencers who communicate naturally in the native regional dialect.",
    },
    {
      question: "How is campaign proof and accountability maintained?",
      answer: "Daily MIS reporting with GPS route stamps, geo-tagged photos, video documentation, and retailer contact logs are delivered every 24 hours.",
    },
  ],
}

export function ServicePageLayout({
  title,
  heroSubheadline,
  heroImage,
  detailedOverview,
  whatWeOffer,
  ourApproach,
  portfolioItems,
  testimonial,
  faqs,
  ctaHeadline,
  ctaSubheadline,
}: ServicePageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeCapability, setActiveCapability] = useState(0)
  const capabilitySectionRef = useRef<HTMLElement>(null)
  const capabilityRowRefs = useRef<(HTMLDivElement | null)[]>([])

  const resolvedFaqs = faqs || DEFAULT_FAQS[title] || DEFAULT_FAQS["Corporate Events"]
  const serviceImages = SERVICE_CAPABILITY_IMAGES[title] || SERVICE_CAPABILITY_IMAGES["Corporate Events"]

  // Synchronize active capability image on scroll (works natively on mobile, tablet & desktop)
  useEffect(() => {
    // 1. IntersectionObserver for seamless mobile viewport tracking
    let observer: IntersectionObserver | null = null
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idxAttr = entry.target.getAttribute("data-index")
              if (idxAttr !== null) {
                const index = parseInt(idxAttr, 10)
                if (!isNaN(index)) {
                  setActiveCapability(index)
                }
              }
            }
          })
        },
        {
          root: null,
          rootMargin: "-28% 0px -28% 0px",
          threshold: [0.1, 0.5],
        }
      )

      capabilityRowRefs.current.forEach((el) => {
        if (el) observer?.observe(el)
      })
    }

    // 2. Fallback scroll handler with requestAnimationFrame
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const centerY = windowHeight * 0.5

        let closestIndex = 0
        let minDistance = Infinity

        capabilityRowRefs.current.forEach((el, index) => {
          if (!el) return
          const r = el.getBoundingClientRect()
          const elCenter = r.top + r.height / 2
          const distance = Math.abs(elCenter - centerY)
          if (distance < minDistance) {
            minDistance = distance
            closestIndex = index
          }
        })

        setActiveCapability(closestIndex)
        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <>
      {/* 1. Hero Section - Panel-less Cinematic Full Bleed */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 bg-black">
        {/* Cinematic Backdrop Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-90"
          style={{ backgroundImage: `url("${heroImage}")` }}
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            PRODUCTION DISCIPLINE
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/70 tracking-[0.2em] uppercase max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md mb-10">
            {heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-black font-bold px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group w-full sm:w-auto"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Explore Capabilities</span>
            </a>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 font-medium">
            SCROLL
          </span>
          <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
        </div>
      </section>

      {/* 2. Service Overview - Editorial 2-Column Minimal Architecture */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column - Editorial Overview */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                  OVERVIEW
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-6">
                  Architecting Experiences With Institutional Rigor
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed">
                  {detailedOverview.intro}
                </p>
              </div>

              {/* Panel-less Editorial Sub-blocks with hairline dividers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2">
                    Target Demographic
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {detailedOverview.whoFor}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2">
                    The Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {detailedOverview.problemSolved}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Composition with Unboxed Philosophy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Unboxed Why Us statement */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-base font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2">
                  Why Pride Eventz?
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {detailedOverview.whyUs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / What We Deliver - Interactive Hover & Scroll Background Concept (Matching About Page) */}
      <section
        id="capabilities"
        ref={capabilitySectionRef}
        className="relative py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden"
      >
        {/* Dynamic Full-Bleed Background Images Changing on Scroll / Hover */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {whatWeOffer.map((item, index) => {
            const isActive = activeCapability === index
            const bgImage = item.image || serviceImages[index % serviceImages.length]
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  isActive ? "opacity-80 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={bgImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            )
          })}

          {/* Directional Vignette Gradient: Text on left stays 100% crisp, photo illuminates on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/35 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] drop-shadow-md">
              What We Deliver
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light mt-4 max-w-xl leading-relaxed drop-shadow-sm">
              Scroll or hover through each capability to explore our technical specifications and execution scope.
            </p>
          </div>

          {/* Non-Panel Interactive Editorial Capability List */}
          <div className="divide-y divide-white/15 border-y border-white/15">
            {whatWeOffer.map((item, index) => {
              const isActive = activeCapability === index
              const stepNumber = (index + 1).toString().padStart(2, "0")
              return (
                <div
                  key={index}
                  ref={(el) => {
                    capabilityRowRefs.current[index] = el
                  }}
                  data-index={index}
                  onMouseEnter={() => setActiveCapability(index)}
                  onFocus={() => setActiveCapability(index)}
                  onTouchStart={() => setActiveCapability(index)}
                  className={`group py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8 transition-all duration-300 block -mx-4 px-4 rounded-xl cursor-default ${
                    isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span
                      className={`text-sm sm:text-base font-mono font-bold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-white/40 group-hover:text-primary"
                      }`}
                    >
                      {stepNumber}
                    </span>
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.02em] [word-spacing:0.16em] transition-colors duration-300 drop-shadow-sm ${
                          isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/50 font-light mt-1.5 lg:hidden leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Description for Desktop */}
                  <div className="hidden lg:block text-right">
                    <p
                      className={`text-xs font-light max-w-sm leading-relaxed transition-colors duration-300 drop-shadow-sm ${
                        isActive ? "text-white/90" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES / Featured Productions (Moved ABOVE Methodology) */}
      {portfolioItems && portfolioItems.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 pb-10 border-b border-white/10">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                  CASE STUDIES
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em]">
                  Featured Productions
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary hover:text-white transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Panel-less Projects Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {portfolioItems.map((item, index) => (
                <div key={index} className="group flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl mb-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.14em] mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {item.result && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                      <span className="text-primary font-semibold">Result</span>
                      <span className="text-white/80">{item.result}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. METHODOLOGY / Execution Pipeline (Numbered Steps Restored) */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-10 border-b border-white/10">
            <div className="max-w-2xl">
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                METHODOLOGY
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em]">
                Execution Pipeline
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
              Disciplined five-stage execution pipeline ensuring zero downtime, fail-safe redundancy, and complete stakeholder alignment.
            </p>
          </div>

          {/* Panel-less 5-stage horizontal step flow with Restored Numbering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {ourApproach.map((step, index) => (
              <div
                key={index}
                className="pt-6 border-t border-white/10 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Testimonial - Refined & A Bit Smaller */}
      {testimonial && testimonial.quote && (
        <section className="py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Quote className="w-4 h-4" />
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic text-white/90 leading-relaxed [word-spacing:0.14em] max-w-3xl mx-auto mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary">
              {testimonial.client}
            </p>
          </div>
        </section>
      )}

      {/* 7. Interactive FAQ Section - 2-Column with Content on Right Side & Compact Typography */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Section Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                FREQUENTLY ASKED
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-4">
                Production Inquiries
              </h2>
              <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
                Key operational, statutory, and logistical questions regarding {title.toLowerCase()} execution.
              </p>
            </div>

            {/* Right Column: Panel-less Hairline Accordion (A Bit Smaller) */}
            <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
              {resolvedFaqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={index} className="transition-colors duration-200">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-5 sm:py-6 flex items-center justify-between text-left group gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300">
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-2xl pr-8 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Minimal Editorial CTA - Matching Home & About */}
      <section className="relative py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black border-t border-white/10">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            PARTNER WITH PRIDE EVENTZ
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-6">
            {ctaHeadline}
          </h2>

          {ctaSubheadline && (
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {ctaSubheadline}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-black font-bold px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group w-full sm:w-auto"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919895690349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
