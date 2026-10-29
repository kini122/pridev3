"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function TMHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white select-none">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          <source src="/home/hero/home-hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
      </div>

      {/* Giant Ghost Watermark (Signature TM G Aesthetic) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <span className="text-[24vw] font-extrabold tracking-tighter text-white/[0.03] leading-none uppercase transform -translate-y-4">
          PRIDE
        </span>
      </div>

      {/* Hero Headline */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center justify-center pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-2xl"
        >
          Your Events, Stagecraft <br />
          <span className="text-white/95">&amp; Experiences. Managed.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/60 tracking-[0.2em] uppercase max-w-2xl font-light"
        >
          Turnkey Event Production • Experiential Design • Pan-India
        </motion.p>
      </div>

      {/* Minimal Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth",
          })
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  )
}
