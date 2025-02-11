import React from "react";
import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <motion.section
      className="py-12 px-6 bg-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">Overview of Bilharzia</h2>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Bilharzia, also known as Schistosomiasis, is a disease caused by parasitic worms. 
          It is commonly found in areas with poor sanitation and contaminated water sources.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default OverviewSection;
