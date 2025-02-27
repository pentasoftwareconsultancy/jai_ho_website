import React, { useEffect, useState } from "react";
import {
  FaHouse,
  FaMountainSun,
  FaPersonHiking,
  FaPeopleGroup,
  FaGears,
} from "react-icons/fa6";

const HomeHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Parallax Section */}
      <section
        id="top"
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
      >
        <img
          src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk="
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <h2
          id="text"
          className="relative text-white text-6xl md:text-8xl font-bold"
          style={{ bottom: `-${scrollY}px` }}
        >
          Jai Ho
        </h2>
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/man.png"
          className="absolute bottom-0 w-full object-cover"
          style={{ height: `${window.innerHeight - scrollY}px` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png"
          className="absolute w-full object-cover"
          style={{ left: `${scrollY * 2}px` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png"
          className="absolute w-full object-cover"
          style={{ left: `-${scrollY * 2}px` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png"
          className="absolute w-full object-cover"
          style={{ left: `-${scrollY / 0.7}px` }}
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png"
          className="absolute w-full object-cover"
          style={{ left: `${scrollY / 0.7}px` }}
        />
      </section>

      {/* Content Section */}
      <section id="sec" className="px-10 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#20496a] mb-6">
          Welcome to the Jai Ho
        </h2>
        <p className="text-lg md:text-xl text-[#20496a] leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum ipsam
          laboriosam mollitia, architecto esse voluptates eligendi provident
          soluta et cupiditate sit nisi at dolorum iure dignissimos cumque amet
          necessitatibus blanditiis? Earum assumenda soluta reiciendis
          recusandae, incidunt tenetur nihil adipisci corrupti, quibusdam ullam
          numquam iusto veritatis facilis ab dicta, nobis inventore eius magni
          eveniet quo? Repellat nobis quos, facilis quam perspiciatis asperiores
          delectus, aliquid nihil molestias in at modi nulla minima deleniti.
          Minima aliquid magnam libero reiciendis et, nesciunt repellendus eum
          vel rerum alias ea enim fugiat eius. Quae dolores, amet nam ab
          officiis corrupti sequi eligendi quo culpa illum.
        </p>
      </section>
    </div>
  );
};

export default HomeHero;
