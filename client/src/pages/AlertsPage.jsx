import React from "react";
import { motion } from "framer-motion";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { alerts } from "../assets/assets";

const AlertsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-10 flex-grow">
      
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-red-600 text-center mb-6"
        >
          Community Alerts
        </motion.h1>

    
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center  mb-6"
        >
          <input
            type="text"
            placeholder="Search alerts..."
            className="w-full max-w-md p-3 border rounded-lg shadow-md  outline-none"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 mt-20 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border-l-8 min-h-[250px] ${
                alert.category === "Outbreak"
                  ? "border-red-600"
                  : alert.category === "Clean Water"
                  ? "border-blue-600"
                  : "border-green-600"
              } transition-transform transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <BellAlertIcon className="h-6 w-6 text-red-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {alert.title}
                  </h2>
                </div>
                <p className="text-gray-700 mb-3">{alert.message}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{alert.date}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      alert.status === "Urgent"
                        ? "bg-red-600"
                        : alert.status === "Important"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }`}
                  >
                    {alert.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
