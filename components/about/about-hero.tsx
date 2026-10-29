import { MapPin, Target, Sparkles } from "lucide-react"

export function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/about/hero/luxury-event-venue-with-elegant-decorations.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
          Crafting unforgettable events with creativity and style.
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
          Over 15 years of transforming client aspirations into monumental experiences across Kerala and major metropolitan cities in India.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
          <div className="bg-card/70 backdrop-blur-md border border-border/80 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Headquarters</p>
              <p className="text-sm font-bold text-foreground">Based in Kerala</p>
            </div>
          </div>

          <div className="bg-card/70 backdrop-blur-md border border-border/80 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Legacy</p>
              <p className="text-sm font-bold text-foreground">Established in 2014</p>
            </div>
          </div>

          <div className="bg-card/70 backdrop-blur-md border border-border/80 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Track Record</p>
              <p className="text-sm font-bold text-foreground">2100+ Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
