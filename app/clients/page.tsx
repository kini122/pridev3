"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients/clients-hero"
import { ClientLogosCarousel } from "@/components/clients/client-logos-carousel"
import { FeaturedClientsGrid } from "@/components/clients/featured-clients-grid"
import { StatsIndicators } from "@/components/clients/stats-indicators"
import { TestimonialsSection } from "@/components/clients/testimonials-section"
import { ClientSuccessStories } from "@/components/clients/client-success-stories"
import { PartnershipTiers } from "@/components/clients/partnership-tiers"
import { ClientsCTA } from "@/components/clients/clients-cta"

export default function ClientsPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      setScrollProgress((scrolled / windowHeight) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <ClientsHero />
      <ClientLogosCarousel />
      <FeaturedClientsGrid />
      <StatsIndicators />
      <TestimonialsSection />
      <ClientSuccessStories />
      <PartnershipTiers />
      <ClientsCTA />
      <Footer />
    </main>
  )
}
