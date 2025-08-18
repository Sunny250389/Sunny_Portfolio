import React, { useState, useEffect } from "react";

const Blog = ({ isOwner }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [published, setPublished] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedPublished = JSON.parse(localStorage.getItem("published")) || [];
    setPublished(storedPublished);
  }, []);

  const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    let updatedPublished;
    if (editId) {
      updatedPublished = published.map((blog) =>
        blog.id === editId ? { ...blog, title, details } : blog
      );
      setEditId(null);
    } else {
      const newBlog = { id: Date.now(), title, details };
      updatedPublished = [...published, newBlog];
    }

    setPublished(updatedPublished);
    saveToStorage("published", updatedPublished);

    setTitle("");
    setDetails("");
  };

  const handleDelete = (id) => {
    const updated = published.filter((b) => b.id !== id);
    setPublished(updated);
    saveToStorage("published", updated);
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setDetails(blog.details);
    setEditId(blog.id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-slate-800">Blog</h2>

      {/* ✅ Only show editor if isOwner = true */}
      {isOwner && (
        <>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded mb-4 text-lg font-bold"
          />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            rows={6}
            placeholder="Write your blog details..."
          />
          <div className="flex gap-4">
            <button
              onClick={handlePublish}
              className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
            >
              {editId ? "Update Blog" : "Publish Blog"}
            </button>
          </div>
        </>
      )}

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
                className="text-slate-600 mt-2"
                dangerouslySetInnerHTML={{ __html: blog.details }}
              />
              {isOwner && (
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;