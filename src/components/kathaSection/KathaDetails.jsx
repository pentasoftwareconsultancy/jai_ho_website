import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getKathaById } from "../../apis/katha"; // Make sure path is correct

const KathaDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [likes, setLikes] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchStory = async () => {
      const data = await getKathaById(id);
      if (!data.error) {
        setStory(data);
        setLikes(data.likes || 0);
      }
    };
    fetchStory();
  }, [id]);

  useEffect(() => {
    if (story?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % story.images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [story?.images]);

  if (!story) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold text-red-600">
        Loading or Story Not Found
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen text-gray-900">
      <div className="relative z-10 flex flex-col items-center py-10 px-6 md:px-20">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={story.images?.[currentImageIndex]?.url || "/default.jpg"}
            alt={story.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-orange-600 text-center">
              {story.title}
            </h1>

            <div className="mt-4 flex flex-col items-start text-gray-600 text-sm space-y-1">
              <p className="text-orange-500 font-semibold">{story.category}</p>
              <p className="text-orange-600 font-bold">{story.uploadedBy}</p>
            </div>

            <h3 className="text-xl font-semibold text-black mt-4">Content</h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-500">
              {story.content}
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-black">
                Moral Lessons
              </h3>
              <ul className="list-disc pl-6 text-gray-500">
                {story.moralLessons?.map((lesson, index) => (
                  <li key={index} className="mt-1">
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>

            {story.symbolicInterpretation && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Symbolic Interpretation
                </h3>
                <p className="text-gray-700">{story.symbolicInterpretation}</p>
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Key Characters
                </h3>
                <p className="text-gray-700">{story.characters?.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  References
                </h3>
                <p className="text-gray-700">{story.references?.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KathaDetails;
