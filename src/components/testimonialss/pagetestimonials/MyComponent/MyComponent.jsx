import React from "react";
import styles from "./MyComponent.module.css"; // Import CSS module

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}><a href="/Testimonial">All</a></h1>
      <p className={styles.text}><a href="/Testimonaltext">Text</a> </p>
      <p className={styles.crad}><a href="/Testimonalvideo">video</a> </p>
    </div>
  );
};

export default MyComponent;
