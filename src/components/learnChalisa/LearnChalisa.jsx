import React, { useState } from "react";
import { useParams } from "react-router-dom";
import learnChalisaData from "./data/learnChalisaData";

const LearnChalisa = () => {
  const { level } = useParams();
  const [completedLessons, setCompletedLessons] = useState([]);
  const levelInfo = learnChalisaData[level] || learnChalisaData["Beginner"];

  const progress = (completedLessons.length / levelInfo.totalLessons) * 100;

  const handleCompleteLesson = () => {
    if (completedLessons.length < levelInfo.totalLessons) {
      setCompletedLessons([...completedLessons, completedLessons.length + 1]);
    }
  };

  // 🎉 Updated Spiritual Completion UI
  if (completedLessons.length >= levelInfo.totalLessons) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-2xl w-full text-center relative overflow-hidden border-2 border-orange-300">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

          <img
            src="https://i.pinimg.com/474x/09/2c/1b/092c1b2fda3b24b49e86183155e056fb.jpg"
            alt="Hanuman Ji"
            className="w-24 h-24 mx-auto rounded-full shadow-md object-cover border-4 border-orange-500"
          />

          <h1 className="text-4xl font-bold text-orange-700 mt-6 font-serif">
            🎉 जय श्री हनुमान जी 🎉
          </h1>
          <p className="text-xl text-gray-800 mt-2 font-semibold">
            You've completed Hanuman Chalisa ({level} level)
          </p>

          <p className="text-md mt-4 text-orange-600 italic font-medium">
            "संकट से हनुमान छुड़ावै, मन क्रम बचन ध्यान जो लावै"
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto my-6 rounded-full"></div>

          {/* <img
            src=""
            alt="Celebration"
            className="w-40 mx-auto rounded-lg"
          /> */}

          <button
            onClick={() => (window.location.href = "/learn-hanuman-chalisa")}
            className="mt-6 px-6 py-3 text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition font-semibold shadow-lg"
          >
            🔁 Learn Again / Choose Another Level
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl w-full bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-orange-600">
          Learn Hanuman Chalisa - {level}
        </h1>
        <p className="text-center text-gray-600 mt-2">Progress: {progress.toFixed(1)}%</p>

        <div className="mt-4 h-4 w-full bg-gray-200 rounded-lg">
          <div
            className="bg-orange-500 h-4 rounded-lg transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">Lessons Completed</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {completedLessons.length ? (
              completedLessons.map((lesson) => (
                <span
                  key={lesson}
                  className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  Lesson {lesson}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-500">No lessons completed yet.</p>
            )}
          </div>
        </div>

        {levelInfo.audioGuideUrl && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Audio Guide</h3>
            <audio controls className="w-full mt-2">
              <source src={levelInfo.audioGuideUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <button
          onClick={handleCompleteLesson}
          className="w-full mt-6 py-3 text-white bg-orange-600 hover:bg-orange-700 font-semibold rounded-lg"
        >
          Complete Next Lesson
        </button>
      </div>
    </div>
  );
};

export default LearnChalisa;
