import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-32 md:w-48 h-10 md:h-16"
              fill="none"
              stroke="white"
              strokeWidth="20"
            >
              <path d="M0,96L80,80C160,64,320,32,480,64C640,96,800,192,960,218.7C1120,245,1280,203,1360,181.3L1440,160" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Stay Informed. Stay Healthy.
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Get real-time health alerts, expert advice, and personalized consultations to keep your well-being in check.
          </p>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Link to="/consultation">
              <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                Get Started
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={assets.heroDoc}
            alt="Healthcare Awareness"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </motion.div>
        
      </div>
    </section>
  );
}

export default HeroSection;
