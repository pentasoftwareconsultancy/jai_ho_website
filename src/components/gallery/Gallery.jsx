import React, { useEffect, useState } from "react";
import { getGallery } from "../../apis/gallery";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const data = await getGallery();
      if (!data.error) {
        setGalleries(data);
      }
      setLoading(false);
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-600 mt-10">Loading gallery...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-orange-600 mb-10 text-center">
        Gallery
      </h2>

      {galleries.map((gallery) => (
        <div key={gallery._id} className="mb-12">
          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.imageUrls.map((img, idx) => (
              <div
                key={idx}
                className="w-full aspect-square overflow-hidden rounded-[5px] shadow-md"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
