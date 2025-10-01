"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Users,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import RootLayout from "@/components/layout";

const services = [
  {
    icon: Home,
    title: "Property Marketing",
    description:
      "Professional photography, listing optimization, and multi-platform marketing to attract quality tenants quickly.",
  },
  {
    icon: Users,
    title: "Property Services",
    description:
      "Thorough background checks, ownership verification, and legal record validation to ensure secure and trustworthy property transactions.",
  },
  {
    icon: FileText,
    title: "Legal Compliance",
    description:
      "Stay compliant with local laws, lease agreements, eviction procedures, and regulatory requirements.",
  },
];

const benefits = [
  "Reduce vacancy periods through effective marketing",
  "Handle all tenant communications and issues",
  "Maintain detailed financial records and reporting",
  "Ensure legal compliance and risk management",
];

export default function ManagementPage() {
  return (
    <RootLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/mangament/v1.mp4" type="video/mp4" />
          </video>
          <div className="container z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                Property Management
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 ">
                Professional
                <span className="text-green-600 "> Property Management</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 ">
                Maximize your investment returns while we handle everything from
                tenant screening to maintenance. Focus on growing your portfolio
                while we manage the details.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white "
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
                Comprehensive Management Services
              </h2>
              <p className="text-xl text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis mx-auto">
                From marketing to maintenance, we handle every aspect of
                property management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-500 relative overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {service.description}
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

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Enhanced with beautiful styling */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Background decorative element */}
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>

                <div className="pl-8">
                  <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm font-semibold">
                    Premium Services
                  </Badge>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Why Choose Our
                    <span className="text-green-600 block">
                      Management Services?
                    </span>
                  </h2>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="relative">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          {/* Connecting line for last item */}
                          {index !== benefits.length - 1 && (
                            <div className="absolute left-4 top-8 w-0.5 h-8 bg-green-200 group-hover:bg-green-300 transition-colors duration-300"></div>
                          )}
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          {benefit}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Stats Cards - Enhanced with beautiful styling */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardContent className="p-0 relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <Clock className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        24/7
                      </h3>
                      <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                        Emergency Support
                      </p>
                    </CardContent>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Card>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <Card className="text-center p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardContent className="p-0 relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <TrendingUp className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        95%
                      </h3>
                      <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                        Occupancy Rate
                      </p>
                    </CardContent>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Card>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <Card className="text-center p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardContent className="p-0 relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <Users className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        500+
                      </h3>
                      <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                        Properties Managed
                      </p>
                    </CardContent>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Card>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                >
                  <Card className="text-center p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <CardContent className="p-0 relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <Shield className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        100%
                      </h3>
                      <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                        Compliance Rate
                      </p>
                    </CardContent>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
