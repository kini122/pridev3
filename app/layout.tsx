import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pride Eventz – Event Management Kerala, India",
  description: "Expert corporate events, weddings, concerts, conferences, exhibitions & brand activations across India. 200+ projects delivered.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
