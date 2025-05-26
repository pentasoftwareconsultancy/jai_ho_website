import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaWalking, FaSnowflake, FaTree, FaTint, FaSun } from "react-icons/fa";

const images = [
  { id: 1, title: "HanumanChalisa", subtitle: "Hanuman Chalisa", icon: <FaWalking />, background: "https://wallpapercave.com/wp/wp2673624.jpg" },
  { id: 2, title: "katha", subtitle: "Spiritual Stories", icon: <FaSnowflake />, background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfk_WSxJJ-JtMqF3aKekIoGFyN9q8trlV_rg&s" },
  { id: 3, title: "Bhajan", subtitle: "Devotional Songs", icon: <FaTree />, background: "https://i.pinimg.com/736x/b5/fe/af/b5feaf388689757b5c71f0903df819ea.jpg" },
  { id: 4, title: "Mantra", subtitle: "Powerful Chants", icon: <FaTint />, background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIKM0LvBNGuu58K80G2xA_T1lJpQOBJCrXvMjUuMjNrFaryYNs2_g01E0mj0XLO29bF8&usqp=CAU" },
  { id: 5, title: "Japa", subtitle: "Meditative Repetition", icon: <FaSun />, background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzah9PpjAa0fg_lOim7imAXot-4ynOAcbooTUdPecuKc983yuoYB7Oc_Qe2aGFO92AYE0&usqp=CAU" },
  { id: 6, title: "LearnHanumanChalisa", subtitle: "Learn with Ease", icon: <FaSun />, background: "https://i.pinimg.com/736x/c0/07/3c/c0073c511714502ff1bf7656deda34ea.jpg" },
  { id: 7, title: "AllTemples", subtitle: "Sacred Places", icon: <FaSun />, background: "https://m.media-amazon.com/images/I/815yCgh+vLL.jpg" },
];

const ImageSlider = () => {
  const [active, setActive] = useState(1); // ✅ First image is active by default
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    setActive(id);
  };

  const handleNavigate = (title) => {
    navigate(`/${title}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
     
      <div className="flex space-x-4 overflow-hidden w-full max-w-5xl px-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
              active === image.id ? "w-[60%]" : "w-[12%]"
            }`}
            onClick={() => handleImageClick(image.id)}
            style={{
              backgroundImage: `url(${image.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: active === image.id ? "500px" : "400px",
            }}
          >
            {/* Background Overlay */}
            <div className={`absolute inset-0  ${active === image.id ? "bg-opacity-50" : "bg-opacity-30"}`}></div>

            {/* Icons and Labels */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-3">
              <div className="flex justify-center items-center w-10 h-10 bg-white text-gray-800 rounded-full">
                {image.icon}
              </div>
              {active === image.id && (
                <div className="text-white">
                  <p className="text-lg font-bold">{image.title}</p>
                  <p className="text-sm">{image.subtitle}</p>
                </div>
              )}
            </div>

            {/* Navigation Button */}
            {active === image.id && (
              <button
                className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate(image.title);
                }}
              >
                <FaArrowRight size={20} />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
