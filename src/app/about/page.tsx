"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Home, TrendingUp, X } from "lucide-react"
import Image from "next/image"
import RootLayout from "@/components/layout"

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  email: string
  instagram: string
  x: string
}

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
]

const achievements = [
  { icon: Home, number: "2,500+", label: "Properties Sold" },
  { icon: Users, number: "5,000+", label: "Happy Clients" },
  { icon: Award, number: "15+", label: "Industry Awards" },
  { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

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
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">About GreenHouse</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Dreams,<span className="text-green-600"> Creating Homes</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over two decades, Green Home has been the trusted partner for families, investors, and businesses
              seeking exceptional real estate solutions. Our commitment to excellence and personalized service sets us
              apart in the industry.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2003 by Sarah Johnson, GreenEstate began as a small family business with a simple mission:
                    to help people find not just houses, but homes where memories are made and dreams come true.
                  </p>
                  <p>
                    What started as a one-person operation has grown into a full-service real estate company with a team
                    of dedicated professionals. We&apos;ve maintained our core values of integrity, transparency, and
                    personalized service while embracing modern technology and innovative marketing strategies.
                  </p>
                  <p>
                    Today, we&apos;re proud to be one of the most trusted names in real estate, having helped thousands of
                    families and investors achieve their property goals.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/about/1.jpg"
                  alt="Green Home Office"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 transition-shadow duration-300 hover:scale-105 broder-grey-200 overflow-">
                    <CardContent className="p-0">
                      <achievement.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
                      <p className="text-gray-600">{achievement.label}</p>
                    </CardContent>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
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
                >
                  <Card
                    className="overflow-hidden border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="w-full bottom-2 aspect-[4/3] relative flex justify-center items-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        height={300}
                        width={400}
                        className="w-[92%] h-75 rounded-xl object-cover"
                      />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-green-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </CardContent>
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
                <p><strong>Email:</strong> {selectedMember.email}</p>
                <p><strong>Instagram:</strong> <a href={selectedMember.instagram} target="_blank" className="text-blue-500 hover:underline">View</a></p>
                <p><strong>X:</strong> <a href={selectedMember.x} target="_blank" className="text-blue-500 hover:underline">View</a></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </RootLayout>
  )
}
