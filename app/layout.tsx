import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <style>
            {`@import url("https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap");`}
      </style>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-300 normal`}
      >
        {children}
      </body>
    </html>
  );
}
