import React from "react";

import  { useState } from "react";
import styles from "./circle.module.css"; 
import Info1 from "./Info1";
import image1 from "../../assets/images/hanuman.jpg";
import image2 from "../../assets/images/hanuman2.jpg";
import image3 from "../../assets/images/hanuman3.jpg";
import image4 from "../../assets/images/hanuman2.jpg";
import image5 from "../../assets/images/hanuman2.jpg";
import image6 from "../../assets/images/hanuman2.jpg";
import image7 from "../../assets/images/hanuman2.jpg";

const Circle = () => {
  const [focusElement, setFocusElement] = useState(0); // Focused image state

  const images = [image1, image2, image3, image4, image5, image6, image7];

  const info = [
    <Info1 />, // Info for the first image
    <div>Mumbai</div>, // Info for the second image
    <div>Bengaluru</div>, // Info for the third image
    <div>Kolkata</div>, // Info for the fourth image
    <div>Gujarat</div>, // Info for the fifth image
    <div>Vadodara</div>, // Info for the sixth image
    <div>Anand</div>, // Info for the seventh image
  ];

  // Handle click event on carousel images
  const handleImageClick = (index) => {
    setFocusElement(index); // Update the focusElement state to center the clicked image
  };

  return (
    <div className={styles.container9}>
      <div className={styles.carouselContainer}>
        {/* Carousel Section (Circular Layout) */}
        <div className={styles.main1}>
          {/* Render images in circular style */}
          <div className={styles.circularCarousel}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.carouselImage} ${index === focusElement ? styles.focused : ""}`}
                style={{
                  transform: `rotate(${(index - focusElement) * (360 / images.length)}deg) translateX(200px) rotate(${
                    (focusElement - index) * (360 / images.length)
                  }deg)`,
                  transition: "transform 0.5s ease-in-out",
                }}
                onClick={() => handleImageClick(index)}
              >
                <img src={image} alt={`Image ${index + 1}`} className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Box on the Right */}
      <div className={styles.infoBoxContainer}>
        <div className={styles.descriptionBox}>
          <div className={styles.infoBoxWrapper}>
            {/* Display the info of the clicked image */}
            <div>{info[focusElement]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;