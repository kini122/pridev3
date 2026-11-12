"use client"

export function ClientsHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-black">
      {/* Background Image with Cinematic Deep Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
        style={{
          backgroundImage: "url('/clients/hero/concert-stage-lighting-event.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Simple Clean Overline */}
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4">
          ESTEEMED CLIENTS &amp; PARTNERSHIPS
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase mb-6 leading-[0.95] tracking-tight">
          Trusted By India&apos;s <br />
          <span className="text-white/40">Foremost Brands</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Delivering turnkey event management, marquee brand activations, and large-scale summits with relentless consistency and poise across India.
        </p>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-white/40 pt-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
