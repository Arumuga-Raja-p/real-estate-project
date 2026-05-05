import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import EnquiryButton from "@/components/ui/EnquiryButton";
import SocialIconsComponent from "@/components/layout/socialMedia";
import { absoluteUrl, defaultKeywords, siteConfig } from "@/lib/seo";

const faviconUrl =
  "https://res.cloudinary.com/drisid7me/image/upload/v1777990710/green_favicon_u6wyou.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Green Homes Construction | Real Estate in Guduvanchery, Chennai",
    template: "%s | Green Homes Construction",
  },
  description: siteConfig.description,
  keywords: [...defaultKeywords],
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  category: "Real Estate",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Green Homes Construction | Real Estate in Guduvanchery, Chennai",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Green Homes Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Homes Construction | Real Estate in Guduvanchery, Chennai",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
    other: [{ rel: "icon", url: faviconUrl }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    telephone: siteConfig.phones,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    areaServed: ["Guduvanchery", "Chennai", "Tamil Nadu"],
    sameAs: [...siteConfig.sameAs],
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SocialIconsComponent/>
        <EnquiryButton />
      </body>
    </html>
  );
}
