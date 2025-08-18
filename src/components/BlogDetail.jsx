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
      <h2 className="text-4xl font-bold mb-4 text-slate-800">{blog.title}</h2>
      <p className="text-slate-600 mb-6">{blog.details}</p>
      <Link to="/blogs" className="text-teal-600 hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetail;