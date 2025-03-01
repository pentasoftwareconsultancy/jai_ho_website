import React, { useState } from "react";
import videoSrc from "../../../assets/13208429_1080_1920_30fps.mp4"; // Replace with your video path
import MyComponent from "../pagetestimonials/MyComponent/MyComponent";

const testimonials = Array(12).fill({
  video: videoSrc,
  title: "Noteworthy technology acquisitions 2021",
  description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
});

const ITEMS_PER_PAGE = 3; // Number of cards per page

function Videoscard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <MyComponent />
      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn"
          >
            <a href="#">
              <video className="w-full h-60 rounded-t-lg" controls>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-gray-700">{item.title}</h5>
              </a>
              <p className="mb-3 text-gray-700">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn"
          >
            <a href="#">
              <video className="w-full h-60 rounded-t-lg" controls>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-gray-700">{item.title}</h5>
              </a>
              <p className="mb-3 text-gray-700">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn"
          >
            <a href="#">
              <video className="w-full h-60 rounded-t-lg" controls>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-gray-700">{item.title}</h5>
              </a>
              <p className="mb-3 text-gray-700">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn"
          >
            <a href="#">
              <video className="w-full h-60 rounded-t-lg" controls>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-gray-700">{item.title}</h5>
              </a>
              <p className="mb-3 text-gray-700">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white bg-gray-500 rounded-lg transition duration-300 hover:bg-gray-600 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded-lg">{currentPage} / {totalPages}</span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-white bg-gray-500 rounded-lg transition duration-300 hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Videoscard;
