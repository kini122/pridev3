"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { MissionStatement } from "@/components/home/mission-statement"
import { ServicesOverview } from "@/components/home/services-overview"
import { TeamStatement } from "@/components/home/team-statement"
import { StatsSection } from "@/components/home/stats-section"
import { ClientLogos } from "@/components/home/client-logos"
import { ProcessSection } from "@/components/home/process-section"
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

      {/* 4. Services Overview (All 8 Offerings) */}
      <ServicesOverview />

      {/* 5. Team Statement (Architectural Warm Stone Contrast Panel) */}
      <TeamStatement />

      {/* 6. Stats Section (Architectural Numerals & Live Counter) */}
      <StatsSection />

      {/* 7. Client Logos (All 16 Logos Maintained) */}
      <ClientLogos />

      {/* 8. Process Section (Methodology) */}
      <ProcessSection />

      {/* 9. CTA Section (Everything you need to captivate your audience) */}
      <CTASection />

      {/* 10. Footer */}
      <Footer />
    </main>
  )
}

