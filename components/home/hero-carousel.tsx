"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, stagger, useAnimate } from "motion/react"
import { ChevronDown } from "lucide-react"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  "/home/hero/fmcg-product-launch-event.jpg",
  "/home/hero/tech-brand-activation-event.jpg",
  "/home/hero/hero-motocorp-annual-conference-stage-setup.jpg",
  "/home/team/santa-party-decoration-event.jpg",
  "/home/hero/company-anniversary-gala-elegant-setup.jpg",
  "/home/team/exhibition-trade-show-atomfrost.jpg",
  "/home/hero/premium-party-atmosphere.jpg"
]

export function HeroCarousel() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          id="hero-bg-video"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover brightness-95"
        >
          <source src="/home/hero/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle cinematic overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      </div>

      <Floating sensitivity={1.5} className="z-20 flex items-center justify-center pointer-events-none">

        {/* Content - Fully Selectable */}
        <FloatingElement depth={0.5} className="relative z-50 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full w-full pointer-events-auto select-text">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col items-center pointer-events-auto select-text"
          >
            {/* Main Headline (Total Management Monumental Uppercase) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase leading-[1.05] drop-shadow-2xl select-text">
              Your Events, Stagecraft <br />
              <span className="text-white/95">&amp; Experiences. Managed.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 tracking-[0.2em] uppercase max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md select-text">
              Turnkey Event Production • Experiential Design • Pan-India
            </p>
          </motion.div>
        </FloatingElement>

        {/* Floating Images (Container is pointer-events-none so mouse selection can pass to text, each image is pointer-events-auto) */}
        <div ref={scope} className="absolute inset-0 pointer-events-none">
          <FloatingElement depth={0.5} className="top-[15%] left-[5%] pointer-events-auto">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[0]}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[10%] left-[75%] hidden md:block pointer-events-auto">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[1]}
              className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[70%] left-[10%] hidden md:block pointer-events-auto">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[2]}
              className="w-32 h-48 md:w-48 md:h-64 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[60%] left-[80%] pointer-events-auto">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[3]}
              className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1.5} className="top-[30%] left-[85%] hidden md:block pointer-events-auto">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[4]}
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={0.8} className="top-[80%] left-[40%] pointer-events-auto">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[5]}
              className="w-28 h-20 md:w-40 md:h-28 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
        </div>
      </Floating>

      {/* Total Management Minimal Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none select-none">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 font-medium">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </div>
    </section>
  )
}
