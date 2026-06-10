import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://okenmor-tilije.vercel.app"),

  // ── Core SEO ──────────────────────────────────────────────────────────────
  title: {
    default: "Okenmor Tilije Foundation — Empowering Communities & Education",
    template: "%s | Okenmor Tilije Foundation",
  },
  description:
    "The Okenmor Tilije Foundation supports youth, students, and community development across Delta State, Nigeria through tertiary scholarships, skills acquisition, and basic infrastructure projects.",
  keywords: [
    "Okenmor Tilije Foundation",
    "Fidelis Okenmor Tilije",
    "Delta State Scholarship",
    "Ukwuani LGA",
    "Anioma Scholarships",
    "Community Development Delta State",
    "Youth Empowerment Nigeria",
    "Foundation Scholarship Nigeria",
    "Ndokwa",
  ],
  authors: [{ name: "Okenmor Tilije Foundation" }],
  creator: "Okenmor Tilije Foundation",
  publisher: "Okenmor Tilije Foundation",

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://okenmor-tilije.vercel.app",
    siteName: "Okenmor Tilije Foundation",
    title: "Okenmor Tilije Foundation — Empowering Communities & Education",
    description:
      "Supporting youth, students, and community development across Delta State, Nigeria through scholarships, skills acquisition, and infrastructure.",
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Okenmor Tilije Foundation — Empowering Communities & Education",
    description:
      "Supporting youth, students, and community development across Delta State, Nigeria.",
  },

  // ── App-level ─────────────────────────────────────────────────────────────
  category: "nonprofit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        {/* Main Content Area with padding top to clear the sticky navbar */}
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

