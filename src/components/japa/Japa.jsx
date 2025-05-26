// ✅ Japa.jsx – Default Tracker for First Mantra
import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { japaDetailMap } from "./data/japaData";
import { useNavigate } from "react-router-dom";

const Japa = () => {
  const navigate = useNavigate();
  const { mantra, targetCount, currentCount, audioUrl, image, completed, lastChanted } = japaDetailMap[1];
  const [count, setCount] = useState(currentCount);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(audioUrl);

  const incrementCount = () => {
    if (count < targetCount) {
      setCount(count + 1);
    } else {
      navigate("/japa/success");
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-center">
      <h2 className="text-4xl font-bold text-orange-600 mb-4">🧘‍♂️ Japa Tracker</h2>
      <p className="text-2xl text-gray-800 font-semibold mb-4">{mantra}</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
        <img src={image} alt="Japa Mala" className="w-48 h-48 object-cover rounded-xl shadow-lg" />
        <button
          onClick={toggleAudio}
          className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          <PlayCircle className="mr-2" />
          {isPlaying ? "Pause" : "Play"} Mantra
        </button>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-orange-500 h-4 rounded-full transition-all"
          style={{ width: `${(count / targetCount) * 100}%` }}
        ></div>
      </div>
      <p className="text-gray-700 mb-2">
        Count: <span className="font-bold">{count}</span> / {targetCount}
      </p>
      <button
        onClick={incrementCount}
        className="px-6 py-2 mt-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
      >
        Chant 🕉️
      </button>
      <div className="mt-6 text-sm text-gray-500">
        <p>
          Last chanted: {new Date(lastChanted).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
        {completed && <p className="text-green-600 font-medium mt-1">✅ Target Completed</p>}
      </div>
    </div>
  );
};

export default Japa;
