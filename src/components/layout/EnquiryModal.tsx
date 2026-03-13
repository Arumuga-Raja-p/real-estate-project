// components/EnquiryModal.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { EnquiryFormFields } from "@/components/forms/enquiry-form-fields"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  INITIAL_ENQUIRY_FORM_DATA,
  type EnquiryFormData,
} from "@/lib/enquiry-form"
import { sendEnquiryEmail } from "@/lib/send-enquiry-email"
import { X, Send} from "lucide-react"

export default function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_ENQUIRY_FORM_DATA)

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (error) setError("")
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await sendEnquiryEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
        source: "quick-enquiry-modal",
      })

      setSent(true)
      setFormData(INITIAL_ENQUIRY_FORM_DATA)
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Failed to send message. Try again."
      setError(message)
    } finally {
      setLoading(false)
    }
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
              Fill out the form and we&apos;ll get back to you soon
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
              <EnquiryFormFields
                formData={formData}
                onChange={handleChange}
                messageRows={4}
                labelClassName="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                inputClassName="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                selectClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                textareaClassName="resize-none border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
              />

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
              {error ? (
                <p className="text-sm text-red-600">{error}</p>
              ) : null}
            </form>
          )}

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </div>
      </motion.div>
    </motion.div>
  )
}
