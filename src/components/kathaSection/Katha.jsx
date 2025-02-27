import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const kathaData = [
  {
    id: 1,
    date: "Mar 16, 2020",
    category: "Spiritual",
    title: "The Power of Hanuman Katha",
    description:
      "Discover the divine power and lessons from the Hanuman Katha. A journey through the spiritual essence of devotion and strength.",
    author: "Swami Ananda",
    designation: "Spiritual Guru",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    date: "Mar 10, 2020",
    category: "Mythology",
    title: "Ramayan Katha - A Timeless Epic",
    description:
      "Exploring the greatness of Lord Ram through the timeless saga of Ramayan. The teachings and morals for today’s world.",
    author: "Acharya Vinay",
    designation: "Vedic Scholar",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    date: "Apr 5, 2021",
    category: "Devotion",
    title: "Bhagavad Gita Teachings",
    description:
      "The Bhagavad Gita, a divine discourse by Lord Krishna, offers deep insights into life, duty, and devotion.",
    author: "Rishi Kumar",
    designation: "Hindu Scholar",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    date: "May 22, 2021",
    category: "Spiritual Growth",
    title: "Navratri Katha - The Nine Nights of Divine Energy",
    description:
      "Explore the spiritual significance of Navratri and how these nine nights bring divine energy into our lives.",
    author: "Mata Rukmini",
    designation: "Spiritual Teacher",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    date: "Jun 15, 2022",
    category: "Mythology",
    title: "Shiv Mahapuran Katha",
    description:
      "A divine journey into the stories and teachings from Shiv Mahapuran, an ancient scripture dedicated to Lord Shiva.",
    author: "Guru Mahesh",
    designation: "Spiritual Guru",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    date: "Jul 30, 2022",
    category: "Folk Tales",
    title: "Krishna Leela - The Divine Play of Lord Krishna",
    description:
      "The enchanting stories of Krishna's divine play and the lessons of love, wisdom, and devotion.",
    author: "Acharya Shankar",
    designation: "Bhakti Expert",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    date: "Aug 25, 2022",
    category: "Ancient Wisdom",
    title: "Mahabharata - Lessons from the Greatest Epic",
    description:
      "Dive into the vast wisdom of Mahabharata, covering topics of duty, righteousness, and dharma.",
    author: "Pandit Surya",
    designation: "Vedic Teacher",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    date: "Sep 14, 2022",
    category: "Devotion",
    title: "Sundarkand Katha - The Story of Lord Hanuman",
    description:
      "A detailed exploration of Sundarkand, the chapter in Ramayana dedicated to Hanuman's devotion and power.",
    author: "Swami Prakash",
    designation: "Religious Preacher",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    date: "Oct 5, 2022",
    category: "Mystical Stories",
    title: "Goddess Durga Katha",
    description:
      "Learn about the significance of Goddess Durga and her role in defeating evil forces across different yugas.",
    author: "Mata Sadhvi",
    designation: "Divine Speaker",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    date: "Nov 12, 2022",
    category: "Devotional Stories",
    title: "Sai Baba Katha",
    description:
      "The divine stories and miracles of Sai Baba that continue to inspire millions worldwide.",
    author: "Pandit Rao",
    designation: "Spiritual Leader",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    date: "Dec 25, 2022",
    category: "Spiritual Insights",
    title: "The Teachings of Sant Kabir",
    description:
      "Understanding the wisdom of Sant Kabir through his dohas and philosophy on spirituality and life.",
    author: "Guru Ramanand",
    designation: "Philosophy Teacher",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    date: "Jan 5, 2023",
    category: "Philosophy",
    title: "Upanishads - The Secret Teachings",
    description:
      "A journey through the Upanishads and their philosophical teachings on the self and universe.",
    author: "Dr. Vedanta",
    designation: "Philosopher & Scholar",
    image:
      "https://images.unsplash.com/photo-1523540939399-141cbff6a8d9?auto=format&fit=crop&w=600&q=80",
  },
];

const KathaSection = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(kathaData.length / itemsPerPage);
  const currentItems = kathaData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Spiritual Katha & Teachings
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((katha) => (
          <div
            key={katha.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={katha.image}
              alt={katha.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm">{katha.date}</p>
              <span className="text-blue-600 text-sm font-semibold">
                {katha.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {katha.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {katha.description.slice(0, 100)}...
              </p>
              <button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                onClick={() => navigate(`/katha-details/${katha.id}`)} // ✅ Navigate to details page
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KathaSection;
