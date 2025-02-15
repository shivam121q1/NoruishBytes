import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/nav-links";
import { AlignJustify, X } from "lucide-react";
// import logo from "../../assets/logo.png";
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="static top-0 left-0 w-full bg-white shadow-lg z-50 ">
      <div className="w-11/12 max-w-maxContent mx-auto flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={""} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NavbarLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-lg font-semibold relative pb-2 transition-all ${
                location.pathname === link.path
                  ? "border-b-2 border-yellow-600 text-yellow-600"
                  : "text-gray-800 hover:text-yellow-600 hover:border-b-2 border-yellow-600"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Encourages Contact) */}
        <Link
          to="/contact"
          className="hidden md:block bg-yellow-600 text-white px-6 py-2 rounded-full shadow-md font-semibold text-lg hover:bg-yellow-700 transition"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <AlignJustify
            className="text-gray-800 cursor-pointer text-3xl"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <X className="text-gray-800 cursor-pointer text-3xl" onClick={() => setIsMenuOpen(false)} />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-6 text-lg font-semibold text-gray-800">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`pb-1 transition-all ${
                  location.pathname === link.path
                    ? "border-b-2 border-yellow-600 text-yellow-600"
                    : "hover:text-yellow-600 hover:border-b-2 border-yellow-600"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
          {/* CTA for Mobile */}
          <Link
            to="/contact"
            className="bg-yellow-600 text-white px-6 py-2 rounded-full shadow-md font-semibold text-lg hover:bg-yellow-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
