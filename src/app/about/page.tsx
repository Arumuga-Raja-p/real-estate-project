"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Home, TrendingUp, X } from "lucide-react";
import Image from "next/image";
import RootLayout from "@/components/layout";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  instagram: string;
  x: string;
  phone?: string; // Add this
  facebook?: string; // Add this
  linkedin?: string; // Add this
};

const teamMembers: TeamMember[] = [
  {
    name: "Ramesh",
    role: "CEO & Founder",
    image: "/about/2.png",
    bio: "20+ years in real estate with a passion for helping families find their perfect home.",
    email: "ramesh@greenhomeproperty.com",
    instagram: "https://instagram.com/ramesh",
    x: "https://x.com/ramesh",
  },
  {
    name: "Varadhan",
    role: "Head of Sales",
    image: "/about/2.png",
    bio: "Expert negotiator with over 500 successful property transactions.",
    email: "varadan@greenhomeproperty.com",
    instagram: "https://instagram.com/varadan",
    x: "https://x.com/varadan",
  },
  {
    name: "Navas",
    role: "Property Manager",
    image: "/about/2.png",
    bio: "Specializes in luxury properties and investment opportunities.",
    email: "navas@greenhomeproperty.com",
    instagram: "https://instagram.com/navas",
    x: "https://x.com/navas",
  },
  {
    name: "Arumuga Raja",
    role: "Market Analyst",
    image: "/about/2.png",
    bio: "Data-driven insights to help clients make informed decisions.",
    email: "araja@greenhomeproperty.com",
    instagram: "https://instagram.com/araja",
    x: "https://x.com/araja",
  },
];

const achievements = [
  { icon: Home, number: "2,500+", label: "Properties Sold" },
  { icon: Users, number: "5,000+", label: "Happy Clients" },
  { icon: Award, number: "15+", label: "Industry Awards" },
  { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <RootLayout>
      <div className="pt-20 ">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/about/v2.mp4" type="video/mp4" />
          </video>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center max-w-4xl mx-auto z-10 px-4"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              About GreenHouse
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Dreams,
              <span className="text-green-600"> Creating Homes</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over two decades, Green Home has been the trusted partner for
              families, investors, and businesses seeking exceptional real
              estate solutions. Our commitment to excellence and personalized
              service sets us apart in the industry.
            </p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Floating Decorations */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-2 w-6 h-6 opacity-20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-500 w-full h-full"
                  >
                    <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
                  </svg>
                </motion.div>

                <div className="pl-8">
                  {/* Section Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm font-semibold">
                      Our Journey
                    </Badge>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Building Dreams,
                    <span className="text-green-600 block">
                      Creating Legacies
                    </span>
                  </motion.h2>

                  {/* Story Content */}
                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      Since 2003, Green Home has been more than just a real
                      estate company— we&apos;ve been a trusted partner helping
                      families, investors, and businesses turn their dreams into
                      reality.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      What began as a small operation has blossomed into a
                      full-service real estate brand, grounded in{" "}
                      <span className="text-green-600 font-semibold">
                        integrity
                      </span>
                      ,{" "}
                      <span className="text-green-600 font-semibold">
                        transparency
                      </span>
                      , and{" "}
                      <span className="text-green-600 font-semibold">
                        personalized service
                      </span>
                      . Today, our team continues to guide clients with passion
                      and expertise.
                    </motion.p>

                    {/* Key Milestones */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-3 gap-4 pt-6"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          20+
                        </div>
                        <div className="text-sm text-gray-600">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          5K+
                        </div>
                        <div className="text-sm text-gray-600">
                          Happy Clients
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          2.5K+
                        </div>
                        <div className="text-sm text-gray-600">
                          Properties Sold
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Image Slides Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/about/1.jpg"
                    alt="Green Home Office"
                    width={600}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine Effect - Fixed to not cause overflow */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>
                </div>

                {/* Floating Decorative Elements - Fixed positioning */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-200 rounded-full blur-xl opacity-20"
                />

                {/* Image Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  <span className="text-sm font-medium">01 / 04</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex-shrink-0"
                />
                <p className="text-lg md:text-xl text-gray-700 italic font-light">
                  Our mission is simple: to make every real estate journey
                  memorable, transparent, and successful.
                </p>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements */}
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
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Milestones that reflect our dedication and success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="text-center p-6 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-500 hover:-translate-y-2 bg-white relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardContent className="p-0 relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <achievement.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {achievement.number}
                      </h3>
                      <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                        {achievement.label}
                      </p>
                    </CardContent>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your real estate success
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="cursor-pointer group"
                >
                  <Card
                    className="overflow-hidden border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:border-green-500 transition-all duration-500 relative bg-white"
                    onClick={() => setSelectedMember(member)}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 z-0" />

                    <div className="w-full bottom-2 aspect-[4/3] relative flex justify-center items-center">
                      <div className="relative w-[92%] h-full rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          height={300}
                          width={400}
                          className="w-full h-full rounded-xl object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </div>
                    </div>

                    <CardContent className="p-6 relative z-10">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-green-600 font-medium mb-3 group-hover:text-green-700 transition-colors duration-300">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                        {member.bio}
                      </p>
                    </CardContent>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {/* Enhanced Professional Modal - Side by Side Layout */}
{selectedMember && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedMember(null)}
  >
    {/* Backdrop with blur */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-black/60 backdrop-blur-md"
    />
    
    {/* Main Modal */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 20 }}
      transition={{ 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5
      }}
      className="relative w-full max-w-4xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header Gradient Bar */}
      <div className="h-2 bg-gradient-to-r from-green-500 via-green-600 to-emerald-500" />
      
      <div className="relative">
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-red-100 flex items-center justify-center transition-colors duration-200 group z-10 shadow-lg"
          onClick={() => setSelectedMember(null)}
        >
          <X className="w-4 h-4 text-gray-500 group-hover:text-red-500 transition-colors duration-200" />
        </motion.button>

        <div className="flex flex-col lg:flex-row min-h-[500px]">
          {/* Left Side - Full Size Photo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative lg:w-2/5 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden"
          >
            <div className="relative w-full h-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300" />
              </div>
              
              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative w-64 h-64 lg:w-80 lg:h-80"
                >
                  {/* Background Glow Effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl"
                  />
                  
                  {/* Image Container */}
                  <div className="relative rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-3 border-white rounded-full shadow-lg"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full bg-green-400"
                    />
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity }
                    }}
                    className="absolute -top-2 -left-2 w-8 h-8 text-green-300 opacity-60"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-100/50 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - All Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 p-8 lg:p-10 flex flex-col justify-center"
          >
            <div className="max-w-md mx-auto lg:mx-0 w-full">
              {/* Name and Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center lg:text-left mb-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {selectedMember.name}
                </h2>
                <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  {selectedMember.role}
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-gray-600 leading-relaxed text-lg text-center lg:text-left">
                  {selectedMember.bio}
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 mb-8"
              >
                {/* Email */}
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href={`mailto:${selectedMember.email}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium truncate block"
                    >
                      {selectedMember.email}
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1.1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500">Phone</p>
                    <a 
                      href="tel:+1234567890"
                      className="text-gray-900 hover:text-green-600 transition-colors duration-200 font-medium"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <p className="text-sm text-gray-500 mb-4 text-center lg:text-left">Connect with me</p>
                <div className="flex justify-center lg:justify-start gap-3">
                  {/* Instagram */}
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>

                  {/* X (Twitter) */}
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={selectedMember.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Schedule a Consultation
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
    </RootLayout>
  );
}
