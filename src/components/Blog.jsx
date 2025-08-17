import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

hljs.configure({
  languages: ["javascript", "python", "java", "html", "css"],
});

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

  const saveBlog = () => {
    const blogData = { title, content, image };
    localStorage.setItem("blogPost", JSON.stringify(blogData));
    alert("Blog saved!");
  };

  const modules = {
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
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

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 mb-4 text-xl font-semibold"
      />

      {/* Image Upload */}
      <div className="mb-4">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Blog" className="mt-4 max-h-64 rounded" />}
      </div>

      {/* Rich Text Editor */}
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="mb-6 bg-white"
        placeholder="Write your blog content here..."
      />

      {/* Save Blog */}
      <button
        onClick={saveBlog}
        className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
      >
        Save Blog
      </button>

      {/* Preview */}
      <div className="mt-10 bg-slate-50 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4">Preview</h3>
        {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}
        {image && <img src={image} alt="Uploaded" className="mb-4 max-h-72 rounded" />}
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Blog;