import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#ffffff] text-black">
      {/* Left Section: Contact Info */}
      <div className="md:w-1/2 flex flex-col justify-center p-10 bg-white/5 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Get in Touch</h2>
        <p className="text-gray-900 mb-6">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-indigo-400" />
            <div>
              <p className="text-gray-900">545 Mavis Island</p>
              <p className="text-gray-900">Chicago, IL 99191</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-indigo-400" />
            <p className="text-gray-900">+1 (555) 234-5678</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-indigo-900" />
            <p className="text-gray-900">hello@example.com</p>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="md:w-1/2 flex flex-col justify-center p-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-900 mb-1">First Name</label>
              <input type="text" className="w-full p-3 bg-orange-200 text-black border-none orange rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-900 mb-1">Last Name</label>
              <input type="text" className="w-full p-3 bg-orange-200 text-black border-none-none orange rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-900 mb-1">Email</label>
            <input type="email" className="w-full p-3 bg-orange-200 text-black border-none orange rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-900 mb-1">Phone Number</label>
            <input type="tel" className="w-full p-3 bg-orange-200 text-black border-none orange rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-900 mb-1">Message</label>
            <textarea rows="4" className="w-full p-3 bg-orange-200 text-black border-none orange rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          </div>
          <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium shadow-md">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
