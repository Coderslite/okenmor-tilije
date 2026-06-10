"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Water & Solar", "Healthcare", "Education", "Empowerment"];

const projects = [
  {
    title: "Obiaruku Solar Water Borehole Installation",
    category: "Water & Solar",
    description: "Successfully built and deployed a fully automated, solar-powered water supply system serving over 1,500 residents in the Obiaruku community, restoring access to safe drinking water.",
    date: "May 2026",
    status: "Completed",
    impact: "1,500+ Beneficiaries",
    image: "/projects/road_construction.jpg"
  },
  {
    title: "Obiaruku Annual Free Medical Mission",
    category: "Healthcare",
    description: "Fully funded community medical outreach providing free testing, blood pressure medications, eye testing and corrective spectacles, and pediatrician check-ups for children.",
    date: "April 2026",
    status: "Completed",
    impact: "850 Patients Treated",
    image: "/projects/road_construction2.jpg"
  },
  {
    title: "Anioma Schools Book and Desk Support Scheme",
    category: "Education",
    description: "Distribution of over 4,000 branded exercise books, mathematical sets, writing materials, and double-desks to public schools in Ukwuani and Ndokwa West local government areas.",
    date: "January 2026",
    status: "Completed",
    impact: "12 Primary Schools Supported",
    image: "/projects/scholarship.jpg"
  },
  {
    title: "Obiaruku Vocational Training Center Support",
    category: "Empowerment",
    description: "Equipped local youths with tailoring machinery, mechanical tools, and start-up toolkits following a 3-month fully sponsored vocational skills acquisition workshop.",
    date: "December 2025",
    status: "Completed",
    impact: "50 Graduated Trainees",
    image: "/img10.jpg"
  },
  {
    title: "Ndokwa East Solar Grid Streetlights",
    category: "Water & Solar",
    description: "Installation of solar-powered streetlights along main community streets to illuminate local markets, increase nightlife security, and encourage small scale evening trade.",
    date: "October 2025",
    status: "Completed",
    impact: "4 Miles of Lighting",
    image: "/img3.jpg"
  },
  {
    title: "Primary Healthcare Center Medication Supply",
    category: "Healthcare",
    description: "Donation of essential medications, malaria treatments, maternal health kits, and child immunization support items to community clinics in Ukwuani LGA.",
    date: "August 2025",
    status: "Completed",
    impact: "5 Clinics Restocked",
    image: "/img1.jpg"
  }
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = projects.filter(
    (proj) => selectedFilter === "All" || proj.category === selectedFilter
  );

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xxs font-bold bg-primary/15 text-primary border border-primary/20 mb-4 uppercase tracking-widest">
            Community Impact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Our <span className="gradient-text">Projects & Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-semibold">
            Delivering clean water, health support, and education materials to rural and semi-urban communities in Delta State.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-border px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 border ${
                selectedFilter === cat
                  ? "bg-secondary border-secondary text-white shadow"
                  : "bg-white border-border text-slate-600 hover:border-slate-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Projects Grid Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-slate-500 font-bold text-sm">
            No projects found in this category. More projects under development!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                {/* Project Image Header */}
                <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden border-b border-border">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xxs font-bold uppercase tracking-wide">
                        {proj.category}
                      </span>
                      <span className="text-slate-400 text-xxs font-semibold uppercase tracking-wider shrink-0">
                        {proj.date}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-secondary mb-3 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Impact Metric</span>
                      <span className="text-xs sm:text-sm font-extrabold text-secondary">{proj.impact}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-xxs font-extrabold rounded-lg border border-emerald-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      {proj.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Project Submission CTA */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center border-t border-slate-900">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-black">Is Your Community in Need of Water/Health Support?</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed font-semibold">
            Our logistics team performs community assessments in Ukwuani and Ndokwa regions quarterly to locate sites for solar borehole drills. Reach out to submit an appeal.
          </p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full mt-2 transition-colors"
          >
            Submit Community Proposal
          </a>
        </div>
      </section>
    </div>
  );
}
