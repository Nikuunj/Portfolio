import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { animation } from "@/data/extraStuff";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikunj Makwana"
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
      </body>
    </html>
  );
}
