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
  title: "Okenmor Tilije Foundation - Empowering Communities & Education",
  description: "Official website of the Okenmor Tilije Foundation. Dedicated to supporting youth, students, and community development across Delta State, Nigeria through scholarships, skills acquisition, and basic infrastructure.",
  keywords: ["Okenmor Tilije Foundation", "Fidelis Okenmor Tilije", "Delta State Scholarship", "Ukwuani LGA", "Anioma Scholarships", "Community Development Delta State"],
  openGraph: {
    title: "Okenmor Tilije Foundation - Empowering Communities",
    description: "Dedicated to supporting youth, students, and community development across Delta State, Nigeria through scholarships, skills acquisition, and basic infrastructure.",
    type: "website",
    locale: "en_NG",
  }
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

