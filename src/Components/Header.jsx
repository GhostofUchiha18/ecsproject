import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="lowercase">media</span>
          <span className="uppercase">hub.</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          {["HOME", "OUR WORK", "SERVICES", "ABOUT US", "BLOG", "CONTACT US"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white text-sm uppercase hover:text-gray-400"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Media and Search Icons */}
        <div className="flex items-center space-x-4">
          <FaFacebookF className="text-white hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="text-white hover:text-gray-400 cursor-pointer" />
          <FaPinterestP className="text-white hover:text-gray-400 cursor-pointer" />
          <FaLinkedinIn className="text-white hover:text-gray-400 cursor-pointer" />
          <FaSearch className="text-white hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
