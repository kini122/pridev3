"use client"

import { useState } from "react"

export function LoadMoreSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 600)
  }

  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto flex justify-center">
        <button
          onClick={handleLoadMore}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-primary hover:text-black hover:border-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group"
        >
          <span>{isLoading ? "Loading..." : "Load More Projects"}</span>
        </button>
      </div>
    </section>
  )
}
