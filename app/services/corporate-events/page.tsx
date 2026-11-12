import { Metadata } from "next"
import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Corporate Event Management & Summits | Pride Eventz",
  description: "High-level AGMs, corporate galas, award ceremonies, and leadership summits executed with precision across South India and pan-India.",
  alternates: {
    canonical: "/services/corporate-events",
  },
  openGraph: {
    title: "Corporate Event Management | Pride Eventz",
    description: "Business-class corporate events, gala dinners, and leadership summits with zero technical failure.",
    url: "/services/corporate-events",
  },
}

export default function CorporateEventsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <ServicePageLayout
        title="Corporate Events"
        heroSubheadline="Elevating corporate gatherings with flawless execution, premium production, and impactful brand experiences."
        heroImage="/corporate-presentation-pidilite-brands-showcase.jpg"
        detailedOverview={{"intro": "At Pride Eventz, we understand that corporate events are a direct reflection of your brand's prestige and values. From high-stakes product launches to engaging annual meetings, we provide end-to-end event management that ensures every detail is professionally handled.", "whoFor": "For enterprise businesses, regional corporate offices, and fast-growing companies looking to make a lasting impression on employees, stakeholders, and clients.", "problemSolved": "We eliminate the stress of logistics, AV coordination, and vendor management, allowing your team to focus on business objectives while we handle the execution.", "whyUs": "With over a decade of experience across India, our dedicated corporate team guarantees business-class execution with absolute precision."}}
        whatWeOffer={[{"title": "Product Launches", "description": "High-impact unveilings that generate buzz and media coverage for your new products."}, {"title": "Annual Meetings & Townhalls", "description": "Seamlessly produced internal gatherings with flawless audio-visual setups."}, {"title": "Employee Engagement", "description": "Team building and celebration events designed to boost morale and company culture."}, {"title": "Award Ceremonies", "description": "Elegant gala dinners and recognition events honoring your top performers."}, {"title": "AV & Stage Production", "description": "State-of-the-art lighting, sound, LED screens, and custom stage fabrication."}, {"title": "Guest & VIP Handling", "description": "Professional hospitality services including transport, accommodation, and concierge."}]}
        ourApproach={[{"title": "Discovery & Briefing", "description": "Understanding your corporate objectives, brand guidelines, and audience expectations."}, {"title": "Planning & Creative", "description": "Developing thematic concepts, 3D stage renders, and comprehensive event schedules."}, {"title": "Production & Sourcing", "description": "Coordinating with premium vendors, fabricating stages, and testing all technical setups."}, {"title": "Event Execution", "description": "On-ground management by experienced show callers and floor managers."}, {"title": "Review & Reporting", "description": "Post-event debriefs, media collation, and feedback analysis."}]}
        keyHighlights={[{"title": "End-to-End Execution", "description": "From concept creation to tear-down, we handle every single aspect."}, {"title": "Technical Precision", "description": "Fail-safe AV setups ensuring your presentations run without a hitch."}, {"title": "Brand Alignment", "description": "Strict adherence to corporate identity guidelines in all visual elements."}, {"title": "Scalability", "description": "Capable of managing intimate board meetings or massive 5000+ attendee summits."}]}
        portfolioItems={[
          {"title": "Pidilite Brands Showcase", "category": "Corporate", "description": "A comprehensive brand showcase featuring multiple product lines and interactive displays.", "image": "/corporate-presentation-pidilite-brands-showcase.jpg", "result": "1,200+ attendees with seamless execution."},
          {"title": "Idea Telecom Launch", "category": "Corporate", "description": "High-energy stage branding and corporate event for regional team members.", "image": "/idea-telecom-corporate-event-stage-branding.jpg", "result": "Record-breaking employee engagement scores."},
          {"title": "Tech Product Launch Summit", "category": "Corporate", "description": "An immersive national product unveiling featuring kinetic stagecraft and multi-screen LED sync.", "image": "/tech-product-launch-event-stage-lighting.jpg", "result": "1,800+ executive delegates & zero latency."}
        ]}
        testimonial={{"client": "VP of Marketing, Leading FMCG Brand", "quote": "Pride Eventz delivered our annual meet with absolute perfection. Their attention to technical details and flow was outstanding."}}
        ctaHeadline="Ready to Plan Your Next Corporate Event?"
        ctaSubheadline="Connect with our corporate events team to discuss your objectives and receive a tailored proposal."
      />
      <Footer />
    </main>
  )
}
