import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, X } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [images, setImages] = useState([]);

  // ✅ Handle multiple image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // ✅ Remove selected image
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // ✅ Save draft
  const saveDraft = () => {
    if (!title.trim()) {
      alert("Blog title is required before saving!");
      return;
    }
    const draftBlogs = JSON.parse(localStorage.getItem("drafts")) || [];
    draftBlogs.push({ title, details, images });
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
    publishedBlogs.push({ title, details, images });
    localStorage.setItem("published", JSON.stringify(publishedBlogs));
    alert("Blog published!");
    setTitle("");
    setDetails("");
    setImages([]);
  };

  // ✅ Delete published blog by title
  const deleteBlog = (titleToDelete) => {
    const publishedBlogs = JSON.parse(localStorage.getItem("published")) || [];
    const updatedBlogs = publishedBlogs.filter((blog) => blog.title !== titleToDelete);
    localStorage.setItem("published", JSON.stringify(updatedBlogs));
    alert("Blog deleted!");
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

      {/* ✅ Title */}
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

      {/* ✅ Multiple Image Upload */}
      <div className="mb-6">
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        <div className="flex gap-4 flex-wrap mt-4">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img src={img} alt="Blog" className="h-32 rounded shadow" />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Buttons */}
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

      {/* ✅ Delete Blog Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Delete a Blog</h3>
        <button
          onClick={() => {
            if (!title.trim()) {
              alert("Enter the title of the blog you want to delete!");
              return;
            }
            deleteBlog(title);
          }}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Delete Blog by Title
        </button>
      </div>
    </div>
  );
};

export default Blog;