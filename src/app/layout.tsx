import type { Metadata } from "next";
import { Montserrat_Alternates, Philosopher, Playpen_Sans, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Haz Lazuardi",
  description: "Haz Lazuardi's portfolio, including all his projects.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'swap',
  preload: true,
  variable: "--font-poppins",
});

const playpen = Playpen_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: 'swap',
  variable: "--font-playpen",
})

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  variable: "--font-philosopher",
})

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playpen.variable} ${philosopher.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
