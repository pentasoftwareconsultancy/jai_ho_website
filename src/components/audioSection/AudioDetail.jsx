import React from "react";
import { useParams } from "react-router-dom";
import { songs } from "./data/audioData";

const AudioDetail = () => {
  const { id } = useParams();

  // Flatten all categories to one array
  const allSongs = Object.values(songs).flat();
  const selectedSong = allSongs.find((song) => song.id === id);

  if (!selectedSong) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Audio not found 🙁
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-black">
      {/* Thumbnail */}
      <div className="w-full h-64 rounded-lg overflow-hidden mb-6 shadow-lg">
        <img
          src={selectedSong.thumbnail}
          alt={selectedSong.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Artist */}
      <h1 className="text-3xl font-bold text-orange-600 mb-2">
        {selectedSong.title}
      </h1>
      <p className="text-gray-600 mb-4">By {selectedSong.artist}</p>

      {/* Audio Player */}
      <audio
        controls
        src={selectedSong.audioUrl}
        className="w-full mb-4 rounded-lg border border-gray-300"
      >
        Your browser does not support the audio element.
      </audio>

      {/* Lyrics (if available) */}
      {selectedSong.lyrics && (
        <div className="bg-orange-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-lg font-semibold mb-2 text-orange-500">Lyrics</h2>
          <p className="whitespace-pre-wrap text-gray-700">{selectedSong.lyrics}</p>
        </div>
      )}

      {/* Extra Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
        <p><strong>Language:</strong> {selectedSong.language}</p>
        <p><strong>Album:</strong> {selectedSong.album}</p>
        <p><strong>Genre:</strong> {selectedSong.genre}</p>
        <p><strong>Views:</strong> {selectedSong.views}</p>
        <p><strong>Likes:</strong> {selectedSong.likes}</p>
      </div>
    </div>
  );
};

export default AudioDetail;
