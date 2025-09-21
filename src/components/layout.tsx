import type React from "react"
import { Inter } from "next/font/google"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import EnquiryButton from "./ui/EnquiryButton"
import SocialIconsComponent from "./layout/socialMedia"

const inter = Inter({ subsets: ["latin"] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen  ">{children}</main>
        <Footer />
        <EnquiryButton/>
        <SocialIconsComponent/>
      </body>
    </html>
  )
}
