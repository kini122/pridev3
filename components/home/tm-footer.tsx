"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function TMFooter() {
  const [istTime, setIstTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format time in Indian Standard Time (IST)
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now)
      setIstTime(formatted)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Column: Giant Brand Monogram / Wordmark */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2">
                PRIDE GROUP
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
                Live Experiences • Staging • Production
              </p>
            </div>

            <div className="mt-8 text-xs text-white/40 max-w-sm leading-relaxed">
              Kerala&apos;s leading turnkey event production agency. Trusted by enterprise brands and families nationwide.
            </div>
          </div>

          {/* Middle Columns: Regional Offices with Live Time Clocks */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Kochi Office */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold uppercase tracking-wider text-white">KOCHI</span>
                <span className="text-xs font-mono text-primary font-semibold">{istTime || "LIVE"}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Pride House, Subhash Chandra Bose Road,<br />
                Jawahar Nagar, Kadavanthra, Kochi, Kerala 682020
              </p>
              <a href="tel:+919846596349" className="text-xs text-primary hover:underline mt-2 inline-block">
                +91 98465 96349
              </a>
            </div>

            {/* Calicut / Bengaluru Office */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold uppercase tracking-wider text-white">CALICUT</span>
                <span className="text-xs font-mono text-primary font-semibold">{istTime || "LIVE"}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Cyberpark Special Zone,<br />
                Palazhi, Kozhikode, Kerala 673016
              </p>
              <a href="mailto:info@prideeventz.in" className="text-xs text-primary hover:underline mt-2 inline-block">
                info@prideeventz.in
              </a>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 block mb-4">Divisions</span>
              <Link href="/services/corporate-events" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                Events
              </Link>
              <Link href="/services/brand-activation" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                Studio
              </Link>
              <Link href="/services/concerts" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                Production
              </Link>
              <Link href="/portfolio" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                Work
              </Link>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 block mb-4">Company</span>
              <Link href="/about" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                About
              </Link>
              <Link href="/clients" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                Clients
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-primary transition-colors text-xs uppercase tracking-wider">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div className="flex items-center gap-6 uppercase tracking-wider">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              YouTube
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Pride Event Management Group.</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
