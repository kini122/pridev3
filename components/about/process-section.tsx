"use client"

import { useEffect, useRef, useState } from "react"

const processSteps = [
  {
    phase: "01",
    title: "Discussion",
    description:
      "Every exceptional experience begins with your vision. We take the time to understand your goals and craft every detail around your unique needs.",
  },
  {
    phase: "02",
    title: "Planning & Coordination",
    description:
      "Detailed planning, vendor coordination, timeline management, and logistics ensure everything runs smoothly.",
  },
  {
    phase: "03",
    title: "Execution & Follow-up",
    description:
      "Flawless execution on the day with our dedicated team on-site, followed by post-event support and feedback.",
  },
]

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">Methodology</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-6">
              How We Work.
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-md font-light">
              Our proven architectural process ensures every event is executed with mathematical precision and striking creativity.
            </p>
          </div>

          {/* Right Column: Architectural Steps */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col">
              {processSteps.map((step, index) => (
                <div
                  key={step.phase}
                  className="group relative border-t border-white/10 py-12 md:py-16 transition-all duration-500 hover:bg-white/[0.015] px-4 -mx-4 rounded-xl"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="md:w-24 shrink-0">
                      <span className="text-5xl md:text-6xl font-mono font-light text-white/20 group-hover:text-primary transition-colors duration-500">
                        {step.phase}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase [word-spacing:0.14em] tracking-[0.02em] group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-base text-white/60 leading-relaxed max-w-2xl font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/10 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
