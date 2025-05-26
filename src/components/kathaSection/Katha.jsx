import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getKathas } from "../../apis/katha";

const Katha = () => {
  const navigate = useNavigate();
  const [kathas, setKathas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKathas();
      if (!data.error) {
        setKathas(data); // Assuming API returns an array
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(kathas.length / itemsPerPage);
  const currentItems = kathas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">
        Spiritual Katha
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((katha) => (
          <div
            key={katha.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={katha.images?.[0]?.url || "/default.jpg"}
              alt={katha.title}
              className="w-full h-48 object-fit"
            />

            <div className="p-6">
              <p className="text-gray-500 text-sm">{katha.date}</p>
              <span className="text-orange-600 text-sm font-semibold">
                {katha.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {katha.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {katha.content?.slice(0, 100)}...
              </p>
              <button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                onClick={() => navigate(`/katha-details/${katha._id}`)}

              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Katha;
