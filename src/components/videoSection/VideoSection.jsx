import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const videos = [
    {
      id: 1,
      title: "Hanuman Chalisa Full - With Lyrics",
      description:
        "Listen to the powerful Hanuman Chalisa with full lyrics. Chanting this daily removes obstacles and grants blessings.",
      views: "5.2M",
      date: "March 10, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Sundarkand Path - Complete Recitation",
      description:
        "Complete Sundarkand Path in Hindi with subtitles. A powerful recitation dedicated to Lord Hanuman.",
      views: "2.8M",
      date: "April 5, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Shri Hanuman Ashtak - Full Version",
      description:
        "A beautiful recitation of Shri Hanuman Ashtak - a divine chant for strength, devotion, and courage.",
      views: "1.5M",
      date: "May 12, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Hanuman Bhajan - Jai Jai Hanuman Gosai",
      description:
        "A soulful Hanuman bhajan that brings peace, devotion, and blessings into your life.",
      views: "3.2M",
      date: "June 15, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 5,
      title: "Hanuman Mantra for Protection & Strength",
      description:
        "A powerful Hanuman mantra that helps overcome fear, negativity, and brings divine protection.",
      views: "6.1M",
      date: "July 1, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 6,
      title: "Hanuman Stories - Childhood of Lord Hanuman",
      description:
        "A captivating animated story of Lord Hanuman’s childhood adventures and divine powers.",
      views: "4.5M",
      date: "August 12, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 7,
      title: "Hanuman Jayanti Special Katha",
      description:
        "A special Hanuman Jayanti katha that narrates the divine birth and greatness of Lord Hanuman.",
      views: "3.8M",
      date: "September 5, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 8,
      title: "Hanuman Dandakam - Divine Chanting",
      description:
        "A mesmerizing recitation of Hanuman Dandakam, a powerful stotra dedicated to Lord Hanuman.",
      views: "2.7M",
      date: "October 22, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 9,
      title: "Hanuman Arti - Jai Hanuman Gyan Gun Sagar",
      description:
        "Chant the Hanuman Arti and seek divine blessings for happiness, wisdom, and strength.",
      views: "5.9M",
      date: "November 15, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
    {
      id: 10,
      title: "Bajrang Baan - Most Powerful Hanuman Prayer",
      description:
        "Recite Bajrang Baan, the most powerful Hanuman prayer that removes obstacles and negativity.",
      views: "7.3M",
      date: "December 25, 2024",
      videoUrl: "https://www.youtube.com/embed/srNoYnGhXAg",
      thumbnail: "https://i.ytimg.com/vi/srNoYnGhXAg/hqdefault.jpg",
    },
  ];
  
  

const VideoSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 10;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const navigate = useNavigate();

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return ( 
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Recommended Videos
      </h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-500 text-sm">
                {video.views} • {video.date}
              </p>
              <button
                className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                onClick={() => navigate(`/video/${video.id}`)}
              >
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 bg-gray-200 rounded-lg ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-gray-900 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`px-4 py-2 bg-gray-200 rounded-lg ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
