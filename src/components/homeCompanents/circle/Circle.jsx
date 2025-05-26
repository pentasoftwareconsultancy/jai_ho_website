import React, { useState } from "react";
import { templeData } from '../../allTemples/data/templeData';

import image1 from "../../../assets/images/hanuman.jpg";
import image2 from "../../../assets/images/hanuman2.jpg";
import image3 from "../../../assets/images/hanuman3.jpg";
import image4 from "../../../assets/images/hanuman2.jpg";
import image5 from "../../../assets/images/hanuman2.jpg";
import image6 from "../../../assets/images/hanuman2.jpg";
import image7 from "../../../assets/images/hanuman2.jpg";

const Circle = () => {
  const [focusElement, setFocusElement] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  const handleImageClick = (index) => {
    setFocusElement(index);
  };

  const temple = templeData[focusElement];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-10 bg-gradient-to-br from-orange-100 via-white to-orange-50">
      {/* Circular Carousel Section */}
      <div className="relative w-[420px] h-[420px] rounded-full border-4 border-orange-300 bg-white shadow-inner flex items-center justify-center">
        <div className="absolute w-full h-full top-0 left-0">
          {images.map((image, index) => {
            const angle = (index - focusElement) * (360 / images.length);
            const radius = 160;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isFocused = index === focusElement;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                  isFocused
                    ? "scale-125 z-20 ring-4 ring-orange-500 shadow-lg rounded-full"
                    : "scale-95 opacity-70"
                } hover:scale-110`}
                style={{
                  left: `${210 + x}px`,
                  top: `${210 + y}px`,
                }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-full border-2 border-white"
                />
              </div>
            );
          })}
        </div>

        {/* Glowing center */}
        <div className="absolute w-8 h-8 bg-orange-500 rounded-full blur-sm animate-pulse"></div>
      </div>

      {/* Info Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-2xl border border-orange-300 transform transition duration-300 hover:shadow-orange-200">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 tracking-wide">
          📍 Information
        </h2>

        {temple ? (
          <div className="text-gray-700 space-y-2">
            <h3 className="text-xl font-semibold text-orange-600">{temple.heading}</h3>
            <p className="text-sm">{temple.description}</p>
            <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
              {temple.bullets?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No temple data found.</p>
        )}
      </div>
    </div>
  );
};

export default Circle;
