import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ImpactStatement() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Monospace Overline */}
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          THE PRIDE STANDARD
        </p>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-[1.15] tracking-tight mb-10">
          The power of disciplined event production enables us to orchestrate seamless experiences, solve critical logistics, and deliver undeniable brand value.
        </h2>

        {/* Pill Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-full px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] bg-primary text-black hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-primary/20"
        >
          <span>Contact Our Team</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
