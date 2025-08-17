import React, { useState, useEffect } from "react";

const Blog = () => {
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [feedback, setFeedback] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");

  // ✅ Load blog & interactions from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem("blogContent");
    const savedLikes = localStorage.getItem("blogLikes");
    const savedDislikes = localStorage.getItem("blogDislikes");
    const savedFeedback = JSON.parse(localStorage.getItem("blogFeedback") || "[]");

    if (savedContent) setContent(savedContent);
    if (savedLikes) setLikes(parseInt(savedLikes));
    if (savedDislikes) setDislikes(parseInt(savedDislikes));
    if (savedFeedback) setFeedback(savedFeedback);
  }, []);

  // ✅ Save blog updates
  const saveBlog = () => {
    localStorage.setItem("blogContent", content);
    alert("Blog content saved successfully!");
  };

  // ✅ Handle likes/dislikes
  const handleLike = () => {
    setLikes(likes + 1);
    localStorage.setItem("blogLikes", likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    localStorage.setItem("blogDislikes", dislikes + 1);
  };

  // ✅ Handle feedback
  const submitFeedback = () => {
    if (!newFeedback.trim()) return;
    const updatedFeedback = [...feedback, newFeedback];
    setFeedback(updatedFeedback);
    localStorage.setItem("blogFeedback", JSON.stringify(updatedFeedback));
    setNewFeedback("");
  };

  // Simulate "Admin mode" for YOU (editable) vs visitors (readonly)
  const isOwner = true; // 🔧 Change to false for visitor view

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-slate-800">My Blog</h2>

      {isOwner ? (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-64 border p-4 mb-4"
            placeholder="Write your blog here..."
          />
          <button
            onClick={saveBlog}
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
          >
            Save Blog
          </button>
        </>
      ) : (
        <div className="prose lg:prose-xl bg-white p-6 rounded shadow">
          <p>{content || "No blog available yet."}</p>
        </div>
      )}

      {/* ✅ Likes/Dislikes */}
      <div className="flex gap-6 mt-6">
        <button onClick={handleLike} className="px-4 py-2 bg-green-500 text-white rounded">
          👍 {likes}
        </button>
        <button onClick={handleDislike} className="px-4 py-2 bg-red-500 text-white rounded">
          👎 {dislikes}
        </button>
      </div>

      {/* ✅ Feedback Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Feedback</h3>
        <ul className="mb-4 list-disc pl-6">
          {feedback.map((fb, i) => (
            <li key={i} className="text-slate-700">{fb}</li>
          ))}
        </ul>
        <textarea
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          className="w-full border p-2 mb-2"
          placeholder="Leave your feedback..."
        />
        <button
          onClick={submitFeedback}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Blog;
