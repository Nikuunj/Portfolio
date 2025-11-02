import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { animation } from "@/data/extraStuff";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Nikunj Makwana | Full Stack Developer & Software Engineer",
  icons: {
    icon: '/sonic.jpg',
  },
  description: `Nikunj Makwana - Professional Software Developer & Full Stack Engineer specializing in Next.js, React, Node.js, PostgreSQL, Web3, and Blockchain. Available for hire for full-time positions, freelance projects, and internships. Experienced in building scalable web applications, real-time systems, and decentralized solutions. Computer Engineering graduate passionate about creating impactful digital solutions.`,
  keywords: [
    "Nikunj Makwana",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "Solana Developer",
    "Solana Blockchain",
    "Solana dApp Developer",
    "Rust Developer",
    "Smart Contract Developer",
    "Hire Nikunj Makwana",
    "Freelance Developer",
    "Computer Engineer",
    "Neovim Developer",
    "PostgreSQL Developer",
    "Real-time Systems",
  ],
  authors: [{ name: "Nikunj Makwana", url: "https://nikunj-portfolio.vercel.app/" }],
  creator: "Nikunj Makwana",
  publisher: "Nikunj Makwana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nikunj-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nikunj Makwana | Full Stack Developer - Available for Hire",
    description: "Professional Software Developer skilled in Next.js, React, Node.js, TypeScript, Web3, and Blockchain. Building scalable, SEO-optimized applications. Open to full-time, freelance, and remote opportunities.",
    url: "https://nikunj-portfolio.vercel.app/",
    siteName: "Nikunj Makwana - Software Developer Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/sonic.jpg",
        width: 1200,
        height: 630,
        alt: "Nikunj Makwana - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikunj Makwana | Full Stack Developer - Hire Me",
    description: "Software Developer specializing in Next.js, React, Node.js, Web3. Available for remote work, freelance projects, and full-time roles. Let's build something amazing together!",
    images: ["/sonic.jpg"],
    creator: "@IsNikunj",
    site: "@IsNikunj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikunj Makwana",
    url: "https://nikunj-portfolio.vercel.app/",
    image: "https://nikunj-portfolio.vercel.app/sonic.jpg",
    jobTitle: "Software Developer",
    description: "Full Stack Developer specializing in Next.js, React, Node.js, Web3, and Blockchain technologies",
    sameAs: [
      "https://github.com/Nikuunj",
      "https://www.linkedin.com/in/makwana-nikunj/",
      "https://x.com/IsNikunj",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Web3",
      "Blockchain",
      "Solana",
      "Solana Development",
      "Smart Contracts",
      "dApp Development",
      "Rust",
      "Full Stack Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Engineering",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhavnagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://nikunj-portfolio.vercel.app/" />
        <meta name="author" content="Nikunj Makwana" />
        <meta name="geo.region" content="IN-GJ" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <style>
        {`@import url("https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap");`}
      </style>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-300 ${animation} normal`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
