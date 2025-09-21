// components/EnquiryModal.tsx
"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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

  if (!isOpen) return null

  return (
    
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex bg-opacity-50 items-center justify-center p-4 animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
        <button className="absolute top-2 right-3 text-gray-600 animate-fade-in" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-green-700">Enquiry Form</h2>
        {sent ? (
          <p className="text-green-600">Thank you! Your enquiry was sent successfully.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input name="name" placeholder="Name" className="w-full border rounded p-2" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" className="w-full border rounded p-2" onChange={handleChange} required />
            <input name="phone" placeholder="Phone" className="w-full border rounded p-2" onChange={handleChange} required />
            <select name="inquiry" className="w-full border rounded p-2" onChange={handleChange} required>
              <option value="">Select Inquiry Type</option>
              <option value="buy">Buying Property</option>
              <option value="rent">Selling Property</option>
              <option value="other">Building Construction</option>
              <option value="other">Property Management</option>
              <option value="other">Free Consultation</option>
              <option value="other">Others</option>
            </select>
            <input name="subject" placeholder="Subject" className="w-full border rounded p-2" onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows={4} className="w-full border rounded p-2" onChange={handleChange} required />
            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  )
}
