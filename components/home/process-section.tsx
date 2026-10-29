"use client"

import { useState, useEffect, useRef } from "react"

const processSteps = [
  {
    phase: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your goals, vision, and budget to craft a tailored plan and timeline for your event.",
    image: "/home/hero/fmcg-product-launch-event.jpg",
  },
  {
    phase: "02",
    title: "Planning & Design",
    description:
      "Our team designs the experience—venue, décor, vendors, and schedules—ensuring every detail aligns with your brand and style.",
    image: "/home/hero/hero-motocorp-annual-conference-stage-setup.jpg",
  },
  {
    phase: "03",
    title: "Execution & Coordination",
    description:
      "On the day, we manage operations end-to-end: setup, logistics, vendor coordination, and guest experience.",
    image: "/home/hero/company-anniversary-gala-elegant-setup.jpg",
  },
  {
    phase: "04",
    title: "Post-Event Services",
    description:
      "We wrap up with feedback, media delivery, and post-event reporting to measure success and capture memories.",
    image: "/home/hero/premium-party-atmosphere.jpg",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [parallaxY, setParallaxY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()

      // Parallax scroll movement for background images
      const sectionHeight = rect.height
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight || 1)))
      setParallaxY((progress - 0.5) * 80)

      // Active step calculation based on viewport center
      const centerY = window.innerHeight * 0.45
      let closestIndex = 0
      let minDistance = Infinity

      stepRefs.current.forEach((el, index) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const elCenter = r.top + r.height / 2
        const distance = Math.abs(elCenter - centerY)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setActiveStep(closestIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 select-text"
    >
      {/* Background Images that change as steps change as per scroll transition */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {processSteps.map((step, index) => (
          <div
            key={step.phase}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out ${
              activeStep === index
                ? "opacity-70 scale-105"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${step.image})`,
              transform: `scale(${activeStep === index ? 1.05 : 1}) translateY(${parallaxY}px)`,
              transition: "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms ease-out",
            }}
          />
        ))}
        {/* Tint overlay: keeps images clearly visible while ensuring text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pinned Header (Locks in place when section enters, stays pinned till section ends) */}
          <div className="lg:col-span-5 sticky top-24 lg:top-28 h-fit self-start z-20">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4 drop-shadow-sm">
              Operational Methodology
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] mb-6 drop-shadow-md">
              How we work.
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-md font-light mb-8 drop-shadow-sm">
              Our proven architectural process ensures every event is executed with mathematical precision and striking creativity.
            </p>

            {/* Interactive Phase Indicator */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/15">
              {processSteps.map((step, index) => (
                <button
                  key={step.phase}
                  onClick={() => handleStepClick(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === index
                      ? "w-12 bg-primary shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Jump to phase ${step.phase}`}
                />
              ))}
              <span className="text-xs font-mono text-white/60 ml-2 font-bold tracking-wider">
                Phase 0{activeStep + 1} / 04
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Steps */}
          <div className="lg:col-span-7 z-10">
            <div className="flex flex-col">
              {processSteps.map((step, index) => {
                const isActive = activeStep === index
                return (
                  <div
                    key={step.phase}
                    ref={(el) => {
                      stepRefs.current[index] = el
                    }}
                    onClick={() => handleStepClick(index)}
                    className={`group relative border-t border-white/20 py-20 sm:py-32 transition-all duration-500 cursor-pointer ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-75"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                      <div className="md:w-28 shrink-0">
                        <span
                          className={`text-6xl sm:text-7xl md:text-8xl font-mono font-black transition-all duration-500 ${
                            isActive
                              ? "text-primary drop-shadow-[0_0_28px_rgba(249,115,22,0.5)] scale-105"
                              : "text-white/25 group-hover:text-primary/60"
                          }`}
                        >
                          {step.phase}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight transition-colors duration-300 drop-shadow-sm ${
                            isActive ? "text-white" : "text-white/70 group-hover:text-white"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-light drop-shadow-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="border-t border-white/20 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
