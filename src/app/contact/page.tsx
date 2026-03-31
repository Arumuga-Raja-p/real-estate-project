"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import RootLayout from "@/components/layout";
import { EnquiryFormFields } from "@/components/forms/enquiry-form-fields";
import {
  CONTACT_SECTION_FALLBACK,
  fetchContactSection,
  type ContactCard,
} from "@/lib/contact";
import { sendEnquiryEmail } from "@/lib/send-enquiry-email";

import {
  INITIAL_ENQUIRY_FORM_DATA,
  type EnquiryFormData,
} from "@/lib/enquiry-form";

const CONTACT_ICON_MAP: Record<ContactCard["type"], typeof MapPin> = {
  office: MapPin,
  phone: Phone,
  email: Mail,
  hours: Clock,
};

type ContactInfo = ContactCard & {
  icon: typeof MapPin;
};

const FALLBACK_CONTACT_INFO: ContactInfo[] = CONTACT_SECTION_FALLBACK.contactCards.map(
  (card) => ({
    ...card,
    icon: CONTACT_ICON_MAP[card.type],
  })
);

export default function ContactPage() {
  const [contactInfo, setContactInfo] =
    useState<ContactInfo[]>(FALLBACK_CONTACT_INFO);
  const [formData, setFormData] = useState<EnquiryFormData>(
    INITIAL_ENQUIRY_FORM_DATA
  );

  useEffect(() => {
    let isMounted = true;

    fetchContactSection()
      .then((data) => {
        if (!isMounted || !data?.contactCards?.length) {
          return;
        }

        setContactInfo(
          data.contactCards.map((card) => ({
            ...card,
            icon: CONTACT_ICON_MAP[card.type],
          }))
        );
      })
      .catch(() => {
        // Keep the fallback values when CMS data is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const officeInfo =
    contactInfo.find((info) => info.type === "office") ?? FALLBACK_CONTACT_INFO[0];
  const hoursInfo = contactInfo.find((info) => info.type === "hours");

  const handleActionClick = (info: ContactInfo) => {
    if (info.type === "office" || info.type === "hours") {
      window.open(info.actionLink, "_blank", "noopener,noreferrer");
    } else if (info.type === "phone" || info.type === "email") {
      window.location.href = info.actionLink;
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (submitError) setSubmitError("");
    if (submitSuccess) setSubmitSuccess("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFieldChange = (name: keyof EnquiryFormData, value: string) => {
    if (submitError) setSubmitError("");
    if (submitSuccess) setSubmitSuccess("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.inquiryType) {
      setSubmitError("Please select an inquiry type.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await sendEnquiryEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
        source: "contact-page",
      });

      setFormData(INITIAL_ENQUIRY_FORM_DATA);
      setSubmitSuccess(
        "Thank you for your inquiry! We will get back to you within 24 hours."
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
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
                  key={info._key ?? info.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full flex flex-col text-center border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    {/* Hover background gradient */}
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
                        {info.details.map(
                          (detail: string, detailIndex: number) => (
                            <p
                              key={detailIndex}
                              className="text-gray-600 break-words text-sm group-hover:text-gray-800 transition-colors duration-300"
                            >
                              {detail}
                            </p>
                          )
                        )}
                      </div>

                      <div className="mt-auto flex justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleActionClick(info)}
                          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 group-hover:scale-105"
                        >
                          {info.actionLabel}
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
                      <EnquiryFormFields
                        formData={formData}
                        onChange={handleInputChange}
                        onFieldChange={handleFieldChange}
                        messageRows={6}
                        labelClassName="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300"
                        inputClassName="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                        selectClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                        textareaClassName="resize-none border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300"
                      />

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
                      {submitError ? (
                        <p className="text-sm text-red-600">{submitError}</p>
                      ) : null}
                      {submitSuccess ? (
                        <p className="text-sm text-green-700">{submitSuccess}</p>
                      ) : null}
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
                      {officeInfo.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                      <iframe
                        src={officeInfo.embedUrl || officeInfo.actionLink}
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
                          {officeInfo.details.map((detail) => (
                            <p key={detail} className="font-medium text-gray-900">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                      {hoursInfo ? (
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group/item">
                          <Clock className="w-5 h-5 text-green-600 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                          <div>
                            <p className="font-medium text-gray-900">
                              {hoursInfo.title}
                            </p>
                            {hoursInfo.details.map((detail) => (
                              <p key={detail} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions Card */}
                {/* <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
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
                </Card> */}
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
