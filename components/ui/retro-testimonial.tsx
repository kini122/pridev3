"use client"

import React, { useEffect, useRef, useState } from "react"
import Image, { ImageProps } from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react"
import { cn } from "@/lib/utils"

// ===== Types and Interfaces =====
export interface iTestimonial {
  name: string
  designation: string
  description: string
  profileImage: string
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial
    index: number
    layout?: boolean
    onCardClose: () => void
  }>[]
  initialScroll?: number
}

// ===== Custom Hooks =====
const useOutsideClick = (ref: React.RefObject<HTMLDivElement | null>, onOutsideClick: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      onOutsideClick()
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [ref, onOutsideClick])
}

// ===== Components =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [isHovered, setIsHovered] = React.useState(false)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" })
    }
  }

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  // Auto-scrolling loop: advance scrollLeft continuously, reset to 0 at end. Pause while hovered.
  React.useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const scrollSpeed = 0.6 // pixels per tick
    const intervalMs = 20

    const tick = () => {
      if (!container) return
      if (isHovered) return

      // advance
      container.scrollLeft += scrollSpeed

      // loop
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
        container.scrollLeft = 0
      }

      // keep checkScrollability in sync
      checkScrollability()
    }

    const id = setInterval(tick, intervalMs)
    return () => clearInterval(id)
  }, [isHovered])

  return (
    <div className="relative w-full mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
          )}
        />

        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-3",
            "max-w-5xl mx-auto",
          )}
        >
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={`card-${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-md"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index)
                  },
                })}
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-50 hover:bg-primary/80 transition-colors duration-200"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-6 w-6 text-primary-foreground" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-50 hover:bg-primary/80 transition-colors duration-200"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-6 w-6 text-primary-foreground" />
        </button>
      </div>
    </div>
  )
}

const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage =
    "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
  testimonial: iTestimonial
  index: number
  layout?: boolean
  onCardClose?: () => void
  backgroundImage?: string
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleExpand = () => {
    return setIsExpanded(true)
  }
  const handleCollapse = () => {
    setIsExpanded(false)
    onCardClose()
  }

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse()
      }
    }

    if (isExpanded) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
      ;(document.body as any).dataset.scrollY = scrollY.toString()
    } else {
      const scrollY = parseInt(((document.body as any).dataset.scrollY as string) || "0", 10)
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior })
    }

    window.addEventListener("keydown", handleEscapeKey)
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isExpanded])

  useOutsideClick(containerRef, handleCollapse)

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-md h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="max-w-2xl mx-auto bg-card border border-border/70 h-auto z-[60] p-6 md:p-10 rounded-2xl relative mt-24 shadow-2xl"
            >
              <button
                className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center bg-secondary hover:bg-muted text-white transition-colors"
                onClick={handleCollapse}
              >
                <X className="h-5 w-5" />
              </button>
              <motion.p
                layoutId={layout ? `category-${testimonial.name}` : undefined}
                className="text-primary text-xs font-semibold uppercase tracking-wider mb-2"
              >
                {testimonial.designation}
              </motion.p>
              <motion.h3
                layoutId={layout ? `title-${testimonial.name}` : undefined}
                className="text-2xl md:text-3xl font-bold text-white mb-6"
              >
                {testimonial.name}
              </motion.h3>
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed relative">
                <Quote className="h-8 w-8 text-primary/30 mb-3" />
                <p>"{testimonial.description}"</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${testimonial.name}` : undefined}
        onClick={handleExpand}
        className="text-left cursor-pointer focus:outline-none"
        whileHover={{
          y: -4,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
      >
        <div
          className="rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all duration-300 h-[420px] md:h-[450px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-between p-8 relative z-10 shadow-lg group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
          
          <div className="w-full flex justify-center pt-2">
            <ProfileImage src={testimonial.profileImage} alt={testimonial.name} />
          </div>

          <div className="my-auto text-center px-2">
            <Quote className="w-6 h-6 text-primary/40 mx-auto mb-3" />
            <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-4">
              "{testimonial.description}"
            </p>
          </div>

          <div className="w-full text-center border-t border-border/40 pt-4">
            <h4 className="text-white font-bold text-base group-hover:text-primary transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-primary text-xs font-medium mt-1">
              {testimonial.designation}
            </p>
          </div>
        </div>
      </motion.button>
    </>
  )
}

const ProfileImage = ({ src, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full border-2 border-primary/40 shadow-md shadow-primary/10 flex-none relative bg-secondary">
      <Image
        className={cn(
          "transition duration-300 absolute top-0 inset-0 object-cover",
          isLoading ? "blur-sm" : "blur-0",
        )}
        onLoadingComplete={() => {
          return setLoading(false)
        }}
        src={src}
        width={96}
        height={96}
        loading="lazy"
        decoding="async"
        alt={alt || "Profile image"}
        {...rest}
      />
    </div>
  )
}

export { Carousel, TestimonialCard, ProfileImage }
