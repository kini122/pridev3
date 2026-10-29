# Pride Eventz — Comprehensive Site Content & Media Blueprint
> **Purpose**: This document contains the complete, structured inventory of all copy, text, headings, paragraphs, cards, badges, buttons, form fields, and media assets (images, videos, graphics) across the entire website.  
> **Use Case**: Content updates, copywriting revisions, CMS migration, brand audit, and digital marketing alignment.

---

## Table of Contents
1. [Global Elements](#1-global-elements)
   - [Header / Navigation Bar](#header--navigation-bar)
   - [Footer](#footer)
2. [Home Page (`/`)](#2-home-page-)
   - [Hero Section with Video & Parallax](#home-hero-section)
   - [Mission Statement Section](#home-mission-statement)
   - [Services Overview Grid](#home-services-overview)
   - [Dynamic Team Statement](#home-team-statement)
   - [Our Legacy / Statistics Section](#home-stats-section)
   - [Impactful Clients & Companies Logo Section](#home-client-logos)
   - [How We Work / Process Section](#home-process-section)
   - [Audience Attention CTA Banner](#home-cta-banner)
   - [Expert Planning & Feature Showcase](#home-expert-planning)
3. [About Page (`/about`)](#3-about-page-about)
   - [About Hero](#about-hero)
   - [About Introduction & Photo Collage](#about-introduction)
   - [Services Carousel](#about-services-carousel)
   - [Methodology / Architectural Process](#about-process)
   - [Tailored Experience Section](#about-tailored-experience)
   - [Expertise & Progress Bars](#about-expertise)
   - [Creative Team](#about-team)
   - [Core Values](#about-values)
   - [Journey & Milestone Timeline](#about-timeline)
   - [Testimonial Quote Banner](#about-testimonial-quote)
   - [Call to Action Banner](#about-cta)
4. [Services Hub Page (`/services`)](#4-services-hub-page-services)
   - [Services Hub Hero](#services-hub-hero)
   - [Architectural Services Directory](#services-directory)
   - [Services Hub Bottom CTA](#services-hub-cta)
5. [Individual Service Detail Pages](#5-individual-service-detail-pages)
   - [5.1 Corporate Events (`/services/corporate-events`)](#51-corporate-events)
   - [5.2 Destination Weddings (`/services/destination-weddings`)](#52-destination-weddings)
   - [5.3 Live Concerts (`/services/concerts`)](#53-live-concerts)
   - [5.4 Conferences & MICE (`/services/conferences-mice`)](#54-conferences--mice)
   - [5.5 Exhibitions & Trade Shows (`/services/exhibitions`)](#55-exhibitions--trade-shows)
   - [5.6 Brand Activation (`/services/brand-activation`)](#56-brand-activation)
   - [5.7 Rural Marketing (`/services/rural-marketing`)](#57-rural-marketing)
6. [Portfolio Page (`/portfolio`)](#6-portfolio-page-portfolio)
   - [Portfolio Hero](#portfolio-hero)
   - [Filter Navigation Tabs](#portfolio-filter-tabs)
   - [Complete Portfolio Gallery & Lightbox (41 Projects)](#portfolio-gallery)
   - [Load More Action](#portfolio-load-more)
   - [CTA Banner](#portfolio-cta-banner)
   - [Related Services](#portfolio-related-services)
   - [Client Testimonial Slider](#portfolio-testimonials)
   - [Statistics Counter](#portfolio-stats)
7. [Clients Page (`/clients`)](#7-clients-page-clients)
   - [Clients Hero](#clients-hero)
   - [Featured Clients Grid](#featured-clients-grid)
   - [Worldwide Experts Testimonials](#clients-testimonials)
   - [Infinite Client Logo Carousel](#clients-logo-carousel)
   - [Impact Statement](#clients-impact-statement)
   - [Stats Indicators](#clients-stats-indicators)
   - [Event Sectors We Serve](#clients-sectors)
   - [Client Success Stories](#clients-success-stories)
   - [Partnership Tiers](#clients-partnership-tiers)
   - [Clients Call to Action](#clients-cta)
8. [Careers Page (`/careers`)](#8-careers-page-careers)
   - [Careers Hero](#careers-hero)
   - [Culture & Perks Section](#careers-perks)
   - [Job Openings Directory (6 Roles)](#careers-job-openings)
   - [Application Portal & Form](#careers-application-form)
   - [Hiring FAQs](#careers-faqs)
   - [Direct Contact Strip](#careers-contact-strip)
9. [Contact Page (`/contact`)](#9-contact-page-contact)
   - [Contact Hero](#contact-hero)
   - [Contact Information Cards](#contact-info-cards)
   - [Inquiry Form](#contact-inquiry-form)
   - [Interactive Map & Social Channels](#contact-map--social)
   - [Business Hours](#contact-business-hours)
10. [Error & Fallback Pages](#10-error--fallback-pages)
    - [404 Page Not Found (`/not-found`)](#404-page-not-found)
11. [Appendix: Additional Component Library Copy](#11-appendix-additional-component-library-copy)
    - [Corporate Event Pricing Packages & FAQs](#appendix-corporate-packages--faqs)
    - [Exhibition Pricing Factors & FAQs](#appendix-exhibitions-pricing--faqs)
    - [Promotional Campaign Packages & FAQs](#appendix-promotions-packages--faqs)
    - [Standalone Home Testimonials Carousel](#appendix-home-testimonials)

---

## 1. Global Elements

### Header / Navigation Bar
- **Component File**: `components/navbar.tsx`
- **Branding Logo**:
  - **Type**: Image
  - **Asset URL**: `https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800`
  - **Alt Text**: `Pride Eventz Logo`
  - **Brand Text**: `Pride Eventz`
- **Primary Desktop Navigation Links**:
  1. `Home` → `/`
  2. `About` → `/about`
  3. `Services` (with Dropdown) → `/services`
     - **Dropdown Items**:
       - `Corporate Events` → `/services/corporate-events`
       - `Destination Weddings` → `/services/destination-weddings`
       - `Concerts` → `/services/concerts`
       - `Conferences & MICE` → `/services/conferences-mice`
       - `Exhibitions` → `/services/exhibitions`
       - `Brand Activation` → `/services/brand-activation`
       - `Rural Marketing` → `/services/rural-marketing`
  4. `Portfolio` → `/portfolio`
  5. `Our Clients` → `/clients`
  6. `Careers` → `/careers`
  7. `Contact` → `/contact`
- **Call-to-Action Button**:
  - **Label**: `Let's work together`
  - **Link**: `/contact`
- **Mobile Menu**: Includes identical navigational items and toggleable accordion for Services.

---

### Footer
- **Component File**: `components/footer.tsx`
- **Branding**:
  - **Logo Image**: `https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800`
  - **Logo Alt**: `Pride Eventz Logo`
  - **Brand Title**: `Pride Eventz`
- **Company Tagline / Intro**:
  - *"We specialize in creating customized solutions that align with your vision and budget"*
- **Direct Contacts**:
  - **Phone**: `+91 9846596349` (`tel:+919846596349`)
  - **Email**: `info@prideeventz.in` (`mailto:info@prideeventz.in`)
- **Column 2: Company Links**:
  - `About` → `/about`
  - `Services` → `/services`
  - `Portfolio` → `/portfolio`
  - `Our Clients` → `/clients`
  - `Careers` → `/careers`
  - `Contact` → `/contact`
- **Column 3: Social Media Links**:
  - `Facebook` → `https://facebook.com/prideeventz`
  - `Youtube` → `https://youtube.com/prideeventz`
  - `Instagram` → `https://instagram.com/prideeventz`
- **Column 4: Legal & Press**:
  - `Privacy Policy` → `/privacy`
  - `Terms & Conditions` → `/terms`
- **Visual Hover Display**:
  - Large interactive typography effect rendering: `PRIDE`
- **Bottom Bar**:
  - **Social Icons**: Facebook, YouTube, Instagram
  - **Copyright Notice**: `© {Current Year} Pride Eventz. All rights reserved.`

---

## 2. Home Page (`/`)
- **Route File**: `app/page.tsx`

### Home Hero Section
- **Component File**: `components/home/hero-carousel.tsx`
- **Media**:
  - **Type**: Video (Autoplay, Loop, Muted, PlaysInline with interactive Play/Pause & Mute/Unmute buttons)
  - **Source Path**: `/home/hero/hero-video.mp4` (derived from `Home Hero Video (3).mp4`)
  - **Overlay**: Minimized subtle contrast overlay (`backdrop-blur-[0.5px]`, `bg-black/20`, soft gradient) with removed blurry orbs for crystal-clear video visibility
- **Floating Decorative Image Cards**:
  1. Image: `/home/hero/fmcg-product-launch-event.jpg` (Top-Left)
  2. Image: `/home/hero/tech-brand-activation-event.jpg` (Top-Right)
  3. Image: `/home/hero/hero-motocorp-annual-conference-stage-setup.jpg` (Bottom-Left)
  4. Image: `/home/team/santa-party-decoration-event.jpg` (Bottom-Right)
  5. Image: `/home/hero/company-anniversary-gala-elegant-setup.jpg` (Mid-Right)
  6. Image: `/home/team/exhibition-trade-show-atomfrost.jpg` (Bottom-Center)
- **Headings & Body Copy**:
  - **Main Heading (H1)**: `Creating Unforgettable Parties with Style & Spark!`
  - **Subtext / Paragraph**: `Premium event management services crafted for your unforgettable moments`
- **Action Buttons**:
  - **Button 1**: `Learn More` → `/about`
  - **Button 2**: `Get Started` → `/contact`

---

### Home Mission Statement
- **Component File**: `components/home/mission-statement.tsx`
- **Section Overline**: `We are an event management group`
- **Section Heading (H2)**: `Crafting unforgettable events with creativity and style.`
- **Header Link**: `Learn More About Us →` (`/about`)
- **Featured Image**:
  - **Path**: `/home/mission/mall-exhibition-hall-event-space.jpg`
  - **Alt Text**: `Event space`
- **Badges / Highlights**:
  - 📍 `Based in Kerala`
  - 🎯 `Established in 2010`
  - ✨ `200+ Projects Done`
- **Body Paragraph**:
  > *"At Pride Eventz, we specialize in creating unforgettable moments across all event categories. From intimate corporate gatherings to grand wedding celebrations, our comprehensive services include event planning, creative decorations, thematic design, and seamless execution. We transform your vision into reality with meticulous attention to detail."*

---

### Home Services Overview
- **Component File**: `components/home/services-overview.tsx`
- **Section Overline**: `Our Expertise`
- **Section Heading (H3)**: `Services Overview`
- **Service Cards (7 Cards)**:

| # | Service Title | Description | Link | Featured Card Image |
|---|---------------|-------------|------|----------------------|
| 1 | **Corporate Events** | Professional corporate gatherings that impress and inspire your team. | `/services/corporate-events` | `https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069` |
| 2 | **Destination Weddings** | Create magical wedding moments with comprehensive planning and design services. | `/services/destination-weddings` | `https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070` |
| 3 | **Concerts** | Large-scale live concert production — stage, sound, lighting and crowd management. | `/services/concerts` | `https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070` |
| 4 | **Conferences & MICE** | End-to-end management of meetings, incentives, conferences, and exhibitions. | `/services/conferences-mice` | `https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070` |
| 5 | **Exhibitions** | Showcase your brand with stunning exhibition setups and immersive experiences. | `/services/exhibitions` | `https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070` |
| 6 | **Brand Activation** | Impactful promotional events and ground-level activations for lasting brand impact. | `/services/brand-activation` | `https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070` |
| 7 | **Rural Marketing** | On-ground campaigns reaching Tier 2, Tier 3 cities and rural markets across India. | `/services/rural-marketing` | `https://images.unsplash.com/photo-1506869640319-ce1a44e1e0cb?q=80&w=2070` |

- **Card Action**: `Explore Service →`

---

### Home Team Statement
- **Component File**: `components/home/team-statement.tsx`
- **Numerical Marker**: `01`
- **Main Heading (H2)**: `We are a dynamic team turning innovative ideas into reality.`
- **Body Paragraph**:
  > *"Our team of experienced professionals brings creativity, expertise, and passion to every project. We work collaboratively to ensure your vision becomes an unforgettable reality."*
- **Action Link**: `Learn More →` (`/about`)
- **Image Gallery (2 Images)**:
  1. `/home/team/santa-party-decoration-event.jpg` (Alt: `Party decoration`)
  2. `/home/team/exhibition-trade-show-atomfrost.jpg` (Alt: `Exhibition`)

---

### Home Stats Section
- **Component File**: `components/home/stats-section.tsx`
- **Background Media**:
  - Image: `https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3`
  - Fallback: `/placeholder.svg?key=stats-bg`
- **Heading (H2)**: `Our Legacy in the Making`
- **Description Paragraph**:
  > *"With years of experience and countless successful events, we've built a reputation for excellence and innovation in the event management industry."*
- **Statistics Grid**:
  1. `2100+` — `Events Managed (Last 5 Years)`
  2. `350+` — `Corporate Clients`
  3. `1600+` — `Brand Activations delivered across the globe`
  4. `50K+` — `Freelance opportunities created`
  5. `99%` — `Client Satisfaction`

---

### Home Client Logos
- **Component File**: `components/home/client-logos.tsx`
- **Section Heading (H2)**: `Impactful Clients & Companies`
- **Client Logos Inventory (16 Brands)**:
  1. **Boroline**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F4b1bb9be37bf4d5cb1276bf94a397d52?format=webp&width=300`
  2. **Cars24**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F152a80096ce446e5b842af665d3ad116?format=webp&width=300`
  3. **Fevicol**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F6ad9c274e7494845be640247693c2ace?format=webp&width=300`
  4. **Fevikwik**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fd3b448001fd34438a60470426b69ebf4?format=webp&width=300`
  5. **Dr. Fixit**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fb017cf56d63a4ece9350b85debef2015?format=webp&width=300`
  6. **GroupM**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F9a764c957d764b0bb741a9c56d7675d1?format=webp&width=300`
  7. **ICICI Bank**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F7c50757efb964c87b7e13e48514a87c5?format=webp&width=300`
  8. **Kansai Nerolac Paints**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F3e4614459e0d456582d3f76d13c2e40f?format=webp&width=300`
  9. **Licious**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fc175357c227c4664a3ee8e060ac90fda?format=webp&width=300`
  10. **Mirchi**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F8d5736b1c0fb4127b2b2e0f41d24a5b1?format=webp&width=300`
  11. **Niva Bupa Health Insurance**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F73e15cc9f0044be7ab66af70099814b7?format=webp&width=300`
  12. **Pidilite**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F4ef6e6e9d6644903906b4cb6e236a52a?format=webp&width=300`
  13. **Roff**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F39dfefbf64874949ac73bad025483cb2?format=webp&width=300`
  14. **Thomas Cook**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fb900618b5f6a407ea9d979b560d88ea9?format=webp&width=300`
  15. **Zee TV**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fcab575f34d544e90ba052753b7fa663e?format=webp&width=300`
  16. **Zespri**: `https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F393a45e6c2b04e73b2b5372a2ffa5e1f?format=webp&width=300`

---

### Home Process Section
- **Component File**: `components/home/process-section.tsx`
- **Section Heading (H2)**: `How we work?`
- **Process Steps (Interactive Accordion Feature)**:
  1. **`01. Initial Consultation`**
     - **Image**: `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200`
     - **Description**: *"We begin by understanding your goals, vision, and budget to craft a tailored plan and timeline for your event."*
  2. **`02. Planning & Design`**
     - **Image**: `https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200`
     - **Description**: *"Our team designs the experience—venue, décor, vendors, and schedules—ensuring every detail aligns with your brand and style."*
  3. **`03. Execution & Coordination`**
     - **Image**: `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200`
     - **Description**: *"On the day, we manage operations end-to-end: setup, logistics, vendor coordination, and guest experience."*
  4. **`04. Post-Event Services`**
     - **Image**: `https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fd25a23a6b4104bc49c65050b80c1b104?format=webp`
     - **Description**: *"We wrap up with feedback, media delivery, and post-event reporting to measure success and capture memories."*

---

### Home CTA Banner
- **Component File**: `components/home/cta-section.tsx`
- **Background Media**:
  - Image: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2de28a5d3f0748a3bbc8c94c9542a60e`
  - Fallback: `/placeholder.svg?key=cta-bg`
- **Heading (H2)**: `Everything you need to get attention from your audience.`
- **Paragraph**: `Let us create an unforgettable experience that resonates with your guests`

---

### Home Expert Planning
- **Component File**: `components/home/expert-planning.tsx`
- **Section Heading (H2)**: `Elevate Your Events With Our Expert Planning`
- **Features List**:
  1. `01 Unique Set Up` — *"Custom-designed event spaces that reflect your brand and vision"* (Icon: Sparkles)
  2. `02 Full Support and Guidance` — *"Dedicated team available throughout your event planning journey"* (Icon: Users)
  3. `03 High-End Products` — *"Premium equipment, decor, and services for exceptional quality"* (Icon: Zap)
  4. `04 Availability 24/7` — *"Round-the-clock support and design consultation for your needs"* (Icon: Clock)
- **Image Showcase Grid (4 Images)**:
  1. **DJ setup**: `https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0f18591e64d74651873c54c06db9c3d7`
  2. **Decorations**: `https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F9088b880cfb84b6987b31afac6b38ba2?format=webp`
  3. **Lighting**: `https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0204cca0c7114c80b24a5817adb9416b`
  4. **Atmosphere**: `https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3`

---

## 3. About Page (`/about`)
- **Route File**: `app/about/page.tsx`

### About Hero
- **Component File**: `components/about/about-hero.tsx`
- **Background Image**: `/about/hero/luxury-event-venue-with-elegant-decorations.jpg`
- **Badge**: `We are event management group`
- **Main Heading (H1)**: `Crafting unforgettable events with creativity and style.`
- **Pill Stats**:
  - 📍 `Based in Kerala`
  - 🎯 `Established in 2010`
  - ✨ `200+ Projects Done`

---

### About Introduction
- **Component File**: `components/about/about-introduction.tsx`
- **Collage Media**:
  1. `/about/introduction/luxury-event-party-celebration.jpg` (Luxury party setup)
  2. `/about/team/corporate-event-exhibition.jpg` (Corporate event)
  3. `/about/introduction/luxury-event-party-celebration.jpg` (Event celebration setup)
  4. `/about/introduction/elegant-event-venue-decoration.jpg` (Elegant event venue)
- **Heading (H2)**: `Our event group is innovative and dynamic, dedicated to crafting exceptional event experiences.`
- **Paragraph 1**:
  > *"At Pride Eventz, we specialize in creating unforgettable moments across all event categories. From intimate corporate gatherings to grand social celebrations, our comprehensive services include event planning, creative decorations, thematic design, and seamless execution. We transform your vision into reality with meticulous attention to detail."*
- **Paragraph 2**:
  > *"Our commitment goes beyond logistics. We believe every event tells a story, and we're dedicated to creating stunning, organized experiences that leave lasting impressions on your guests. With over a decade of expertise, we've perfected the art of bringing dreams to life."*
- **Paragraph 3**:
  > *"Our team of creative professionals combines artistic vision with practical expertise, ensuring every element—from concept to execution—reflects your unique style and objectives."*
- **Call-to-Action Button**:
  - **Label**: `OUR SERVICES`
  - **Link**: `/services/corporate` (or `/services`)

---

### About Services Carousel
- **Component File**: `components/about/services-carousel-section.tsx`
- **Background Image**: `/about/services-carousel/event-venue-background.jpg`
- **Heading (H2)**: `Our Services`
- **Subheading**: `Comprehensive event solutions tailored to your needs`
- **Carousel Items**:
  1. **Parties**: *"Celebrate life's special moments with our expertly planned and executed party services."* (Icon: Balloon)
  2. **Exhibitions**: *"Showcase your brand with stunning exhibition setups and immersive experiences."* (Icon: Graduation)
  3. **Event in Budget**: *"Premium events tailored to your budget without compromising on quality."* (Icon: Trophy)
  4. **Corporate Events**: *"Professional corporate gatherings that impress and inspire your team."* (Icon: Briefcase)
  5. **Promotions**: *"Launch your brand with impactful promotional events and activations."* (Icon: Megaphone)

---

### About Process
- **Component File**: `components/about/process-section.tsx`
- **Section Overline**: `Methodology`
- **Heading (H2)**: `How we work.`
- **Intro Description**:
  > *"Our proven architectural process ensures every event is executed with mathematical precision and striking creativity."*
- **Process Steps**:
  1. **`01 Discussion`**: *"We start by understanding your vision, goals, and requirements. Our team listens carefully to bring your ideas to life."*
  2. **`02 Planning & Coordination`**: *"Detailed planning, vendor coordination, timeline management, and logistics ensure everything runs smoothly."*
  3. **`03 Execution & Follow-up`**: *"Flawless execution on the day with our dedicated team on-site, followed by post-event support and feedback."*

---

### About Tailored Experience
- **Component File**: `components/about/tailored-experience.tsx`
- **Featured Image**:
  - **Path**: `/about/tailored/balloon-decoration-setup-black-gold.jpg`
  - **Alt Text**: `Balloon decoration setup`
- **Heading (H2)**: `Tailored, seamless event experiences.`
- **Paragraph 1**:
  > *"We understand that every event is unique. That's why we create personalized solutions that reflect your vision, values, and objectives. Our meticulous attention to detail ensures nothing is overlooked."*
- **Paragraph 2**:
  > *"From intimate gatherings to large-scale productions, we bring the same level of dedication and creativity to every project. Your success is our success, and we're committed to exceeding your expectations."*

---

### About Expertise
- **Component File**: `components/about/expertise-section.tsx`
- **Heading (H2)**: `Our Expertise in Event Management`
- **Paragraph 1**:
  > *"With over a decade of experience, we've developed comprehensive expertise across all aspects of event management. From intimate corporate gatherings to grand celebrations, our team brings meticulous planning and creative excellence to every project."*
- **Paragraph 2**:
  > *"Our expert team combines technical knowledge with artistic vision, ensuring every event is executed with precision and leaves a lasting impression on your guests."*
- **Expertise Progress Bars**:
  - `PRIVATE PARTIES`: `95%`
  - `PROJECT MANAGEMENT`: `90%`
  - `DIGITAL MARKETING`: `85%`
  - `STAGE COORDINATION`: `92%`
  - `FIREWORKS & VFX`: `88%`

---

### About Team
- **Component File**: `components/about/team-section.tsx`
- **Heading (H2)**: `Our Creative Team`
- **Subheading**: `Talented professionals dedicated to your success`
- **Team Members (4 Members)**:
  1. **Arun Menon**
     - **Role**: `Founder & Creative Director`
     - **Bio**: *"Visionary leader with 20+ years in event management"*
     - **Photo**: `/about/team/professional-headshot.png`
  2. **Priya Sharma**
     - **Role**: `Operations Manager`
     - **Bio**: *"Expert in logistics and seamless execution"*
     - **Photo**: `/about/team/corporate-event-exhibition.jpg`
  3. **Vikram Kumar**
     - **Role**: `Design Lead`
     - **Bio**: *"Creative genius behind stunning event aesthetics"*
     - **Photo**: `/about/introduction/elegant-event-venue-decoration.jpg`
  4. **Anjali Nair**
     - **Role**: `Client Relations`
     - **Bio**: *"Dedicated to exceeding client expectations"*
     - **Photo**: `/about/introduction/luxury-event-party-celebration.jpg`

---

### About Values
- **Component File**: `components/about/values-section.tsx`
- **Heading (H2)**: `Our Values`
- **Subheading**: `The principles that guide everything we do`
- **Values Cards**:
  1. **Creativity**: *"We push boundaries and think outside the box to create unique experiences"* (Icon: Lightbulb)
  2. **Precision**: *"Every detail matters. We execute with meticulous attention to perfection"* (Icon: Target)
  3. **Innovation**: *"We stay ahead of trends and embrace new technologies and ideas"* (Icon: Zap)

---

### About Timeline
- **Component File**: `components/about/timeline-section.tsx`
- **Heading (H2)**: `Our Journey`
- **Subheading**: `From humble beginnings to industry leaders`
- **Milestones**:
  1. **`2010` — Founded in Kerala**
     - **Description**: *"Pride Eventz was established with a vision to revolutionize event management in Kerala."*
     - **Image**: `/about/timeline/2010-founding-event.jpg`
  2. **`2013` — Expanded to Corporate Events**
     - **Description**: *"We expanded our services to include comprehensive corporate event management solutions."*
     - **Image**: `/about/timeline/corporate-event-2013.jpg`
  3. **`2016` — 100+ Successful Events**
     - **Description**: *"Reached the milestone of 100+ successfully executed events across Kerala."*
     - **Image**: `/about/timeline/celebration-100-events.jpg`
  4. **`2020` — Virtual & Hybrid Events**
     - **Description**: *"Adapted to new trends by offering virtual and hybrid event solutions."*
     - **Image**: `/about/timeline/virtual-event-2020.jpg`
  5. **`2024` — 200+ Projects Milestone**
     - **Description**: *"Celebrated our 200+ projects milestone, solidifying our position as Kerala's leading event company."*
     - **Image**: `/about/timeline/celebration-200-projects.jpg`

---

### About Testimonial Quote
- **Component File**: `components/about/testimonial-quote.tsx`
- **Quote Mark**: `"`
- **Statement (H2)**:
  > *"The power of creativity helps us craft unforgettable events and deliver seamless experiences."*
- **Author Attribution**: `Pride Eventz Team`

---

### About CTA
- **Component File**: `components/about/cta-section.tsx`
- **Heading (H2)**: `Ready to Create Your Next Unforgettable Event?`
- **Subheading**: `Let's bring your vision to life with our expert team and creative solutions.`
- **Action Button**: `CONTACT US` (`/contact`)

---

## 4. Services Hub Page (`/services`)
- **Route File**: `app/services/page.tsx`

### Services Hub Hero
- **Overline**: `Our Expertise`
- **Heading (H1)**: `Comprehensive Event Services.`
- **Introductory Paragraph**:
  > *"We specialize in creating customized solutions that align with your vision and budget. From intimate corporate gatherings to grand destination weddings, we deliver excellence at every scale."*

### Services Directory

```markdown
1. Phase 01: Corporate Events
   - Description: Professional corporate gatherings — product launches, team events, annual functions — executed with precision and creativity.
   - Link: /services/corporate-events
   - Image: https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069

2. Phase 02: Destination Weddings
   - Description: Create magical wedding moments with comprehensive luxury planning, bespoke design, and flawless execution.
   - Link: /services/destination-weddings
   - Image: https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070

3. Phase 03: Concerts
   - Description: Large-scale live concert production — encompassing stage design, sound, lighting, and comprehensive crowd management.
   - Link: /services/concerts
   - Image: https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070

4. Phase 04: Conferences & MICE
   - Description: End-to-end management of meetings, incentives, conferences, and exhibitions with business-class execution.
   - Link: /services/conferences-mice
   - Image: https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070

5. Phase 05: Exhibitions
   - Description: Showcase your brand with stunning custom exhibition setups, functional spaces, and immersive experiences.
   - Link: /services/exhibitions
   - Image: https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070

6. Phase 06: Brand Activation
   - Description: Impactful promotional events and ground-level experiential activations that create real consumer connections.
   - Link: /services/brand-activation
   - Image: https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070

7. Phase 07: Rural Marketing
   - Description: Specialised on-ground campaigns reaching Tier 2, Tier 3 cities and rural markets across India with cultural relevance.
   - Link: /services/rural-marketing
   - Image: https://images.unsplash.com/photo-1506869640319-ce1a44e1e0cb?q=80&w=2070
```

### Services Hub CTA
- **Background Image**: `https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069`
- **Heading (H2)**: `Ready to plan your next event?`
- **Subtext**: `Let's discuss how we can bring your vision to life.`
- **Action Button**: `Let's Work Together` (`/contact`)

---

## 5. Individual Service Detail Pages
All individual service detail pages share the unified template component `components/services/service-page-layout.tsx`. Below is the complete content breakdown for each of the 7 services.

---

### 5.1 Corporate Events
- **Route File**: `app/services/corporate-events/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Corporate Events`
  - **Subheadline**: *"Elevating corporate gatherings with flawless execution, premium production, and impactful brand experiences."*
  - **Hero Image**: `/corporate-presentation-pidilite-brands-showcase.jpg`
  - **Button**: `Discuss Your Project →` (`/contact`)
- **Detailed Overview**:
  - **Introduction**: *"At Pride Eventz, we understand that corporate events are a direct reflection of your brand's prestige and values. From high-stakes product launches to engaging annual meetings, we provide end-to-end event management that ensures every detail is professionally handled."*
  - **Who It's For**: *"For enterprise businesses, regional corporate offices, and fast-growing companies looking to make a lasting impression on employees, stakeholders, and clients."*
  - **The Solution / Problem Solved**: *"We eliminate the stress of logistics, AV coordination, and vendor management, allowing your team to focus on business objectives while we handle the execution."*
  - **Why Pride Eventz**: *"With over a decade of experience across India, our dedicated corporate team guarantees business-class execution with absolute precision."*
- **What We Offer (6 Services)**:
  1. `Product Launches`: High-impact unveilings that generate buzz and media coverage for your new products.
  2. `Annual Meetings & Townhalls`: Seamlessly produced internal gatherings with flawless audio-visual setups.
  3. `Employee Engagement`: Team building and celebration events designed to boost morale and company culture.
  4. `Award Ceremonies`: Elegant gala dinners and recognition events honoring your top performers.
  5. `AV & Stage Production`: State-of-the-art lighting, sound, LED screens, and custom stage fabrication.
  6. `Guest & VIP Handling`: Professional hospitality services including transport, accommodation, and concierge.
- **Our Approach (5 Steps)**:
  1. `01 Discovery & Briefing`: Understanding your corporate objectives, brand guidelines, and audience expectations.
  2. `02 Planning & Creative`: Developing thematic concepts, 3D stage renders, and comprehensive event schedules.
  3. `03 Production & Sourcing`: Coordinating with premium vendors, fabricating stages, and testing all technical setups.
  4. `04 Event Execution`: On-ground management by experienced show callers and floor managers.
  5. `05 Review & Reporting`: Post-event debriefs, media collation, and feedback analysis.
- **Key Highlights**:
  - `End-to-End Execution`: From concept creation to tear-down, we handle every single aspect.
  - `Technical Precision`: Fail-safe AV setups ensuring your presentations run without a hitch.
  - `Brand Alignment`: Strict adherence to corporate identity guidelines in all visual elements.
  - `Scalability`: Capable of managing intimate board meetings or massive 5000+ attendee summits.
  - **Supporting Media**:
    - Image 1: `/services/layout/elegant-wedding-stage-decoration.jpg`
    - Image 2: `/services/layout/mall-event-with-massive-crowd-aerial-view.jpg`
- **Featured Projects**:
  1. **Pidilite Brands Showcase**
     - Category: `Corporate`
     - Image: `/corporate-presentation-pidilite-brands-showcase.jpg`
     - Description: A comprehensive brand showcase featuring multiple product lines and interactive displays.
     - Result: `1,200+ attendees with seamless execution.`
  2. **Idea Telecom Launch**
     - Category: `Corporate`
     - Image: `/idea-telecom-corporate-event-stage-branding.jpg`
     - Description: High-energy stage branding and corporate event for regional team members.
     - Result: `Record-breaking employee engagement scores.`
- **Client Testimonial**:
  - **Quote**: *"Pride Eventz delivered our annual meet with absolute perfection. Their attention to technical details and flow was outstanding."*
  - **Client**: `VP of Marketing, Leading FMCG Brand`
- **Call to Action**:
  - **Headline**: `Ready to Plan Your Next Corporate Event?`
  - **Subheadline**: `Connect with our corporate events team to discuss your objectives and receive a tailored proposal.`
  - **Buttons**:
    - `Contact Us Today` (`/contact`)
    - `WhatsApp Us` (`https://wa.me/919895690349`)

---

### 5.2 Destination Weddings
- **Route File**: `app/services/destination-weddings/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Destination Weddings`
  - **Subheadline**: *"Transforming your dream wedding into a breathtaking reality with bespoke design and seamless coordination."*
  - **Hero Image**: `/elegant-wedding-stage-decoration.jpg`
- **Detailed Overview**:
  - **Introduction**: *"Your wedding day should be nothing short of magical. Pride Eventz specializes in crafting luxury destination weddings across India's most stunning locales. From royal palace ceremonies to serene beachside vows, we bring your vision to life."*
  - **Who It's For**: *"Couples and families seeking a stress-free, luxurious wedding experience with personalized themes and flawless hospitality."*
  - **The Solution / Problem Solved**: *"Planning a wedding from afar can be overwhelming. We act as your local experts, handling every vendor, venue detail, and logistic so you can simply enjoy the celebration."*
  - **Why Pride Eventz**: *"Our dedicated wedding planners combine creative styling with rigorous logistical planning to ensure your special days are perfectly orchestrated."*
- **What We Offer (6 Services)**:
  1. `Venue Sourcing`: Finding and securing the perfect luxury resorts, heritage properties, or beach venues.
  2. `Thematic Décor`: Bespoke floral arrangements, stage setups, and ambient lighting designed to your taste.
  3. `Guest Hospitality`: Complete logistics including airport transfers, welcome kits, and room allocations.
  4. `Entertainment`: Booking premium artists, live bands, DJs, and traditional performers.
  5. `Ritual Coordination`: Ensuring all cultural and religious requirements are respectfully met and scheduled.
  6. `Catering & F&B`: Curating exquisite multi-cuisine menus and premium bar setups with top caterers.
- **Our Approach (5 Steps)**:
  1. `01 Initial Consultation`: Understanding your love story, preferred locations, and vision for the wedding.
  2. `02 Budgeting & Venues`: Providing transparent cost estimates and conducting venue recce visits.
  3. `03 Design & Styling`: Creating mood boards, 3D décor renders, and finalizing the aesthetic.
  4. `04 Logistics Planning`: Structuring the timeline, travel itineraries, and vendor load-ins.
  5. `05 Flawless Execution`: A dedicated team on the ground to manage the flow of events from Haldi to Reception.
- **Key Highlights**:
  - `Personalized Styling`: No two weddings are alike. We design unique setups tailored to your personality.
  - `Stress-Free Hospitality`: A dedicated shadow team for the couple and VIP guests.
  - `Trusted Vendor Network`: Access to the finest decorators, makeup artists, and photographers in the industry.
  - `Crisis Management`: Always prepared with backup plans for weather changes or unexpected delays.
- **Featured Projects**:
  1. **Elegant Royal Wedding**
     - Category: `Wedding`
     - Image: `/elegant-wedding-stage-decoration.jpg`
     - Description: A luxurious multi-day celebration featuring elaborate floral mandaps and vintage themes.
     - Result: `Flawless execution of 5 distinct events over 3 days.`
  2. **Traditional Kerala Ceremony**
     - Category: `Wedding`
     - Image: `/traditional-kerala-dancers-in-costumes-inauguratio.jpg`
     - Description: A culturally rich celebration featuring traditional dancers and authentic rituals.
     - Result: `Seamless integration of tradition and modern luxury.`
- **Client Testimonial**:
  - **Quote**: *"They didn't just plan a wedding; they created a fairy tale for us. Every single guest was treated like royalty."*
  - **Client**: `Happy Couple, Kochi`
- **Call to Action**:
  - **Headline**: `Let's Start Planning Your Dream Wedding`
  - **Subheadline**: `Schedule a free consultation with our luxury wedding planners today.`

---

### 5.3 Live Concerts
- **Route File**: `app/services/concerts/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Live Concerts`
  - **Subheadline**: *"Producing high-energy live music events with massive stage production and flawless crowd management."*
  - **Hero Image**: `/live-performance-with-professional-lighting.jpg`
- **Detailed Overview**:
  - **Introduction**: *"Live concerts demand an entirely different level of expertise. From massive technical riders to complex crowd flow dynamics, Pride Eventz has the experience to execute stadium-scale concerts and intimate live gigs safely and spectacularly."*
  - **Who It's For**: *"Music promoters, artists, corporate sponsors, and festival organizers looking to host large-scale public or private entertainment events."*
  - **The Solution / Problem Solved**: *"We mitigate the massive risks associated with large crowds and live technical production by implementing rigorous safety protocols and employing top-tier audio-visual engineers."*
  - **Why Pride Eventz**: *"Our production team understands the technical language of international artist riders and has a proven track record of securing necessary local permissions swiftly."*
- **What We Offer (6 Services)**:
  1. `Stage Production`: Massive trussing, custom stage fabrication, and dynamic LED backdrops.
  2. `Sound & Lighting`: Line-array audio systems and intelligent lighting rigs programmed for impact.
  3. `Artist Management`: Handling hospitality riders, green rooms, transport, and scheduling for performers.
  4. `Permissions & Licensing`: Securing all necessary local, police, and entertainment tax clearances.
  5. `Crowd Management`: Strategic barricading, security deployment, and safe entry/exit flow planning.
  6. `Ticketing Integration`: Setting up box offices and integrating with online ticketing platforms.
- **Our Approach (5 Steps)**:
  1. `01 Feasibility Study`: Analyzing venue capacities, acoustics, and infrastructural requirements.
  2. `02 Technical Planning`: Mapping out sound plots, lighting grids, and stage engineering.
  3. `03 Safety & Security`: Developing comprehensive evacuation and crowd control protocols.
  4. `04 Production Build`: Rigging, testing, and sound checks leading up to the main event.
  5. `05 Show Calling`: Live coordination of lights, sound, visuals, and artist cues during the performance.
- **Key Highlights**:
  - `Safety First`: Rigorous structural integrity checks for all staging and trussing.
  - `Technical Excellence`: Partnering with the country's top sound engineers and lighting designers.
  - `VIP Experiences`: Creating premium VVIP lounges and viewing decks with dedicated F&B.
  - `Sponsor Integration`: Ensuring maximum visibility and engagement for event sponsors.
- **Featured Projects**:
  1. **Arena Rock Concert**
     - Category: `Concert`
     - Image: `/live-performance-with-professional-lighting.jpg`
     - Description: Massive stadium production with extensive pyrotechnics and intelligent lighting.
     - Result: `Sold out crowd of 15,000+ safely managed.`
  2. **Corporate Music Festival**
     - Category: `Concert`
     - Image: `/corporate-event-with-crowd-stage-lighting.jpg`
     - Description: A high-energy private concert featuring top-tier playback singers.
     - Result: `Electrifying atmosphere with zero technical faults.`
- **Client Testimonial**:
  - **Quote**: *"Pride Eventz handles the technical backend so flawlessly that the artists and promoters can just focus on the show. Highly recommended."*
  - **Client**: `Event Promoter, Live Nation India`
- **Call to Action**:
  - **Headline**: `Planning a Massive Live Event?`
  - **Subheadline**: `Connect with our concert production specialists to review your technical riders and venue requirements.`

---

### 5.4 Conferences & MICE
- **Route File**: `app/services/conferences-mice/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Conferences & MICE`
  - **Subheadline**: *"Delivering professional, business-class execution for Meetings, Incentives, Conferences, and Exhibitions."*
  - **Hero Image**: `/conference-room-setup-corporate-event.jpg`
- **Detailed Overview**:
  - **Introduction**: *"MICE events are the cornerstone of corporate networking and knowledge sharing. Pride Eventz delivers sophisticated conference management services that prioritize delegate experience, smooth scheduling, and high-quality presentations."*
  - **Who It's For**: *"Industry associations, multinational corporations, and medical or technical bodies hosting large-scale knowledge-sharing events."*
  - **The Solution / Problem Solved**: *"Managing hundreds of delegates, multiple breakout sessions, and complex speaker schedules requires extreme organization. We provide the systems and personnel to make it effortless."*
  - **Why Pride Eventz**: *"We blend corporate professionalism with innovative event tech, ensuring your conference isn't just organized, but truly engaging for all attendees."*
- **What We Offer (6 Services)**:
  1. `Venue Procurement`: Sourcing luxury convention centers and star hotels that meet capacity requirements.
  2. `Delegate Registration`: Digital check-ins, custom lanyards, and seamless registration desk management.
  3. `Speaker Coordination`: Managing travel, presentations, and green rooms for keynote speakers.
  4. `AV & Presentation`: Crisp audio and high-resolution LED screens for clear, impactful presentations.
  5. `Breakout Sessions`: Coordinating simultaneous tracks in multiple halls with distinct AV setups.
  6. `Gala Dinners`: Curating evening entertainment and networking dinners to conclude the event.
- **Our Approach (5 Steps)**:
  1. `01 Requirement Analysis`: Determining attendee numbers, session formats, and accommodation needs.
  2. `02 Digital Integration`: Setting up event apps, registration portals, and QR ticketing.
  3. `03 Logistics & Travel`: Coordinating flights, airport transfers, and hotel room blocks.
  4. `04 On-Site Management`: Deploying a massive helpdesk and usher team for smooth delegate flow.
  5. `05 Post-Event Analytics`: Providing attendance reports, feedback scores, and session engagement metrics.
- **Key Highlights**:
  - `Flawless Timelines`: Keeping complex multi-speaker schedules running strictly on time.
  - `Tech-Enabled`: Utilizing the latest in RFID, event apps, and live-streaming technology.
  - `Premium Hospitality`: Ensuring F&B matches the high standards expected by corporate delegates.
  - `Sponsor Booths`: Integrating exhibition areas seamlessly into the conference flow.
- **Featured Projects**:
  1. **International Medical Summit**
     - Category: `MICE`
     - Image: `/conference-room-setup-corporate-event.jpg`
     - Description: A 3-day conference featuring 40+ speakers and simultaneous breakout sessions.
     - Result: `Smooth management of 800+ international delegates.`
  2. **Tech Leadership Forum**
     - Category: `MICE`
     - Image: `/corporate-presentation-pidilite-brands-showcase.jpg`
     - Description: High-end corporate summit with futuristic stage design and live streaming.
     - Result: `Over 5,000 virtual attendees integrated flawlessly.`
- **Client Testimonial**:
  - **Quote**: *"The registration process was a breeze, and the AV support for our international speakers was world-class. A truly professional team."*
  - **Client**: `Director, National Medical Association`
- **Call to Action**:
  - **Headline**: `Host a World-Class Conference`
  - **Subheadline**: `Let us manage the logistics while you focus on delivering great content.`

---

### 5.5 Exhibitions & Trade Shows
- **Route File**: `app/services/exhibitions/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Exhibitions & Trade Shows`
  - **Subheadline**: *"Showcase your brand with stunning stall designs, immersive displays, and strategic visitor engagement."*
  - **Hero Image**: `/trade-show-booth-setup-exhibition.jpg`
- **Detailed Overview**:
  - **Introduction**: *"In a crowded trade show, your brand needs to stand out instantly. Pride Eventz offers comprehensive exhibition management—from designing custom fabricated stalls to managing on-ground visitor interactions."*
  - **Who It's For**: *"Brands, manufacturers, and service providers participating in major trade shows, expos, and industry exhibitions."*
  - **The Solution / Problem Solved**: *"We bridge the gap between architectural design and marketing impact, providing turnkey stall fabrication that attracts footfall and captures leads."*
  - **Why Pride Eventz**: *"Our in-house design and fabrication capabilities ensure that what you see in the 3D render is exactly what gets built on the exhibition floor, on time and on budget."*
- **What We Offer (6 Services)**:
  1. `3D Stall Design`: Creating visually striking, functional, and brand-compliant stall architectures.
  2. `Custom Fabrication`: High-quality woodwork, metal structures, and premium finishing.
  3. `AV & Tech Integration`: Embedding touch screens, video walls, and interactive product demos.
  4. `Brand Graphics`: High-resolution backlit branding, 3D lettering, and flex printing.
  5. `On-Site Management`: Providing hostesses, lead generation staff, and technical support.
  6. `Dismantling & Storage`: Safe breakdown and storage of reusable stall components post-event.
- **Our Approach (5 Steps)**:
  1. `01 Brand Understanding`: Analyzing your products to determine the best display and interaction methods.
  2. `02 3D Rendering`: Presenting photorealistic mockups of the proposed stall design.
  3. `03 Workshop Fabrication`: Building components in our controlled workshop to ensure quality.
  4. `04 On-Site Installation`: Rapid, safe assembly at the venue adhering to strict expo guidelines.
  5. `05 Handover`: Delivering a fully functional, pristine stall before the doors open.
- **Key Highlights**:
  - `Striking Visuals`: Designs scientifically formulated to draw the eye from across the hall.
  - `Functional Spaces`: Intelligent layouts that allow for product display, private meetings, and storage.
  - `Turnkey Solutions`: You simply arrive on day one; we handle all the heavy lifting and permissions.
  - `Interactive Elements`: Integrating VR/AR and gamification to increase visitor dwell time.
- **Featured Projects**:
  1. **Auto Expo Mega Pavilion**
     - Category: `Exhibition`
     - Image: `/trade-show-booth-setup-exhibition.jpg`
     - Description: A massive 500sqm custom-built pavilion featuring rotating car displays and VIP lounges.
     - Result: `Awarded 'Best Stall Design' at the expo.`
  2. **Tech Expo Interactive Booth**
     - Category: `Exhibition`
     - Image: `/corporate-presentation-pidilite-brands-showcase.jpg`
     - Description: A sleek, modern stall focusing on touch-screen interactions and software demos.
     - Result: `Generated over 400 qualified B2B leads.`
- **Client Testimonial**:
  - **Quote**: *"Our stall was the talk of the exhibition. The finish quality of the fabrication was premium, and the Pride Eventz team was incredibly supportive."*
  - **Client**: `Marketing Head, Industrial Manufacturing`
- **Call to Action**:
  - **Headline**: `Stand Out at Your Next Trade Show`
  - **Subheadline**: `Contact our 3D design team for a custom stall concept and quotation.`

---

### 5.6 Brand Activation
- **Route File**: `app/services/brand-activation/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Brand Activation`
  - **Subheadline**: *"Driving measurable brand engagement through creative, on-ground experiential marketing campaigns."*
  - **Hero Image**: `/under-the-sea-themed-balloon-decoration-with-chara.jpg`
- **Detailed Overview**:
  - **Introduction**: *"Consumers don't just want to see your brand; they want to experience it. Pride Eventz designs and executes dynamic brand activations that create meaningful, memorable interactions between your product and your target audience."*
  - **Who It's For**: *"FMCG brands, consumer electronics, automobile launches, and retail businesses looking to boost direct consumer engagement."*
  - **The Solution / Problem Solved**: *"We cut through advertising clutter by putting your product directly in the hands of consumers, creating instant feedback loops and generating tangible leads."*
  - **Why Pride Eventz**: *"We combine creative hook concepts with aggressive on-ground operational muscle to execute activations across malls, colleges, and high-street locations nationwide."*
- **What We Offer (6 Services)**:
  1. `Mall Activations`: High-footfall setups featuring games, product demos, and striking centerpieces.
  2. `In-Store Promotions`: Retail-level activations to boost point-of-sale conversions.
  3. `Sampling Campaigns`: Strategic distribution of product samples to the right demographic.
  4. `Experiential Tech`: Using AR, VR, and interactive photo booths to create shareable moments.
  5. `Promotional Staffing`: Providing trained, energetic brand ambassadors and emcees.
  6. `Lead Generation`: Digital data capture setups for post-campaign marketing.
- **Our Approach (5 Steps)**:
  1. `01 Campaign Strategy`: Identifying the target demographic and the most effective locations.
  2. `02 Creative Hook`: Designing an engaging activity that stops people in their tracks.
  3. `03 Setup Production`: Fabricating portable, high-quality kiosks and activity zones.
  4. `04 Deployment`: Managing permissions, logistics, and staff deployment across multiple locations.
  5. `05 Data & Reporting`: Collating leads, interaction metrics, and consumer feedback.
- **Key Highlights**:
  - `High Engagement`: Focusing on activities that require active consumer participation.
  - `Social Amplification`: Designing aesthetic setups that encourage visitors to take photos and post online.
  - `Trained Manpower`: Our promoters are thoroughly trained on your brand guidelines and product FAQs.
  - `Measurable ROI`: Clear tracking of samples distributed, leads captured, and sales driven.
- **Featured Projects**:
  1. **FMCG Product Launch Setup**
     - Category: `Activation`
     - Image: `/under-the-sea-themed-balloon-decoration-with-chara.jpg`
     - Description: A thematic mall activation featuring a massive interactive balloon installation.
     - Result: `Engaged over 5,000 families in one weekend.`
  2. **Retail Mall Roadshow**
     - Category: `Activation`
     - Image: `/mall-event-with-massive-crowd-aerial-view.jpg`
     - Description: A multi-city mall activation with an engaging central stage and emcee games.
     - Result: `Averaged 800+ product samplings per day.`
- **Client Testimonial**:
  - **Quote**: *"The energy their promoters brought to the mall activation was incredible. We saw an immediate 30% spike in nearby retail sales during the campaign."*
  - **Client**: `Brand Manager, National Beverage Company`
- **Call to Action**:
  - **Headline**: `Ready to Activate Your Brand?`
  - **Subheadline**: `Let's brainstorm an experiential campaign that your consumers won't forget.`

---

### 5.7 Rural Marketing
- **Route File**: `app/services/rural-marketing/page.tsx`
- **Hero Section**:
  - **Title (H1)**: `Rural Marketing`
  - **Subheadline**: *"Penetrating deep into Tier 2, Tier 3 cities and rural India with impactful, localized on-ground campaigns."*
  - **Hero Image**: `/sunfeast-arrowroot-stage-branding-corporate-event.jpg`
- **Detailed Overview**:
  - **Introduction**: *"The real growth engine of India lies in its rural markets. Pride Eventz specializes in navigating the complex logistics and cultural nuances of rural marketing, delivering your brand message directly to the heartland."*
  - **Who It's For**: *"Agri-businesses, telecom companies, FMCG brands, and financial institutions targeting rural and semi-urban demographics."*
  - **The Solution / Problem Solved**: *"Reaching rural audiences requires dealing with difficult terrain, local permissions, and language barriers. Our experienced field teams handle these challenges seamlessly."*
  - **Why Pride Eventz**: *"With deep-rooted networks across rural India and a fleet of customized campaign vehicles, we ensure your message is delivered in the local dialect with maximum impact."*
- **What We Offer (6 Services)**:
  1. `Van Campaigns`: Custom fabricated mobile units equipped with AV systems for village-to-village reach.
  2. `Haat & Mela Activations`: Strategic stall placements and engaging activities in high-footfall weekly markets.
  3. `Nukkad Natak (Street Plays)`: Using traditional theatre to communicate brand benefits and social messages.
  4. `Retailer Contact Programs`: Engaging with local shopkeepers to boost distribution and visibility.
  5. `Agri-Connect Programs`: Specialized campaigns targeting farmers at mandis and demonstration plots.
  6. `Vernacular Content`: Developing localized audio-visual content and printed collaterals.
- **Our Approach (5 Steps)**:
  1. `01 Route Planning`: Mapping out optimized travel routes covering maximum target villages.
  2. `02 Vehicle Fabrication`: Converting standard trucks into eye-catching, functional brand stages.
  3. `03 Local Casting`: Hiring local emcees and actors who speak the regional dialect fluently.
  4. `04 Field Execution`: Daily route deployment with live GPS tracking and progress reports.
  5. `05 Impact Measurement`: Collecting rural consumer data, sales figures, and photographic evidence.
- **Key Highlights**:
  - `Deep Penetration`: Reaching remote areas where traditional media and digital advertising fail to impact.
  - `Cultural Relevance`: Tailoring communication to align with local customs and sensibilities.
  - `Real-Time Tracking`: Daily MIS reports and live location tracking of all campaign vehicles.
  - `Scalable Operations`: Capability to run simultaneous 50+ van campaigns across multiple states.
- **Featured Projects**:
  1. **Sunfeast Rural Connect**
     - Category: `Rural`
     - Image: `/sunfeast-arrowroot-stage-branding-corporate-event.jpg`
     - Description: A massive multi-state van campaign engaging rural consumers with product sampling and games.
     - Result: `Reached over 500 villages in 45 days.`
  2. **Telecom Network Expansion**
     - Category: `Rural`
     - Image: `/idea-telecom-corporate-event-stage-branding.jpg`
     - Description: On-ground mela activations promoting new network coverage in semi-urban belts.
     - Result: `Generated thousands of new SIM activations locally.`
- **Client Testimonial**:
  - **Quote**: *"Pride Eventz understands the pulse of rural India. Their van campaign execution was flawless, despite the challenging terrain and weather conditions."*
  - **Client**: `Marketing Director, Agri-Tech Solutions`
- **Call to Action**:
  - **Headline**: `Expand Your Reach into Rural Markets`
  - **Subheadline**: `Connect with our rural marketing experts to plan a highly targeted, localized campaign.`

---

## 6. Portfolio Page (`/portfolio`)
- **Route File**: `app/portfolio/page.tsx`

### Portfolio Hero
- **Component File**: `components/portfolio/portfolio-hero.tsx`
- **Background Media**:
  - **Image**: `/portfolio/hero/luxury-event-party-concert-pink-purple-lighting-cr.jpg`
  - **Overlay**: Gradient from orange-500/60 to white/60
- **Main Heading (H1)**: `Portfolio`
- **Subheading**: `Where every detail counts, our work stands out.`

---

### Portfolio Filter Tabs
- **Component File**: `components/portfolio/filter-tabs.tsx`
- **Filter Categories**:
  1. `All Works` (`id: all`)
  2. `Corporate Events` (`id: corporate`)
  3. `Destination Weddings` (`id: weddings`)
  4. `Concerts` (`id: concerts`)
  5. `Conferences & MICE` (`id: mice`)
  6. `Exhibitions` (`id: exhibitions`)
  7. `Brand Activation` (`id: brand-activation`)
  8. `Rural Marketing` (`id: rural-marketing`)

---

### Portfolio Gallery & Lightbox
- **Component File**: `components/portfolio/portfolio-grid.tsx`
- **Default Load Count**: 9 items (expands with "Load More")
- **Modal Lightbox Details**:
  - Description: *"This project showcases our expertise in creating memorable event experiences with attention to every detail."*
  - Action Button: `View More Projects`

#### Complete Project Catalog (41 Items):

| ID | Title | Category | Date | Image Source |
|:---|:------|:---------|:-----|:-------------|
| 1 | Corporate Event with Stage Lighting | Concerts | March 2024 | `/portfolio/grid/corporate-event-with-crowd-stage-lighting.jpg` |
| 2 | Under the Sea Balloon Decoration | Exhibitions | February 2024 | `/portfolio/grid/under-the-sea-themed-balloon-decoration-with-chara.jpg` |
| 3 | Pidilite Brands Showcase | Brand Activation | January 2024 | `/portfolio/grid/corporate-presentation-pidilite-brands-showcase.jpg` |
| 4 | Traditional Kerala Dancers | Rural Marketing | December 2023 | `/portfolio/grid/traditional-kerala-dancers-in-costumes-inauguratio.jpg` |
| 5 | Sunfeast Arrowroot Stage Branding | Brand Activation | November 2023 | `/portfolio/grid/sunfeast-arrowroot-stage-branding-corporate-event.jpg` |
| 6 | Mall Event Aerial View | Concerts | October 2023 | `/portfolio/grid/mall-event-with-massive-crowd-aerial-view.jpg` |
| 7 | Purple Pink Butterfly Entrance | Destination Weddings | September 2023 | `/portfolio/grid/decorative-entrance-purple-pink-lighting-butterfly.jpg` |
| 8 | Idea Telecom Corporate Event | Brand Activation | August 2023 | `/portfolio/grid/idea-telecom-corporate-event-stage-branding.jpg` |
| 9 | Elegant Wedding Stage | Destination Weddings | July 2023 | `/portfolio/grid/elegant-wedding-stage-decoration.jpg` |
| 10 | Trade Show Booth Setup | Exhibitions | June 2023 | `/portfolio/grid/trade-show-booth-setup-exhibition.jpg` |
| 11 | Conference Room Setup | Conferences & MICE | May 2023 | `/portfolio/grid/conference-room-setup-corporate-event.jpg` |
| 12 | Live Performance with Lighting | Concerts | April 2023 | `/portfolio/grid/live-performance-with-professional-lighting.jpg` |
| 13 | Rotary Governor Elect Seminar Stage | Corporate Events | December 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd71f94c4968f48a3ad8e5933963902b1?format=webp&width=800` |
| 14 | Godrej Unlocking 7 Product Launch | Corporate Events | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6a3a0e7c5ad54f4099707bb3d66477b9?format=webp&width=800` |
| 15 | HP x Microsoft Future Is Here Conference | Conferences & MICE | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F996b029f5fcb4a51b6d3c7f8ad3661ef?format=webp&width=800` |
| 16 | Carestream Partner Conference Welcome Stage | Conferences & MICE | 2025 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa7beb0d255d14d0a9ac16dc1f44be26e?format=webp&width=800` |
| 17 | Pidilite Premier Club Live Performance | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbeda75a87a2e4568b5d66d9671b4e4aa?format=webp&width=800` |
| 18 | LED Infinity Dance Floor Setup | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F82c332469bd34e908924db10173dca0c?format=webp&width=800` |
| 19 | Rotary Panel Discussion Stage with Dual Screens | Corporate Events | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2426867686274f258daf5c5e650c4458?format=webp&width=800` |
| 20 | Cultural Welcome Procession with Elephants | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbba071cdbc08433fad8260996e49be86?format=webp&width=800` |
| 21 | Rotary Institute Grand Red Stage Lighting | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa2982656be3648e18012fc92e12b6518?format=webp&width=800` |
| 22 | Event Check‑in and Wayfinding Branding | Brand Activation | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F87489872402d4dcfb6cc169bef7944f2?format=webp&width=800` |
| 23 | Boardroom Seminar Setup | Conferences & MICE | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F53f6b6ee8aa54930afa049e3d290424e?format=webp&width=800` |
| 24 | Traditional Tilak Welcome Ceremony | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff1fcdd52c7b24426b70fb147487e6383?format=webp&width=800` |
| 25 | Pidilite Premier Club Night Stage | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa40c787ed1f24d148e8284d95a08c247?format=webp&width=800` |
| 26 | LEAP 2025 Ballroom Conference | Conferences & MICE | 2025 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4d68f53b5629472c938e18e1dcf7c72f?format=webp&width=800` |
| 27 | Premier Club Stage with Side LED Walls | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fded0f48caef74b2ea6dee2d191279da7?format=webp&width=800` |
| 28 | Kajaria Kerovit Brand Conference Stage | Brand Activation | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4212bbd5c9244b83bf5cfba36dab8ea0?format=webp&width=800` |
| 29 | Rotary Institute Main Hall Night Show | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F5e49c185a78d444585e93493f9bb4a92?format=webp&width=800` |
| 30 | Corporate Annual Meet – Collections Team | Corporate Events | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F13d418bdcef54491bccf791cd3692165?format=webp&width=800` |
| 31 | Medtronic Exhibition Booth | Exhibitions | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fc7af8a2f5cdc4da29f16df64c6dea0e2?format=webp&width=800` |
| 32 | PREET Heavy Machinery Outdoor Stall | Exhibitions | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fea0e9852f5984c498e38a14cd04d2d58?format=webp&width=800` |
| 33 | Rotary International Terminal Check‑in Setup | Brand Activation | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F51c02e0fb16849aaa80a3af104b3f1c3?format=webp&width=800` |
| 34 | Pharma Backlit Product Showcase Booth | Exhibitions | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fb4b463a000684fdc8614f9dba5cf7960?format=webp&width=800` |
| 35 | Premier Club Outdoor Night Stage | Concerts | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa674fa8251e74b1ca18bee31d16aa87d?format=webp&width=800` |
| 36 | Epson Branded Exhibition Pavilion | Exhibitions | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6c0150dd8c4f4285a31c213ebae6def6?format=webp&width=800` |
| 37 | KFC Onam Mall Activation | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F72800419188d4458b89d69eba8e971a7?format=webp&width=800` |
| 38 | River EV Scooters Shopping Mall Display | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F799eef597d8a464fa3d9665d1fa90f25?format=webp&width=800` |
| 39 | LinenClub Showroom on Wheels Van | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4186d12cddf648a4ba750d25117ddc4a?format=webp&width=800` |
| 40 | Bosch Beach Roadshow Experience Truck | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd388df5ae1d24615bd441a7abd1f260e?format=webp&width=800` |
| 41 | Canon Dealer Meet Roadshow Launch | Rural Marketing | 2024 | `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbb9e53f019704f1d9ec3510043a91258?format=webp&width=800` |

---

### Portfolio Load More
- **Component File**: `components/portfolio/load-more-section.tsx`
- **Button**: `LOAD MORE` (Loading State: `Loading...`)

---

### Portfolio CTA Banner
- **Component File**: `components/portfolio/cta-banner.tsx`
- **Heading (H2)**: `Have a Project in Mind?`
- **Subtext**: `Let's bring your vision to life with our creative expertise`
- **Buttons**:
  - `View Services` (`/services/corporate`)
  - `Contact Us` (`/contact`)

---

### Portfolio Related Services
- **Component File**: `components/portfolio/related-services.tsx`
- **Heading (H2)**: `Explore Our Services`
- **Services (3 Cards)**:
  1. **Corporate Events** (Icon: Building2): *"Professional conferences, product launches, and business gatherings"* → `Learn More →` (`/services/corporate-events`)
  2. **Exhibitions** (Icon: Grid3x3): *"Trade shows and brand showcases with creative booth designs"* → `Learn More →` (`/services/exhibitions`)
  3. **Destination Weddings** (Icon: Heart): *"Celebrations and gatherings for memorable moments"* → `Learn More →` (`/services/destination-weddings`)

---

### Portfolio Testimonials
- **Component File**: `components/portfolio/testimonial-slider.tsx`
- **Heading (H2)**: `What Our Clients Say`
- **Testimonial Slides (3 Slides)**:
  1. **Rajesh Kumar** — `Tech Startup` (Rating: 5 Stars, Image: `/portfolio/testimonials/professional-man-headshot.png`):
     - *"Pride Eventz transformed our product launch into an unforgettable experience. Their attention to detail was exceptional."*
  2. **Priya Sharma** — `Private Party Client` (Rating: 5 Stars, Image: `/portfolio/testimonials/professional-woman-headshot.png`):
     - *"Our celebration was perfect thanks to Pride Eventz. They made our vision come to life beautifully."*
  3. **Amit Patel** — `Corporate Client` (Rating: 5 Stars, Image: `/placeholder.svg?height=100&width=100`):
     - *"Professional, creative, and reliable. Pride Eventz exceeded all our expectations for our annual conference."*

---

### Portfolio Stats
- **Component File**: `components/portfolio/stats-counter.tsx`
- **Background Image**: `/portfolio/statistics/collage-event-photos-celebration.jpg`
- **Counter Statistics**:
  - `200+` — `Events Completed`
  - `15+` — `Years Experience`
  - `500+` — `Happy Clients`
  - `98%` — `Satisfaction Rate`

---

## 7. Clients Page (`/clients`)
- **Route File**: `app/clients/page.tsx`

### Clients Hero
- **Component File**: `components/clients/clients-hero.tsx`
- **Background Image**: `/clients/hero/concert-stage-lighting-event.jpg`
- **Interactive Light Rays**: Rotating SVG background effect
- **Badge**: `Our Clients`
- **Heading (H1)**: `Trusted by Leading Brands`
- **Subheading**: `Trusted by Leading Brands – A Glimpse of Our Valued Clients`

---

### Featured Clients Grid
- **Component File**: `components/clients/featured-clients-grid.tsx`
- **Client Cards (6 In-Depth Spotlights)**:

1. **Fevicol**
   - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa9cdc524d3464c029cc1b01cb24af14a?format=webp&width=800`
   - **Description**: *"One of the most trusted adhesive brands in India, Fevicol has set industry standards for decades. With reliability in manufacturing and construction, we made it a household name."*

2. **Fevikwik**
   - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd7daeac74c234251bf4099d8cf47b791?format=webp&width=800`
   - **Description**: *"Leading the instant adhesive segment with fierce loyalty, Fevikwik is known for its fast-acting, strong bonding formula. It is widely used for quick household repairs, industrial applications, and consumer needs."*

3. **Mirchi**
   - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F3e0507135bd7417d9b2ccb7cbb359293?format=webp&width=800`
   - **Description**: *"A pioneer and undisputed king of the nationwide Radio leading each network, Radio Mirchi. With its engaging music, talk shows, and big FM presence, Mirchi connects with millions of listeners daily."*

4. **Zespri**
   - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F63036d9ee4cb4551a327ef146ccd5f52?format=webp&width=800`
   - **Description**: *"It globally recognizes best fruit & premium kiwifruit brand delivering excellence in both offering a bright, vibrant taste & fresh produce world. The only quality nutritious fruit has grown successfully."*

5. **ICICI Bank**
   - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F091fdcb4dc784f1daa4b0cbaf287fedb?format=webp&width=800`
   - **Description**: *"One of India's biggest and most prestigious for vast corporate banking. They offer comprehensive range of banking and financial services, including retail corporate, and a good banking solution."*

6. **Zee TV**
   - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff9b9fe73e0ae4513a30c0daf5dd06b61?format=webp&width=800`
   - **Description**: *"As India's original television story, it is a leading entertainment destination known for its creative programming, including blockbuster shows, reality shows and cultural storytelling."*

---

### Clients Testimonials
- **Component File**: `components/clients/testimonials-section.tsx`
- **Heading (H2)**: `We're trusted by leading worldwide experts.`
- **Client Testimonial Cards**:
  1. **Janeen babu** (`Google Reviewer`):
     - *"I loved the way of work of pride eventz. Will feel that youngsters energy and very budgetive eventz. Done a event with pride eventz and its awesome quality. Thank you pride Eventz And keep on going on guys."*
  2. **Gfruhik a** (`Local Elite Now`):
     - *"The pride Eventz has a very well trained and maintained a very humble with the customer and has a very well trained employees"*
  3. **Priya Sharma** (`Event Organizer`):
     - *"Exceptional service and creativity! Pride Eventz transformed our vision into reality with professionalism and attention to detail. Highly recommended for any event."*
  4. **Rajesh Kumar** (`Corporate Manager`):
     - *"On-time delivery and outstanding execution. Pride Eventz's team went above and beyond to make our corporate event a huge success. Will definitely work with them again!"*

---

### Clients Logo Carousel
- **Component File**: `components/clients/client-logos-carousel.tsx`
- **Marquee Logos (16 Brands, Autoscrolling)**:
  1. `Boroline`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fb160f523d42641059874d0844c8a91bd?format=webp&width=800`
  2. `Cars24`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd75876a5beef467090a1645e7835f2c3?format=webp&width=800`
  3. `Fevicol`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F30a3d55d5d4d4fd5895e6dfb5ac91a02?format=webp&width=800`
  4. `Fevikwik`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F61beb9b3b3f846bc975c1c762a2ebf06?format=webp&width=800`
  5. `Dr. Fixit`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F7ba0997b38144d7ab0449117f2525af2?format=webp&width=800`
  6. `GroupM`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F96b1229fc87d466ea9187d32097d9b99?format=webp&width=800`
  7. `ICICI Bank`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2936accc7c4d41a083e1950642673b3e?format=webp&width=800`
  8. `Kansai Nerolac`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6d1faf572d0f48b49e2bfab17f7bc62e?format=webp&width=800`
  9. `Licious`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6aae71a2006240eb962c6dfba4c96a47?format=webp&width=800`
  10. `Mirchi`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa1e413765bf74b17b771fb122f61e2b7?format=webp&width=800`
  11. `Niva`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fc771d105105c4bd89e74926efde734d9?format=webp&width=800`
  12. `Pidilite`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fe18ba0161d6546bcae45983c64ea5360?format=webp&width=800`
  13. `Roff`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fe454f18200734dae94a766cd0ab08ea4?format=webp&width=800`
  14. `Thomas Cook`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fe66816c550cd47418548f76d77c28f91?format=webp&width=800`
  15. `Zee TV`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F852b8c964b4f4e69a00408252bbcea49?format=webp&width=800`
  16. `Zespri`: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F87b43136093046cbb3df1a0115b26775?format=webp&width=800`

---

### Clients Impact Statement
- **Component File**: `components/clients/impact-statement.tsx`
- **Headline (H2)**:
  > *"The power of event management helps us create seamless experiences, solve logistical challenges, and deliver impactful business solutions"*
- **Action Button**: `Contact Us`

---

### Clients Stats Indicators
- **Component File**: `components/clients/stats-indicators.tsx`
- **Indicators (4 Key Metrics)**:
  1. `500+` — `Happy Clients` (Icon: Smile)
  2. `1000+` — `Events Delivered` (Icon: CalendarDays)
  3. `50+` — `Brand Partners` (Icon: Handshake)
  4. `99%` — `Client Retention %` (Icon: ShieldCheck)

---

### Clients Sectors
- **Component File**: `components/clients/industry-sectors.tsx`
- **Heading (H2)**: `Event Sectors We Serve`
- **Subtext**: `We design and execute memorable events across a wide range of sectors.`
- **Industry Sectors (10 Sectors)**:
  1. `Corporate Events` (Icon: Users)
  2. `Social Events` (Icon: Heart)
  3. `Exhibitions & Trade Shows` (Icon: ShoppingCart)
  4. `Private Parties` (Icon: Globe)
  5. `Promotions & Activations` (Icon: Activity)
  6. `Product Launches` (Icon: Truck)
  7. `Conferences & Seminars` (Icon: GraduationCap)
  8. `Award Ceremonies` (Icon: Trophy)
  9. `Festivals & Cultural Events` (Icon: Globe)
  10. `Experiential Marketing` (Icon: Home)

---

### Clients Success Stories
- **Component File**: `components/clients/client-success-stories.tsx`
- **Heading (H2)**: `Client Success Stories`
- **Stories (3 Case Studies)**:
  1. **Radio Mirchi Launch Event**
     - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F43685caaf33f477d8727c7c101d94598?format=webp&width=800`
     - **Description**: *"Organized a massive launch event for Radio Mirchi's new FM station with live performances and brand activations."*
     - **Result Metric**: `Reached 50,000+ attendees with 200% social media engagement increase`
     - **Link**: `Read Full Story →` (`/portfolio`)
  2. **ICICI Bank Corporate Summit**
     - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F8d0796d75587491cb48a4aef8f271f8a?format=webp&width=800`
     - **Description**: *"Executed a large-scale corporate summit for ICICI Bank with keynote speakers and networking sessions."*
     - **Result Metric**: `Successfully hosted 2,000+ participants with 95% satisfaction rating`
     - **Link**: `Read Full Story →` (`/portfolio`)
  3. **Zee TV Awards Ceremony**
     - **Logo**: `https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff973d20f7dc04da191c48d574a351db0?format=webp&width=800`
     - **Description**: *"Produced a glamorous awards ceremony for Zee TV with celebrity performances and live streaming."*
     - **Result Metric**: `Garnered 5M+ TV viewership and trending on social media for 3 days`
     - **Link**: `Read Full Story →` (`/portfolio`)

---

### Clients Partnership Tiers
- **Component File**: `components/clients/partnership-tiers.tsx`
- **Heading (H2)**: `Our Partnership Tiers`
- **Tiers (3 Levels)**:
  1. **Platinum Partners** (Icon: Crown)
     - Metric: `500+ Events`
     - Sample Clients: `Mirchi`, `ICICI Bank`, `Zee TV`, `Fevicol`
  2. **Gold Partners** (Icon: Trophy)
     - Metric: `200+ Events`
     - Sample Clients: `Zespri`, `Fevikwik`, `Tech Corp`
  3. **Silver Partners** (Icon: Medal)
     - Metric: `50+ Events`
     - Sample Clients: `Local Brands`, `Startups`, `SMEs`

---

### Clients CTA
- **Component File**: `components/clients/clients-cta.tsx`
- **Heading (H2)**: `Want to Join Our Family of Happy Clients?`
- **Subtext**: `Let's discuss how we can create memorable experiences for your brand`
- **Buttons**:
  - `Schedule Consultation`
  - `View Our Work`

---

## 8. Careers Page (`/careers`)
- **Route File**: `app/careers/page.tsx`

### Careers Hero
- **Badge**: `We Are Hiring • Join The Pride Tribe`
- **Heading (H1)**: `Shape Live Spectacles. Build Your Career With Pride.`
- **Introductory Paragraph**:
  > *"We are Kerala's premier event production, experiential marketing, and grand celebration specialists. From stadium concerts and corporate galas to royal destination weddings, we turn wild imaginations into unforgettable reality."*
- **Action Buttons**:
  - `Explore Open Roles` (`#open-positions`)
  - `Submit Direct Application` (`#apply-form`)
- **Key Stats Strip**:
  - `14+` Years of Creative Excellence
  - `500+` Marquee Events Delivered
  - `100%` In-House Production Power
  - `Kerala` & Pan-South India Reach

---

### Careers Perks
- **Section Overline**: `Life At Pride Eventz`
- **Heading (H2)**: `Why Creators & Producers Thrive With Us`
- **Subtext**: `We operate at the intersection of high adrenaline, artistic perfection, and technical innovation. Here is what you get when you step into our world.`
- **Perk Cards (6 Cards)**:
  1. **High-Stakes Productions** (Icon: Award): *"Work on Kerala's most iconic stages—celebrity stadium concerts, Fortune 500 summits, and royal destination weddings that make headlines."*
  2. **Creative Autonomy** (Icon: Sparkles): *"Your voice matters. Pitch bold ideas, experiment with groundbreaking visual tech, and watch your vision turn into reality on live stages."*
  3. **Accelerated Career Growth** (Icon: Compass): *"Fast-track promotions and direct mentorship from industry veterans with 14+ years of trailblazing track records."*
  4. **Competitive Compensation & Bonuses** (Icon: HeartHandshake): *"Above-market salary packages, performance-based project incentives, festival bonuses, and comprehensive health support."*
  5. **The Pride Culture** (Icon: Users): *"A tight-knit, energetic tribe that celebrates wins together. Annual company retreats, celebratory off-sites, and flexible post-event rest days."*
  6. **Top-Tier Infrastructure** (Icon: Building): *"Modern production studio, high-end design workstations, cutting-edge AV hardware, and expansive in-house fabrication capabilities."*

---

### Careers Job Openings
- **Department Filter Tabs**:
  - `All Positions`
  - `Production & Operations`
  - `Creative & Design`
  - `Client Servicing`
  - `Technical & AV`
  - `Marketing & Brand Activation`

#### Active Job Positions (6 Detailed Openings):

1. **Senior Event Operations & Production Manager**
   - **Department**: `Production & Operations`
   - **Location**: `Kochi, Kerala` | **Type**: `Full-Time` | **Experience**: `4 - 7 Years` | **Urgency**: `Immediate Hiring`
   - **Overview**: Lead end-to-end on-ground event operations, vendor negotiation, fabrication supervision, and execution for large-scale corporate summits, expos, and gala events across South India.
   - **Key Responsibilities**:
     - Oversee venue setup, staging, fabrication, and technical rehearsals.
     - Manage vendor contracts, logistics timelines, and production crews.
     - Ensure adherence to safety protocols, government permissions, and compliance.
     - Coordinate with client servicing teams to ensure seamless event-day delivery.
   - **What We Look For**:
     - 4+ years of proven event production and operations experience.
     - Strong command over Kerala and South Indian vendor networks.
     - Exceptional crisis management and on-site problem-solving ability.
     - Willingness to travel for marquee outstation events.
   - **Skills**: Operations Logistics, Vendor Management, Stage Fabrication, Budget Control.

2. **Experiential Set & 3D Stage Designer**
   - **Department**: `Creative & Design`
   - **Location**: `Kochi, Kerala` | **Type**: `Full-Time` | **Experience**: `2 - 5 Years`
   - **Overview**: Transform client briefs into breathtaking 3D stage concepts, exhibition stalls, interactive entrance experiences, and lighting layouts that wow audiences.
   - **Key Responsibilities**:
     - Create photorealistic 3D visual renders of stages, backdrops, and exhibition booths.
     - Prepare technical blueprints, fabrication drawings, and material specifications.
     - Collaborate with the lighting and AV teams to integrate dynamic visual tech.
     - Participate in client creative pitching and concept presentations.
   - **What We Look For**:
     - Proficiency in 3ds Max / Blender, AutoCAD, SketchUp, and Adobe Creative Cloud.
     - Deep understanding of materials (woodwork, acrylic, trussing, LED screens).
     - Strong portfolio demonstrating spatial and experiential event design.
     - Keen eye for lighting aesthetics, typography, and branded environments.
   - **Skills**: 3ds Max / Blender, AutoCAD, Spatial Design, Material Specs, Stagecraft.

3. **Corporate Accounts & Client Relations Lead**
   - **Department**: `Client Servicing`
   - **Location**: `Kochi / Calicut, Kerala` | **Type**: `Full-Time` | **Experience**: `3 - 6 Years` | **Urgency**: `Immediate Hiring`
   - **Overview**: Drive high-value corporate client engagements, manage pitch presentations, and maintain relationships with top brands across IT, FMCG, banking, and government sectors.
   - **Key Responsibilities**:
     - Serve as the primary liaison between corporate clients and the internal production crew.
     - Craft winning RFP responses, creative pitch decks, and commercial estimates.
     - Identify upsell and recurring event opportunities with existing clients.
     - Ensure client satisfaction and post-event reporting.
   - **What We Look For**:
     - Strong communication, negotiation, and presentation skills in English and Malayalam.
     - Prior experience in an event agency, media house, or corporate marketing department.
     - Thorough understanding of event budgets, costing, and client management.
   - **Skills**: B2B Pitching, Account Management, MICE Planning, Client Retention.

4. **Sound, Light & AV Production Coordinator**
   - **Department**: `Technical & AV`
   - **Location**: `Kochi, Kerala` | **Type**: `Full-Time` | **Experience**: `2 - 5 Years`
   - **Overview**: Coordinate state-of-the-art concert lighting rigs, line array sound setups, LED wall matrices, and live video broadcast systems for live concerts and mega events.
   - **Key Responsibilities**:
     - Plan audio/video/lighting specs in coordination with artist riders and client requirements.
     - Supervise on-site AV technicians, sound engineers, and visual jockeys.
     - Troubleshoot signal routing, power distribution, and stage hardware under live pressure.
     - Maintain inventory of company technical assets and coordinate rental gear.
   - **What We Look For**:
     - Hands-on technical background in concert sound, intelligent lighting (DMX), and LED processors.
     - Experience working with high-profile artists, bands, and conference speakers.
     - Strong understanding of live acoustics and power distribution.
   - **Skills**: Live Sound, DMX Lighting, LED Processing, Live Broadcasting.

5. **Brand Activation & Field Marketing Executive**
   - **Department**: `Marketing & Brand Activation`
   - **Location**: `Calicut / Trivandrum, Kerala` | **Type**: `Full-Time` | **Experience**: `1 - 3 Years`
   - **Overview**: Execute high-energy mall activations, multi-city roadshows, product sampling tours, and experiential brand engagement campaigns across Kerala.
   - **Key Responsibilities**:
     - Lead field teams, promotional promoters, and emcees across mall and college venues.
     - Coordinate logistics, branding collaterals, and interactive game kiosks.
     - Track daily engagement metrics, footfall data, and lead collection.
     - Liaise with mall managers and local authorities for event permissions.
   - **What We Look For**:
     - Enthusiastic personality with high stamina and passion for on-ground marketing.
     - Fluency in Malayalam and working proficiency in English.
     - Ability to handle spontaneous crowd dynamics and multi-location travel.
   - **Skills**: Mall Activations, Roadshows, Crowd Engagement, Field Operations.

6. **Luxury Wedding & Social Events Specialist**
   - **Department**: `Production & Operations`
   - **Location**: `Kochi, Kerala` | **Type**: `Full-Time` | **Experience**: `2 - 4 Years`
   - **Overview**: Curate magical destination weddings, royal themed receptions, and bespoke private celebrations with deep attention to hospitality and aesthetics.
   - **Key Responsibilities**:
     - Assist couples and families from theme ideation to execution day.
     - Coordinate bespoke floral decor, custom invitations, entertainment, and guest hospitality.
     - Manage timeline choreography, artist arrivals, and special entries.
     - Liaise with premium 5-star resort venues across Kerala.
   - **What We Look For**:
     - Experience in luxury weddings or high-end hospitality coordination.
     - Strong empathy, high emotional intelligence, and meticulous attention to detail.
     - Flair for aesthetic decor, floral concepts, and traditional & modern ceremony flows.
   - **Skills**: Destination Weddings, Hospitality Management, Floral Decor, Guest Experience.

---

### Careers Application Form
- **Portal Heading**: `Join The Pride Eventz Team`
- **Subtext**: `Complete the form below to apply for a role or join our creative talent network. We carefully review every single application within 48 hours.`
- **Form Fields**:
  - `1. Personal & Contact Details`:
    - Full Name (Placeholder: `e.g. Rahul Menon`)
    - Email Address (Placeholder: `e.g. rahul@example.com`)
    - Phone Number (Country Code: `+91`, Placeholder: `98950 12345`)
    - Current City / Location (Placeholder: `e.g. Kochi / Kozhikode / Bengaluru`)
  - `2. Role & Professional Experience`:
    - Position Applied For (Dropdown: 6 listed jobs + `General Application / Talent Pool`)
    - Total Experience (Options: `Fresher / Graduate (0-1 Year)`, `1-3 Years`, `3-5 Years`, `5-8 Years`, `8+ Years`)
    - Portfolio / LinkedIn / Drive Link (Placeholder: `https://linkedin.com/in/... or drive link`)
    - Availability / Notice Period (Options: `Immediate Joiner`, `15 Days`, `30 Days (1 Month)`, `45+ Days`)
  - `3. Upload Resume / CV Document`:
    - Drag & drop or click file selector (`.pdf`, `.doc`, `.docx`, Max 10MB)
  - `4. Tell Us About Yourself`:
    - Multi-line textarea (Placeholder: `Share a brief overview of your background, high-impact events you've worked on, or what excites you about working at Pride Eventz...`)
  - Submit Button: `Submit Application`
  - Legal Disclaimer: *"By submitting, you agree to allow Pride Eventz to review your profile and contact you regarding relevant career openings."*
- **Post-Submission Success State**:
  - Reference ID Generated (`PRIDE-CAREER-####`)
  - Heading: `Application Received!`
  - Subtext: *"Thank you, {fullName}! Your application for the {position} role has been delivered to our recruitment team."*
  - 3-Step Next Steps Guide:
    1. `Initial Screening (24-48 hrs)`: Portfolio & experience evaluation by Talent Lead.
    2. `Discovery Call`: Virtual introductory conversation.
    3. `Studio Interaction`: Kochi studio visit to discuss live stage productions.

---

### Careers FAQs
- **Question 1**: *What does the interview process look like at Pride Eventz?*
  - **Answer**: Our interview journey consists of three transparent stages: (1) Application & portfolio evaluation (48 hours), (2) A virtual introductory video call to discuss your creative flair and background, and (3) An in-person studio conversation at our Kochi office where you meet our leadership team and explore real-world event scenarios.
- **Question 2**: *Do you hire freshers or offer event management internships?*
  - **Answer**: Yes! We regularly welcome passionate freshers and final-year students into our 3-month and 6-month paid internship cohorts. Many of our current senior production coordinators started their journey as interns on our live concert and exhibition floors.
- **Question 3**: *Are these roles on-site or hybrid?*
  - **Answer**: Given the hands-on nature of live stagecraft and client pitching, most roles are centered at our Kochi studio with travel across Kerala and South India for on-site productions. Design and creative scripting team members enjoy hybrid flexibility during non-execution weeks.
- **Question 4**: *What if I don't see my exact job title listed above?*
  - **Answer**: We are always expanding our roster of emcees, visual designers, drone pilots, sound engineers, and fabrication leads. Choose "General Application / Talent Pool" in the form above and upload your portfolio. We keep active resumes on priority file for immediate production demands.

---

### Careers Contact Strip
- **Heading**: `Have questions about careers or vendor collaborations?`
- **Subtext**: `Connect directly with our Talent & Operations team.`
- **Email**: `careers@prideeventz.in`
- **Phone**: `+91 98465 96349`

---

## 9. Contact Page (`/contact`)
- **Route File**: `app/contact/page.tsx`

### Contact Hero
- **Background Image**: `/placeholder.svg?key=contact-hero`
- **Heading (H1)**: `Get In Touch`
- **Subheading**: `Let's create something extraordinary together`

---

### Contact Info Cards
1. **Phone Card** (Icon: Phone):
   - Primary: `+91 98956 90349`
   - Secondary: `+91 80891 29778`
2. **Email Card** (Icon: Mail):
   - `info@prideeventz.in`
3. **Location Card** (Icon: MapPin):
   - `Ground Floor 15/65, Mattekattu Building, NX Joseph Road, Kundannur – 682304`

---

### Contact Inquiry Form
- **Form Heading (H2)**: `Send us a Message`
- **Input Fields**:
  1. `Name`: Text (`placeholder="Your name"`, Required)
  2. `Email`: Email (`placeholder="your@email.com"`, Required)
  3. `Phone`: Tel (`placeholder="+91 98765 43210"`, Required)
  4. `Event Type`: Dropdown
     - Options: `Corporate Event`, `Wedding`, `Concert`, `Conference/MICE`, `Exhibition`, `Brand Activation`, `Rural Marketing`, `Other`
  5. `Event Date`: Date picker (Required)
  6. `Message`: Textarea (`placeholder="Tell us about your event..."`, 5 rows, Required)
- **Submit Button**: `Send Message` (Loading state: `Sending...`)
- **Confirmation Message**: *"Thank you! We'll get back to you soon."*

---

### Contact Map & Social
- **Embedded Google Map**:
  - **Location**: Mattekattu Building, NX Joseph Road, Kundannur, Kochi, Kerala – 682304
  - **Source URL**: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5492987114777!2d76.31518137503079!3d9.930438290169213...`
- **Social Media Icons**:
  - Instagram
  - Facebook
  - LinkedIn
  - WhatsApp / Chat

---

### Contact Business Hours
- **Card Title**: `Business Hours`
- `Monday - Friday`: `10:00 AM - 6:00 PM`
- `Saturday`: `10:00 AM - 4:00 PM`
- `Sunday`: `Closed`

---

## 10. Error & Fallback Pages

### 404 Page Not Found
- **Route File**: `app/not-found.tsx`
- **Status Code**: `404`
- **Heading (H2)**: `Page Not Found`
- **Body Copy**:
  > *"The page you are looking for doesn't exist or has been moved. Let's get you back on track to exploring our premium event services."*
- **Action Button**: `Return Home` (`/`)

---

## 11. Appendix: Additional Component Library Copy
The following modular components are stored in the codebase for modular layouts, landing experiments, and pricing transparency:

---

### Appendix: Corporate Packages & FAQs
- **Component File**: `components/corporate/pricing-packages.tsx`
  - **Heading (H2)**: `Corporate Event Packages`
  - **Subtext**: `All packages customizable to your needs`
  - **Package 1 — Essential Package**:
    - Price: `Starting from ₹2,00,000`
    - Ideal for: `Small corporate meetings (50-100 people)`
    - Features: Venue coordination, Basic AV setup, Catering service, Event day coordination, Basic photography.
  - **Package 2 — Professional Package** (Badge: `MOST POPULAR`):
    - Price: `Starting from ₹5,00,000`
    - Ideal for: `Medium conferences (100-300 people)`
    - Features: Premium venue selection, Advanced AV & lighting, Gourmet catering, Professional photography, Event management team, Post-event report.
  - **Package 3 — Premium Package**:
    - Price: `Custom Pricing`
    - Ideal for: `Large conventions (300+ people)`
    - Features: Exclusive venue partnerships, Full technical production, Customized catering, Video production, Dedicated project manager, Comprehensive analytics, VIP guest management.
- **Component File**: `components/corporate/faq-section.tsx`
  - 8 Corporate FAQs answering questions regarding booking leads (2-3 months), package inclusions, hybrid event capabilities, event insurance, cancellation terms (60+ days full refund), multi-city coordination, international capabilities, and AV equipment specifications.

---

### Appendix: Exhibitions Pricing & FAQs
- **Component File**: `components/exhibitions/pricing-information.tsx`
  - **Heading (H2)**: `Exhibition Investment`
  - **Subtext**: `Every exhibition is unique. We provide custom quotes based on:`
  - **Pricing Factors**:
    1. `Space & Design`: Exhibition size (sq.ft.), Design complexity, Custom fabrication needs, Number of display elements.
    2. `Technology & Interactivity`: AV equipment requirements, Interactive tech integration, Lighting specifications, Special effects.
    3. `Duration & Services`: Exhibition duration, Installation/breakdown time, On-site staff needed, Storage requirements.
  - **Guideline Pricing**: `Average exhibitions range from ₹2L to ₹50L+ depending on scope`
- **Component File**: `components/exhibitions/faq-section.tsx`
  - 6 FAQs addressing space requirements (500–5000 sq.ft.), planning timelines (3-4 months), international expos, brand guidelines consistency, package deliverables, and secure warehousing/storage.

---

### Appendix: Promotions Packages & FAQs
- **Component File**: `components/promotions/pricing-section.tsx`
  - **Heading (H2)**: `Promotional Campaign Packages`
  - **Subtext**: `All packages fully customizable based on your requirements`
  - **Package 1 — Starter Campaign**:
    - Price: `₹50,000`
    - Features: Single location activation, 1-2 days duration, Basic brand setup, Local media coverage, Social media promotion, Event day coordination, Basic reporting.
  - **Package 2 — Growth Campaign** (Badge: `RECOMMENDED`):
    - Price: `₹2,00,000`
    - Features: Multi-location activation, 1 week duration, Premium brand experience, Regional media partnerships, Influencer engagement, Professional photography, Detailed analytics, Post-campaign report.
  - **Package 3 — Enterprise Campaign**:
    - Price: `Custom`
    - Features: Pan-India activation, Extended duration, Luxury brand experience, National media coverage, Celebrity partnerships, Full video production, Comprehensive analytics, Dedicated account manager.
- **Component File**: `components/promotions/faq-accordion.tsx`
  - 8 FAQs detailing campaign lengths, ROI/footfall tracking metrics, brand ambassador rosters, multi-city activations, local permits & permissions, lead time (4-6 weeks), post-campaign reports, and key industry specializations.

---

### Appendix: Home Testimonials
- **Component File**: `components/home/testimonials-section.tsx`
  - 1. **Rajesh Kumar** (`Corporate Conference`, 5 Stars): *"Pride Eventz transformed our corporate conference into an unforgettable experience. Their attention to detail was exceptional."*
  - 2. **Sneha & Rohan** (`Private Party`, 5 Stars): *"Our private party was a dream come true thanks to the incredible team at Pride Eventz. Every moment was perfectly orchestrated."*
  - 3. **Anjali Sharma** (`Brand Activation`, 5 Stars): *"The brand activation event they organized exceeded all our expectations. Highly professional and creative team!"*
  - 4. **Vikram Singh** (`Product Launch`, 5 Stars): *"Outstanding execution and seamless coordination. Pride Eventz is our go-to partner for all events."*

---
*Document generated for Pride Eventz website content updates and auditing.*
