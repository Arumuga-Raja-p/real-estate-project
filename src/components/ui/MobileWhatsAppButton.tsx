"use client";

import Image from "next/image";

const whatsappMessage =
  "Hi Green Homes Construction, I would like to know more about your properties.";

export default function MobileWhatsAppButton() {
  const whatsappUrl = `https://wa.me/919841886699?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-50 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-900transition-transform active:scale-95 lg:hidden"
    >
      <Image src="/about/whatsapp.png" width={40} height={40} alt="" />
    </a>
  );
}
