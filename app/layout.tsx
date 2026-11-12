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
  metadataBase: new URL("https://prideeventz.in"),
  title: {
    default: "Pride Eventz | Premier Event Management & Live Production Across India",
    template: "%s | Pride Eventz",
  },
  description:
    "Pride Eventz delivers end-to-end event management, arena concert production, corporate leadership summits, luxury destination weddings, exhibitions, and brand activations across India with 15+ years of mastery.",
  keywords: [
    "Pride Eventz",
    "event management Kerala",
    "event management India",
    "corporate event planners Kochi",
    "destination wedding planners Kerala",
    "arena concert production India",
    "exhibition stall design",
    "brand activations South India",
    "rural marketing roadshows",
    "MICE conference planners",
  ],
  authors: [{ name: "Pride Eventz Group", url: "https://prideeventz.in" }],
  creator: "Pride Eventz",
  publisher: "Pride Eventz Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
  },
  alternates: {
    canonical: "https://prideeventz.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prideeventz.in",
    siteName: "Pride Eventz",
    title: "Pride Eventz | Premier Event Management & Live Production Across India",
    description:
      "Full-scale event production, arena concert management, corporate summits, luxury weddings, and brand activations. 2,100+ projects delivered with zero downtime.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pride Eventz – Premier Event Management & Live Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pride Eventz | Premier Event Management & Live Production Across India",
    description:
      "Full-scale event production, arena concert management, corporate summits, luxury weddings, and brand activations across India.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Pride Eventz",
    alternateName: "Pride Eventz Group",
    url: "https://prideeventz.in",
    logo: "https://prideeventz.in/icon.png",
    image: "https://prideeventz.in/og-image.jpg",
    description:
      "Full-service event management and live production company in India specializing in corporate summits, luxury weddings, arena concerts, exhibitions, and brand activations.",
    telephone: "+91-98465-96349",
    email: "contact@prideeventz.in",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.9312",
      longitude: "76.2673",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://instagram.com/prideeventz",
      "https://facebook.com/prideeventz",
      "https://linkedin.com/company/prideeventz",
    ],
  }

  return (
    <html lang="en" className={plusJakartaSans.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
