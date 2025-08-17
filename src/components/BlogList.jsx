import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("published")) || [];
    setBlogs(stored);
  }, []);

  const getPreview = (html, lines = 2) => {
    const text = html.replace(/<[^>]+>/g, ""); // remove HTML tags
    return text.split("\n").slice(0, lines).join(" ") + "...";
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-slate-800">All Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-slate-600">No blogs published yet.</p>
      ) : (
        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-teal-600 hover:underline mb-2">
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h3>
              <p className="text-slate-600">{getPreview(blog.details)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;