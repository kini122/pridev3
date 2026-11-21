import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Event Production Services | Corporate, Weddings, Concerts, MICE | Pride Eventz",
  description: "Explore Pride Eventz's end-to-end production disciplines: corporate events, luxury destination weddings, arena concerts, international MICE conferences, exhibitions, brand activations, and rural marketing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Event Production Services | Pride Eventz",
    description: "End-to-end event management, master stagecraft, arena audio-visuals, and experiential activations across India.",
    url: "/services",
  },
}

const services = [
  {
    phase: "01",
    title: "Corporate Events",
    description: "Professional corporate gatherings — product launches, team events, annual functions — executed with precision and creativity.",
    href: "/services/corporate-events",
    image: "/corporate/hero/corporate-event-presentation-stage-audience-pink-l.jpg",
  },
  {
    phase: "02",
    title: "Destination Weddings",
    description: "Create magical wedding moments with comprehensive luxury planning, bespoke design, and flawless execution.",
    href: "/services/destination-weddings",
    image: "/beach-wedding-setup.jpg",
  },
  {
    phase: "03",
    title: "Concerts",
    description: "Large-scale live concert production — encompassing stage design, sound, lighting, and comprehensive crowd management.",
    href: "/services/concerts",
    image: "/concert-stage-lighting-event.jpg",
  },
  {
    phase: "04",
    title: "Conferences & MICE",
    description: "End-to-end management of meetings, incentives, conferences, and exhibitions with business-class execution.",
    href: "/services/conferences-mice",
    image: "/conference-room-setup-corporate-event.jpg",
  },
  {
    phase: "05",
    title: "Exhibitions",
    description: "Showcase your brand with stunning custom exhibition setups, functional spaces, and immersive experiences.",
    href: "/services/exhibitions",
    image: "/exhibition-trade-show-atomfrost.jpg",
  },
  {
    phase: "06",
    title: "Brand Activation",
    description: "Impactful promotional events and ground-level experiential activations that create real consumer connections.",
    href: "/services/brand-activation",
    image: "/tech-brand-activation-event.jpg",
  },
  {
    phase: "07",
    title: "Rural Marketing",
    description: "Specialised on-ground campaigns reaching Tier 2, Tier 3 cities and rural markets across India with cultural relevance.",
    href: "/services/rural-marketing",
    image: "/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Services Introduction (Hero) */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 md:pt-40 md:pb-24 relative overflow-hidden bg-black">
        {/* Subtle atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end pb-10 border-b border-white/10">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                Disciplines &amp; Scale
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
                Comprehensive <br className="hidden md:block" />
                <span className="text-white/95">Event Services.</span>
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-light">
              We specialize in creating customized solutions that align with your vision and budget. From intimate corporate gatherings to grand destination weddings, we deliver excellence at every scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services List (Architectural Layout) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={service.phase}
                className="group relative border-t border-white/10 py-12 md:py-16 transition-all duration-500 ease-out hover:bg-white/[0.015] block px-4 -mx-4 rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Phase Number */}
                  <div className="md:col-span-2">
                    <span className="text-5xl md:text-6xl font-mono font-light text-white/20 group-hover:text-primary transition-colors duration-500">
                      {service.phase}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary group-hover:text-white transition-colors">
                      <span>Explore Division</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* Image Reveal */}
                  <div className="md:col-span-5 h-64 md:h-80 w-full overflow-hidden rounded-2xl relative border border-white/10 bg-zinc-900 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:opacity-75 transition-opacity duration-500 z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-white/10 w-full" />
          </div>
        </div>
      </section>

      {/* CTA Section - Standardized to Home CTA */}
      <section className="relative py-16 sm:py-22 lg:py-26 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black border-y border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            Partner With Pride Eventz
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] mb-6">
            Ready to Plan Your Next Grand Event?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let&apos;s discuss how we can turn your creative vision into an unforgettable live experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-black font-bold px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group w-full sm:w-auto"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="tel:+919895690349"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Call Us: +91 98956 90349</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
