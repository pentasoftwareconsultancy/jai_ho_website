// ✅ JapaList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { japaList } from "./data/japaData";

const JapaList = () => {
  const [likedJapas, setLikedJapas] = useState({});
  const [savedJapas, setSavedJapas] = useState({});

  const toggleLike = (id) => {
    setLikedJapas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSavedJapas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-400 text-center mb-6">
          Japa List
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {japaList.map((japa) => (
            <div
              key={japa.id}
              className={`relative shadow-xl rounded-2xl p-6 text-black`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">{japa.duration}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleLike(japa.id)}
                    className={`p-2 rounded-full transition ${
                      likedJapas[japa.id]
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    <FaHeart  className="text-red-600" size={16} />
                  </button>
                  <button
                    onClick={() => toggleSave(japa.id)}
                    className={`p-2 rounded-full transition ${
                      savedJapas[japa.id]
                        ? "bg-gray-600 text-white"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    <FaBookmark className="text-gray-400" size={16} />
                  </button>
                </div>
              </div>

              <h2 className="text-xl font-semibold">{japa.mantra}</h2>
              <p className="text-sm text-gray-400">{japa.category}</p>

              <div className="mt-4">
                <span className="text-sm font-semibold">Progress</span>
                <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
                  <div
                    className="h-2 rounded-full bg-gradient-to-br from-[#EFA423] to-[#F04333]"
                    style={{ width: `${japa.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm">{japa.progress}%</span>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Link
                  to={`/japa/${japa.id}`}
                  className="px-4 py-2 bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  Start
                </Link>
                <span className="px-3 py-1 bg-gray-700 text-white rounded-md text-sm">
                  {japa.timeLeft}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JapaList;
