"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Floating, { FloatingElement } from "@/components/ui/floating"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Resonating Moments, Crafting Experiences"
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [charIndex])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home/hero/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Minimized subtle overlay - crystal clear video visibility with minimal blur */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55 pointer-events-none" />
      </div>

      <Floating sensitivity={1.5} className="z-10 flex items-center justify-center">

        {/* Main Content */}
        <FloatingElement depth={0.5} className="relative text-center px-4 max-w-4xl mx-auto w-full flex flex-col items-center justify-center h-full pt-16">
          {/* Main Tagline with Letter Reveal */}
          <h1 className="text-4xl md:text-6xl tracking-tighter font-bold text-white mb-6 leading-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            Premium event management services crafted for your unforgettable moments
          </p>
        </FloatingElement>
      </Floating>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white " />
      </div>
    </section>
  )
}
