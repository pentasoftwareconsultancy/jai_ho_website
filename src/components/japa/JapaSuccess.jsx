// ✅ JapaSuccess.jsx – Celebration Page
import React from "react";
import { Link } from "react-router-dom";

const JapaSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">✨ Japa Completed ✨</h1>
        <p className="text-lg text-gray-700 mb-4">
          May your devotion bring you peace, strength, and divine blessings.
        </p>
        <img
          src="https://i.pinimg.com/474x/09/2c/1b/092c1b2fda3b24b49e86183155e056fb.jpg"
          alt="Hanuman Blessing"
          className="w-72 mx-auto rounded-lg shadow-md mb-6"
        />
        <div className="space-x-4">
          <Link
            to="/japa/profile"
            className="px-5 py-2 bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white rounded-lg hover:bg-green-700"
          >
            View Profile 📿
          </Link>
          <Link
            to="/japa"
            className="px-5 py-2 bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white rounded-lg hover:bg-orange-600"
          >
            Chant Again 🕉️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JapaSuccess;
