"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  User,
  Building,
  Calendar,
} from "lucide-react";
import RootLayout from "@/components/layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "No:15, Govindarajapuram 2nd street",
      "Nellikappam Road,Guduvanchery",
      "Chennai-603 202",
    ],
    action: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9543326699", "+91-9841886699"],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["ramesh@greenhouseproperty.com", "support@greenestate.com"],
    action: "Send Email",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"],
    action: "Schedule Visit",
  },
];

const inquiryTypes = [
  { value: "buying", label: "Buying Property", icon: Building },
  { value: "selling", label: "Selling Property", icon: Building },
  { value: "construction", label: "Building Construction", icon: Building },
  { value: "management", label: "Property Management", icon: Building },
  { value: "consultation", label: "Free Consultation", icon: User },
  { value: "other", label: "Other", icon: MessageSquare },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <RootLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-200/30 via-transparent to-blue-200/30"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Floating Home SVGs */}
            <motion.div
              className="absolute top-20 left-10 opacity-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-400"
              >
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-40 right-20 opacity-10"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-400"
              >
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-20 opacity-10"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-400"
              >
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-40 right-10 opacity-10"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-300"
              >
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
              </svg>
            </motion.div>

            {/* Floating Circles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-green-200 blur-xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-green-200 blur-xl"
            />

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/3 left-1/3 w-24 h-24 rounded-full bg-green-200 blur-xl"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm font-semibold">
                Contact & Inquiry
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Get In
                <span className="text-green-600"> Touch</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to find your dream property or need expert real estate
                advice? Our team is here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full flex flex-col text-center border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <info.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow relative z-10">
                      <div className="space-y-2 mb-4 flex-grow">
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-600 break-words text-sm group-hover:text-gray-800 transition-colors duration-300"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                      <div className="mt-auto flex justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 group-hover:scale-105"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </CardContent>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-screen">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-screen"
              >
                <Card className="bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91-9543326699"
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="inquiryType"
                            className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                          >
                            Inquiry Type *
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                          >
                            <option value="">Select inquiry type</option>
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief subject of your inquiry"
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide details about your inquiry..."
                          className="resize-none border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map/Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-screen space-y-6"
              >
                {/* Map Card */}
                <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">
                      Visit Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1525970129046!2d80.0656730751205!3d12.833414087469428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7fad02d1cab%3A0x6a72cf4412509946!2sGreen%20Homes!5e0!3m2!1sen!2sin!4v1753284330618!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover:scale-105 transition-transform duration-700"
                      ></iframe>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group/item">
                        <MapPin className="w-5 h-5 text-green-600 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-medium text-gray-900">
                            No:15, Govindarajapuram 2nd street,
                          </p>
                          <p className="font-medium text-gray-900">
                            Nellikappam Road, Guduvanchery,
                          </p>
                          <p className="font-medium text-gray-900">
                            Chennai-603 202
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group/item">
                        <Clock className="w-5 h-5 text-green-600 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Office Hours
                          </p>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </p>
                          <p className="text-gray-600">
                            Saturday - Sunday: 10:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions Card */}
                <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 relative z-10">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 group/item"
                    >
                      <Calendar className="w-4 h-4 mr-2 group-hover/item:scale-110 transition-transform duration-300" />
                      Schedule Property Viewing
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 group/item"
                    >
                      <User className="w-4 h-4 mr-2 group-hover/item:scale-110 transition-transform duration-300" />
                      Book Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 group/item"
                    >
                      <Building className="w-4 h-4 mr-2 group-hover/item:scale-110 transition-transform duration-300" />
                      Property Valuation Request
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm font-semibold">
                Need Help?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How quickly can you help me find a property?",
                  answer:
                    "We typically have new listings that match your criteria within 24-48 hours. Our average time to find the right property is 2-4 weeks.",
                },
                {
                  question: "What are your commission rates?",
                  answer:
                    "Our commission rates are competitive and transparent. We offer different packages based on your needs, starting from 2 to 2.5% for sellers.",
                },
                {
                  question: "Do you offer property management services?",
                  answer:
                    "Yes! We offer comprehensive property management services including tenant screening, rent collection, maintenance, and more.",
                },
                {
                  question: "Can you help with investment properties?",
                  answer:
                    "We specialize in investment properties and can provide market analysis, ROI calculations, and ongoing investment advice.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-6 relative z-10">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
