"use client"

import { Users, Sparkles, Shield, Headset } from "lucide-react"

const leadershipDivisions = [
  {
    role: "Creative Direction & Scenography",
    head: "Arun Menon",
    title: "Founder & Creative Director",
    experience: "15+ Years Industry Leadership",
    description: "Spearheading high-concept 3D scenic architecture, lighting dramaturgy, and overarching event vision.",
    icon: Sparkles,
  },
  {
    role: "On-Ground Production & Operations",
    head: "Priya Sharma",
    title: "Head of Operations",
    experience: "10+ Years Field Execution",
    description: "Directing technical rehearsals, vendor negotiations, stage fabrication crews, and safety protocol adherence.",
    icon: Shield,
  },
  {
    role: "Audio-Visual & Technical Systems",
    head: "Vikram Kumar",
    title: "Technical Production Lead",
    experience: "12+ Years Acoustic & AV",
    description: "Engineering fail-safe line array acoustics, high-density LED matrix networks, and synchronized show-control.",
    icon: Users,
  },
  {
    role: "Corporate Client Concierge",
    head: "Anjali Nair",
    title: "Director of Client Partnerships",
    experience: "8+ Years Enterprise Relations",
    description: "Ensuring frictionless communication, real-time status reporting, and tailored experiential customization.",
    icon: Headset,
  },
]

export function TeamSection() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Production Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            The Specialists Behind The Spectacle
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Seasoned directors and technical leads dedicated to delivering uncompromising institutional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipDivisions.map((division) => {
            const Icon = division.icon
            return (
              <div
                key={division.role}
                className="group p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
                    {division.experience}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {division.head}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {division.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {division.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40 text-xs font-medium text-foreground/70">
                  Domain: <span className="text-foreground font-semibold">{division.role}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
