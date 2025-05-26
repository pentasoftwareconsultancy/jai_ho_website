import React from "react";
import yujaLibraryData from "./data/yujaLibraryData";

const YujaLibrary = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-8">
        📚 My Yuja Library
      </h2>

      {yujaLibraryData.length === 0 ? (
        <p className="text-center text-gray-500">No saved items yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {yujaLibraryData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-orange-200 transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.contentTitle}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{item.contentTitle}</h3>
                <span className="inline-block text-sm px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                  {item.contentType}
                </span>
              </div>

              {/* Favorite Icon */}
              {item.isFavorite && (
                <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow">
                  <span className="text-yellow-400 text-xl">★</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YujaLibrary;
