"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { MissionStatement } from "@/components/home/mission-statement"
import { ServicesOverview } from "@/components/home/services-overview"
import { FeaturedWorks } from "@/components/home/featured-works"
import { TeamStatement } from "@/components/home/team-statement"
import { StatsSection } from "@/components/home/stats-section"
import { ClientLogos } from "@/components/home/client-logos"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialSlider } from "@/components/portfolio/testimonial-slider"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight > 0) {
        setScrollProgress((window.scrollY / windowHeight) * 100)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* Precision Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroCarousel />

      {/* 3. Mission Statement (Who We Are) */}
      <MissionStatement />

      {/* 4. Services Overview (All 8 Offerings - End-to-End Event Production) */}
      <ServicesOverview />

      {/* 5. Featured Productions (6 Marquee Works directly under End-to-End) */}
      <FeaturedWorks />

      {/* 6. Team Statement (Architectural Warm Stone Contrast Panel) */}
      <TeamStatement />

      {/* 7. Stats Section (Architectural Numerals & Live Counter) */}
      <StatsSection />

      {/* 8. Client Logos */}
      <ClientLogos />

      {/* 9. Process Section (How we work.) */}
      <ProcessSection />

      {/* 10. Testimonials (Client Voices / What Our Clients Say - directly below How we work.) */}
      <TestimonialSlider />

      {/* 11. CTA Section */}
      <CTASection />

      {/* 12. Footer */}
      <Footer />
    </main>
  )
}
