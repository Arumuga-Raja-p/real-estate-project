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
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg relative w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{selectedMember.name}</h3>
              <p className="text-green-600">{selectedMember.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{selectedMember.bio}</p>
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Email:</strong> {selectedMember.email}
                </p>
                <p>
                  <strong>Instagram:</strong>{" "}
                  <a
                    href={selectedMember.instagram}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </p>
                <p>
                  <strong>X:</strong>{" "}
                  <a
                    href={selectedMember.x}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </RootLayout>
  );
}
