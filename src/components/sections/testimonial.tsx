"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchReviews } from "@/lib/review";

interface Testimonial {
  _id: string;
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
  role?: string;
}

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export function Carousel({
  children,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % children.length);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => { 
      const data = await fetchReviews();
      setTestimonials(data);
      setLoading(false);
    }
    loadTestimonials();
  }, []);

  return (
    <section className=" bg-gradient-to-r from-gray-900 to-black py-16">
      <div className="container-custom max-w-5xl mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            What Our Customers Say
          </h2>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-300 mt-8">Loading testimonials...</div>
        ) : testimonials.length > 0 ? (
          <Carousel className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-effect bg-white/5 border border-white/10 p-8 text-center text-white shadow-lg backdrop-blur-md"
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                    &quot;{testimonial.description}&quot;
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
                      <Image
                        src={testimonial.imageUrl}
                        alt={`${testimonial.name} avatar`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400">{testimonial.role ?? "Client"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        ) : (
          <div className="text-center text-gray-400 mt-8">No testimonials available.</div>
        )}
      </div>
    </section>
  );
}
