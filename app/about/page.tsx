import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutIntroduction } from "@/components/about/about-introduction"
import { ValuesSection } from "@/components/about/values-section"
import { ServicesCarouselSection } from "@/components/about/services-carousel-section"
import { ProcessSection } from "@/components/about/process-section"
import { ExpertiseSection } from "@/components/about/expertise-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { TestimonialQuote } from "@/components/about/testimonial-quote"

export const metadata: Metadata = {
  title: "About Us | 15+ Years of Live Production Mastery | Pride Eventz",
  description: "Learn about Pride Eventz: 15+ years of live spectacle production, 2,100+ executed projects across India, 100% in-house staging, sound, and lighting infrastructure.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Pride Eventz | 15+ Years of Live Production Mastery",
    description: "Discover our journey, staging power, master directors, and proven architectural methodology for high-impact live events.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Introduction & 3 Stacked White Metrics */}
      <AboutIntroduction />

      {/* 3. Core Ethos / Vision & Mission */}
      <ValuesSection />

      {/* 4. Production Capabilities (All 8 Services with Dynamic Hover Background Images) */}
      <ServicesCarouselSection />

      {/* 5. Proven Architectural Methodology */}
      <ProcessSection />

      {/* 6. Technical Competence & Institutional Rigor (Minimal, Panel-less) */}
      <ExpertiseSection />

      {/* 7. Milestones of Excellence (Panel-less with Dynamic Dropdown Line on Scroll) */}
      <TimelineSection />

      {/* 8. Powerful Brand Quote with Direct "Discuss Your Project" CTA */}
      <TestimonialQuote />

      <Footer />
    </main>
  )
}
