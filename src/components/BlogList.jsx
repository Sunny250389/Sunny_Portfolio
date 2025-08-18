import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("published")) || [];
    setBlogs(stored);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Blogs</h2>
        <Link
          to="/"
          className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-900"
        >
          Home
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p className="text-slate-600">No blogs published yet.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 bg-white rounded shadow">
              <Link
                to={`/blogs/${blog.id}`}
                className="text-2xl font-bold text-teal-600 hover:underline"
              >
                {blog.title}
              </Link>
              <div
                className="text-slate-600 mt-2 line-clamp-2"
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
