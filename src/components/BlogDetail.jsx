import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Home } from "lucide-react";

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
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Home Button */}
      <div className="mb-6 text-left">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-slate-800 mb-6">{blog.title}</h1>
      <div
        className="prose max-w-none text-slate-700"
        dangerouslySetInnerHTML={{ __html: blog.details }}
      />
    </div>
  );
};

export default BlogDetail;