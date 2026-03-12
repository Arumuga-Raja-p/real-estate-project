import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import EnquiryButton from "@/components/ui/EnquiryButton";
import SocialIconsComponent from "@/components/layout/socialMedia";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Homes - Premium Real Estate Solutions",
  description:
    "Find your dream home with Green Homes. Premium properties, expert service, and comprehensive real estate solutions.",
  keywords: "real estate, properties, homes, apartments, buy, sell, rent, property management",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SocialIconsComponent/>
        <EnquiryButton />
      </body>
    </html>
  );
}