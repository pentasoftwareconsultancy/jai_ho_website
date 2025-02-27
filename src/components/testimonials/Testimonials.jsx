import React from "react";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "Absolutely incredible service! The team went above and beyond our expectations. Would highly recommend to anyone looking for top-notch quality.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "The attention to detail and technical expertise demonstrated throughout the project was impressive. A pleasure to work with!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Product Manager",
    content:
      "Game-changing results for our business. The innovative solutions provided helped us reach our goals faster than expected.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "James Rodriguez",
    role: "Creative Director",
    content:
      "Outstanding creativity and professionalism. They truly understand how to deliver exceptional results while maintaining clear communication.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "CEO",
    content:
      "A transformative partnership that has significantly impacted our business growth. Their strategic approach is unmatched.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Park",
    role: "UX Designer",
    content:
      "Their attention to user experience and design details made all the difference. The final product exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  const createTestimonialCard = (testimonial) => {
    return (
      <div className={styles.card} key={testimonial.name}>
        <div className={styles.profile}>
          <img src={testimonial.image} alt={testimonial.name} />
          <div>
            <div className={styles.name}>{testimonial.name}</div>
            <div className={styles.role}>{testimonial.role}</div>
          </div>
        </div>
        <div className={styles.content}>{testimonial.content}</div>
      </div>
    );
  };

  const populateColumn = (columnId) => {
    const shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);
    return shuffledTestimonials.map((testimonial) =>
      createTestimonialCard(testimonial)
    );
  };

  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.testimonials}>{populateColumn("column1")}</div>
        </div>
        <div className={styles.column}>
          <div className={styles.testimonials}>{populateColumn("column2")}</div>
        </div>
        <div className={styles.column}>
          <div className={styles.testimonials}>{populateColumn("column3")}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;