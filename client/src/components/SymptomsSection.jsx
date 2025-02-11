import React from "react";
import { motion } from "framer-motion";

const SymptomsSection = () => {
  return (
    <motion.section
      className="py-12 px-6 bg-white text-gray-900"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">Symptoms of Bilharzia</h2>
        <ul className="mt-4 text-lg list-disc list-inside">
          {[
            "Fever and chills",
            "Blood in urine or stool",
            "Abdominal pain",
            "Fatigue and muscle aches",
            "Skin rash",
          ].map((symptom, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              {symptom}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default SymptomsSection;
