import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    // Basic Frontend Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // TODO: Backend API integration here
    console.log("Form Submission:", formData);

    alert("Your message has been sent successfully!");

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br p-6 md:p-10">
      {/* Left Side (Contact Info) */}
      <div className="md:w-1/2 bg-white rounded-lg shadow-xl p-8 md:p-12 mb-6 md:mb-0 md:mr-6">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Please reach out with any questions, comments, or inquiries.
        </p>
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-xl" />
            <div className="text-gray-700">
              <p>545 Mavis Island</p>
              <p>Chicago, IL 99191</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-xl" />
            <p className="text-gray-700">(+91) 9876543210</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-xl" />
            <p className="text-gray-700">yuja@example.com</p>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="md:w-1/2 bg-white rounded-lg shadow-xl p-8 md:p-12 md:ml-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-200 shadow"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
