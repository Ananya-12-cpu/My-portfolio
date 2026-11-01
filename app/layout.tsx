import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ananya Putatunda — Frontend Developer",
  description:
    "Portfolio of Ananya Putatunda, a frontend developer with 3+ years of experience building scalable React and Next.js applications.",
  openGraph: {
    title: "Ananya Putatunda — Frontend Developer",
    description:
      "3+ years building scalable React & Next.js apps across SaaS, healthcare and travel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0612] antialiased`}
      >
         <Navbar />
        {children}
      </body>
    </html>
  );
}
