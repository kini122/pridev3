import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Live Production Portfolio & Works | Pride Eventz",
  description: "Browse 30+ showcase productions delivered by Pride Eventz across India: arena concerts, corporate leadership summits, royal destination weddings, trade exhibitions, and brand activations.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Live Production Portfolio | Pride Eventz",
    description: "Browse our live productions: arena concerts, corporate summits, destination weddings, and experiential brand activations.",
    url: "/portfolio",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
