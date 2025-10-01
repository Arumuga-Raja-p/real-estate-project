"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DraftingCompass,
  LayoutTemplate,
  CheckCircle2,
  Layers3,
  Home,
  Banknote,
  Hammer,
  FileBarChart2,
  ClipboardList,
  MapPin,
  Printer,
  Globe2
} from "lucide-react";

const services = [
  {
    icon: DraftingCompass,
    title: "Building Plans",
    heading: "Custom Building Plans",
    description: "Tailored building plans crafted to meet your architectural vision and local regulations.",
    features: ["Site Analysis", "Room Planning", "Code Compliance"]
  },
  {
    icon: LayoutTemplate,
    title: "Layout Plans",
    heading: "Efficient Layout Designs",
    description: "Optimized layout plans for residential or commercial projects to ensure space utilization.",
    features: ["2D Layout", "Zone Planning", "Space Management"]
  },
  {
    icon: CheckCircle2,
    title: "Approval Drawings",
    heading: "Government Approval Drawings",
    description: "Get sanctioned drawings for building permissions with accuracy and compliance.",
    features: ["DTP Drawing", "Authority Standards", "Plan Approval"]
  },
  {
    icon: Layers3,
    title: "Structural Drawing",
    heading: "Detailed Structural Designs",
    description: "Comprehensive structural drawings for safe and reliable construction foundations.",
    features: ["Beam/Column Details", "Foundation Plans", "Load Calculation"]
  },
  {
    icon: Home,
    title: "Home 3D-Elevations",
    heading: "Stunning 3D Elevations",
    description: "Visualize your home with photorealistic 3D elevation renderings before construction.",
    features: ["Exterior Design", "Multiple Views", "Color & Texture Mapping"]
  },
  {
    icon: Banknote,
    title: "Bank Loan Sanctions",
    heading: "Loan Assistance",
    description: "Support for documentation and approval to secure housing or construction loans.",
    features: ["Document Preparation", "Estimate Submission", "Follow-ups"]
  },
  {
    icon: Hammer,
    title: "Building Constructions",
    heading: "Construction Services",
    description: "From foundation to finish, we manage all stages of your building construction.",
    features: ["Masonry", "Electrical Work", "Interior Finish"]
  },
  {
    icon: FileBarChart2,
    title: "Estimating & Cost of Plan",
    heading: "Cost Estimation",
    description: "Accurate budget planning with detailed cost analysis of construction plans.",
    features: ["Material Estimate", "Labor Costing", "Budget Planning"]
  },
  {
    icon: ClipboardList,
    title: "Project Works",
    heading: "Turnkey Project Execution",
    description: "End-to-end project execution covering planning, construction, and compliance.",
    features: ["Site Management", "Project Timeline", "Quality Check"]
  },
  {
    icon: MapPin,
    title: "A Plotting",
    heading: "Plotting & Layout",
    description: "Land plotting services with proper demarcation and planning for residential areas.",
    features: ["Boundary Setup", "Subdivision Layout", "Utility Planning"]
  },
  {
    icon: Printer,
    title: "Ammonia (Blue) Printing",
    heading: "Blueprint Printing",
    description: "Get high-quality ammonia (blue) prints of your technical and construction drawings.",
    features: ["Large Format Prints", "Crisp Lines", "Fast Delivery"]
  },
  {
    icon: Globe2,
    title: "Online Patta Applying",
    heading: "Online Patta Services",
    description: "Apply for patta and land documents online with guided support and document checks.",
    features: ["E-Patta Form", "Land Record Access", "Submission Tracking"]
  }
];


export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                    <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10"> 
                  <p className="text-gray-600 text-[14px] leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}