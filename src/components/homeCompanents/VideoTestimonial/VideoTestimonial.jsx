import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];

const VideoTestimonial = ({ autoplay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Testimonial Image */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.img
                key={testimonial.src}
                src={testimonial.src}
                alt={testimonial.name}
                className="absolute inset-0 h-full w-full rounded-xl object-cover shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: active === index ? 1 : 0, scale: active === index ? 1 : 0.95 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Right Side: Testimonial Content */}
        <div className="flex flex-col justify-between h-full">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-800">{testimonials[active].name}</h3>
            <p className="text-sm text-gray-500">{testimonials[active].designation}</p>
            <p className="text-lg text-gray-600 mt-6 italic">"{testimonials[active].quote}"</p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
