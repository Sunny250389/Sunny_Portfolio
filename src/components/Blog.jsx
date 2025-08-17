import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Trash2, Edit } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load published blogs on page load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("published")) || [];
    setPublishedBlogs(stored);
  }, []);

  // Save draft
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

  // Publish blog (or update if editing)
  const publishBlog = () => {
    if (!title.trim()) {
      alert("Blog title is required before publishing!");
      return;
    }
    let stored = JSON.parse(localStorage.getItem("published")) || [];
    if (editingIndex !== null) {
      stored[editingIndex] = { title, details };
      alert("Blog updated!");
    } else {
      stored.push({ title, details });
      alert("Blog published!");
    }
    localStorage.setItem("published", JSON.stringify(stored));
    setPublishedBlogs(stored);

    // Reset
    setTitle("");
    setDetails("");
    setEditingIndex(null);
  };

  // Delete blog
  const deleteBlog = (index) => {
    const updated = [...publishedBlogs];
    updated.splice(index, 1);
    setPublishedBlogs(updated);
    localStorage.setItem("published", JSON.stringify(updated));
  };

  // Edit blog
  const editBlog = (index) => {
    setTitle(publishedBlogs[index].title);
    setDetails(publishedBlogs[index].details);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <h2 className="text-4xl font-bold mb-6 text-slate-800">
        {editingIndex !== null ? "Edit Blog" : "Write a Blog"}
      </h2>

      {/* Blog Title */}
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 mb-6 text-3xl font-bold text-slate-800"
        required
      />

      {/* Blog Details */}
      <h3 className="text-xl font-semibold mb-2 text-slate-700">Blog Details</h3>
      <ReactQuill
        value={details}
        onChange={setDetails}
        modules={modules}
        formats={formats}
        placeholder="Write your detailed blog content here..."
        className="mb-6 bg-white"
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
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
          {editingIndex !== null ? "Save Changes" : "Publish"}
        </button>
      </div>

      {/* Published Blogs Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-slate-800">Published Blogs</h2>
        {publishedBlogs.length === 0 ? (
          <p className="text-slate-600">No blogs published yet.</p>
        ) : (
          <div className="space-y-8">
            {publishedBlogs.map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition relative"
              >
                <div className="absolute top-4 right-4 flex gap-3">
                  <button
                    onClick={() => editBlog(index)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit Blog"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteBlog(index)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete Blog"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
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
    </div>
  );
};

export default Blog;