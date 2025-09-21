"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import EnquiryModal from "@/components/layout/EnquiryModal";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/properties", label: "Properties" },
  { href: "/management", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <Image src={"/Logo.png"} height={80} width={90} alt={"Logo"} />
                <Image src={"/greenlogo.png"} height={70} width={250} alt={"Logo"} />              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
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

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
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
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  Enquire Now
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-gray-700 hover:text-green-600 transition-colors font-medium py-2 ${
                          pathname === item.href ? "text-green-600" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}

                    {/* Mobile CTAs */}
                    <div className="flex flex-col space-y-2 pt-4 px-3 border-t">
                      
                        <Button className="block bg-green-600 text-white border border-green-600 transition-all duration-300 hover:bg-white hover:text-green-600 hover:backdrop-blur-md hover:shadow-lg lg:hidden">
                          <a href="tel:+919841886699">Call Me </a>
                        </Button>
                     

                      <a
                        href="https://wa.me/919841886699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block lg:hidden"
                      >
                        <div className="flex items-center justify-center border rounded-md px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition-colors">
                          <Image
                            src="/about/whatsapp.png"
                            alt="WhatsApp"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          WhatsApp
                        </div>
                      </a>

                      <Button
                        size="sm"
                        className="relative bg-green-600 text-white border border-green-600 transition-all duration-300 hover:bg-white hover:text-green-600 hover:backdrop-blur-md hover:shadow-lg"
                        onClick={() => {
                          setIsOpen(false);
                          setIsModalOpen(true);
                        }}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </>
  );
}
