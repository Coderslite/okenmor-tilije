"use client";

import { useState } from "react";
import Image from "next/image";

const galleryEvents = [
  {
    title: "Obiaruku Free Health Checks Consultation",
    description: "Community outreach meeting with Sir Fidelis Okenmor Tilije and stakeholders coordinate medical checkups and diagnostic tests.",
    year: "2026",
    category: "Medical Outreach",
    badgeColor: "bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400",
    image: "/img1.jpg"
  },
  {
    title: "Tertiary Student Grants Advisory Board Meeting",
    description: "Delta State scholarship review committee and Board members discuss applicant listings to ensure transparent screenings.",
    year: "2026",
    category: "Scholarship Review",
    badgeColor: "bg-rose-50 border-rose-100 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/30 dark:text-rose-400",
    image: "/img2.jpg"
  },
  {
    title: "Community Solar Infrastructure Planning Session",
    description: "Sir Fidelis Okenmor Tilije chairing a planning meeting with local government executives on drilling new solar water boreholes.",
    year: "2026",
    category: "Infrastructure Planning",
    badgeColor: "bg-blue-50 border-blue-100 text-blue-600 dark:bg-blue-950/20 dark:border-blue-900/30 dark:text-blue-400",
    image: "/img3.jpg"
  },
  {
    title: "Sir Fidelis Okenmor Tilije Foundation Emblem Logo",
    description: "Official visual branding mark of the foundation representing joint growth, community reach, and structural leadership.",
    year: "2025",
    category: "Official Branding",
    badgeColor: "bg-amber-50 border-amber-100 text-amber-600 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400",
    image: "/img10.jpg"
  },
  {
    title: "State Scholarship Funds Allocation Review",
    description: "Board executives cross-checking tertiary lists and financial budgets at the foundation headquarters.",
    year: "2025",
    category: "Financial Audit",
    badgeColor: "bg-orange-50 border-orange-100 text-orange-600 dark:bg-orange-950/20 dark:border-orange-900/30 dark:text-orange-400",
    image: "/img2.jpg"
  },
  {
    title: "Community Stakeholders Handshake Session",
    description: "Sir Fidelis Okenmor Tilije greeting Anioma delegates to foster collaboration on youth empowerment schemes.",
    year: "2025",
    category: "Civic Outreach",
    badgeColor: "bg-purple-50 border-purple-100 text-purple-600 dark:bg-purple-950/20 dark:border-purple-900/30 dark:text-purple-400",
    image: "/img1.jpg"
  }
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xxs font-bold bg-primary/15 text-primary border border-primary/20 mb-4 uppercase tracking-widest">
            Media Library
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Event <span className="gradient-text">Photo Gallery</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-semibold">
            Visual highlights of our charitable events, project openings, and outreach schedules across Delta State.
          </p>
        </div>
      </section>

      {/* 2. Gallery Masonry Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(idx)}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-border">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 border rounded-lg text-[10px] font-extrabold uppercase tracking-widest ${event.badgeColor}`}>
                    {event.category}
                  </span>
                </div>
                {/* Hover overlay detail indicator */}
                <div className="absolute inset-0 bg-secondary/85 backdrop-blur-xxs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-white text-xs font-extrabold uppercase tracking-widest bg-primary px-4 py-2 rounded-full shadow-lg">
                    Expand Details
                  </span>
                </div>
              </div>

              {/* Text Meta info */}
              <div className="p-6">
                <h3 className="font-extrabold text-base text-secondary dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Lightbox Detail Dialog Overlay */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white focus:outline-none z-50 animate-fade-in"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Image Slider Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((prev) => (prev === 0 || prev === null ? galleryEvents.length - 1 : prev - 1));
            }}
            className="absolute left-2 md:left-8 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all focus:outline-none z-50"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Modal Container */}
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-border overflow-hidden shadow-2xl animate-fade-in relative z-40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal graphic block */}
            <div className="relative h-64 sm:h-80 bg-slate-950 overflow-hidden border-b border-border">
              <Image
                src={galleryEvents[selectedPhoto].image}
                alt={galleryEvents[selectedPhoto].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent"></div>
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-4 py-1.5 border rounded-lg text-xxs font-extrabold uppercase tracking-widest ${galleryEvents[selectedPhoto].badgeColor}`}>
                  {galleryEvents[selectedPhoto].category}
                </span>
              </div>
            </div>

            {/* Modal detail meta */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <h4 className="font-extrabold text-base sm:text-xl text-secondary dark:text-white leading-tight">
                  {galleryEvents[selectedPhoto].title}
                </h4>
                <span className="text-xs font-extrabold text-primary px-3 py-1 bg-primary/10 rounded-lg shrink-0 w-fit">
                  Year: {galleryEvents[selectedPhoto].year}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
                {galleryEvents[selectedPhoto].description}
              </p>
              <div className="flex justify-between items-center text-slate-400 text-xs font-semibold">
                <span>
                  Image {selectedPhoto + 1} of {galleryEvents.length}
                </span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="bg-secondary hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          {/* Next Image Slider Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((prev) => (prev === null ? 0 : (prev + 1) % galleryEvents.length));
            }}
            className="absolute right-2 md:right-8 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all focus:outline-none z-50"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
