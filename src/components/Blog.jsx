import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // ✅ Save draft
  const saveDraft = () => {
    if (!title.trim()) {
      alert("Blog title is required before saving!");
      return;
    }
    const draftBlogs = JSON.parse(localStorage.getItem("drafts")) || [];
    const newDraft = { title, details };
    draftBlogs.push(newDraft);
    localStorage.setItem("drafts", JSON.stringify(draftBlogs));
    alert("Draft saved!");
  };

  // ✅ Publish blog
  const publishBlog = () => {
    if (!title.trim()) {
      alert("Blog title is required before publishing!");
      return;
    }
    const publishedBlogs = JSON.parse(localStorage.getItem("published")) || [];
    const newBlog = { title, details };
    publishedBlogs.push(newBlog);
    localStorage.setItem("published", JSON.stringify(publishedBlogs));
    alert("Blog published!");

    // Reset
    setTitle("");
    setDetails("");
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "align",
    "color",
    "background",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ✅ Home Button */}
      <div className="mb-6 text-left">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-slate-800">Write a Blog</h2>

      {/* ✅ Blog Title */}
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 mb-6 text-3xl font-bold text-slate-800"
        required
      />

      {/* ✅ Blog Details */}
      <h3 className="text-xl font-semibold mb-2 text-slate-700">Blog Details</h3>
      <ReactQuill
        value={details}
        onChange={setDetails}
        modules={modules}
        formats={formats}
        placeholder="Write your detailed blog content here..."
        className="mb-6 bg-white"
      />

      {/* ✅ Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={saveDraft}
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Save Draft
        </button>
        <button
          type="button"
          onClick={publishBlog}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Blog;