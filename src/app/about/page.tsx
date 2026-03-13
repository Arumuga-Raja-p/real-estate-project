"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Home, TrendingUp, X } from "lucide-react";
import Image from "next/image";
import RootLayout from "@/components/layout";
import { fetchAboutTeamSection, type AboutTeamSectionData, type TeamMember } from "@/lib/about-team";

const achievements = [
  { icon: Home, number: "2,500+", label: "Properties Sold" },
  { icon: Users, number: "5,000+", label: "Happy Clients" },
  { icon: Award, number: "15+", label: "Industry Awards" },
  { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [teamSection, setTeamSection] = useState<AboutTeamSectionData | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchAboutTeamSection().then((data) => {
      if (isMounted) {
        setTeamSection(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <RootLayout>
      <div>
        {/* Hero Section */}
        <section className="relative flex min-h-[100svh] min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/about/v2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/55 sm:bg-white/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 sm:mb-6">
              About GreenHouse
            </Badge>
            <h1 className="mb-5 max-w-4xl text-4xl font-bold leading-none text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Building Dreams,
              <span className="block text-green-600">Creating Homes</span>
            </h1>
            <p className="max-w-4xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
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

        {/* Team Section - Redesigned */}
        {teamSection ? (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {teamSection.badge}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                {teamSection.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {teamSection.description}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {teamSection.members.map((member, index) => (
                <motion.div
                  key={member._key || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image Container with Overlay */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        height={320}
                        width={320}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-green-600 font-semibold text-xs">{teamSection.memberBadge}</span>
                      </div>

                      {/* Bottom Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                          {member.name}
                        </h3>
                        <p className="text-green-300 font-medium text-sm mb-2 drop-shadow-md">
                          {member.role}
                        </p>
                        <p className="text-white/90 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                      <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2">
                        {teamSection.viewProfileLabel}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        ) : null}
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
                {selectedMember.email ? (
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
                ) : null}

                {/* Phone Number */}
                {selectedMember.phone ? (
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1.1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500">Phone</p>
                    <a 
                      href={`tel:${selectedMember.phone}`}
                      className="text-gray-900 hover:text-green-600 transition-colors duration-200 font-medium"
                    >
                      {selectedMember.phone}
                    </a>
                  </div>
                </div>
                ) : null}
              </motion.div>

              {/* Social Media Links */}
              {teamSection && (selectedMember.instagram || selectedMember.facebook || selectedMember.x || selectedMember.linkedin) ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <p className="text-sm text-gray-500 mb-4 text-center lg:text-left">{teamSection.connectLabel}</p>
                <div className="flex justify-center lg:justify-start gap-3">
                  {/* Instagram */}
                  {selectedMember.instagram ? (
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
                  ) : null}

                  {/* Facebook */}
                  {selectedMember.facebook ? (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={selectedMember.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                  ) : null}

                  {/* X (Twitter) */}
                  {selectedMember.x ? (
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
                  ) : null}

                  {/* LinkedIn */}
                  {selectedMember.linkedin ? (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  ) : null}
                </div>
              </motion.div>
              ) : null}

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
                  {teamSection?.ctaLabel || "Schedule a Consultation"}
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
