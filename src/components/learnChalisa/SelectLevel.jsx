import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-lg w-full bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-orange-600 text-center">
          Select Your Learning Level
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Choose a level to start learning Hanuman Chalisa.
        </p>

        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`w-full py-3 mb-3 rounded-lg font-semibold text-lg ${
              selectedLevel === level
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-orange-100"
            }`}
          >
            {level}
          </button>
        ))}

        <button
          onClick={() => navigate(`/learn-hanuman-chalisa/${selectedLevel}`)}
          className="w-full py-3 mt-4 bg-orange-600 text-white font-semibold rounded-lg"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default SelectLevel;
