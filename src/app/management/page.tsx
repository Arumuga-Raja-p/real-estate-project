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
  "Maximize rental income with competitive pricing strategies",
  "Reduce vacancy periods through effective marketing",
  "Handle all tenant communications and issues",
  "Maintain detailed financial records and reporting",
  "Coordinate all maintenance and emergency repairs",
  "Ensure legal compliance and risk management",
];

// const pricingPlans = [
//   {
//     name: "Basic Management",
//     price: "8%",
//     description: "Essential property management services",
//     features: [
//       "Tenant screening & placement",
//       "Rent collection & deposits",
//       "Basic maintenance coordination",
//       "Monthly financial reports",
//       "Online owner portal access",
//     ],
//   },
//   {
//     name: "Full Service",
//     price: "10%",
//     description: "Comprehensive property management",
//     features: [
//       "Everything in Basic plan",
//       "Professional photography",
//       "24/7 emergency maintenance",
//       "Regular property inspections",
//       "Legal compliance management",
//       "Detailed financial analytics",
//     ],
//     popular: true,
//   },
//   {
//     name: "Premium Plus",
//     price: "12%",
//     description: "White-glove property management",
//     features: [
//       "Everything in Full Service",
//       "Property improvement consulting",
//       "Market analysis & optimization",
//       "Concierge tenant services",
//       "Investment advisory services",
//       "Dedicated account manager",
//     ],
//   },
// ]

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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white ">
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
                >
                  <Card className="card-hover-effect">
                    <CardHeader>
                      <service.icon className="w-12 h-12 text-green-600 mb-4" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Management Services?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <Card className="card-hover-effect text-center p-6">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                  <p className="text-gray-600">Emergency Support</p>
                </Card>
                <Card className="card-hover-effect text-center p-6">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                  <p className="text-gray-600">Occupancy Rate</p>
                </Card>
                <Card className="card-hover-effect text-center p-6">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-gray-600">Properties Managed</p>
                </Card>
                <Card className="card-hover-effect text-center p-6">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                  <p className="text-gray-600">Compliance Rate</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the management plan that best fits your investment goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative ${plan.popular ? "border-green-500 border-2" : ""}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-green-600 my-4">
                      {plan.price}
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-gray-800"}`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      </div>
    </RootLayout>
  );
}
