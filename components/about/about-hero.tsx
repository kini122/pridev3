import { ChevronDown } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 bg-black">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-90"
        style={{
          backgroundImage: 'url("/about/hero/luxury-event-venue-with-elegant-decorations.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4">
          Established 2014 • Kerala, India
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase leading-[1.08] [word-spacing:0.18em] tracking-[0.02em] drop-shadow-2xl">
          Crafting Unforgettable Events <br />
          <span className="text-white/95">With Style &amp; Spark.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/70 tracking-[0.2em] uppercase max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md mb-8">
          Turnkey Event Production • Experiential Design • Pan-India
        </p>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 font-medium">
          SCROLL
        </span>
        <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
      </div>
    </section>
  )
}
