import React from "react";
import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Other", href: "/other" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section: Logo & Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="text-black font-bold text-lg">Yuja Logo</div>

            {/* Navigation Links (Hidden in Mobile) */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-semibold ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-800 hover:bg-orange-500 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section: Login & Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="px-4 py-2 text-gray-600 rounded-md border border-orange-500 hover:bg-orange-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button (Visible on Small Screens) */}
          <div className="md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <Bars3Icon className="h-6 w-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Login & Signup Buttons */}
          <div className="mt-3 space-y-2">
            <NavLink
              to="/login"
              className="block text-center px-4 py-2 text-white rounded-md border border-orange-500 hover:bg-orange-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="block text-center px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
