"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  FileText, 
  Users, 
  Award, 
  Compass, 
  HeartHandshake, 
  Calendar,
  Building,
  Mail,
  Phone,
  Link as LinkIcon,
  Search,
  ChevronDown,
  AlertCircle
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  skills: string[]
  isUrgent?: boolean
}

const JOB_POSITIONS: JobPosition[] = [
  {
    id: "ops-manager",
    title: "Senior Event Operations & Production Manager",
    department: "Production & Operations",
    location: "Kochi, Kerala",
    type: "Full-Time",
    experience: "4 - 7 Years",
    description: "Lead end-to-end on-ground event operations, vendor negotiation, fabrication supervision, and execution for large-scale corporate summits, expos, and gala events across South India.",
    responsibilities: [
      "Oversee venue setup, staging, fabrication, and technical rehearsals",
      "Manage vendor contracts, logistics timelines, and production crews",
      "Ensure adherence to safety protocols, government permissions, and compliance",
      "Coordinate with client servicing teams to ensure seamless event-day delivery"
    ],
    requirements: [
      "4+ years of proven event production and operations experience",
      "Strong command over Kerala and South Indian vendor networks",
      "Exceptional crisis management and on-site problem-solving ability",
      "Willingness to travel for marquee outstation events"
    ],
    skills: ["Operations Logistics", "Vendor Management", "Stage Fabrication", "Budget Control"],
    isUrgent: true,
  },
  {
    id: "3d-stage-designer",
    title: "Experiential Set & 3D Stage Designer",
    department: "Creative & Design",
    location: "Kochi, Kerala",
    type: "Full-Time",
    experience: "2 - 5 Years",
    description: "Transform client briefs into breathtaking 3D stage concepts, exhibition stalls, interactive entrance experiences, and lighting layouts that wow audiences.",
    responsibilities: [
      "Create photorealistic 3D visual renders of stages, backdrops, and exhibition booths",
      "Prepare technical blueprints, fabrication drawings, and material specifications",
      "Collaborate with the lighting and AV teams to integrate dynamic visual tech",
      "Participate in client creative pitching and concept presentations"
    ],
    requirements: [
      "Proficiency in 3ds Max / Blender, AutoCAD, SketchUp, and Adobe Creative Cloud",
      "Deep understanding of materials (woodwork, acrylic, trussing, LED screens)",
      "Strong portfolio demonstrating spatial and experiential event design",
      "Keen eye for lighting aesthetics, typography, and branded environments"
    ],
    skills: ["3ds Max / Blender", "AutoCAD", "Spatial Design", "Material Specs", "Stagecraft"],
  },
  {
    id: "client-lead",
    title: "Corporate Accounts & Client Relations Lead",
    department: "Client Servicing",
    location: "Kochi / Calicut, Kerala",
    type: "Full-Time",
    experience: "3 - 6 Years",
    description: "Drive high-value corporate client engagements, manage pitch presentations, and maintain relationships with top brands across IT, FMCG, banking, and government sectors.",
    responsibilities: [
      "Serve as the primary liaison between corporate clients and the internal production crew",
      "Craft winning RFP responses, creative pitch decks, and commercial estimates",
      "Identify upsell and recurring event opportunities with existing clients",
      "Ensure client satisfaction and post-event reporting"
    ],
    requirements: [
      "Strong communication, negotiation, and presentation skills in English and Malayalam",
      "Prior experience in an event agency, media house, or corporate marketing department",
      "Thorough understanding of event budgets, costing, and client management"
    ],
    skills: ["B2B Pitching", "Account Management", "MICE Planning", "Client Retention"],
    isUrgent: true,
  },
  {
    id: "av-coordinator",
    title: "Sound, Light & AV Production Coordinator",
    department: "Technical & AV",
    location: "Kochi, Kerala",
    type: "Full-Time",
    experience: "2 - 5 Years",
    description: "Coordinate state-of-the-art concert lighting rigs, line array sound setups, LED wall matrices, and live video broadcast systems for live concerts and mega events.",
    responsibilities: [
      "Plan audio/video/lighting specs in coordination with artist riders and client requirements",
      "Supervise on-site AV technicians, sound engineers, and visual jockeys",
      "Troubleshoot signal routing, power distribution, and stage hardware under live pressure",
      "Maintain inventory of company technical assets and coordinate rental gear"
    ],
    requirements: [
      "Hands-on technical background in concert sound, intelligent lighting (DMX), and LED processors",
      "Experience working with high-profile artists, bands, and conference speakers",
      "Strong understanding of live acoustics and power distribution"
    ],
    skills: ["Live Sound", "DMX Lighting", "LED Processing", "Live Broadcasting"],
  },
  {
    id: "brand-activation-exec",
    title: "Brand Activation & Field Marketing Executive",
    department: "Marketing & Brand Activation",
    location: "Calicut / Trivandrum, Kerala",
    type: "Full-Time",
    experience: "1 - 3 Years",
    description: "Execute high-energy mall activations, multi-city roadshows, product sampling tours, and experiential brand engagement campaigns across Kerala.",
    responsibilities: [
      "Lead field teams, promotional promoters, and emcees across mall and college venues",
      "Coordinate logistics, branding collaterals, and interactive game kiosks",
      "Track daily engagement metrics, footfall data, and lead collection",
      "Liaise with mall managers and local authorities for event permissions"
    ],
    requirements: [
      "Enthusiastic personality with high stamina and passion for on-ground marketing",
      "Fluency in Malayalam and working proficiency in English",
      "Ability to handle spontaneous crowd dynamics and multi-location travel"
    ],
    skills: ["Mall Activations", "Roadshows", "Crowd Engagement", "Field Operations"],
  },
  {
    id: "wedding-planner",
    title: "Luxury Wedding & Social Events Specialist",
    department: "Production & Operations",
    location: "Kochi, Kerala",
    type: "Full-Time",
    experience: "2 - 4 Years",
    description: "Curate magical destination weddings, royal themed receptions, and bespoke private celebrations with deep attention to hospitality and aesthetics.",
    responsibilities: [
      "Assist couples and families from theme ideation to execution day",
      "Coordinate bespoke floral decor, custom invitations, entertainment, and guest hospitality",
      "Manage timeline choreography, artist arrivals, and special entries",
      "Liaise with premium 5-star resort venues across Kerala"
    ],
    requirements: [
      "Experience in luxury weddings or high-end hospitality coordination",
      "Strong empathy, high emotional intelligence, and meticulous attention to detail",
      "Flair for aesthetic decor, floral concepts, and traditional & modern ceremony flows"
    ],
    skills: ["Destination Weddings", "Hospitality Management", "Floral Decor", "Guest Experience"],
  },
]

const DEPARTMENTS = [
  "All Positions",
  "Production & Operations",
  "Creative & Design",
  "Client Servicing",
  "Technical & AV",
  "Marketing & Brand Activation",
]

const PERKS = [
  {
    icon: Award,
    title: "High-Stakes Productions",
    description: "Work on Kerala's most iconic stages—celebrity stadium concerts, Fortune 500 summits, and royal destination weddings that make headlines.",
  },
  {
    icon: Sparkles,
    title: "Creative Autonomy",
    description: "Your voice matters. Pitch bold ideas, experiment with groundbreaking visual tech, and watch your vision turn into reality on live stages.",
  },
  {
    icon: Compass,
    title: "Accelerated Career Growth",
    description: "Fast-track promotions and direct mentorship from industry veterans with 14+ years of trailblazing track records.",
  },
  {
    icon: HeartHandshake,
    title: "Competitive Compensation & Bonuses",
    description: "Above-market salary packages, performance-based project incentives, festival bonuses, and comprehensive health support.",
  },
  {
    icon: Users,
    title: "The Pride Culture",
    description: "A tight-knit, energetic tribe that celebrates wins together. Annual company retreats, celebratory off-sites, and flexible post-event rest days.",
  },
  {
    icon: Building,
    title: "Top-Tier Infrastructure",
    description: "Modern production studio, high-end design workstations, cutting-edge AV hardware, and expansive in-house fabrication capabilities.",
  },
]

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All Positions")
  const [selectedPositionId, setSelectedPositionId] = useState<string>("")
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null)
  
  // Application Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentLocation: "",
    portfolioUrl: "",
    noticePeriod: "Immediate",
    coverNote: "",
    referralSource: "Company Website",
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionId, setSubmissionId] = useState("")
  const [formError, setFormError] = useState<string | null>(null)

  const formRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filteredJobs = selectedDept === "All Positions"
    ? JOB_POSITIONS
    : JOB_POSITIONS.filter((job) => job.department === selectedDept)

  const handleApplyClick = (jobTitle: string) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }))
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formError) setFormError(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      validateAndSetFile(file)
    }
  }

  const validateAndSetFile = (file: File) => {
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setFormError("File size exceeds 10MB. Please upload a smaller PDF or DOCX file.")
      return
    }
    // Check file type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setFormError("Please upload a valid PDF or Word document (.pdf, .doc, .docx).")
      return
    }
    setResumeFile(file)
    setFormError(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0])
    }
  }

  const removeFile = () => {
    setResumeFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.")
      return
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFormError("Please provide a valid email address.")
      return
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setFormError("Please provide a valid contact number.")
      return
    }
    if (!formData.position) {
      setFormError("Please select the position you are applying for.")
      return
    }
    if (!resumeFile) {
      setFormError("Please upload your resume or portfolio CV document.")
      return
    }

    setIsSubmitting(true)
    setFormError(null)

    // Simulate API call and generate tracking ID
    setTimeout(() => {
      const generatedId = `PRIDE-CAREER-${Math.floor(1000 + Math.random() * 9000)}`
      setSubmissionId(generatedId)
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 1500)
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      currentLocation: "",
      portfolioUrl: "",
      noticePeriod: "Immediate",
      coverNote: "",
      referralSource: "Company Website",
    })
    setResumeFile(null)
    setIsSubmitted(false)
    setSubmissionId("")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border/50">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-12 left-10 w-72 h-72 bg-accent/10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up">
            Shape Live Spectacles. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-200">
              Build Your Career With Pride.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
            We are Kerala&apos;s premier event production, experiential marketing, and grand celebration specialists. From stadium concerts and corporate galas to royal destination weddings, we turn wild imaginations into unforgettable reality.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <a
              href="#open-positions"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-base"
            >
              Explore Open Roles
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#apply-form"
              className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-white font-semibold rounded-md border border-border/80 hover:bg-secondary/70 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-base"
            >
              Submit Direct Application
            </a>
          </div>

          {/* Key Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-border/40 text-left">
            <div className="p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-3xl font-extrabold text-white">14+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years of Creative Excellence</div>
            </div>
            <div className="p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-3xl font-extrabold text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Marquee Events Delivered</div>
            </div>
            <div className="p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">In-House Production Power</div>
            </div>
            <div className="p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-3xl font-extrabold text-primary">Kerala</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">&amp; Pan-South India Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURE & PERKS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-3">
            Life At Pride Eventz
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Creators &amp; Producers Thrive With Us
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We operate at the intersection of high adrenaline, artistic perfection, and technical innovation. Here is what you get when you step into our world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERKS.map((perk, index) => {
            const IconComponent = perk.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card/60 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {perk.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {perk.description}
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2">
                Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Current Open Positions
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">
                Find the right role for your craft. Each role offers substantial ownership, creative freedom, and live event impact.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedDept === dept
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "bg-card text-muted-foreground hover:text-white border border-border hover:border-white/20"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id
              return (
                <div
                  key={job.id}
                  className="rounded-xl bg-card border border-border/70 p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 relative shadow-sm"
                >
                  <div>
                    {/* Header: Title and tags */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                            {job.department}
                          </span>
                          {job.isUrgent && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                              Immediate Hiring
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {job.title}
                        </h3>
                      </div>
                    </div>

                    {/* Metadata Pills */}
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        {job.experience}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Expandable details */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-border/50 space-y-4 mb-4 text-sm animate-fade-in-up">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {job.responsibilities.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">What We Look For:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-muted/60 text-muted-foreground text-[11px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="flex-1 py-2.5 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all text-sm flex items-center justify-center gap-2 shadow-sm"
                    >
                      Apply For This Role
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      className="py-2.5 px-4 bg-secondary text-muted-foreground hover:text-white rounded-md border border-border/60 hover:border-white/20 transition-all text-sm font-medium"
                    >
                      {isExpanded ? "Hide Details" : "View Details"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 bg-card rounded-xl border border-border/50">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No active openings in this department</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
                We are always happy to meet extraordinary talent. Submit a general application below and our talent team will reach out.
              </p>
              <button
                onClick={() => handleApplyClick("General Application / Talent Pool")}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md text-sm"
              >
                Submit Spontaneous Application
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= APPLICATION FORM SECTION ================= */}
      <section ref={formRef} id="apply-form" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Career Application Portal
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Join The Pride Eventz Team
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Complete the form below to apply for a role or join our creative talent network. We carefully review every single application within 48 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-card border border-border/80 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-md">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            /* SUCCESS STATE */
            <div className="text-center py-12 px-4 animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary mx-auto mb-6 shadow-xl shadow-primary/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-secondary text-primary font-mono text-xs font-semibold tracking-wider mb-3 border border-primary/30">
                Ref ID: {submissionId}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Application Received!
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-base mb-8">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>! Your application for the <span className="text-primary font-semibold">{formData.position}</span> role has been delivered to our recruitment team.
              </p>

              {/* What happens next box */}
              <div className="max-w-xl mx-auto bg-secondary/50 border border-border/80 rounded-xl p-6 text-left mb-8 space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  What Happens Next:
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    <span><strong>Initial Screening (24-48 hrs):</strong> Our Talent Lead and Creative Director will evaluate your portfolio and experience.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    <span><strong>Discovery Call:</strong> If your background matches, we will invite you for a virtual introductory discussion.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    <span><strong>Studio Interaction:</strong> An in-person conversation at our Kochi studio to discuss live stage projects and cultural alignment.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-secondary text-white font-semibold rounded-md border border-border hover:bg-secondary/70 transition-colors text-sm"
                >
                  Submit Another Application
                </button>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Explore Our Recent Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            /* APPLICATION FORM */
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {formError && (
                <div className="p-4 rounded-lg bg-destructive/15 border border-destructive/40 text-destructive-foreground text-sm flex items-center gap-3 animate-fade-in-up">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Personal Information Group */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Personal &amp; Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Menon"
                      required
                      className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
                      required
                      className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="98950 12345"
                        required
                        className="w-full pl-14 pr-4 py-3 bg-secondary/60 border border-border rounded-lg text-white placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Current City / Location */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Current City / Location
                    </label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Kochi / Kozhikode / Bengaluru"
                      className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Role & Experience Group */}
              <div className="pt-4 border-t border-border/40">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Role &amp; Professional Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Position Applied For */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Position Applied For <span className="text-primary">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="" disabled className="bg-card text-muted-foreground">Select a position</option>
                      {JOB_POSITIONS.map((pos) => (
                        <option key={pos.id} value={pos.title} className="bg-card text-white">
                          {pos.title} ({pos.location})
                        </option>
                      ))}
                      <option value="General Application / Talent Pool" className="bg-card text-white">
                        General Application / Other Event Specialization
                      </option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Total Experience <span className="text-primary">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="" disabled className="bg-card text-muted-foreground">Select experience</option>
                      <option value="Fresher / Entry Level (0 - 1 Year)" className="bg-card text-white">Fresher / Graduate (0 - 1 Year)</option>
                      <option value="1 - 3 Years" className="bg-card text-white">1 - 3 Years</option>
                      <option value="3 - 5 Years" className="bg-card text-white">3 - 5 Years</option>
                      <option value="5 - 8 Years" className="bg-card text-white">5 - 8 Years</option>
                      <option value="8+ Years (Senior Lead / Director)" className="bg-card text-white">8+ Years (Senior / Leadership)</option>
                    </select>
                  </div>

                  {/* Portfolio or LinkedIn Link */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Portfolio / LinkedIn / Behance / Drive Link
                    </label>
                    <div className="relative">
                      <LinkIcon className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/... or drive link"
                        className="w-full pl-11 pr-4 py-3 bg-secondary/60 border border-border rounded-lg text-white placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Notice Period */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Availability / Notice Period
                    </label>
                    <select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="Immediate" className="bg-card text-white">Immediate Joiner</option>
                      <option value="15 Days" className="bg-card text-white">15 Days</option>
                      <option value="30 Days" className="bg-card text-white">30 Days (1 Month)</option>
                      <option value="45+ Days" className="bg-card text-white">45+ Days</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume Document Upload */}
              <div className="pt-4 border-t border-border/40">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Upload Resume / CV Document <span className="text-primary">*</span>
                </h3>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                {!resumeFile ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
                      isDragging
                        ? "border-primary bg-primary/10"
                        : "border-border/80 hover:border-primary/50 bg-secondary/30 hover:bg-secondary/50"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                      <UploadCloud className="w-7 h-7" />
                    </div>
                    <div className="font-semibold text-white text-base mb-1">
                      Click to upload or drag &amp; drop your resume
                    </div>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Supports PDF, DOC, or DOCX formats (Max size: 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-secondary/60 border border-primary/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm truncate max-w-xs sm:max-w-md">
                          {resumeFile.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-2 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                      title="Remove file"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Cover Note & Self Pitch */}
              <div className="pt-4 border-t border-border/40">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Tell Us About Yourself &amp; What Drives You in Live Events
                </label>
                <textarea
                  name="coverNote"
                  value={formData.coverNote}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share a brief overview of your background, high-impact events you've worked on, or what excites you about working at Pride Eventz..."
                  className="w-full px-4 py-3 bg-secondary/60 border border-border rounded-lg text-white placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base shadow-xl shadow-primary/20 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Your Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  By submitting, you agree to allow Pride Eventz to review your profile and contact you regarding relevant career openings.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ================= HIRING FAQs ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="faq-1" className="border border-border/70 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-white hover:text-primary transition-colors text-left font-semibold text-base py-5">
                What does the interview process look like at Pride Eventz?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                Our interview journey consists of three transparent stages: (1) Application &amp; portfolio evaluation (48 hours), (2) A virtual introductory video call to discuss your creative flair and background, and (3) An in-person studio conversation at our Kochi office where you meet our leadership team and explore real-world event scenarios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-border/70 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-white hover:text-primary transition-colors text-left font-semibold text-base py-5">
                Do you hire freshers or offer event management internships?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                Yes! We regularly welcome passionate freshers and final-year students into our 3-month and 6-month paid internship cohorts. Many of our current senior production coordinators started their journey as interns on our live concert and exhibition floors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-border/70 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-white hover:text-primary transition-colors text-left font-semibold text-base py-5">
                Are these roles on-site or hybrid?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                Given the hands-on nature of live stagecraft and client pitching, most roles are centered at our Kochi studio with travel across Kerala and South India for on-site productions. Design and creative scripting team members enjoy hybrid flexibility during non-execution weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-border/70 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-white hover:text-primary transition-colors text-left font-semibold text-base py-5">
                What if I don&apos;t see my exact job title listed above?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                We are always expanding our roster of emcees, visual designers, drone pilots, sound engineers, and fabrication leads. Choose &quot;General Application / Talent Pool&quot; in the form above and upload your portfolio. We keep active resumes on priority file for immediate production demands.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ================= DIRECT CONTACT STRIP ================= */}
      <section className="py-12 px-4 border-t border-border/40 bg-card/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have questions about careers or vendor collaborations?
            </h3>
            <p className="text-sm text-muted-foreground">
              Connect directly with our Talent &amp; Operations team.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:careers@prideeventz.in"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-white text-sm font-medium hover:border-primary/50 transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              careers@prideeventz.in
            </a>
            <a
              href="tel:+919846596349"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-white text-sm font-medium hover:border-primary/50 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +91 98465 96349
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
