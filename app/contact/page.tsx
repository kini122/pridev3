"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, CheckCircle2, Send } from "lucide-react"

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
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-96 flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/about/hero/luxury-event-venue-with-elegant-decorations.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-white/90 mt-4 max-w-xl mx-auto leading-relaxed">
            Have an upcoming corporate event, wedding, or concert? Let&apos;s craft an extraordinary experience together.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/60 hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-primary mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Direct Phone</h3>
              <p className="text-xs text-muted-foreground mb-4">Call our events desk directly</p>
              <a href="tel:+919846596349" className="text-base font-semibold text-primary hover:text-orange-400 transition-colors block">
                +91 9846596349
              </a>
              <a href="tel:+918089129778" className="text-sm text-muted-foreground hover:text-foreground transition-colors block mt-1">
                +91 80891 29778
              </a>
            </div>

            {/* Email */}
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/60 hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-primary mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email Inquiries</h3>
              <p className="text-xs text-muted-foreground mb-4">RFPs, proposals &amp; vendor partnerships</p>
              <a href="mailto:info@prideeventz.in" className="text-base font-semibold text-primary hover:text-orange-400 transition-colors">
                info@prideeventz.in
              </a>
            </div>

            {/* Location */}
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/60 hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-primary mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Kerala Headquarters</h3>
              <p className="text-xs text-muted-foreground mb-4">Visit our design and production studio</p>
              <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">
                Ground Floor 15/65, Mattekattu Building, NX Joseph Road, Kundannur, Kochi – 682304
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7 bg-card/40 p-8 sm:p-10 rounded-2xl border border-border/60 shadow-xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                Inquiry Form
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Fill in your event details below and our production director will reach out within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-medium">Thank you! Your message has been received. Our team will contact you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border/70 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border/70 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="e.g. rahul@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border/70 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="+91 98465 96349"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Event Category *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border/70 rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    >
                      <option value="">Select an event type</option>
                      <option value="corporate-events">Corporate Events &amp; Product Launches</option>
                      <option value="wedding">Destination Weddings</option>
                      <option value="concert">Live Concerts &amp; Festivals</option>
                      <option value="conference-mice">Conferences &amp; MICE</option>
                      <option value="exhibition">Exhibitions &amp; Trade Shows</option>
                      <option value="brand-activation">Brand Activations</option>
                      <option value="rural-marketing">Rural Marketing Campaign</option>
                      <option value="other">Other Bespoke Requirement</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Estimated Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border/70 rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Event Vision &amp; Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border/70 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your event scale, expected guest count, venue preferences, or specific production needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-orange-400 transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Proposal...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Operating Details */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-72 sm:h-80 bg-card border border-border/60 shadow-lg">
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
              <div className="bg-card/50 p-6 rounded-2xl border border-border/60">
                <h3 className="text-base font-bold text-foreground mb-3">Operating Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">10:00 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday &amp; Event Days</span>
                    <span className="text-primary font-semibold">24/7 On-Ground Support</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card/50 p-6 rounded-2xl border border-border/60">
                <h3 className="text-base font-bold text-foreground mb-4">Connect on Social</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/prideeventz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border/80 rounded-xl text-primary hover:bg-primary hover:text-black transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/prideeventz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border/80 rounded-xl text-primary hover:bg-primary hover:text-black transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/prideeventz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border/80 rounded-xl text-primary hover:bg-primary hover:text-black transition-all"
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

      <Footer />
    </main>
  )
}
