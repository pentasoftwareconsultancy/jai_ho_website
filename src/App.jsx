import ScrollToTop from "./pages/ScrollToTop";
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Static Pages
import HomePages from "./pages/homePages/HomePages";
import AboutUsPage from "./pages/aboutPages/AboutUsPage";
import ContactUs from "./pages/contactUsPages/ContactUs";

// Authentication
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Audio/Video HOC Pages
import AudioSection from "./components/audioSection/AudioSection";
import AudioDetail from "./components/audioSection/AudioDetail";
import VideoSection from "./components/videoSection/VideoSection";
import VideoDetail from "./components/videoSection/VideoDetail";

// Feature Modules

import Gallery from "./components/gallery/Gallery";
import SelectLevel from "./components/learnChalisa/SelectLevel";
import LearnChalisa from "./components/learnChalisa/LearnChalisa";
import Japa from "./components/japa/Japa";
import JapaList from "./components/japa/JapaList";
import JapaDetail from "./components/japa/JapaDetail";
import JapaProfile from "./components/japa/JapaProfile";
import JapaSuccess from "./components/japa/JapaSuccess";
import Katha from "./components/kathaSection/Katha";
import KathaDetails from "./components/kathaSection/KathaDetails";
import YujaLibrary from "./components/yujaLibrary/YujaLibrary";
import Temples from "./components/allTemples/Temples";
import TempleList from "./components/allTemples/TempleList";
import TempleDetails from "./components/allTemples/TempleDetail";
import NotFound from "./pages/pagenotfount";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Static Pages */}
        <Route path="/" element={<HomePages />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Audio & Video HOC */}
        <Route path="/audios/:category" element={<AudioSection />} />
        <Route path="/audio/:id" element={<AudioDetail />} />
        <Route path="/videos/:category" element={<VideoSection />} />
        <Route path="/video/:id" element={<VideoDetail />} />

        {/* Feature Routes */}
        <Route path="/katha" element={<Katha />} />
        <Route path="/katha-details/:id" element={<KathaDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/temples/:cityId" element={<TempleList />} />
        <Route path="/temples/:cityId/:templeId" element={<TempleDetails />} />
        <Route path="/learn-hanuman-chalisa" element={<SelectLevel />} />
        <Route
          path="/learn-hanuman-chalisa/:level"
          element={<LearnChalisa />}
        />

        <Route path="/japa" element={<JapaList />} />
        <Route path="/japa/single" element={<Japa />} />
        <Route path="/japa/:id" element={<JapaDetail />} />
        <Route path="/japa/success" element={<JapaSuccess />} />
        <Route path="/japa/japa-profile" element={<JapaProfile />} />

        <Route path="/my-yuja-library" element={<YujaLibrary />} />

        {/* Coming Soon Pages */}
        <Route
          path="/donation"
          element={<div>Donation Page (Coming Soon)</div>}
        />
        <Route
          path="/y-story"
          element={<div>Y-Story Page (Coming Soon)</div>}
        />
        <Route path="/y-scan" element={<div>Y-Scan Page (Coming Soon)</div>} />

        {/* Fallback */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}
