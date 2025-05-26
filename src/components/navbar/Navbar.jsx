import React from "react";
import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="font-bold text-lg text-black mr-6">
                  Yuja Logo
                </div>

                <div className="hidden md:flex space-x-4">
                  <NavLinkItem name="Home" to="/" />
                  {/* <NavLinkItem name="About Us" to="/about-us" /> */}
                  
                  {/* Audio Dropdown */}
                  <Dropdown title="Audios" links={[
                    { name: "Hanuman Chalisa", to: "/audios/hanuman-chalisa" },
                    { name: "Bhajan", to: "/audios/bhajan" },
                    { name: "Mantra", to: "/audios/mantra" },
                    { name: "Podcast", to: "/audios/podcast" },
                  ]}/>

                  {/* Video Dropdown */}
                  <Dropdown title="Videos" links={[
                    { name: "Live Aarti", to: "/videos/live-aarti" },
                    { name: "Testimony", to: "/videos/testimony" },
                    // { name: "Katha", to: "/katha" },
                  ]}/>

                  {/* Explore Dropdown */}
                  <Dropdown title="Explore" links={[
                    { name: "All Temples", to: "/temples" },
                    { name: "Y-Gallery", to: "/gallery" },
                    { name: "My Yuja Library", to: "/my-yuja-library" },
                    { name: "Learn Hanuman Chalisa", to: "/learn-hanuman-chalisa" },
                    { name: "Japa", to: "/japa" },
                    { name: "Donation", to: "/donation" },
                    { name: "Y-Story", to: "/y-story" },
                    { name: "Y-Scan", to: "/y-scan" },
                    { name: "Katha", to: "/katha" },
                  ]}/>
                  
                  <NavLinkItem name="Contact Us" to="/contact-us" />
                </div>
              </div>

              <div className="hidden md:flex space-x-3">
                <NavLink
                  to="/login"
                  className="px-4 py-2 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white rounded-md hover:bg-orange-600 transition"
                >
                  Sign Up
                </NavLink>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <DisclosureButton className="p-2 rounded-md hover:bg-orange-500 hover:text-white transition">
                  <Bars3Icon className="h-6 w-6" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-50 shadow-inner">
            <MobileLink name="Home" to="/" />
            <MobileLink name="About Us" to="/about-us" />
            
            <MobileDropdown title="Audios" links={[
              { name: "Hanuman Chalisa", to: "/audios/hanuman-chalisa" },
              { name: "Bhajan", to: "/audios/bhajan" },
              { name: "Mantra", to: "/audios/mantra" },
              { name: "Podcast", to: "/audios/podcast" },
            ]}/>

            <MobileDropdown title="Videos" links={[
              { name: "Live Aarti", to: "/videos/live-aarti" },
              { name: "Testimony", to: "/videos/testimony" },
              { name: "Katha", to: "/katha" },
            ]}/>

            <MobileDropdown title="Explore" links={[
              { name: "All Temples", to: "/temples" },
              { name: "Y-Gallery", to: "/gallery" },
              { name: "My Yuja Library", to: "/my-yuja-library" },
              { name: "Learn Hanuman Chalisa", to: "/learn-hanuman-chalisa" },
              { name: "Japa", to: "/japa" },
              { name: "Donation", to: "/donation" },
              { name: "Y-Story", to: "/y-story" },
              { name: "Y-Scan", to: "/y-scan" },
            ]}/>

            <MobileLink name="Contact Us" to="/contact-us" />

            <MobileLink name="Login" to="/login" />
            <MobileLink name="Sign Up" to="/signup" />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

// Reusable Components
const NavLinkItem = ({ name, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-semibold ${
        isActive
          ? "bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white"
          : "text-gray-700 hover:bg-orange-500 hover:text-white"
      }`
    }
  >
    {name}
  </NavLink>
);

const Dropdown = ({ title, links }) => (
  <Menu as="div" className="relative inline-block">
    <MenuButton className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-orange-500 hover:text-white rounded-md">
      {title} <ChevronDownIcon className="w-4 h-4 ml-1" />
    </MenuButton>
    <MenuItems className="absolute mt-2 bg-white shadow-lg rounded-md py-1 w-48 z-50">
      {links.map((link) => (
        <MenuItem key={link.name}>
          {({ active }) => (
            <NavLink
              to={link.to}
              className={`block px-4 py-2 text-sm ${
                active ? "bg-gradient-to-br from-[#EFA423] to-[#F04333] text-white" : "text-gray-700"
              }`}
            >
              {link.name}
            </NavLink>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);

const MobileLink = ({ name, to }) => (
  <NavLink
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
  >
    {name}
  </NavLink>
);

const MobileDropdown = ({ title, links }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <DisclosureButton className="flex justify-between w-full px-3 py-2 text-gray-700 rounded-md hover:bg-orange-500 hover:text-white">
          {title} <ChevronDownIcon className={`w-5 h-5 ${open ? "rotate-180" : ""}`} />
        </DisclosureButton>
        <DisclosurePanel className="pl-4 space-y-1">
          {links.map(link => (
            <MobileLink key={link.name} name={link.name} to={link.to} />
          ))}
        </DisclosurePanel>
      </>
    )}
  </Disclosure>
);
