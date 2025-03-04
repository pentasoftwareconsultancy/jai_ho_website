import React from "react";
import { useNavigate } from "react-router-dom";

const templeLocations = [
  {
    id: 1,
    location: "Pune",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Dagdusheth_Ganpati_Pune.jpg",
  },
  {
    id: 2,
    location: "Mumbai",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Siddhivinayak_Temple%2C_Mumbai.jpg",
  },
  {
    id: 3,
    location: "Bengaluru",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/ISKCON_Bangalore_temple.jpg",
  },
  {
    id: 4,
    location: "Varanasi",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kashi_Vishwanath_Temple.jpg",
  },
  {
    id: 5,
    location: "Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Akshardham_Temple_Delhi.jpg",
  },
  {
    id: 6,
    location: "Rajasthan",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/KhatuShyamji.jpg",
  },
  {
    id: 7,
    location: "Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Meenakshi_Amman_Temple.jpg",
  },
];

const AllTemples = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        All Temples Around the World
      </h2>

      {/* Grid Layout for Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templeLocations.map((location) => (
          <div
            key={location.id}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => navigate(`/temples/${location.id}`)}
          >
            {/* Background Image */}
            <img
              src={location.image}
              alt={location.location}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Location Title on Image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <h3 className="text-white text-lg font-semibold text-center">
                {location.location}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTemples;
