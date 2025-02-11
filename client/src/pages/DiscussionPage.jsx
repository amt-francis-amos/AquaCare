import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { discussionData } from "../assets/assets";

const DiscussionPage = () => {
  const { id } = useParams();
  const discussion = discussionData.find((item) => item.id === Number(id)); // Fix here
  const [comments, setComments] = useState(discussion ? discussion.comments : []);
  const [newComment, setNewComment] = useState("");

  if (!discussion) {
    return <div className="text-center text-red-500 mt-10">Discussion not found.</div>;
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, user: "You", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-10 px-4 md:px-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <FaUserCircle className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-bold">{discussion.title}</h2>
        </div>
        <p className="text-gray-700">{discussion.content}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-medium text-gray-800">{comment.user}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Add a Comment</h3>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleCommentSubmit}
          >
            Post Comment
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscussionPage;
