import React from "react";
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

      <div className="mt-10 max-w-2xl mx-auto">
        {posts.map((post) => (
          <Link to={`/discussion/${post.id}`} key={post.id} className="block">
            <div className="bg-white shadow-md rounded-lg p-5 mb-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <FaUserCircle className="text-2xl text-blue-600" />
                <span className="font-semibold">{post.user}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">{post.content}</p>
              <div className="flex items-center justify-between mt-4 text-gray-600">
                <span className="text-blue-600 font-medium">View Discussion</span>
                <div className="flex items-center gap-1">
                  <FaCommentAlt />
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ForumPage;
