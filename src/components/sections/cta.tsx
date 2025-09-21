"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Let our expert team guide you through every step of your real estate journey. From finding the perfect home
            to closing the deal, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Browse Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
