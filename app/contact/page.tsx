"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersSection } from "@/components/about/careers-section"
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, CheckCircle2, ArrowUpRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      })

      // Reset success message after 6 seconds
      setTimeout(() => setSubmitted(false), 6000)
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden pt-36 pb-20 bg-black">
        {/* Background Image with Cinematic Deep Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: 'url("/about/hero/luxury-event-venue-with-elegant-decorations.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black pointer-events-none" />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Simple Clean Overline */}
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            DIRECT PRODUCTION DESK
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
            Let&apos;s Build An <br />
            <span className="text-white/40">Extraordinary Event</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            Have an upcoming corporate summit, royal destination wedding, or stadium concert? Connect with our senior production team.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-[#0d0d10] p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">Direct Phone</h3>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-white/50 mb-5">CALL OUR EVENTS DESK DIRECTLY</p>
              <a href="tel:+919895690349" className="text-lg font-mono font-bold text-white hover:text-primary transition-colors block">
                +91 98956 90349
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#0d0d10] p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">Email Inquiries</h3>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-white/50 mb-5">RFPS, PROPOSALS &amp; PARTNERSHIPS</p>
              <a href="mailto:info@prideeventz.in" className="text-lg font-mono font-bold text-white hover:text-primary transition-colors">
                info@prideeventz.in
              </a>
              <span className="text-xs font-mono text-white/40 block mt-2">Guaranteed response within 24 hours</span>
            </div>

            {/* Location */}
            <div className="bg-[#0d0d10] p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">Kerala Headquarters</h3>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-white/50 mb-5">DESIGN &amp; PRODUCTION STUDIO</p>
              <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">
                Ground Floor 15/65, Mattekattu Building, NX Joseph Road, Kundannur, Kochi – 682304
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7 bg-[#0d0d10] p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl">
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                INQUIRY FORM
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-[1.05] mb-3">
                Send Us a Message
              </h2>
              <p className="text-sm text-white/60 font-light mb-8 leading-relaxed">
                Fill in your event details below and our production director will reach out within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-medium">Thank you! Your message has been received. Our team will contact you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.15em] text-white/70 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#0a0a0c] border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all text-sm"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.15em] text-white/70 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#0a0a0c] border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all text-sm"
                      placeholder="e.g. rahul@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.15em] text-white/70 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#0a0a0c] border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all text-sm"
                      placeholder="+91 98956 90349"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.15em] text-white/70 mb-2">Event Category *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#0a0a0c] border border-white/15 rounded-xl text-white focus:outline-none focus:border-primary transition-all text-sm"
                    >
                      <option value="" className="bg-[#0a0a0c] text-white/40">Select an event type</option>
                      <option value="corporate-events" className="bg-[#0a0a0c] text-white">Corporate Events &amp; Product Launches</option>
                      <option value="wedding" className="bg-[#0a0a0c] text-white">Destination Weddings</option>
                      <option value="concert" className="bg-[#0a0a0c] text-white">Live Concerts &amp; Festivals</option>
                      <option value="conference-mice" className="bg-[#0a0a0c] text-white">Conferences &amp; MICE</option>
                      <option value="exhibition" className="bg-[#0a0a0c] text-white">Exhibitions &amp; Trade Shows</option>
                      <option value="brand-activation" className="bg-[#0a0a0c] text-white">Brand Activations</option>
                      <option value="rural-marketing" className="bg-[#0a0a0c] text-white">Rural Marketing Campaign</option>
                      <option value="other" className="bg-[#0a0a0c] text-white">Other Bespoke Requirement</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.15em] text-white/70 mb-2">Estimated Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#0a0a0c] border border-white/15 rounded-xl text-white focus:outline-none focus:border-primary transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.15em] text-white/70 mb-2">Event Vision &amp; Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-[#0a0a0c] border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all text-sm resize-none"
                    placeholder="Tell us about your event scale, expected guest count, venue preferences, or specific production needs..."
                  />
                </div>

                {/* Submit Button - Home Page Pill */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-8 rounded-full bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Proposal...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Map & Operating Details */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-72 sm:h-80 bg-[#0d0d10] border border-white/10 shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5492987114777!2d76.31518137503079!3d9.930438290169213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872ef75b3383d%3A0xe212c418f7a84ff3!2sMattekattu%20Building!5e0!3m2!1sen!2sin!4v1715152542567!5m2!1sen!2sin"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-[#0d0d10] p-8 rounded-2xl border border-white/10 shadow-xl">
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-2">AVAILABILITY</p>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">Operating Hours</h3>
                <div className="space-y-3 text-xs sm:text-sm font-mono text-white/60">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>MONDAY - FRIDAY</span>
                    <span className="text-white font-medium">10:00 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>SATURDAY</span>
                    <span className="text-white font-medium">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>SUNDAY &amp; EVENT DAYS</span>
                    <span className="text-primary font-bold">24/7 ON-GROUND SUPPORT</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#0d0d10] p-8 rounded-2xl border border-white/10 shadow-xl">
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-2">COMMUNITY</p>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-5">Connect On Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/prideeventz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white/5 border border-white/10 text-primary hover:bg-primary hover:text-black transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/prideeventz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white/5 border border-white/10 text-primary hover:bg-primary hover:text-black transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/prideeventz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white/5 border border-white/10 text-primary hover:bg-primary hover:text-black transition-all"
                    aria-label="Youtube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers & Culture - Join Our Crew */}
      <CareersSection />

      <Footer />
    </main>
  )
}
