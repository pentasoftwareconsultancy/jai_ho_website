import React, { useState } from "react";
import { Link } from "react-router-dom";
import { songs } from "./data/audioData";
import { PlayCircle, Share2, Eye, Heart, Search } from "lucide-react";

export default function AudioSection() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedSongs, setLikedSongs] = useState({});

  // Flatten songs object into one array
  const allSongs = Object.values(songs).flat();

  const handleLikeToggle = (id) => {
    setLikedSongs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShare = async (song) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: song.title,
          text: `Check out this amazing song: ${song.title} by ${song.artist}`,
          url: `${window.location.origin}/audio/${song.id}`,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  const filteredSongs = allSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.album.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center p-6">
      <div className="w-full flex justify-between items-center max-w-5xl mb-6">
        <h1 className="text-4xl font-bold text-orange-500">Audio Gallery</h1>
        <div className="relative flex items-center">
          {searchOpen && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pl-4 pr-10 rounded-lg border border-gray-300 bg-gray-200 text-black transition-all w-64"
              placeholder="Search song..."
            />
          )}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 ml-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            <Search className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <div
              key={song.id}
              className="relative bg-transparent backdrop-blur-md rounded-2xl overflow-hidden p-5 w-full h-full flex flex-col justify-between shadow-lg"
            >
              <div className="relative w-full h-44">
                <Link to={`/audio/${song.id}`} className="block w-full h-full">
                  <img
                    src={song.thumbnail}
                    alt={song.title}
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                  />
                </Link>
                <Link to={`/audio/${song.id}`}>
                  <button className="absolute bottom-3 right-3 p-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition cursor-pointer">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </button>
                </Link>
              </div>

              <div className="text-left space-y-2 mt-2">
                <Link to={`/audio/${song.id}`}>
                  <h3 className="text-lg font-bold text-black cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap">
                    {song.title}
                  </h3>
                </Link>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
                    {song.artist}
                  </p>
                  <p className="text-sm text-gray-500">
                    Duration: {song.duration || "—"}
                  </p>
                </div>
                <p className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
                  {song.album}
                </p>
                <p className="text-sm text-gray-600 mt-2 text-ellipsis overflow-hidden whitespace-nowrap">
                  {song.lyrics?.split(" ").slice(0, 10).join(" ")}...
                </p>
              </div>

              <div className="flex justify-between mt-2 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Eye className="w-5 h-5 text-gray-300" />
                    <span>{song.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => handleLikeToggle(song.id)}>
                      <Heart
                        className={`w-5 h-5 ${
                          likedSongs[song.id] ? "text-red-600" : "text-gray-300"
                        }`}
                      />
                    </button>
                    <span>
                      {likedSongs[song.id] ? song.likes + 1 : song.likes}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleShare(song)}
                  className="p-2 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition"
                >
                  <Share2 className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-4">No results found.</p>
        )}
      </div>
    </div>
  );
}
