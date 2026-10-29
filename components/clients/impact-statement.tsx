import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ImpactStatement() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden border-t border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-white leading-relaxed mb-8">
          The power of disciplined event production enables us to orchestrate seamless experiences, solve critical logistics, and deliver undeniable brand value.
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 text-base"
        >
          Contact Our Team
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
