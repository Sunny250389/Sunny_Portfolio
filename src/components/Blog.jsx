import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const saveDraft = () => {
    if (!title.trim()) {
      alert("Blog title is required before saving!");
      return;
    }
    const draftBlogs = JSON.parse(localStorage.getItem("drafts")) || [];
    draftBlogs.push({ title, content, image });
    localStorage.setItem("drafts", JSON.stringify(draftBlogs));
    alert("Draft saved!");
  };

  const publishBlog = () => {
    if (!title.trim()) {
      alert("Blog title is required before publishing!");
      return;
    }
    const publishedBlogs = JSON.parse(localStorage.getItem("published")) || [];
    publishedBlogs.push({ title, content, image });
    localStorage.setItem("published", JSON.stringify(publishedBlogs));
    alert("Blog published!");
    setTitle("");
    setContent("");
    setImage(null);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
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
    "link",
    "image",
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

      {/* Title Input (Mandatory) */}
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 mb-4 text-xl font-semibold"
        required
      />

      {/* Image Upload */}
      <div className="mb-4">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Blog" className="mt-4 max-h-64 rounded" />}
      </div>

      {/* ✅ Rich Text Editor (multi-line + expanding) */}
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content here..."
        className="mb-6 bg-white"
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={saveDraft}
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Save Draft
        </button>
        <button
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