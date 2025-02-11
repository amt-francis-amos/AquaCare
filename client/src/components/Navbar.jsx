import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { assets } from "../assets/assets";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <>
      {/* Navbar */}
      <div className="bg-white shadow-md py-4 px-6 relative">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src={assets.aquaLogo} className="w-[70px]" alt="" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-blue-500 ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/alerts" className={`hover:text-blue-500 ${isActive("/alerts")}`}>
              Alerts
            </Link>
            <Link to="/advice" className={`hover:text-blue-500 ${isActive("/advice")}`}>
              Health Advice
            </Link>
            <Link to="/forum" className={`hover:text-blue-500 ${isActive("/forum")}`}>
              Community Forum
            </Link>
            <Link to="/consultation" className={`hover:text-blue-500 ${isActive("/consultation")}`}>
              Consultations
            </Link>
            <Link to="/doctor-locator" className={`hover:text-blue-500 ${isActive("/doctor-locator")}`}>
              Doctor Locator
            </Link>

            <Link to="/consultation" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Get Help
            </Link>

            {/* Create Account Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Create Account
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4">
            <Link to="/" className={isActive("/")} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/alerts" className={isActive("/alerts")} onClick={() => setMenuOpen(false)}>
              Alerts
            </Link>
            <Link to="/advice" className={isActive("/advice")} onClick={() => setMenuOpen(false)}>
              Health Advice
            </Link>
            <Link to="/forum" className={isActive("/forum")} onClick={() => setMenuOpen(false)}>
              Community Forum
            </Link>
            <Link to="/consultation" className={isActive("/consultation")} onClick={() => setMenuOpen(false)}>
              Consultations
            </Link>
            <Link to="/doctor-locator" className={isActive("/doctor-locator")} onClick={() => setMenuOpen(false)}>
              Doctor Locator
            </Link>

            <Link to="/consultation" onClick={() => setMenuOpen(false)} className="bg-blue-600 text-white text-center px-10 py-3 rounded hover:bg-blue-700 transition">
              Get Help
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                setShowLogin(true);
              }}
              className="bg-gray-700 text-white px-10 py-3 rounded hover:bg-gray-800 transition"
            >
              Create Account
            </button>
          </div>
        )}
      </div>

      {/* Login Form Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Login
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
