import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert("Please enter username and password.");
      return;
    }

    console.log("Login Data:", formData);
    navigate("/");
  };

  const socialButtons = [
    {
      icon: <FaApple size={22} />,
      onClick: () => console.log("Apple Login"),
      label: "Apple",
    },
    {
      icon: <FaFacebookF size={20} className="text-blue-600" />,
      onClick: () => console.log("Facebook Login"),
      label: "Facebook",
    },
    {
      icon: <FaEnvelope size={20} />,
      onClick: () => console.log("Email Login"),
      label: "Email",
    },
    {
      icon: <FaPhoneAlt size={20} className="text-green-600" />,
      onClick: () => console.log("Phone Login"),
      label: "Phone",
    },
    {
      icon: <FcGoogle size={24} />,
      onClick: () => console.log("Google Login"),
      label: "Google",
    },
  ];

  return (
    <AuthLayout>
      {[

        // Left Side – Form
        <div key="form">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Login
            </button>
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-orange-500 font-semibold">
                Sign Up
              </Link>
            </p>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <p className="text-center text-gray-600 mb-4">Or login with</p>
            <div className="flex justify-center gap-4 flex-row-reverse">
              {socialButtons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                  title={btn.label}
                >
                  {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>,

        // Right Side – Full Background Image with Quote
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

export default Login;
