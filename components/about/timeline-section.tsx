"use client"

const milestones = [
  {
    year: "2014",
    title: "Founded in Kerala",
    description: "Pride Eventz was established with an uncompromising vision to revolutionize stagecraft and event management in Kerala.",
    image: "/about/timeline/2010-founding-event.jpg",
  },
  {
    year: "2017",
    title: "Pan-India Corporate Expansions",
    description: "Expanded our operations to manage high-stakes corporate summits, annual shareholder meets, and Tier-1 brand activations across India.",
    image: "/about/timeline/corporate-event-2013.jpg",
  },
  {
    year: "2020",
    title: "Hybrid & Virtual Broadcasts",
    description: "Pioneered broadcast-quality virtual stages and hybrid live-streaming ecosystems during unprecedented global logistical constraints.",
    image: "/about/timeline/virtual-event-2020.jpg",
  },
  {
    year: "2024",
    title: "2100+ Projects Milestone",
    description: "Celebrated our 2100+ projects milestone, solidifying our reputation as Kerala's leading turnkey event and wedding production powerhouse.",
    image: "/about/timeline/celebration-200-projects.jpg",
  },
  {
    year: "2026",
    title: "Global Scale & Stadium Tours",
    description: "Executing large-format stadium concert engineering, mega expo pavilions, and international brand activations across borders.",
    image: "/about/timeline/celebration-100-events.jpg",
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our History</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">Milestones of Excellence</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">From an ambitious local crew to one of India&apos;s premier full-service event institutions.</p>
        </div>

        <div className="relative">
          {/* Timeline Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={milestone.year} className="relative">
                  {/* Center Dot for Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-20" />

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                    {/* Content Card */}
                    <div className={`order-2 ${isEven ? "md:order-1 md:text-right md:pr-10" : "md:order-2 md:text-left md:pl-10"}`}>
                      <div className="bg-card/70 backdrop-blur-sm p-7 rounded-2xl border border-border/60 hover:border-primary/50 transition-all duration-300 shadow-md">
                        <span className="text-2xl font-extrabold text-primary block mb-1">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Image Card */}
                    <div className={`order-1 ${isEven ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10"}`}>
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-card group shadow-lg">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
