"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

const SERVICES = [
  { name: "Corporate Events", href: "/services/corporate-events" },
  { name: "Destination Weddings", href: "/services/destination-weddings" },
  { name: "Concerts", href: "/services/concerts" },
  { name: "Conferences & MICE", href: "/services/conferences-mice" },
  { name: "Exhibitions", href: "/services/exhibitions" },
  { name: "Brand Activation", href: "/services/brand-activation" },
  { name: "Rural Marketing", href: "/services/rural-marketing" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => pathname === href

  const isServicesActive = pathname?.startsWith("/services")

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${isScrolled
          ? "bg-background/80 border-border/50"
          : "bg-background/80 border-border/40"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800"
              alt="Pride Eventz Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="hidden sm:inline text-[17px] font-semibold tracking-tight text-white">Pride Eventz</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center" aria-label="Primary">
            <ul className="flex items-center gap-8 lg:gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <li>
                <Link
                  href="/"
                  className={`transition-colors duration-200 relative pb-1 ${isActive("/")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-colors duration-200 relative pb-1 ${isActive("/about")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    }`}
                >
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <Link
                  href="/services"
                  className={`flex items-center gap-1.5 transition-colors duration-200 relative pb-1 ${isServicesActive
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200 text-muted-foreground group-hover:text-primary" />
                </Link>
                <div className="absolute left-0 mt-3 w-60 rounded-xl backdrop-blur-xl bg-card/95 border border-border/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 shadow-2xl">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-white/80 hover:text-primary hover:bg-white/[0.04] transition-colors text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className={`transition-colors duration-200 relative pb-1 ${isActive("/portfolio")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className={`transition-colors duration-200 relative pb-1 ${isActive("/clients")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    }`}
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors duration-200 relative pb-1 ${isActive("/contact")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg border border-primary/50 bg-primary/10 hover:bg-primary text-white hover:text-black px-6 py-2.5 text-sm font-semibold transition-all duration-200 shadow-sm"
          >
            Let&apos;s work together
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-opacity duration-200 hover:opacity-70 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border/40 bg-background/95 backdrop-blur-xl">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive("/") ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/[0.04]"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive("/about") ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/[0.04]"}`}
            >
              About
            </Link>
            <div className="flex items-center justify-between w-full text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors">
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 px-4 py-3 font-medium text-sm ${isServicesActive ? "text-primary" : ""}`}
              >
                Services
              </Link>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="p-3 pr-4 text-muted-foreground"
                aria-label="Toggle services submenu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-primary" : ""}`} />
              </button>
            </div>
            {isServicesOpen && (
              <div className="pl-6 bg-card/40 border-l border-primary/20 ml-4 my-1 space-y-1">
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-primary transition-colors font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive("/portfolio") ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/[0.04]"}`}
            >
              Work
            </Link>
            <Link
              href="/clients"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive("/clients") ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/[0.04]"}`}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/[0.04]"}`}
            >
              Contact
            </Link>
            <div className="px-4 pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary text-black font-semibold px-4 py-2.5 text-sm"
              >
                Let&apos;s work together
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
