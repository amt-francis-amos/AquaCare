import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 ">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-2xl font-bold text-blue-400">AquaCare</h2>
          <p className="mt-2 text-gray-400 max-w-[250px]">
            Your trusted platform for health alerts, advice, and consultations.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/alerts" className="hover:text-blue-300">Alerts</Link>
            </li>
            <li>
              <Link to="/advice" className="hover:text-blue-300">Health Advice</Link>
            </li>
            <li>
              <Link to="/forum" className="hover:text-blue-300">Community Forum</Link>
            </li>
            <li>
              <Link to="/consultation" className="hover:text-blue-300">Consultations</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Stay Updated</h3>
          <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-700 text-white border-none outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AquaCare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
