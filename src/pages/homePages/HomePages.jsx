import React from "react";
import ImageSlider from "../../components/homeCompanents/imageSlider/ImageSlider";
import HomeHero from "../../components/homeCompanents/hero/Hero";
import VideoTestimonial from "../../components/homeCompanents/VideoTestimonial/VideoTestimonial";

function HomePages() {
  return (
    <div>
      <HomeHero />
      <ImageSlider />
      <VideoTestimonial />
    </div>
  );
}

export default HomePages;
