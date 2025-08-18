import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("published")) || [];
    const found = stored.find((b) => String(b.id) === id);
    setBlog(found);
  }, [id]);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-slate-600">Blog not found.</p>
        <Link to="/blogs" className="text-teal-600 hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-slate-800">{blog.title}</h2>
        <Link
          to="/"
          className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-900"
        >
          Home
        </Link>
      </div>

      <div
        className="text-slate-600 mb-6"
        dangerouslySetInnerHTML={{ __html: blog.details }}
      />

      <Link to="/blogs" className="text-teal-600 hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetail;
