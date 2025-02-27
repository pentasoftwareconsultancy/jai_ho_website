import React from "react";
import { motion } from "framer-motion";
import img from "./hanuman-ji-HD-pic.jpg"

const cards = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    image: img,
  },
  {
    id: 2,
    category: "Productivity",
    title: "Enhance your productivity.",
    image: img,
  },
  {
    id: 3,
    category: "Product",
    title: "Launching Apple Vision Pro.",
    image: img,
  },
];

const AppleCarousel = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden w-full py-10">
      <motion.div
        className="flex space-x-6 overflow-x-auto snap-x snap-mandatory px-10 scrollbar-hide no-scrollbar"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative min-w-[280px] md:min-w-[350px] max-w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
          >
            {/* Use img tag instead of background-image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-opacity-30"></div>
            <div className="absolute top-5 left-5 text-white text-sm font-light">
              {card.category}
            </div>
            <div className="absolute bottom-10 left-5 text-white text-2xl font-bold w-3/4 leading-tight">
              {card.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppleCarousel;
