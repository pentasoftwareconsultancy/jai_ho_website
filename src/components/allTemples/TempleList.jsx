import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { templeData } from "./data/templeData";

const ITEMS_PER_PAGE = 6;

const TempleList = () => {
  const { cityId } = useParams();
  const city = templeData[cityId];

  const [currentPage, setCurrentPage] = useState(1);

  if (!city) return <p className="text-center mt-10 text-red-500">City not found!</p>;

  const totalPages = Math.ceil(city.temples.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTemples = city.temples.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Temples in {city.location}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentTemples.map((temple, index) => (
          <div
            key={`${temple.id}-${index}`}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg"
          >
            <div className="md:w-2/5 w-full">
              <img
                src={temple.image}
                alt={temple.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 w-full p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{temple.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{temple.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Timing:</span> {temple.timing}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  to={`/temples/${cityId}/${temple.id}`}
                  className="inline-block px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-br from-[#EFA423] to-[#F04333]"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-8">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-3 py-1 border rounded">
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'border'}`}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-3 py-1 border rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default TempleList;
