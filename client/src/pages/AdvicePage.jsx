import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets, adviceCards } from "../assets/assets";

const AdvicePage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Title Animation */}
      <motion.h1
        className="text-3xl font-bold text-blue-600 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Health Advice & Tips
      </motion.h1>

      {/* Search Bar Animation */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Search for health topics..."
          className="w-full max-w-md p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {adviceCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600">{card.title}</h2>
              <p className="text-gray-700 mt-2">{card.description}</p>
              <button className="mt-4 px-5 py-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Share Your Advice</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6 flex flex-col gap-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your advice here..."
            className="w-full md:w-1/3 p-3 border outline-none rounded-lg shadow-md"
            rows="3"
          ></textarea>
      
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full md:w-1/4"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-center">No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-700">{comment}</p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdvicePage;
