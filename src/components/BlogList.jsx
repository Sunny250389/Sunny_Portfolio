import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("published")) || [];
    setBlogs(stored);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 text-left">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-slate-800">Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-slate-600">No blogs published yet.</p>
      ) : (
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-2 text-slate-800">
                {blog.title}
              </h3>
              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.details }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;