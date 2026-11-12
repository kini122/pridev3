"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Check } from "lucide-react"

const tabs = [
  { id: "all", label: "All Works" },
  { id: "corporate", label: "Corporate Events" },
  { id: "weddings", label: "Destination Weddings" },
  { id: "concerts", label: "Concerts & Shows" },
  { id: "mice", label: "Conferences & MICE" },
  { id: "exhibitions", label: "Exhibitions" },
  { id: "brand-activation", label: "Brand Activations" },
  { id: "rural-marketing", label: "Rural Marketing" },
]

interface FilterTabsProps {
  onFilterChange?: (filter: string) => void
}

export function FilterTabs({ onFilterChange }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const menuRef = useRef<HTMLDivElement>(null)

  // Scroll detection: retreats under the navbar on downscroll, re-appears on upscroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDiff = currentScrollY - lastScrollY.current

      // Only trigger retreat after scrolling past the initial header area (> 150px)
      if (currentScrollY > 180) {
        if (scrollDiff > 6) {
          // Scrolling DOWN -> retreat under navbar
          setIsVisible(false)
          setIsMobileMenuOpen(false)
        } else if (scrollDiff < -6) {
          // Scrolling UP -> smoothly re-appear
          setIsVisible(true)
        }
      } else {
        // At or near top -> always visible
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setIsMobileMenuOpen(false)
    onFilterChange?.(tabId)
  }

  const activeLabel = tabs.find((t) => t.id === activeTab)?.label || "All Works"

  return (
    <div
      ref={menuRef}
      className={`w-full bg-black/90 border-y border-white/10 sticky top-16 z-30 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        {/* Mobile View: Minimal Current on Right + Down Arrow, Zero Outline */}
        <div className="md:hidden flex flex-col items-end relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 py-1 text-xs font-mono font-bold uppercase tracking-[0.16em] text-white/90 hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-0"
            aria-expanded={isMobileMenuOpen}
            aria-label="Select discipline"
          >
            <span>{activeLabel}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-primary transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Minimal Dropdown Panel */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 max-w-[85vw] p-1.5 rounded-xl bg-[#0c0c0e]/98 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-0.5 animate-fade-in z-50">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-[0.14em] transition-all text-left cursor-pointer ${
                      isActive
                        ? "text-primary font-bold bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-primary" />}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Desktop View: Full Sleek Horizontal Filter Tabs */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-black font-bold shadow-lg shadow-primary/20 scale-105"
                    : "bg-[#0d0d10] text-white/60 border border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
