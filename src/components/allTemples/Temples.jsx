import React from "react";
import { useNavigate } from "react-router-dom";
import { templeData } from "./data/templeData";

const Temples = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-orange-600 text-center mb-8">
        All Temples Around the World
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.values(templeData).map((city) => (
          <div
            key={city.id}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => navigate(`/temples/${city.id}`)}
          >
            <img
              src={city.image}
              alt={city.location}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-lg">
              <h3 className="text-white text-lg font-semibold text-center">
                {city.location}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Temples;
