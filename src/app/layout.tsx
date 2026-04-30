import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praano — AI-Powered Hospital Workflow Automation",
  description:
    "End-to-end hospital workflow automation from admission to discharge to 30-day follow-up. ABDM, NHCX, PMJAY, NABH compliant.",
  openGraph: {
    title: "Praano — AI-Powered Hospital Workflow Automation",
    description:
      "End-to-end hospital workflow automation from admission to discharge to 30-day follow-up.",
    url: "https://praano.co.in",
    siteName: "Praano",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
