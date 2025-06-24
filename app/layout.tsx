import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { animation } from "@/data/extraStuff";
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
  title: "Nikunj Makwana | Software Developer",
  description: `Nikunj Makwana is a software developer who builds scalable, high-performance, 
    and SEO-friendly applications using React.js, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, 
    and Prisma. He follows clean code practices like DRY and aims to deliver smooth user experiences. Open to 
    full-time, freelance, or internship roles. GitHub: https://github.com/Nikuunj`,
  icons: {
    icon: "/sonic.jpg",
  },
  openGraph: {
    title: "Nikunj Makwana | Software Developer",
    description: "Software developer skilled in React, Next.js, Node.js, and TypeScript. Available for full-time, freelance, or internship roles.",
    url: "https://nikunj-portfolio.vercel.app/",
    siteName: "Nikunj Makwana Portfolio",
    images: [
      {
        url: "/sonic.jpg",
        width: 1200,
        height: 630,
        alt: "Nikunj Makwana Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikunj Makwana | Software Developer",
    description: "Software developer building scalable, SEO-optimized apps. Open to remote roles and projects.",
    images: ["/sonic.jpg"],
    creator: "@nikunj__makwana",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <style>
            {`@import url("https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap");`}
      </style>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white   dark:bg-black text-zinc-900 dark:text-zinc-300 ${animation}  normal`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
