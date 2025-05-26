// ✅ JapaProfile.jsx – Shows History & Total Japa Count
import React from "react";
import { japaList } from "./data/japaData";

const JapaProfile = () => {
  const totalCompleted = japaList.reduce((acc, japa) => acc + japa.currentCount, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
          📿 My Japa Profile 
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Total Japa Completed: <span className="font-bold text-green-600">{totalCompleted}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {japaList.map((japa) => (
            <div
              key={japa.id}
              className="bg-yellow-50 p-4 rounded-lg shadow border-l-4 border-orange-400"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">{japa.mantra}</h3>
              <p className="text-sm text-gray-600">Category: {japa.category}</p>
              <p className="text-sm text-gray-600">Progress: {japa.currentCount} / {japa.targetCount}</p>
              <p className="text-sm text-gray-600">Last Chanted: {japa.timeLeft}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JapaProfile;