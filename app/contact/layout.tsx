import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Our Production Team | Pride Eventz",
  description: "Get in touch with Pride Eventz for event management inquiries, venue bookings, stagecraft consultations, RFP requests, and technical quotes across India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our Production Team | Pride Eventz",
    description: "Connect with our stage architects and event directors to bring your bold live production vision to life.",
    url: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
