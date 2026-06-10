"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Predefined slides for the Hero Carousel Slider
// You can add as many items here as you want!
const heroSlides = [
  {
    badge: "Sir Fidelis Okenmor Tilije Philanthropy",
    title: "Empowering Delta State Communities through",
    highlight: "Education & Service",
    description: "Providing life-changing opportunities for underprivileged students, vital water resources for villages, and vocational tools for youth across Anioma and Delta State.",
    primaryCta: "Apply for Scholarship",
    primaryCtaLink: "/scholarship",
    secondaryCta: "Learn More",
    secondaryCtaLink: "/about",
    image: "/img1.jpg"
  },
  {
    badge: "Education Support Portal",
    title: "Investing In The Intellectual Wealth of",
    highlight: "Anioma Scholars",
    description: "Our tertiary scholarship scheme supports indigent students across our local government constituencies to acquire university degrees without tuition burdens.",
    primaryCta: "Apply For Grants",
    primaryCtaLink: "/scholarship",
    secondaryCta: "Eligibility Rules",
    secondaryCtaLink: "/scholarship#rules",
    image: "/img2.jpg"
  },
  {
    badge: "Basic Amenities Outreach",
    title: "Building Solar Potable Water Projects &",
    highlight: "Clean Infrastructure",
    description: "We drill and launch solar-powered borehole infrastructure in Delta State villages to eliminate local water access challenges.",
    primaryCta: "Explore Projects",
    primaryCtaLink: "/projects",
    secondaryCta: "Contact Us",
    secondaryCtaLink: "/contact",
    image: "/img3.jpg"
  },
  {
    badge: "Youth Empowerment Initiative",
    title: "Sponsoring Vocational Skills & Providing",
    highlight: "Startup Equipment",
    description: "We fund training workshops in fashion design, mechanics, and digital literacy, equipping graduates with direct startup tools.",
    primaryCta: "Projects Portfolio",
    primaryCtaLink: "/projects",
    secondaryCta: "Successful Trainees",
    secondaryCtaLink: "/about#empowerment",
    image: "/img10.jpg"
  }
];

// Predefined focus areas (pillars)
const pillars = [
  {
    title: "Educational Scholarships",
    description: "Providing tuition grants, academic support, and resources to talented but underprivileged students in Anioma and across Delta State.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l4-2.22" />
      </svg>
    ),
    link: "/scholarship"
  },
  {
    title: "Community Development",
    description: "Investing in sustainable solar-powered water boreholes, community sanitation, and local infrastructure projects.",
    icon: (
      <svg className="h-8 w-8 text-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/projects"
  },
  {
    title: "Youth Empowerment",
    description: "Empowering young men and women through fully sponsored vocational workshops, entrepreneurship seminars, and mentors.",
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: "/projects?tab=empowerment"
  }
];

const stats = [
  { value: "3,500+", label: "Scholarships Awarded" },
  { value: "18+", label: "Communities Impacted" },
  { value: "40+", label: "Borehole & Water Projects" },
  { value: "100%", label: "Anioma Empowerment" }
];

const events = [
  {
    title: "2026 Student Scholarship Program Applications Open",
    category: "Scholarship",
    date: "June 10, 2026",
    description: "Applications are now officially open for the 2026 tertiary education grant program for Anioma region students.",
    image: "/images/outreach1.jpg", // placeholder path, fallback used
    link: "/scholarship"
  },
  {
    title: "Obiaruku Free Community Medical Outreach",
    category: "Healthcare",
    date: "April 18, 2026",
    description: "Over 800 community members received free medical checks, consultations, and prescription medicines at the community center.",
    image: "/images/outreach2.jpg",
    link: "/gallery"
  },
  {
    title: "Ndokwa/Ukwuani Youth Entrepreneurship Forum",
    category: "Empowerment",
    date: "February 24, 2026",
    description: "Graduation of 50 trainees from the intensive tailoring and fashion design program, equipped with start-up sewing kits.",
    image: "/images/outreach3.jpg",
    link: "/projects"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto playing loop every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Carousel Section */}
      <section className="relative bg-slate-800 text-white overflow-hidden min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center border-b border-slate-900">
        
        {/* Shifting Carousel Background Images */}
        <div className="absolute inset-0 z-0 transition-all duration-1000">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-35" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover animate-fade-in"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/50 to-slate-900/20"></div>
              </div>
            );
          })}
        </div>


        {/* Carousel Slides */}
        <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center justify-center">
            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={index}
                  className={`absolute inset-x-0 text-center flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-6 uppercase tracking-wider">
                    {slide.badge}
                  </span>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6 max-w-4xl">
                    {slide.title} <span className="gradient-text">{slide.highlight}</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                      href={slide.primaryCtaLink}
                      className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 text-center hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 text-sm"
                    >
                      {slide.primaryCta}
                    </Link>
                    <Link
                      href={slide.secondaryCtaLink}
                      className="border border-slate-700 hover:border-white text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 text-center bg-slate-900/50 hover:bg-slate-900 text-sm"
                    >
                      {slide.secondaryCta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={handlePrev}
          type="button"
          className="absolute left-2 md:left-4 z-20 p-2 md:p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-700 transition-all focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="absolute right-2 md:right-4 z-20 p-2 md:p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-700 transition-all focus:outline-none"
          aria-label="Next Slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Slider dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlide ? "bg-primary w-6" : "bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Quick Statistics */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto w-full px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-border grid grid-cols-2 md:grid-cols-4 p-8 md:p-12 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-extrabold text-secondary">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Focus Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Core Pillars</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How We Impact Our People
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-3 bg-slate-50 rounded-xl w-fit mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-medium">
                {pillar.description}
              </p>
              <Link
                href={pillar.link}
                className="text-primary hover:text-primary-dark text-sm font-bold flex items-center gap-1 group"
              >
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Founder Highlight */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Image Emblem container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group p-4 bg-white rounded-3xl shadow-xl border border-border max-w-sm w-full">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border-4 border-primary/20">
                <Image
                  src="/img10.jpg"
                  alt="Sir Fidelis Okenmor Tilije"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg">
                Ukwuani Pride
              </div>
            </div>
          </div>

          {/* Founder Bio Brief */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Meet the Founder
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary">
              A Legacy of Service and Community Building
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Sir Fidelis Okenmor Tilije is a seasoned banker, administrator, and state leader who has spent decades working to uplift communities in Delta State, Nigeria. 
              As the Delta State Commissioner for Finance, he has consistently championed economic development. Through the **Okenmor Tilije Foundation**, he translates his personal commitment into social impact, providing structured support for students, providing water, and building local capacities.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-slate-500 font-semibold my-2">
              &ldquo;True leadership is measured not by personal accumulation, but by the number of young minds we empower to carry our communities forward.&rdquo;
            </blockquote>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Read Biography
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Recent News & Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Activities</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Latest News & Events
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-primary hover:text-primary-dark font-bold text-sm flex items-center gap-1 group border-b border-transparent hover:border-primary pb-1 transition-all"
          >
            View Event Gallery
            <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Event Image Placeholder with SVG abstract pattern */}
              <div className="relative h-48 bg-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="flex flex-col items-center gap-2 p-6 text-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {event.category}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">{event.date}</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-secondary mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>
                </div>
                <Link
                  href={event.link}
                  className="text-primary hover:text-primary-dark text-xs sm:text-sm font-bold flex items-center gap-1 w-fit group"
                >
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">What We've Built</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary">
              Featured Projects
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-slate-800 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group"
          >
            View All Projects
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Obiaruku Solar Water Borehole",
              category: "Water & Solar",
              description: "Solar-powered water supply system serving 1,500+ residents in the Obiaruku community with safe, clean drinking water.",
              impact: "1,500+ Beneficiaries",
              image: "/projects/road_construction.jpg",
              badge: "bg-blue-50 border-blue-100 text-blue-600",
            },
            {
              title: "Annual Free Medical Mission",
              category: "Healthcare",
              description: "Free testing, blood pressure medications, eye testing and corrective spectacles, and pediatrician check-ups for children.",
              impact: "850 Patients Treated",
              image: "/projects/road_construction2.jpg",
              badge: "bg-emerald-50 border-emerald-100 text-emerald-600",
            },
            {
              title: "Anioma Schools Book & Desk Scheme",
              category: "Education",
              description: "4,000+ exercise books, mathematical sets, and double-desks distributed to public schools in Ukwuani and Ndokwa West LGAs.",
              impact: "12 Schools Supported",
              image: "/projects/scholarship.jpg",
              badge: "bg-rose-50 border-rose-100 text-rose-600",
            },
          ].map((proj, i) => (
            <Link
              key={i}
              href="/projects"
              className="group bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-3 py-1 border rounded-lg text-[10px] font-extrabold uppercase tracking-widest ${proj.badge}`}>
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-extrabold text-base text-secondary mb-2 leading-snug group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 flex-1 font-medium">
                  {proj.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-lg w-fit">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {proj.impact}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="py-20 bg-slate-50 border-y border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Visual Highlights</h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary">
                Photo Gallery
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 group"
            >
              View Full Gallery
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* 4-photo responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "/img1.jpg",  title: "Community Health Outreach",         span: "md:col-span-2 md:row-span-2" },
              { src: "/img2.jpg",  title: "Scholarship Review Board",          span: "" },
              { src: "/img3.jpg",  title: "Solar Infrastructure Planning",     span: "" },
              { src: "/img10.jpg", title: "Foundation Official Branding",      span: "col-span-2 md:col-span-2" },
            ].map((photo, i) => (
              <Link
                key={i}
                href="/gallery"
                className={`group relative overflow-hidden rounded-2xl bg-slate-200 ${photo.span} ${
                  i === 0 ? "aspect-square md:aspect-auto min-h-[200px] md:min-h-[320px]"
                  : i === 3 ? "aspect-video md:aspect-[16/7]"
                  : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/70 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 leading-tight">
                    {photo.title}
                  </span>
                </div>
                {/* Expand icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA / Appeal Banner */}

      <section className="bg-gradient-to-br from-secondary to-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 rounded-full bg-accent/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/2 right-10 translate-y-1/2 w-48 h-48 rounded-full bg-primary/10 filter blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Are You a Student Seeking Scholarship Support?
          </h2>
          <p className="text-slate-300 max-w-2xl leading-relaxed text-sm sm:text-base">
            The Okenmor Tilije Foundation opens its application portal annually to support high-achieving, underprivileged students across Ukwuani, Ndokwa, Ika, and Aniocha/Oshimili constituencies. Check your eligibility and apply online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/scholarship"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Verify Eligibility & Apply
            </Link>
            <Link
              href="/contact"
              className="border border-slate-700 hover:border-white text-white font-bold px-8 py-3.5 rounded-full bg-slate-900/40 transition-colors"
            >
              Contact Scholarship Board
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
