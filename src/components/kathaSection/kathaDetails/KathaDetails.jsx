import React from "react";
import { useParams } from "react-router-dom";

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
      "https://images.unsplash.com/photo-1505672678657-cc7037095e2c?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1470165473874-937d6016d6b3?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1528103077273-5b81f6b2ec14?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1598287171458-5ef0e1a14c05?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1549813064-3f24c3a96c4b?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1550012041-13528699f87b?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1617727568262-9193fa76e0de?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1531877253341-5b14d8f11802?auto=format&fit=crop&w=600&q=80",
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

const KathaDetails = () => {
  const { id } = useParams();
  const katha = kathaData.find((item) => item.id === parseInt(id));

  if (!katha) {
    return <p className="text-center text-red-500 mt-10">Katha not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={katha.image}
        alt={katha.title}
        className="w-full h-72 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold text-gray-900 mt-6">{katha.title}</h2>
      <p className="text-gray-500 text-sm">
        {katha.date} - {katha.category}
      </p>
      <p className="text-gray-600 mt-4 leading-relaxed">{katha.description}</p>

      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-900">{katha.author}</p>
        <p className="text-sm text-gray-600">{katha.designation}</p>
      </div>
    </div>
  );
};

export default KathaDetails;
