"use client"

const leadershipDivisions = [
  {
    role: "Scenography",
    head: "Arun Menon",
    title: "Founder & Creative Director",
    experience: "15+ Years Mastery",
    description: "Spearheading high-concept 3D scenic architecture, lighting dramaturgy, and overarching stage vision.",
  },
  {
    role: "Operations",
    head: "Priya Sharma",
    title: "Head of Operations",
    experience: "10+ Years Field Execution",
    description: "Directing technical rehearsals, vendor negotiations, stage fabrication crews, and safety protocol adherence.",
  },
  {
    role: "Acoustics & AV",
    head: "Vikram Kumar",
    title: "Technical Production Lead",
    experience: "12+ Years Audio Systems",
    description: "Engineering fail-safe line array acoustics, high-density LED matrix networks, and synchronized show-control.",
  },
  {
    role: "Client Care",
    head: "Anjali Nair",
    title: "Director of Client Partnerships",
    experience: "8+ Years Relations",
    description: "Ensuring frictionless communication, real-time status reporting, and tailored experiential customization.",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              PRODUCTION LEADERSHIP
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em]">
              The Specialists Behind The Stage
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
            Seasoned show directors and technical leads dedicated to delivering uncompromising institutional quality.
          </p>
        </div>

        {/* 4 Clean Minimal Columns (Panel-less, Minimalist) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {leadershipDivisions.map((division) => (
            <div
              key={division.role}
              className="pt-6 border-t border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.12em] mb-1">
                  {division.head}
                </h3>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-4 font-mono">
                  {division.title} · {division.role}
                </p>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6">
                  {division.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
                {division.experience}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
