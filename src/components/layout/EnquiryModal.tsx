// components/EnquiryModal.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Send, Building, User, MessageSquare } from "lucide-react"

export default function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => {
        setSent(true)
        setLoading(false)
      })
      .catch(() => {
        alert("Failed to send message. Try again.")
        setLoading(false)
      })
  }

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full border-2 border-gray-100 relative overflow-hidden group"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

        {/* Close button - Fixed with higher z-index and pointer-events-auto */}
        <button 
          className="absolute top-4 right-4 z-50 w-8 h-8 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-200 text-sm font-semibold">
              Quick Enquiry
            </Badge>
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-800 transition-colors duration-300">
              Fill out the form and we'll get back to you soon
            </p>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your enquiry was sent successfully.</p>
              <Button
                onClick={onClose}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91-9543326699"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  Inquiry Type *
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="buy">Buying Property</option>
                  <option value="sell">Selling Property</option>
                  <option value="construction">Building Construction</option>
                  <option value="management">Property Management</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Brief subject of your inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group/btn"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    Submit Enquiry
                  </span>
                )}
              </Button>
            </form>
          )}

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </div>
      </motion.div>
    </motion.div>
  )
}