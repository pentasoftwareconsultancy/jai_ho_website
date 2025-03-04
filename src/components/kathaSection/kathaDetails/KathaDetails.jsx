import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const kathaData = [
  {
    id: 1,
    date: "Mar 16, 2020",
    category: "Spiritual",
    title: "The Power of Hanuman Katha",
    description:
      "Discover the divine power and lessons from the Hanuman Katha. A journey through the spiritual essence of devotion and strength. The tales of Hanuman Ji inspire us with devotion, power, and unwavering faith.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
    author: "Swami Ananda",
    designation: "Spiritual Guru",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    date: "Mar 10, 2020",
    category: "Mythology",
    title: "Ramayan Katha - A Timeless Epic",
    description:
      "Exploring the greatness of Lord Ram through the timeless saga of Ramayan. The teachings and morals for today’s world guide us in righteousness...",
    author: "Acharya Vinay",
    designation: "Vedic Scholar",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
];

const KathaDetails = () => {
  const { id } = useParams();
  const katha = kathaData.find((item) => item.id === parseInt(id));
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id]);

  if (!katha) {
    return <p className="text-center text-red-500 mt-10">Katha not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 flex justify-center items-center p-6">
      <div
        ref={scrollRef}
        className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden"
      >
        {/* Katha Image */}
        <img
          src={katha.image}
          alt={katha.title}
          className="w-full h-60 object-cover"
        />

        {/* Katha Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{katha.title}</h2>
          <p className="text-gray-500 text-sm mt-1">
            {katha.date} - {katha.category}
          </p>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            {katha.description}
          </p>

          {/* Author Info */}
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-500 text-white flex justify-center items-center rounded-full text-sm font-semibold">
              {katha.author[0]}
            </div>
            <div>
              <p className="text-lg font-semibold">{katha.author}</p>
              <p className="text-sm text-gray-500">{katha.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KathaDetails;
