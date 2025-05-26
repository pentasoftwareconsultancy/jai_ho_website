import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  
  

const VideoDetail = () => {
  const { id } = useParams();
  const video = videos.find((vid) => vid.id === parseInt(id));
  const navigate = useNavigate();

  if (!video) { 
    return (
      <h2 className="text-center text-red-500 text-2xl mt-10">
        Video Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side - Video Player */}
        <div className="md:col-span-2">
          <iframe
            width="100%"
            height="450px"
            src={video.videoUrl}
            title={video.title}
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Right Side - Video Details */}
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-900">{video.title}</h2>
          <p className="text-gray-500 text-sm">
            {video.date} • {video.views} Views
          </p>
          <p className="text-gray-700 mt-4">{video.description}</p>
        </div>
      </div>

      {/* Recommended Videos */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Recommended Videos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos
            .filter((vid) => vid.id !== video.id) // Exclude current video
            .map((vid) => (
              <div
                key={vid.id}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                onClick={() => navigate(`/video/${vid.id}`)}
              >
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{vid.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {vid.views} Views • {vid.date}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
