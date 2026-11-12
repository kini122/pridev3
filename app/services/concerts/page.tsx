import { Metadata } from "next"
import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Arena Concerts & Live Music Festivals | Pride Eventz",
  description: "Stadium-scale concerts, festivals, concert sound engineering, intelligent light shows, and master security planning across India.",
  alternates: {
    canonical: "/services/concerts",
  },
  openGraph: {
    title: "Arena Concerts & Live Music Festivals | Pride Eventz",
    description: "Stadium concert sound engineering, lighting design, artist hospitality riders, and crowd flow control.",
    url: "/services/concerts",
  },
}

export default function ConcertsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <ServicePageLayout
        title="Live Concerts"
        heroSubheadline="Producing high-energy live music events with massive stage production and flawless crowd management."
        heroImage="/live-performance-with-professional-lighting.jpg"
        detailedOverview={{"intro": "Live concerts demand an entirely different level of expertise. From massive technical riders to complex crowd flow dynamics, Pride Eventz has the experience to execute stadium-scale concerts and intimate live gigs safely and spectacularly.", "whoFor": "Music promoters, artists, corporate sponsors, and festival organizers looking to host large-scale public or private entertainment events.", "problemSolved": "We mitigate the massive risks associated with large crowds and live technical production by implementing rigorous safety protocols and employing top-tier audio-visual engineers.", "whyUs": "Our production team understands the technical language of international artist riders and has a proven track record of securing necessary local permissions swiftly."}}
        whatWeOffer={[{"title": "Stage Production", "description": "Massive trussing, custom stage fabrication, and dynamic LED backdrops."}, {"title": "Sound & Lighting", "description": "Line-array audio systems and intelligent lighting rigs programmed for impact."}, {"title": "Artist Management", "description": "Handling hospitality riders, green rooms, transport, and scheduling for performers."}, {"title": "Permissions & Licensing", "description": "Securing all necessary local, police, and entertainment tax clearances."}, {"title": "Crowd Management", "description": "Strategic barricading, security deployment, and safe entry/exit flow planning."}, {"title": "Ticketing Integration", "description": "Setting up box offices and integrating with online ticketing platforms."}]}
        ourApproach={[{"title": "Feasibility Study", "description": "Analyzing venue capacities, acoustics, and infrastructural requirements."}, {"title": "Technical Planning", "description": "Mapping out sound plots, lighting grids, and stage engineering."}, {"title": "Safety & Security", "description": "Developing comprehensive evacuation and crowd control protocols."}, {"title": "Production Build", "description": "Rigging, testing, and sound checks leading up to the main event."}, {"title": "Show Calling", "description": "Live coordination of lights, sound, visuals, and artist cues during the performance."}]}
        keyHighlights={[{"title": "Safety First", "description": "Rigorous structural integrity checks for all staging and trussing."}, {"title": "Technical Excellence", "description": "Partnering with the country's top sound engineers and lighting designers."}, {"title": "VIP Experiences", "description": "Creating premium VVIP lounges and viewing decks with dedicated F&B."}, {"title": "Sponsor Integration", "description": "Ensuring maximum visibility and engagement for event sponsors."}]}
        portfolioItems={[
          {"title": "Arena Rock Concert", "category": "Concert", "description": "Massive stadium production with extensive pyrotechnics and intelligent lighting.", "image": "/live-performance-with-professional-lighting.jpg", "result": "Sold out crowd of 15,000+ safely managed."},
          {"title": "Corporate Music Festival", "category": "Concert", "description": "A high-energy private concert featuring top-tier playback singers.", "image": "/corporate-event-with-crowd-stage-lighting.jpg", "result": "Electrifying atmosphere with zero technical faults."},
          {"title": "Stadium Live Festival", "category": "Concert", "description": "Concert-grade line array acoustic systems, intelligent laser matrices, and perimeter crowd zoning.", "image": "/concert-event-stage-with-crowd-pink-lighting.jpg", "result": "22,000+ music fans safely managed across 2 days."}
        ]}
        testimonial={{"client": "Event Promoter, Live Nation India", "quote": "Pride Eventz handles the technical backend so flawlessly that the artists and promoters can just focus on the show. Highly recommended."}}
        ctaHeadline="Planning a Massive Live Event?"
        ctaSubheadline="Connect with our concert production specialists to review your technical riders and venue requirements."
      />
      <Footer />
    </main>
  )
}
