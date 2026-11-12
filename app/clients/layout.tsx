import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Partnerships & Alliances | Pride Eventz",
  description: "Explore 65+ national and multinational enterprise brands who trust Pride Eventz for mission-critical event production across South India and pan-India.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Client Partnerships & Alliances | Pride Eventz",
    description: "Trusted by Fortune 500 enterprises, blue-chip corporations, and premier brands across India with 99% client retention.",
    url: "/clients",
  },
}

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
