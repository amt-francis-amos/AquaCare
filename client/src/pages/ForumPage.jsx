import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCommentAlt } from "react-icons/fa";
import { posts } from "../assets/assets";

const ForumPage = () => {

  return (
    <section className="bg-gray-100 min-h-screen py-10 px-4 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900">Community Forum</h1>
        <p className="text-gray-600 mt-2">Share your experiences, ask questions, and find solutions.</p>
      </div>

      <div className="flex gap-3 mt-10 w-1/2 mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <FaUserCircle className="text-2xl text-blue-600" />
              <span className="font-semibold">{post.user}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <div className="flex items-center justify-between mt-4 text-gray-600">
              <Link to={`/discussion/${post.id}`} className="text-blue-600 font-medium hover:underline">
                View Discussion
              </Link>
              <div className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{post.comments} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForumPage;
