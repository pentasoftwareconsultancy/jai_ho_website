import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePages from "./pages/homePages/HomePages";
import AboutUsPage from "./pages/aboutPages/AboutUsPage"; // ✅ Ensure correct import
import ContactUs from "./pages/contactUsPages/ContactUs";
import Footer from "./components/Footer/Footer";
import KathaSection from "./components/kathaSection/Katha";
import KathaDetails from "./components/kathaSection/kathaDetails/KathaDetails";
import LoginSignupForm from "./components/LoginSignupForm/LoginSignupForm";
import TestimonalPage from "./pages/testimonalPage/TestimonalPage";
import TestimonalsCardtext from "./components/testimonialss/texttestimonials/TestimonalsCardtext";
import VideoTestimonial from "./components/homeCompanents/VideoTestimonial/VideoTestimonial";
import Videoscard from "./components/testimonialss/vidoestestimonials/Videoscard";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/katha" element={<KathaSection />} />
        <Route path="/katha-details/:id" element={<KathaDetails />} />
        <Route path="/login" element={<LoginSignupForm />} />
        <Route path="/Testimonial" element={<TestimonalPage/>} />
        <Route path="/Testimonaltext" element={<TestimonalsCardtext/>} />
        <Route path="/Testimonalvideo" element={<Videoscard/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
