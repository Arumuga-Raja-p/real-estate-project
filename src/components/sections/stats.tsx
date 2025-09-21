"use client"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const stats = [
  { number: 2500, label: "Properties Sold", suffix: "+" },
  { number: 5000, label: "Happy Clients", suffix: "+" },
  { number: 98, label: "Client Satisfaction", suffix: "%" },
  { number: 15, label: "Years Experience", suffix: "+" },
]

function AnimatedNumber({ target, suffix = "", shouldAnimate }: { target: number; suffix?: string; shouldAnimate: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) {
      setCurrent(0)
      return
    }

    const duration = 2000 // 2 seconds for animation
    const steps = 60 // 60 steps for smooth animation
    const increment = target / steps
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      if (step <= steps) {
        setCurrent(Math.min(Math.floor(increment * step), target))
      } else {
        setCurrent(target)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, shouldAnimate])

  return (
    <span>
      {current.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element is fully in view
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (

      <section ref={sectionRef} className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Track Record</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber 
                    target={stat.number} 
                    suffix={stat.suffix} 
                    shouldAnimate={isVisible}
                  />
                </div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}