import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import googleplay from "./google-play-badge-logo-svgrepo-com.svg";
import appleplay from "./download-on-the-app-store-apple-logo-svgrepo-com.svg";
const Footer = () => {
  return (
    <footer className="relative bg-black/90 backdrop-blur-lg text-gray-400 py-12">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section: CTA Text */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-sm text-white-900 uppercase">Get started</p>
          <h2 className="text-6xl font-extrabold text-white mt-2">
            Boost your productivity.
            <br /> Start using our app today.
          </h2>
          <button className="mt-6 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium">
            Get started
          </button>
        </div>

        {/* Right Section: App Store & QR Code */}
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end space-y-4">
          <p className="text-white text-sm font-medium">Download the app</p>
          <div className="flex space-x-4">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appleplay} alt="Google Play Store" className="h-42" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googleplay} alt="Apple App Store" className="h-42" />
            </a>
          </div>
          {/* QR Code */}
          <img
            src="https://cdn.pixabay.com/photo/2023/02/28/01/51/qr-code-7819653_640.jpg"
            alt="Scan QR Code"
            className="h-40 w-40 mt-4"
          />
          <p className="text-xs text-gray-100">Scan to download</p>
        </div>
      </div>

      {/* Footer Links Section with Logo */}
      <div className="border-t border-gray-500/30 mt-10 pt-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Company Logo" className="h-8 w-auto" />
        </div>

        {/* Right Side: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>Submit ticket</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-500/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <p className="text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <FaFacebookF
            className="text-gray-600 hover:text-white cursor-pointer"
            size={18}
          />
          <FaTwitter
            className="text-gray-600 hover:text-white cursor-pointer"
            size={18}
          />
          <FaInstagram
            className="text-gray-600 hover:text-white cursor-pointer"
            size={18}
          />
          <FaYoutube
            className="text-gray-600 hover:text-white cursor-pointer"
            size={18}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
