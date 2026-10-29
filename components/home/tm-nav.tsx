"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function TMNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram (Exact TM G style) */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              PRIDE GROUP
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/clients"
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              Clients
            </Link>
            <Link
              href="/about"
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center px-8 space-y-6 md:hidden">
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="/clients"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
          >
            Clients
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  )
}
