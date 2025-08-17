import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Trash2, Edit3 } from "lucide-react";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);
  const [editId, setEditId] = useState(null); // Track if editing

  // Load stored blogs on mount
  useEffect(() => {
    const storedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
    const storedPublished = JSON.parse(localStorage.getItem("published")) || [];
    setDrafts(storedDrafts);
    setPublished(storedPublished);
  }, []);

  // Save to localStorage
  const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Handle Publish (new or update)
  const handlePublish = () => {
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    let updatedPublished;
    if (editId) {
      // Update existing blog
      updatedPublished = published.map((blog) =>
        blog.id === editId ? { ...blog, title, details } : blog
      );
      setEditId(null);
    } else {
      // Create new blog
      const newBlog = { id: Date.now(), title, details };
      updatedPublished = [...published, newBlog];
    }

    setPublished(updatedPublished);
    saveToStorage("published", updatedPublished);

    // Reset editor
    setTitle("");
    setDetails("");
  };

  // Save Draft
  const handleSaveDraft = () => {
    if (!title.trim()) {
      alert("Title is required for draft!");
      return;
    }

    const newDraft = { id: Date.now(), title, details };
    const updatedDrafts = [...drafts, newDraft];
    setDrafts(updatedDrafts);
    saveToStorage("drafts", updatedDrafts);

    setTitle("");
    setDetails("");
  };

  // Delete Blog
  const handleDelete = (id) => {
    const updated = published.filter((b) => b.id !== id);
    setPublished(updated);
    saveToStorage("published", updated);
  };

  // Edit Blog
  const handleEdit = (blog) => {
    setTitle(blog.title);
    setDetails(blog.details);
    setEditId(blog.id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-slate-800">Blog Editor</h2>

      {/* Blog Title */}
      <input
        type="text"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border rounded mb-4 text-lg font-bold"
      />

      {/* Blog Details */}
      <ReactQuill
        value={details}
        onChange={setDetails}
        className="mb-4"
        placeholder="Write your blog details..."
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleSaveDraft}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Save Draft
        </button>
        <button
          onClick={handlePublish}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
        >
          {editId ? "Update Blog" : "Publish Blog"}
        </button>
      </div>

      {/* Published Blogs */}
      <h3 className="text-2xl font-bold mt-10 mb-4 text-slate-800">
        Published Blogs
      </h3>
      {published.length === 0 ? (
        <p className="text-slate-600">No blogs published yet.</p>
      ) : (
        <div className="space-y-6">
          {published.map((blog) => (
            <div key={blog.id} className="p-4 bg-white rounded shadow">
              <h4 className="text-xl font-bold text-teal-600">{blog.title}</h4>
              <div
                className="text-slate-600 mt-2 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: blog.details }}
              />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Edit3 size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="flex items-center gap-1 text-red-600 hover:underline"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;