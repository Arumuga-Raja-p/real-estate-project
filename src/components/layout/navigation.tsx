"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import EnquiryModal from "@/components/layout/EnquiryModal";
import navbarLogo from "@/app/asstes/Logo.png";
import { ModernMobileMenu } from "@/components/ui/modern-mobile-menu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/properties", label: "Properties" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      {!isModalOpen && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white"
        >
          <div className="mx-auto w-full px-4 lg:px-8">
            <div className="flex h-20 items-center">
              {/* Logo */}
              <Link href="/" className="flex shrink-0 items-center gap-3">
                <Image
                  src={navbarLogo}
                  width={280}
                  height={108}
                  alt="Green Homes logo"
                  priority
                  className="relative top-2 -ml-2 h-16 w-auto object-contain sm:h-24"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold tracking-[0.22em] text-gray-900 uppercase sm:text-xl">
                    Green Homes
                  </span>
                  <span className="mt-1 text-center text-xs font-semibold tracking-[0.4em] text-green-700 uppercase sm:text-sm">
                    Construction
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden flex-1 items-center justify-center lg:flex">
                <div className="flex items-center space-x-8 xl:space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-gray-700 hover:text-green-600 transition-colors font-medium ${
                      pathname === item.href ? "text-green-600" : ""
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                      />
                    )}
                  </Link>
                ))}
                </div>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden items-center space-x-4 pl-8 lg:flex xl:pl-10">
                <Link
                  href="https://wa.me/919841886699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src="/about/whatsapp.png" width={36} height={36} alt="WhatsApp" />
                </Link>
                <Button
                  size="sm"
                  className="relative bg-green-600 text-white border border-green-600 transition-all duration-300 hover:bg-white hover:text-green-600 hover:backdrop-blur-md hover:shadow-lg"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}

      {!isModalOpen ? (
        <ModernMobileMenu
          onEnquire={() => setIsModalOpen(true)}
        />
      ) : null}
    </>
  );
}
