import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import googleplay from "../../assets/images/google-play-badge-logo-svgrepo-com.svg";
import appleplay from "../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";

const Footer = () => {
  return (
    <footer className="relative bg-black/90 backdrop-blur-lg text-gray-400 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <div className="flex items-center space-x-2">
            <img
              src=""
              alt="Jai Ho Logo"
              className="h-20 w-auto rounded object-contain"
            />
          </div>
          <h2 className="text-5xl font-extrabold text-white mt-2">
            Everyone, serve everyone, remember God, and tell the truth.
          </h2>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end space-y-4">
          <p className="text-white text-sm font-medium">Download the app</p>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/28/01/51/qr-code-7819653_640.jpg"
            alt="QR Code"
            className="h-40 w-40 mt-4"
          />
          <p className="text-xs text-gray-100">Scan to download</p>
          <div className="flex space-x-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appleplay} alt="Apple App Store" className="h-12" />
            </a>
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img src={googleplay} alt="Google Play Store" className="h-12" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-500/30 mt-10 pt-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Our Services */}
        <div className="w-full md:w-1/2">
          <h3 className="text-white text-lg font-semibold text-center mb-4">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <li><Link to="/audios/hanuman-chalisa">Hanuman Chalisa</Link></li>
              <li><Link to="/audios/bhajan">Bhajan</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/katha">Katha</Link></li>
              <li><Link to="/japa">Japa</Link></li>
              <li><Link to="/learn-hanuman-chalisa">Learn Chalisa</Link></li>
              <li><Link to="/videos/live-aarti">Aarti</Link></li>
              <li><Link to="/audios/mantra">Mantra</Link></li>
              <li><Link to="/temples">Temple</Link></li>
              <li><Link to="/videos/testimony">Testimony</Link></li>
              <li><Link to="/my-yuja-library">Yuja Library</Link></li>
              <li><Link to="/donation">Donation</Link></li>
            </div>
          </ul>
        </div>

        {/* Company Info & Legal */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/blog">Blog</Link></li> {/* Add blog route if exists */}
              <li><Link to="/careers">Jobs</Link></li> {/* Add jobs route if exists */}
              <li><Link to="/press">Press</Link></li> {/* Add press route if exists */}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><Link to="/terms">Terms of Service</Link></li> {/* Add legal route */}
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/license">License</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <p className="text-sm">© 2024 Jai Ho Project. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <FaFacebookF className="text-gray-600 hover:text-white cursor-pointer" size={18} />
          <FaTwitter className="text-gray-600 hover:text-white cursor-pointer" size={18} />
          <FaInstagram className="text-gray-600 hover:text-white cursor-pointer" size={18} />
          <FaYoutube className="text-gray-600 hover:text-white cursor-pointer" size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
