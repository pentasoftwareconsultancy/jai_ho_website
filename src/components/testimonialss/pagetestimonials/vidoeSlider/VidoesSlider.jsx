import React, { useState } from "react";
import styles from "./vidoesSlider.module.css";
import VideoModal from "./VidoesModal";

const testimonials = [
  {
    id: 1,
    name: "Mrs. Jain, Adi's mom, Grade 8, USA",
    image: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?crop=entropy&cs=tinysrgb&fm=jpg&q=80",
    flag: "https://images.unsplash.com/photo-1590012317933-2ca161078bae?crop=entropy&cs=tinysrgb&fm=jpg&q=10",
    videoUrl: "https://www.youtube.com/embed/XJj2PbenIsU?rel=0&autoplay=1",
    review: "The course helped Aadi get accepted into the IT club of his school...",
  },
  {
    id: 2,
    name: "Mr. Smith, Parent, Canada",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fm=jpg&q=80",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1",
    review: "My child gained confidence and improved in math and science!",
  },
  {
    id: 3,
    name: "Mrs. Jay, Adam's mom, Grade 6, USA",
    image: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?crop=entropy&cs=tinysrgb&fm=jpg&q=80",
    flag: "https://images.unsplash.com/photo-1590012317933-2ca161078bae?crop=entropy&cs=tinysrgb&fm=jpg&q=10",
    videoUrl: "https://www.youtube.com/embed/XJj2PbenIsU?rel=0&autoplay=1",
    review: "The course helped Adam get accepted into the IT club of his school...",
  },
];
const testimonial = [
  {
    id: 1,
    name: "Mrs. Jain, Adi's mom, Grade 8, USA",
    image: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?crop=entropy&cs=tinysrgb&fm=jpg&q=80",
    flag: "https://images.unsplash.com/photo-1590012317933-2ca161078bae?crop=entropy&cs=tinysrgb&fm=jpg&q=10",
    videoUrl: "https://www.youtube.com/embed/XJj2PbenIsU?rel=0&autoplay=1",
    review: "The course helped Aadi get accepted into the IT club of his school...",
  },
  {
    id: 2,
    name: "Mr. Smith, Parent, Canada",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fm=jpg&q=80",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1",
    review: "My child gained confidence and improved in math and science!",
  },
  {
    id: 3,
    name: "Mrs. Jay, Adam's mom, Grade 6, USA",
    image: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?crop=entropy&cs=tinysrgb&fm=jpg&q=80",
    flag: "https://images.unsplash.com/photo-1590012317933-2ca161078bae?crop=entropy&cs=tinysrgb&fm=jpg&q=10",
    videoUrl: "https://www.youtube.com/embed/XJj2PbenIsU?rel=0&autoplay=1",
    review: "The course helped Adam get accepted into the IT club of his school...",
  },
];

const VideoSlider = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  return (<>
  <div className={styles.box}>
   <h1>see all</h1>
        </div>
        <a href="/Testimonalvideo">
    <div className={styles.container}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className={styles.card}>
          <div className={styles.imgContainer} style={{ backgroundImage: `url(${testimonial.image})` }}>
            <div className={styles.flag}>
              <img src={testimonial.flag} alt="Flag" />
            </div>
            <div className={styles.review}>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
            </div>
            <div className={styles.overlay}>
              <button className={styles.videoButton} onClick={() => openModal(testimonial.videoUrl)}>▶</button>
            </div>
          </div>
          <p className={styles.testimonialText}>{testimonial.review}</p>
          <div className={styles.name}>{testimonial.name}</div>
        </div>
      ))}
      {showModal && <VideoModal videoUrl={videoUrl} onClose={() => setShowModal(false)} />}
    </div> </a>


<div className={styles.container}>
{testimonials.map((testimonial) => (
  <div key={testimonial.id} className={styles.card}>
    <div className={styles.imgContainer} style={{ backgroundImage: `url(${testimonial.image})` }}>
      <div className={styles.flag}>
        <img src={testimonial.flag} alt="Flag" />
      </div>
      <div className={styles.review}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
      </div>
      <div className={styles.overlay}>
        <button className={styles.videoButton} onClick={() => openModal(testimonial.videoUrl)}>▶</button>
      </div>
    </div>
    <p className={styles.testimonialText}>{testimonial.review}</p>
    <div className={styles.name}>{testimonial.name}</div>
  </div>
))}
{showModal && <VideoModal videoUrl={videoUrl} onClose={() => setShowModal(false)} />}
  </div>
  </>
  );
};

export default VideoSlider;
