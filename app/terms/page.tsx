import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | Pride Eventz",
  description: "Terms and conditions of engagement for event production and staging with Pride Eventz.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <section className="pt-40 pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">LEGAL &amp; COMPLIANCE</p>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-8 pb-6 border-b border-white/10">Terms &amp; Conditions</h1>
        
        <div className="space-y-8 text-white/60 font-light leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to Pride Eventz. By accessing our website and engaging our event management, production, or experiential marketing services, you agree to the following standard terms and conditions.
          </p>
          <div>
            <h2 className="text-base font-mono font-bold text-white uppercase tracking-wider mb-2">1. Event Proposals &amp; Bookings</h2>
            <p>
              All event proposals, 3D stage renders, and cost estimates provided by Pride Eventz are tailored to specific client briefs and remain valid for the period stated in the quotation. Bookings are confirmed upon signing a formal agreement and receipt of the agreed advance deposit.
            </p>
          </div>
          <div>
            <h2 className="text-base font-mono font-bold text-white uppercase tracking-wider mb-2">2. Intellectual Property</h2>
            <p>
              All creative concepts, custom 3D spatial designs, stage blueprints, and site content displayed on this website are the intellectual property of Pride Eventz and may not be reproduced without prior written consent.
            </p>
          </div>
          <div>
            <h2 className="text-base font-mono font-bold text-white uppercase tracking-wider mb-2">3. Contact</h2>
            <p>
              For full contractual terms or vendor inquiries, please reach out to{" "}
              <a href="mailto:info@prideeventz.in" className="text-primary hover:text-white transition-colors underline">
                info@prideeventz.in
              </a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
