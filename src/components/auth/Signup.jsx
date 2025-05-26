import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

// Icons
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaApple,
  FaPhoneAlt,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { username, email, dob, gender, password, confirmPassword } = formData;

    if (!username || !email || !dob || !gender || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Signup Data:", formData);
    navigate("/login");
  };

  const socialButtons = [
    {
      icon: <FaApple size={22} />,
      onClick: () => console.log("Apple Sign Up"),
      label: "Apple",
    },
    {
      icon: <FaFacebookF size={20} className="text-blue-600" />,
      onClick: () => console.log("Facebook Sign Up"),
      label: "Facebook",
    },
    {
      icon: <FaEnvelope size={20} />,
      onClick: () => console.log("Email Sign Up"),
      label: "Email",
    },
    {
      icon: <FaPhoneAlt size={20} className="text-green-600" />,
      onClick: () => console.log("Phone Sign Up"),
      label: "Phone",
    },
    {
      icon: <FcGoogle size={24} />,
      onClick: () => console.log("Google Sign Up"),
      label: "Google",
    },
  ];

  return (
    <AuthLayout>
      {[

        // Left: Signup Form
        <div key="form">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-gray-500"
            />

            {/* Gender Radio Buttons */}
            <div className="flex items-center gap-4">
              <label className="text-gray-600 font-medium">Gender:</label>
              {["male", "female", "other"].map((g) => (
                <label key={g} className="flex items-center gap-1 text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded pr-10"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Register
            </button>

            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-semibold">
                Login
              </Link>
            </p>
          </form>

          {/* Social Icons Section */}
          <div className="mt-8">
            <p className="text-center text-gray-600 mb-4">Or sign up with</p>
            <div className="flex justify-center gap-4 flex-row-reverse">
              {socialButtons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  title={btn.label}
                  className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-full hover:shadow-md transition"
                >
                  {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>,

        // Right: Background Image and Quote
        <div
          key="info"
          className="relative w-full h-full overflow-hidden rounded-lg hidden md:flex items-center justify-center"
        >
          <img
            src="https://i.pinimg.com/736x/1c/1d/12/1c1d1291b90a8aee226b5eafcaed8c44.jpg"
            alt="Hanuman Ji"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <h2 className="relative z-20 text-3xl font-bold text-white text-center px-6 max-w-xl drop-shadow-lg leading-relaxed">
            Everyone, serve everyone, remember God, and tell the truth.
          </h2>
        </div>,
      ]}
    </AuthLayout>
  );
};

export default Signup;
