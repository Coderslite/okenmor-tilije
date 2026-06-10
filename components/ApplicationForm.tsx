"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  lga: string;
  constituency: string;
  institution: string;
  courseOfStudy: string;
  level: string;
  cgpa: string;
  matricNo: string;
  refereeName: string;
  refereePhone: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  lga: "",
  constituency: "Ukwuani",
  institution: "",
  courseOfStudy: "",
  level: "100",
  cgpa: "",
  matricNo: "",
  refereeName: "",
  refereePhone: "",
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const lgas = [
    "Ukwuani",
    "Ndokwa West",
    "Ndokwa East",
    "Aniocha North",
    "Aniocha South",
    "Oshimili North",
    "Oshimili South",
    "Ika North-East",
    "Ika South",
  ];

  const constituencies = [
    "Ukwuani / Ndokwa Federal Constituency",
    "Aniocha / Oshimili Federal Constituency",
    "Ika Federal Constituency",
  ];

  const validateStep = (currentStep: number) => {
    const newErrors: Partial<FormState> = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.address.trim()) newErrors.address = "Residential address is required";
      if (!formData.lga) newErrors.lga = "LGA is required";
    } else if (currentStep === 2) {
      if (!formData.institution.trim()) newErrors.institution = "Institution is required";
      if (!formData.courseOfStudy.trim()) newErrors.courseOfStudy = "Course of study is required";
      if (!formData.matricNo.trim()) newErrors.matricNo = "Matriculation / ID number is required";
      if (!formData.cgpa.trim()) {
        newErrors.cgpa = "CGPA is required";
      } else {
        const cgpaVal = parseFloat(formData.cgpa);
        if (isNaN(cgpaVal) || cgpaVal < 0 || cgpaVal > 7.0) {
          newErrors.cgpa = "CGPA must be a valid number (e.g., 3.5)";
        }
      }
    } else if (currentStep === 3) {
      if (!formData.refereeName.trim()) newErrors.refereeName = "Referee name is required";
      if (!formData.refereePhone.trim()) newErrors.refereePhone = "Referee phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Simulate API submission
      console.log("Scholarship Application Data Submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-3xl p-8 md:p-12 text-center shadow-lg max-w-2xl mx-auto animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-secondary mb-3">Application Submitted Successfully!</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
          Thank you, <strong className="text-secondary">{formData.fullName}</strong>. Your application for the Okenmor Tilije Foundation Tertiary Scholarship has been logged. 
          A confirmation email has been sent to <span className="text-primary font-bold">{formData.email}</span>. The scholarship board will review your credentials and contact your institution for verification.
        </p>
        <button
          onClick={() => {
            setFormData(initialFormState);
            setSubmitted(false);
            setStep(1);
          }}
          className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-lg max-w-3xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-10 max-w-md mx-auto relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
        {[1, 2, 3].map((s) => (
          <div key={s} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                step === s
                  ? "bg-primary border-primary text-white scale-110"
                  : step > s
                  ? "bg-secondary border-secondary text-white"
                  : "bg-white border-slate-300 text-slate-400"
              }`}
            >
              {step > s ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            <span className="text-[10px] font-bold mt-2 uppercase tracking-wide text-slate-500">
              {s === 1 ? "Bio Data" : s === 2 ? "Academic" : "Verify"}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: PERSONAL BIO DATA */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <h4 className="font-extrabold text-lg text-secondary border-b border-border pb-2 mb-4">
              Step 1: Personal & Location Details
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Full Name (Surname First) *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ogene Chukwuemeka Fidelis"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.fullName ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.fullName && <span className="text-red-500 text-xxs font-bold">{errors.fullName}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.email && <span className="text-red-500 text-xxs font-bold">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +234 803 123 4567"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.phone ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.phone && <span className="text-red-500 text-xxs font-bold">{errors.phone}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Local Government Area (LGA) *
                </label>
                <select
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.lga ? "border-red-500" : "border-border"
                  }`}
                >
                  <option value="">Select LGA</option>
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga} LGA
                    </option>
                  ))}
                </select>
                {errors.lga && <span className="text-red-500 text-xxs font-bold">{errors.lga}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Federal Constituency *
                </label>
                <select
                  name="constituency"
                  value={formData.constituency}
                  onChange={handleChange}
                  className="bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
                >
                  {constituencies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Contact / Residential Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Home address in Delta State"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.address ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.address && <span className="text-red-500 text-xxs font-bold">{errors.address}</span>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: ACADEMIC DETAILS */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <h4 className="font-extrabold text-lg text-secondary border-b border-border pb-2 mb-4">
              Step 2: Institution & Academic Records
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Tertiary Institution (University/Polytechnic/College) *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="e.g. Delta State University, Abraka"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.institution ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.institution && <span className="text-red-500 text-xxs font-bold">{errors.institution}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Course of Study *
                </label>
                <input
                  type="text"
                  name="courseOfStudy"
                  value={formData.courseOfStudy}
                  onChange={handleChange}
                  placeholder="e.g. Bachelor of Medicine (MBBS)"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.courseOfStudy ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.courseOfStudy && <span className="text-red-500 text-xxs font-bold">{errors.courseOfStudy}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Matric / Admission Number *
                </label>
                <input
                  type="text"
                  name="matricNo"
                  value={formData.matricNo}
                  onChange={handleChange}
                  placeholder="e.g. DELSU/2023/12345"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.matricNo ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.matricNo && <span className="text-red-500 text-xxs font-bold">{errors.matricNo}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Current Level of Study *
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
                >
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="500">500 Level</option>
                  <option value="600">600 Level</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Current Cumulative GPA (CGPA) *
                </label>
                <input
                  type="text"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  placeholder="e.g. 3.75"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.cgpa ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.cgpa && <span className="text-red-500 text-xxs font-bold">{errors.cgpa}</span>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: REFEREE VERIFICATION */}
        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            <h4 className="font-extrabold text-lg text-secondary border-b border-border pb-2 mb-4">
              Step 3: Verification & Guarantor Referee
            </h4>

            <div className="p-4 bg-amber-50 text-amber-800 rounded-2xl text-xs sm:text-sm font-semibold border border-amber-200/50 mb-4">
              <strong>Notice:</strong> Please provide a referee who is a community leader, school lecturer, or a recognized leader in your LGA. They must be reachable to verify your student status.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Referee Full Name *
                </label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  placeholder="e.g. Chief Dr. Charles Ogene"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.refereeName ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.refereeName && <span className="text-red-500 text-xxs font-bold">{errors.refereeName}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Referee Phone Number *
                </label>
                <input
                  type="tel"
                  name="refereePhone"
                  value={formData.refereePhone}
                  onChange={handleChange}
                  placeholder="e.g. +234 803 765 4321"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.refereePhone ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.refereePhone && <span className="text-red-500 text-xxs font-bold">{errors.refereePhone}</span>}
              </div>
            </div>

            {/* Document Upload Simulation */}
            <div className="mt-4 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center">
              <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-xs font-extrabold uppercase tracking-wide text-secondary">
                Drag and Drop Support Files
              </span>
              <p className="text-xxs text-slate-500 mt-1 leading-normal max-w-xs mx-auto font-medium">
                Include admission letter, LGA certificate of origin, and CGPA transcript. Max 5MB per PDF/JPG.
              </p>
              <input type="file" disabled className="hidden" />
              <button
                type="button"
                className="mt-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xxs font-extrabold px-3 py-1.5 rounded-lg border border-border"
              >
                Browse Files
              </button>
            </div>
          </div>
        )}

        {/* Buttons Controls */}
        <div className="flex justify-between items-center pt-4 border-t border-border mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl bg-white transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors ml-auto"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="bg-secondary hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors ml-auto flex items-center gap-1.5"
            >
              Submit Application
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
