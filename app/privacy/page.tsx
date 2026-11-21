import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Pride Eventz",
  description: "Privacy policy and client data protection commitments of Pride Eventz.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <section className="pt-40 pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">LEGAL &amp; COMPLIANCE</p>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-8 pb-6 border-b border-white/10">Privacy Policy</h1>
        
        <div className="space-y-8 text-white/60 font-light leading-relaxed text-sm sm:text-base">
          <p>
            At Pride Eventz, we value your trust and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard information submitted through our website and event inquiry portals.
          </p>
          <div>
            <h2 className="text-base font-mono font-bold text-white uppercase tracking-wider mb-2">1. Information We Collect</h2>
            <p>
              When you submit an inquiry, we collect contact details such as your name, email address, phone number, company/organization name, and event requirements.
            </p>
          </div>
          <div>
            <h2 className="text-base font-mono font-bold text-white uppercase tracking-wider mb-2">2. How We Use Your Information</h2>
            <p>
              Your information is used strictly to respond to your event inquiries, prepare tailored proposals, and coordinate event production services. We never sell or rent your personal data to third parties.
            </p>
          </div>
          <div>
            <h2 className="text-base font-mono font-bold text-white uppercase tracking-wider mb-2">3. Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@prideeventz.in" className="text-primary hover:text-white transition-colors underline">
                info@prideeventz.in
              </a>{" "}
              or call{" "}
              <a href="tel:+919895690349" className="text-primary hover:text-white transition-colors underline">
                +91 98956 90349
              </a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
