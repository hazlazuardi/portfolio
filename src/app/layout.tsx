import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haz Lazuardi",
  description: "Haz Lazuardi's portfolio, including all his projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
