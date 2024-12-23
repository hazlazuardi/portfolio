import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Haz Lazuardi",
  description: "Haz Lazuardi's portfolio, including all his projects.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  variable: "--font-poppins",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
