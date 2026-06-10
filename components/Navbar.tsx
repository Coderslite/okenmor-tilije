"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Elegant SVG Logo matching the user's description (circle, figures, star)
export function FoundationLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Red outer circular border */}
      <circle cx="100" cy="100" r="92" stroke="var(--primary)" strokeWidth="6" />
      <circle cx="100" cy="100" r="82" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" />
      
      {/* White inner circular base for contrast */}
      <circle cx="100" cy="100" r="76" fill="white" />
      
      {/* Inner logo artwork: Star and two human figures */}
      <g transform="translate(10, 10) scale(0.9)">
        {/* Star */}
        <path
          d="M100 45L105.5 59.5H120L108 68.5L112.5 83L100 74L87.5 83L92 68.5L80 59.5H94.5L100 45Z"
          fill="#1e3a8a"
        />
        {/* Dark Blue/Navy Figure reaching up */}
        <path
          d="M100 90C100 80.5 107.5 73 117 73C126.5 73 134 80.5 134 90C134 99.5 126.5 107 117 107C107.5 107 100 99.5 100 90Z"
          fill="#1e3a8a"
        />
        <path
          d="M93.5 108C94 100 99 92 108 90C111 96 114.5 101.5 117 108.5C118 111.5 116.5 115 113.5 116.5C108.5 119 101 120 95.5 117C94 116 93.3 114 93.5 112L93.5 108Z"
          fill="#1e3a8a"
        />
        <path
          d="M117 108.5C115 102 111 96 108 90C118.5 88 126 94 129 101.5C132 109 127.5 117 119 119C118.5 119 117.5 110.5 117 108.5Z"
          fill="#1e3a8a"
        />
        
        {/* Orange Figure below */}
        <path
          d="M80 135C80 127 86.5 120.5 94.5 120.5C102.5 120.5 109 127 109 135C109 143 102.5 149.5 94.5 149.5C86.5 149.5 80 143 80 135Z"
          fill="#ea580c"
        />
        <path
          d="M71.5 155C72 145 78 135.5 89 133C92.5 140 96.5 147 99 155C100 159 98 163 94 165C88 168.5 79 170 73.5 166C71.5 164.5 71 161.5 71.5 159L71.5 155Z"
          fill="#ea580c"
        />
        <path
          d="M99 155C97 147 93 140 89 133C101.5 130.5 110.5 137.5 114 146.5C117.5 155.5 112 165 102 167C101 167 99.5 157.5 99 155Z"
          fill="#ea580c"
        />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Scholarships", href: "/scholarship" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-md py-3 dark:shadow-slate-900/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <FoundationLogo className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-secondary dark:text-white group-hover:text-primary transition-colors duration-200">
                OKENMOR TILIJE
              </span>
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-primary ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Theme Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/scholarship"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden animate-fade-in" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-b border-border shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-slate-100 dark:bg-slate-800 text-primary"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 px-3">
              <Link
                href="/scholarship"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-bold py-3 rounded-xl transition-colors duration-200"
              >
                Apply for Scholarship
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
