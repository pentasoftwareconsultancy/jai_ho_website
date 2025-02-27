import React from "react";
import ImageSlider from "../../components/homeCompanents/imageSlider/ImageSlider";
import HomeHero from "../../components/homeCompanents/hero/Hero";
import VideoTestimonial from "../../components/homeCompanents/VideoTestimonial/VideoTestimonial";
import Circle from "../../components/circle/Circle";
import Testimonials from "../../components/testimonials/Testimonials";


function HomePages() {
  return (
    <div>
      <HomeHero />
      <Circle/>
      <ImageSlider />
      <Testimonials/>
      <VideoTestimonial />
    </div>
  );
}

export default HomePages;
