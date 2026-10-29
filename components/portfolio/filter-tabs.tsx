"use client"

import { useState } from "react"

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

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onFilterChange?.(tabId)
  }

  return (
    <div className="w-full bg-background border-b border-border/40 sticky top-16 z-30 backdrop-blur-xl bg-background/90">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-primary text-black border-primary shadow-md"
                    : "bg-card/60 text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/40 hover:bg-card"
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
