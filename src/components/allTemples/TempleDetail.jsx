import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { templeData } from "./data/templeData";

const TempleDetails = () => {
  const { cityId, templeId } = useParams();
  const navigate = useNavigate();

  const city = templeData[cityId];
  const temple = city?.temples.find((t) => t.id === templeId);

  if (!temple) return <p className="text-center mt-10 text-red-500">Temple not found!</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">{temple.name}</h2>
      <img src={temple.image} alt={temple.name} className="w-full h-72 object-cover rounded-lg shadow mb-6" />
      <p className="text-lg text-gray-700 mb-4">{temple.description}</p>
      <p className="text-md text-gray-600 mb-4"><strong>Timing:</strong> {temple.timing}</p>
      <div className="flex justify-between">
        <button
          onClick={() => navigate(`/temples/${cityId}`)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ← Back to City
        </button>
        <button
          onClick={() => navigate(`/temples`)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          All Cities
        </button>
      </div>
    </div>
  );
};

export default TempleDetails;
