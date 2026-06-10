"use client";

import { useState } from "react";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

// Mock Shortlisted Awardees grouped by constituency (matching the Monday Onyeme Foundation pattern)
const shortlistedCandidates = [
  {
    constituency: "Ukwuani / Ndokwa Federal Constituency",
    candidates: [
      { name: "Ogene Chukwuka Sunday", lga: "Ukwuani LGA", course: "Medicine & Surgery", school: "DELSU" },
      { name: "Okolie Onyeka Augustine", lga: "Ndokwa West LGA", course: "Mechanical Engineering", school: "UNIBEN" },
      { name: "Enebeli Jennifer Chidi", lga: "Ndokwa East LGA", course: "Computer Science", school: "UNIZIK" },
      { name: "Uzu Goodluck Ifeanyi", lga: "Ukwuani LGA", course: "Accountancy", school: "UNILAG" },
      { name: "Ossai Patience Onyinye", lga: "Ndokwa West LGA", course: "Law", school: "DELSU" },
    ]
  },
  {
    constituency: "Aniocha / Oshimili Federal Constituency",
    candidates: [
      { name: "Odiatu Jeremiah Chukwuebube", lga: "Aniocha South LGA", course: "Pharmacy", school: "UNIBEN" },
      { name: "Azuka Kosisochukwu Praise", lga: "Oshimili North LGA", course: "Electrical Engineering", school: "UNN" },
      { name: "Chikaeze Uzoma Emmanuel", lga: "Oshimili South LGA", course: "Microbiology", school: "DELSU" },
      { name: "Utulu Michael Chukwuemeka", lga: "Aniocha North LGA", course: "Computer Engineering", school: "FUTO" },
      { name: "Osemeke Deborah Kosisochukwu", lga: "Aniocha South LGA", course: "Civil Engineering", school: "UNIBEN" },
    ]
  },
  {
    constituency: "Ika Federal Constituency",
    candidates: [
      { name: "Obah Praise Oluchukwu", lga: "Ika South LGA", course: "Medicine & Surgery", school: "UNILAG" },
      { name: "Egbunwa Iheoma Divine", lga: "Ika North-East LGA", course: "Business Administration", school: "UNIBEN" },
      { name: "Richard Emmanuella Uchechukwu", lga: "Ika South LGA", course: "Nursing Science", school: "DELSU" },
      { name: "Okoh Deborah", lga: "Ika North-East LGA", course: "Science Laboratory Tech", school: "Delta State Poly" },
      { name: "Aiyanyor Smart Eloghosa", lga: "Ika South LGA", course: "Economics", school: "UNIBEN" },
    ]
  }
];

export default function Scholarship() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notified, setNotified] = useState(false);

  // ==========================================
  // COMING SOON CONFIGURATION
  // Set this to TRUE to show the Coming Soon view.
  // Set this to FALSE to reveal the Active Scholarship portal!
  const IS_COMING_SOON = true; 
  // ==========================================

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  // If locked, render the Coming Soon UI
  if (IS_COMING_SOON) {
    return (
      <div className="flex flex-col w-full animate-fade-in">
        {/* 1. Header Banner */}
        <section className="bg-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xxs font-bold bg-primary/15 text-primary border border-primary/20 mb-4 uppercase tracking-widest">
              Portal Updates
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Tertiary Grants <span className="gradient-text">Coming Soon</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-semibold">
              The scholarship application portal for the upcoming academic session is currently under preparation.
            </p>
          </div>
        </section>

        {/* 2. Coming Soon Content Block */}
        <section className="py-20 px-4 max-w-2xl mx-auto w-full">
          <div className="bg-white dark:bg-slate-900 border border-border rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-100">
              <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-2xl font-black text-secondary dark:text-white mb-3">
              Applications Launching Soon
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 font-semibold">
              The Okenmor Tilije Foundation is finalizing schedules and vetting committees for the 2026/2027 tertiary grant cycle. Sign up below to receive immediate updates, application guidelines, and opening day notifications.
            </p>

            {/* Notification Email Form */}
            {notified ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 p-4 rounded-xl text-xs sm:text-sm font-semibold border border-emerald-100 dark:border-emerald-950/30 animate-fade-in mb-6">
                Thank you! We have logged your email. You will receive alert guidelines on opening day.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotified(true);
                }}
                className="flex flex-col sm:flex-row gap-2 mb-8"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="bg-slate-50 border border-border rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-primary flex-1"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}

            <div className="flex flex-col gap-4 border-t border-border pt-8 text-left max-w-sm mx-auto">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Portal Highlights</h4>
              <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="text-primary font-black">•</span>
                  <span>Estimated Launch: <strong>October 2026</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-black">•</span>
                  <span>Eligible: <strong>Anioma Region Indigent Students</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-black">•</span>
                  <span>Support: <strong>Full Tuition & Educational Grants</strong></span>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <Link
                href="/"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors inline-block"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // The original design (hidden when COMING_SOON = true, but preserved intact below)
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xxs font-bold bg-primary/15 text-primary border border-primary/20 mb-4 uppercase tracking-widest">
            Education Portal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Educational <span className="gradient-text">Scholarships & Grants</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-semibold">
            Empowering the children of Anioma and Delta State with financial support to reach the heights of academic excellence.
          </p>
        </div>
      </section>

      {/* 2. Guidelines and Eligibility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Eligibility Text */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Scholarship Guidelines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-secondary dark:text-white">
            General Eligibility Criteria
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
            To apply for the Okenmor Tilije Foundation tertiary scholarship scheme, students must verify that they fulfill all academic and geographical criteria outlined below:
          </p>
          
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <svg className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Constituency Origin:</strong> Must belong to Ukwuani, Ndokwa, Ika, or Aniocha/Oshimili local government areas of Delta State. Must present an LGA Certificate of Origin.</span>
            </li>
            <li className="flex gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <svg className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Academic Status:</strong> Must be a full-time student currently registered in an accredited Nigerian Federal or State University, Polytechnic, or College of Education.</span>
            </li>
            <li className="flex gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <svg className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Minimum CGPA:</strong> Must possess a minimum CGPA of 3.0 on a 5.0 scale (or equivalent) in their current university standings. Proof of transcript or results signed by the Dean/HOD is mandatory.</span>
            </li>
          </ul>
        </div>

        {/* CTA Card */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900 border border-border p-8 rounded-3xl flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-3">
            <span className="bg-accent/10 text-accent px-3.5 py-1.5 rounded-full text-xxs font-extrabold tracking-wider w-fit uppercase">
              Now Enrolling
            </span>
            <h3 className="font-extrabold text-xl text-secondary dark:text-white leading-tight">
              Tertiary Grants Call - 2026 Cycle
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
              The online application portal is open. Ensure you have scanned copies of your Admission Letter, LGA Certificate, and recent Semester Results before beginning.
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-2xl transition-colors shadow-lg shadow-primary/20 text-sm"
          >
            {showForm ? "Close Application Portal" : "Access Application Form Online"}
          </button>
        </div>
      </section>

      {/* 3. Application Form Portal */}
      {showForm && (
        <section className="py-12 bg-slate-50 dark:bg-slate-950 border-y border-border px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-secondary dark:text-white">Scholarship Application Form</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-bold">Please fill in correct details. Verification is thorough.</p>
            </div>
            <ApplicationForm />
          </div>
        </section>
      )}

      {/* 4. Shortlisted Successful Candidates (Previous list, like Monday Onyeme site) */}
      <section className="py-20 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-border">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Transparency Reports</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-secondary dark:text-white mt-1">
            Successful Awardees - 2024/2025
          </h2>
          <p className="text-xs text-muted max-w-md mx-auto mt-2 leading-relaxed font-bold">
            Listing of beneficiaries who passed screenings and received full tertiary tuition support from the foundation.
          </p>
        </div>

        <div className="space-y-4">
          {shortlistedCandidates.map((constit, index) => (
            <div key={index} className="border border-border rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleTab(index)}
                className="w-full bg-slate-50 dark:bg-slate-950 px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100/50 dark:hover:bg-slate-900 transition-colors"
              >
                <span className="font-extrabold text-sm sm:text-base text-secondary dark:text-white">
                  {constit.constituency}
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xxs font-extrabold uppercase shrink-0">
                  {constit.candidates.length} Shortlisted
                </span>
              </button>

              {activeTab === index && (
                <div className="border-t border-border p-6 bg-white dark:bg-slate-900 overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border text-slate-400 font-extrabold uppercase tracking-widest text-[10px]">
                        <th className="pb-3 pr-4">Candidate Name</th>
                        <th className="pb-3 pr-4">Local Government</th>
                        <th className="pb-3 pr-4">Course of Study</th>
                        <th className="pb-3">Institution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border font-semibold text-slate-700 dark:text-slate-300">
                      {constit.candidates.map((cand, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="py-3.5 pr-4 font-extrabold text-secondary dark:text-white">{cand.name}</td>
                          <td className="py-3.5 pr-4">{cand.lga}</td>
                          <td className="py-3.5 pr-4">{cand.course}</td>
                          <td className="py-3.5">{cand.school}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
