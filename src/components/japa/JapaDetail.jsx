// ✅ JapaDetail.jsx (Updated with progress saving)
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { japaDetailMap, countOptions } from "./data/japaData";

const JapaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const japa = japaDetailMap[id];

  const [selectedCount, setSelectedCount] = useState(null);
  const [currentCount, setCurrentCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!japa) return <div className="text-red-500 text-center">Japa session not found.</div>;

  const startJapa = () => {
    if (!selectedCount) return;
    setCurrentCount(0);
    setIsStarted(true);
  };

  const increaseCount = () => {
    if (currentCount < selectedCount) {
      setCurrentCount(currentCount + 1);
    } else {
      const prevData = JSON.parse(localStorage.getItem("japaProgress")) || [];
      const newEntry = {
        id: japa.id,
        mantra: japa.mantra,
        completedOn: new Date().toISOString(),
        totalCount: selectedCount,
      };
      localStorage.setItem("japaProgress", JSON.stringify([...prevData, newEntry]));
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-orange-600">🙏 Japa Completed!</h1>
          <p className="text-gray-700 mt-4">
            You've completed chanting <span className="text-orange-600 font-semibold">{japa.mantra}</span> <br />
            <span className="text-green-600 font-semibold">{selectedCount} times</span> with pure devotion. 🌺
          </p>
          <img
            src="https://i.pinimg.com/474x/09/2c/1b/092c1b2fda3b24b49e86183155e056fb.jpg"
            alt="Spiritual"
            className="w-52 h-52 object-contain mx-auto my-6"
          />
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/japa")}
              className="bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white py-2 px-6 rounded-lg hover:bg-orange-700"
            >
              Start Another Japa
            </button>
            <button
              onClick={() => navigate("/japa/japa-profile")}
              className="bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white py-2 px-6 rounded-lg hover:bg-orange-700"
            >
              View My Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex items-center justify-center">
      <div className="max-w-lg bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-orange-600">{japa.mantra}</h1>
        <p className="text-sm text-gray-500 mb-4">Category: {japa.category}</p>
        <img src={japa.image} alt={japa.mantra} className="w-full h-52 object-cover rounded-md mb-4" />

        {!isStarted && (
          <>
            <h3 className="text-lg font-semibold">Select Japa Count</h3>
            <div className="flex justify-center flex-wrap gap-3 mt-2">
              {countOptions.map((count) => (
                <button
                  key={count}
                  onClick={() => setSelectedCount(count)}
                  className={`px-4 py-2 rounded-lg border font-medium transition ${
                    selectedCount === count ? "bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white" : "bg-gray-200 hover:bg-orange-100"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
            {selectedCount && (
              <button
                onClick={startJapa}
                className="w-full mt-4 px-6 py-2 bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Start Japa
              </button>
            )}
          </>
        )}

        {isStarted && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-1">Japa Count</h3>
            <p className="text-lg mb-4">{currentCount} / {selectedCount}</p>
            <button
              onClick={increaseCount}
              className="px-6 py-2 bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white font-semibold rounded-lg hover:bg-green-600"
            >
              Chant 🕉️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JapaDetail;