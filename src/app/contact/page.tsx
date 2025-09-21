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
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
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
                >
                  <Card className="h-full flex flex-col text-center hover:shadow-lg transition-shadow shadow-neutral-500">
                    <CardHeader>
                      <info.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, detailIndex) => (
                          // Added 'lg:text-sm' to reduce font size on large screens
                          <p
                            key={detailIndex}
                            className="text-gray-600 break-words text-[12px]"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                      <div className="mt-auto flex justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-600 text-white hover:bg-green-700 bg-green-500"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </CardContent>
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
                <Card className="bg-white shadow-neutral-950 ">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-9">
                      <div className="grid md:grid-cols-2 gap-4 w-70%">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
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
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
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
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
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
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="inquiryType"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Inquiry Type *
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                          className="block text-sm font-medium text-gray-700 mb-2"
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
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
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
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
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
                className="max-w-screen"
              >
                <Card className="shadow-neutral-950">
                  <CardHeader>
                    <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1525970129046!2d80.0656730751205!3d12.833414087469428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7fad02d1cab%3A0x6a72cf4412509946!2sGreen%20Homes!5e0!3m2!1sen!2sin!4v1753284330618!5m2!1sen!2sin"
                        width="680"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">
                            No:15, Govindarajapuram 2nd street,
                          </p>
                          <p className="font-medium">
                            {" "}
                            Nellikappam Road,Guduvanchery,
                          </p>
                          <p className="font-medium"> chennai-603 202</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">Office Hours</p>
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

                {/* <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Property Viewing
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <User className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Building className="w-4 h-4 mr-2" />
                    Property Valuation Request
                  </Button>
                </CardContent>
              </Card> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How quickly can you help me find a property?
                    </h3>
                    <p className="text-gray-600">
                      We typically have new listings that match your criteria
                      within 24-48 hours. Our average time to find the right
                      property is 2-4 weeks.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What are your commission rates?
                    </h3>
                    <p className="text-gray-600">
                      Our commission rates are competitive and transparent. We
                      offer different packages based on your needs, starting
                      from 2 to 2.5% for sellers.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Do you offer property management services?
                    </h3>
                    <p className="text-gray-600">
                      Yes! We offer comprehensive property management services
                      including tenant screening, rent collection, maintenance,
                      and more.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can you help with investment properties?
                    </h3>
                    <p className="text-gray-600">
                      We specialize in investment properties and can provide
                      market analysis, ROI calculations, and ongoing investment
                      advice.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
