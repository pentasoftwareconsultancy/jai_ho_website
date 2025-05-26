import React, { useEffect, useState } from "react";

const HomeHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden font-[sans-serif]">
      {/* 🔱 Hero Section */}
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
        {/* 🌄 Background Image */}
        <img
          src="https://i.pinimg.com/736x/9e/4b/51/9e4b513f4c0bc8ff12cc223998820b56.jpg"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
        />

        {/* 🙏 Hanuman Ji Foreground Image */}
        <img
          src="https://i.pinimg.com/736x/cf/34/93/cf34938530be3ebe32977e8bf962f94b.jpg"
          alt="Hanuman Ji"
          className="absolute bottom-0 left-0 w-full h-full object-cover z-10 transition-transform duration-500 ease-out"
          style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
        />

        {/* ☁️ Parallax Layers */}
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png"
          className="absolute top-0 left-0 w-full object-cover z-20"
          alt="Cloud 1"
          style={{ transform: `translateX(${scrollY * 2}px)` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png"
          className="absolute top-0 left-0 w-full object-cover z-20"
          alt="Cloud 2"
          style={{ transform: `translateX(-${scrollY * 2}px)` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png"
          className="absolute bottom-0 left-0 w-full object-cover z-30"
          alt="Left Mountain"
          style={{ transform: `translateX(-${scrollY / 0.7}px)` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png"
          className="absolute bottom-0 left-0 w-full object-cover z-30"
          alt="Right Mountain"
          style={{ transform: `translateX(${scrollY / 0.7}px)` }}
        />

        {/* 🕉️ Jai Ho Text */}
        <h2
          className="relative z-40 text-orange-600 text-6xl md:text-8xl font-extrabold drop-shadow-xl tracking-wider"
          style={{ bottom: `-${scrollY}px` }}
        >
          Jai Ho 
        </h2>
      </section>

      {/* 📖 Welcome Section */}
      <section className="bg-white px-10 py-20 text-center md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
          About Jai Ho
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-4xl mx-auto text-justify text-center">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

      </section>
    </div>
  );
};

export default HomeHero;
