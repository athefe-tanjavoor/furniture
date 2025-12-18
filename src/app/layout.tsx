import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Use Inter for body, Playfair for headings
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anjum Furnitures | Premium Luxury Furniture",
  description: "Experience the epitome of luxury living with our handcrafted furniture collections.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { FramerProvider } from "@/components/FramerProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-white text-neutral-900`}
      >
        <FramerProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </FramerProvider>
      </body>
    </html>
  );
}
