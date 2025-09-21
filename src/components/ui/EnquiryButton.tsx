"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "../layout/EnquiryModal";

export default function EnquiryButton() {
  const [hovered, setHovered] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);
  const [, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoOpen(true);
      setTimeout(() => setAutoOpen(false), 3000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const showText = hovered || autoOpen;

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AnimatePresence mode="wait">
        {showText ? (
          <motion.div
            key="enquiry-with-text"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center bg-green-600 border-4 border-white rounded-full shadow-xl overflow-hidden origin-right"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-white text-xl px-6 py-3 font-semibold"
            >
              Enquiry Now
            </motion.div>

            <button
              aria-label="Enquire"
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="text-white w-12 h-12 flex cursor-pointer items-center justify-center border-4 border-white rounded-full transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="icon-only"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-green-600 border-4 border-white rounded-full shadow-xl"
          >
            <button
              aria-label="Enquire"
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="text-white w-12 h-12 flex cursor-pointer items-center justify-center border-4 border-white rounded-full transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
