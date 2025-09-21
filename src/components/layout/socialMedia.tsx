"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, Share2 } from "lucide-react";

const SocialIconsComponent = () => {
const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [showIcons, setShowIcons] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/greenhomes369",
      color: "#1877F2",
      gradient: "from-blue-500 via-white-500 to-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/green_homes_property",
      color: "#E4405F",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@greenhomesproperty",
      color: "#FF0000",
      gradient: "from-red-500 via-red-500 to-white-100",
    },
  ];

  // Auto-show icons after component mounts - removed this behavior
  useEffect(() => {
    // Remove auto-show functionality
  }, []);

  // Updated toggle function
  function togglePopup(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setIsPopupOpen(!isPopupOpen);
    setShowIcons(!isPopupOpen);
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      {/* Floating Social Media Button */}
      <div className="fixed bottom-25 right-8 z-50">
        <button
          onClick={togglePopup}
          className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white p-3 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 border-1 border-white rounded-[100%] focus:ring-4 focus:ring-white-300"
          aria-label="Open social media links"
        >
          <Share2
            className={`h-6 w-6 transition-transform duration-300 ${
              isPopupOpen ? "rotate-180" : "group-hover:rotate-12"
            }`}
          />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Social Media Icons - Vertical Layout */}
      <div className="fixed bottom-45 right-8 z-50">
        <div className="flex flex-col-reverse space-y-reverse space-y-3">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;

            return (
              <div
                key={social.name}
                className={`
                  relative transform transition-all duration-500 ease-out
                  ${
                    showIcons && isPopupOpen
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-0"
                  }
                `}
                style={{
                  transitionDelay: `${(socialLinks.length - 1 - index) * 100}ms`,
                }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {/* Main Icon Circle */}
                  <div
                    className={`
                    w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl
                    flex items-center justify-center
                    transform transition-all duration-300 hover:scale-110
                    border-2 border-gray-100 hover:border-white
                    relative overflow-hidden
                  `}
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-br ${social.gradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      rounded-full
                    `}
                    ></div>

                    <IconComponent
                      className={`
                        h-6 w-6 transition-all duration-300 relative z-10
                        group-hover:text-white group-hover:scale-110
                      `}
                      style={{
                        color: hoveredIcon === index ? "white" : social.color,
                      }}
                    />

                    {/* Ripple effect */}
                    <div
                      className={`
                      absolute inset-0 rounded-full transition-all duration-500
                      ${
                        hoveredIcon === index
                          ? "bg-white/20 scale-150 opacity-100"
                          : "scale-100 opacity-0"
                      }
                    `}
                    ></div>
                  </div>

                  {/* Animated Label - Slide from right */}
                  <div
                    className={`
                    absolute right-16 top-1/2 transform -translate-y-1/2
                    transition-all duration-300 ease-out
                    ${
                      hoveredIcon === index
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-4 scale-95"
                    }
                  `}
                  >
                    <div
                      className={`
                      bg-gradient-to-r ${social.gradient} text-white 
                      px-4 py-2 rounded-xl text-sm font-semibold
                      shadow-lg backdrop-blur-sm
                      relative overflow-hidden
                    `}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <span className="relative z-10">{social.name}</span>

                      {/* Arrow pointing to icon */}
                      <div
                        className={`
                        absolute top-1/2 -right-2 transform -translate-y-1/2 
                        w-4 h-4 bg-gradient-to-r ${social.gradient} rotate-45
                      `}
                      ></div>
                    </div>
                  </div>

                  {/* Floating particles on hover */}
                  {hoveredIcon === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`
                            absolute w-2 h-2 bg-gradient-to-r ${social.gradient} rounded-full
                            animate-ping opacity-75
                          `}
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 150}ms`,
                            animationDuration: "1.5s",
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialIconsComponent;