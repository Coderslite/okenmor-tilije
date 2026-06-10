"use client";

import { useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormState> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message content is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Contact Form Data Submitted:", formData);
      setSubmitted(true);
      setFormData(initialFormState);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xxs font-bold bg-primary/15 text-primary border border-primary/20 mb-4 uppercase tracking-widest">
            Connect
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Get In <span className="gradient-text">Touch With Us</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-semibold">
            Have questions about our scholarship requirements, community water drills, or partner profiles? Message us directly.
          </p>
        </div>
      </section>

      {/* 2. Contact Split Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Columns: Contact Card Details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Contact Info</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-secondary">
              Office Locations
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mt-1"></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">
                <h4 className="font-extrabold text-secondary mb-1">Administrative Headquarters</h4>
                <p className="text-slate-500 leading-relaxed">
                  Okenmor Mansion Road, Obiaruku, Ukwuani LGA / Asaba Office, Delta State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">
                <h4 className="font-extrabold text-secondary mb-1">Phone Enquiries</h4>
                <a href="tel:+2348037237799" className="text-slate-500 hover:text-primary transition-colors block">
                  +234 (0) 803 723 7799
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">
                <h4 className="font-extrabold text-secondary mb-1">General Inbox</h4>
                <a href="mailto:info@okenmortilijefoundation.org" className="text-slate-500 hover:text-primary transition-colors block">
                  info@okenmortilijefoundation.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 text-slate-500 rounded-xl shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">
                <h4 className="font-extrabold text-secondary mb-1">Operational Hours</h4>
                <p className="text-slate-500">
                  Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM
                </p>
                <p className="text-slate-400 text-xxs mt-0.5 font-bold">Closed on Weekends and Public Holidays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columns: Interactive Form */}
        <div className="lg:col-span-7 bg-white border border-border p-6 md:p-10 rounded-3xl shadow-lg">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-3">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                Thank you for reaching out. A representative from the Okenmor Tilije Foundation will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h4 className="font-extrabold text-lg text-secondary border-b border-border pb-2 mb-4">
                Send a Direct Message
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-xxs font-bold">{errors.name}</span>}
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

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Scholarship Verification, Water borehole project request"
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary ${
                    errors.subject ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.subject && <span className="text-red-500 text-xxs font-bold">{errors.subject}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Message Content *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message details here..."
                  className={`bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xxs font-bold">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-xs sm:text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 3. Google Maps placeholder section */}
      <section className="h-96 w-full bg-slate-100 border-t border-border relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1e3a8a_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        <div className="relative text-center p-6 z-10 max-w-md mx-auto">
          <svg className="w-10 h-10 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <h4 className="font-extrabold text-secondary mb-2 text-sm sm:text-base">Delta State Location Map</h4>
          <p className="text-slate-500 text-xs leading-relaxed font-semibold">
            Obiaruku administrative offices / Asaba scholarship council, Delta State, Nigeria. 
          </p>
          <span className="text-xxs font-bold uppercase tracking-widest text-primary mt-2 block">
            Map Grid Reference Point
          </span>
        </div>
      </section>
    </div>
  );
}
