import Link from "next/link";
import Image from "next/image";
import { FoundationLogo } from "@/components/Navbar";


export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            About the <span className="gradient-text">Okenmor Tilije Foundation</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-semibold">
            Dedicated to transforming lives, supporting students, and building sustainable public infrastructure in Delta State, Nigeria.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission Card */}
        <div className="bg-white dark:bg-slate-900 border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5">
          <div className="p-3.5 bg-primary/10 rounded-xl h-fit">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-secondary dark:text-white mb-3">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              To drive inclusive growth, combat poverty, and build community resilience in Delta State by offering premium educational scholarships to indigent students, funding solar-powered water infrastructure, and running structural vocational training projects for youths.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-white dark:bg-slate-900 border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5">
          <div className="p-3.5 bg-accent/10 rounded-xl h-fit">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-secondary dark:text-white mb-3">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              To see a progressive Delta State where local communities enjoy clean, accessible drinking water, and where every motivated student has the educational funding and skills needed to achieve absolute self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">How We Work</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">Our Core Values</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg mb-4 shadow">
                I
              </div>
              <h3 className="font-bold text-base mb-2 text-secondary dark:text-white">Integrity</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                We maintain absolute transparency, fairness, and accountability in our scholarship selection processes and project executions.
              </p>
            </div>

            <div className="text-center p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4 shadow">
                C
              </div>
              <h3 className="font-bold text-base mb-2 text-secondary dark:text-white">Compassion</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                Our foundation is driven by a deep love for our people and a passion to alleviate hardships for the most vulnerable members of society.
              </p>
            </div>

            <div className="text-center p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4 shadow">
                S
              </div>
              <h3 className="font-bold text-base mb-2 text-secondary dark:text-white">Sustainability</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                We don&apos;t just provide short-term relief; we invest in long-term capacities like education and basic clean water systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Biography of the Founder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Logo emblem portrait visual */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="border border-border p-4 bg-white dark:bg-slate-900 rounded-3xl shadow-lg w-full max-w-[280px]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border border-primary/20">
                <Image
                  src="/img10.jpg"
                  alt="Sir Fidelis Okenmor Tilije"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-xxs font-extrabold uppercase tracking-widest text-primary">
                  FOUNDATION FOUNDER
                </span>
                <h4 className="text-sm font-black text-secondary dark:text-white mt-1">
                  Sir Fidelis O. Tilije
                </h4>
                <p className="text-[10px] text-muted font-bold mt-0.5 uppercase tracking-wide">
                  Delta State Leader
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Biographical Profile
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-secondary dark:text-white">
              Sir Fidelis Okenmor Tilije
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-2"></div>
            
            <p>
              Sir Fidelis Okenmor Tilije was born in Obiaruku, Ukwuani Local Government Area of Delta State. Over the course of a distinguished career spanning several decades, he has established himself as a prominent banker, administrator, politician, and community pillar.
            </p>

            <p>
              He holds an educational foundation in accounting and business administration. Sir Tilije entered Nigeria&apos;s banking industry where he rose through the ranks to executive positions, eventually serving as the Managing Director/CEO of Fortune Bank PLC. His experience in financial management, corporate governance, and economic structuring became a hallmark of his professional reputation.
            </p>

            <h3 className="font-bold text-lg text-secondary dark:text-white mt-4">
              Transition to Public Service
            </h3>
            <p>
              Driven by a desire to contribute directly to the governance and infrastructure of his home state, Sir Tilije transitioned into politics and public administration. He has held multiple high-profile cabinet positions in the Delta State Government:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Commissioner for Water Resources Development:</strong> Where he oversaw the expansion of potable water systems and community hygiene protocols.
              </li>
              <li>
                <strong>Commissioner for Finance:</strong> Where he currently serves, managing the state&apos;s fiscal policies, budgetary designs, and economic strategies to foster development.
              </li>
            </ul>

            <h3 className="font-bold text-lg text-secondary dark:text-white mt-4">
              Philanthropic Vision
            </h3>
            <p>
              For Sir Tilije, public office and private philanthropy are complementary tools for communal elevation. Recognizing that Anioma and Delta State host vast pools of talented but economically constrained youths, he established the **Okenmor Tilije Foundation**.
            </p>
            <p>
              The foundation&apos;s core objective is to institutionalize his personal giving, providing transparent structures for university scholarship selection, building solar water pumps in remote communities, and equipping youths with trade tools. His motto remains: <em>&ldquo;Build the individual, and you secure the community.&rdquo;</em>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quick Footer CTA */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-bold">Interested in Our Outreach or Want to Support?</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg">
            We are always eager to share our progress, verify candidate selections, or partner on infrastructure programs in Delta State.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full mt-2 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
