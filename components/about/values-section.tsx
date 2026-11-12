"use client"

export function ValuesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            CORE ETHOS
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] mb-6">
            Values That Drive Every Production
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed">
            Live events are rarely just dates on a calendar. They are turning points in a brand&apos;s story, sacred family beginnings, and collective human gatherings. We build every stage with that gravity in mind.
          </p>
        </div>

        {/* Vision & Mission - 2 Clean Architectural Editorial Columns (Non-panel, Minimal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-16 border-b border-white/10">
          {/* Vision */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase leading-[1.1] [word-spacing:0.16em]">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Creating landmarks of human connection. We envision a world where live events transcend corporate routines and standard decor. Our vision is to craft stages that stir genuine awe — where artistry, sound, and lighting come together seamlessly so audiences feel truly inspired and deeply connected.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase leading-[1.1] [word-spacing:0.16em]">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Taking full ownership so you can be present. Our mission is to shoulder the entirety of operational complexity so our clients can immerse themselves in their own celebration. We sweat every safety protocol, backstage timeline, and acoustic cue — delivering calm, reliable execution with authentic warmth.
            </p>
          </div>
        </div>

        {/* 3 Core Human Principles - Minimal Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16">
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
              We Listen Before We Build
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Every celebration has its own soul. We never copy-paste formats. We listen deeply to understand your people, your purpose, and the feeling you want to leave behind.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
              Quiet, Unshakeable Reliability
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              When the spotlight turns on, there are no second takes. Our team prepares with relentless discipline so that when curtain rises, everything feels effortless.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
              Pride In Every Detail
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              From the neatness of backstage cabling to the exact hue of stage wash, we take honest pride in doing things the right way, without cutting corners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
