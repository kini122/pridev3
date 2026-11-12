"use client"

const capabilities = [
  {
    index: "01",
    tag: "SCENOGRAPHY",
    title: "Stage Architecture & Scenography",
    metric: "100% In-House 3D Renders",
    description: "Custom stage fabrication, thematic backdrops, and immersive environmental branding tailored strictly to venue dimensions.",
  },
  {
    index: "02",
    tag: "ACOUSTICS",
    title: "Acoustic Engineering & Light Shows",
    metric: "Concert-Grade Rigs",
    description: "Multi-point line array acoustics, intelligent moving heads, laser programming, and live broadcast audio mixing.",
  },
  {
    index: "03",
    tag: "COMPLIANCE",
    title: "Operational & Statutory Compliance",
    metric: "Zero-Incident Safety Standard",
    description: "Local government liaison, crowd safety zoning, fire & electrical permits, and certified on-site medical protocols.",
  },
  {
    index: "04",
    tag: "ACTIVATIONS",
    title: "Experiential Ground Activations",
    metric: "Tier 1 to Tier 3 Reach",
    description: "High-impact consumer engagement roadshows, promotional setups, and interactive product demo pavilions across India.",
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column - Editorial Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              TECHNICAL COMPETENCE
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-6">
              Institutional Production Rigor
            </h2>

            <p className="text-sm sm:text-base text-white/60 mb-6 leading-relaxed font-light">
              Over fifteen years of high-pressure live show execution have honed our capabilities into an exact science. We eliminate the guesswork from live productions.
            </p>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
              Our multidisciplinary engineers, show callers, and project managers work under synchronized run-sheets to ensure your event runs smoothly from the first soundcheck to the final applause.
            </p>
          </div>

          {/* Right Column - Minimal, Panel-less Capabilities List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="py-8 sm:py-10 group"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-[0.02em] [word-spacing:0.14em] mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-white/60 font-light leading-relaxed max-w-xl mb-3">
                  {item.description}
                </p>

                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary/80">
                  {item.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
