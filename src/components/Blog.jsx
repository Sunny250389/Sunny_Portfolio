import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ThumbsUp, ThumbsDown } from "lucide-react";
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
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);

  // Load drafts and published blogs from localStorage
  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
    const savedPublished = JSON.parse(localStorage.getItem("published")) || [];
    setDrafts(savedDrafts);
    setPublished(savedPublished);
  }, []);

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Save as Draft
  const saveDraft = () => {
    const draft = { title, content, image, date: new Date().toLocaleString() };
    const updatedDrafts = [...drafts, draft];
    setDrafts(updatedDrafts);
    localStorage.setItem("drafts", JSON.stringify(updatedDrafts));
    alert("Draft saved!");
    clearForm();
  };

  // Publish blog
  const publishBlog = () => {
    const blog = {
      title,
      content,
      image,
      date: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
    };
    const updatedPublished = [...published, blog];
    setPublished(updatedPublished);
    localStorage.setItem("published", JSON.stringify(updatedPublished));
    alert("Blog published!");
    clearForm();
  };

  // Clear form after save/publish
  const clearForm = () => {
    setTitle("");
    setContent("");
    setImage(null);
  };

  // Like handler
  const handleLike = (index) => {
    const updatedPublished = [...published];
    updatedPublished[index].likes += 1;
    setPublished(updatedPublished);
    localStorage.setItem("published", JSON.stringify(updatedPublished));
  };

  // Dislike handler
  const handleDislike = (index) => {
    const updatedPublished = [...published];
    updatedPublished[index].dislikes += 1;
    setPublished(updatedPublished);
    localStorage.setItem("published", JSON.stringify(updatedPublished));
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
    <div className="max-w-5xl mx-auto p-6">
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

      {/* Title */}
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

      {/* Blog Editor */}
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="mb-6 bg-white"
        placeholder="Write your blog content here..."
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
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

      {/* Drafts Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Drafts</h3>
        {drafts.length === 0 ? (
          <p className="text-slate-600">No drafts yet.</p>
        ) : (
          drafts.map((draft, index) => (
            <div key={index} className="bg-slate-50 p-4 mb-4 rounded shadow">
              <h4 className="text-xl font-semibold">{draft.title}</h4>
              {draft.image && <img src={draft.image} alt="Draft" className="my-2 max-h-48 rounded" />}
              <div dangerouslySetInnerHTML={{ __html: draft.content }} />
              <p className="text-sm text-slate-500 mt-2">Saved on: {draft.date}</p>
            </div>
          ))
        )}
      </div>

      {/* Published Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Published Blogs</h3>
        {published.length === 0 ? (
          <p className="text-slate-600">No published blogs yet.</p>
        ) : (
          published.map((blog, index) => (
            <div key={index} className="bg-white p-6 mb-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-2">{blog.title}</h4>
              {blog.image && <img src={blog.image} alt="Published" className="my-2 max-h-72 rounded" />}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              <p className="text-sm text-slate-500 mt-2">Published on: {blog.date}</p>

              {/* Like / Dislike */}
              <div className="flex gap-6 mt-4 items-center">
                <button
                  onClick={() => handleLike(index)}
                  className="flex items-center gap-2 text-green-600 hover:text-green-800"
                >
                  <ThumbsUp className="w-5 h-5" /> {blog.likes}
                </button>
                <button
                  onClick={() => handleDislike(index)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <ThumbsDown className="w-5 h-5" /> {blog.dislikes}
                </button>
              </div>

              {/* Feedback Form */}
              <form
                action="https://formsubmit.co/sunny250389@gmail.com"
                method="POST"
                className="mt-6 border-t pt-4"
              >
                <input type="hidden" name="_subject" value={`Feedback on blog: ${blog.title}`} />
                <input type="hidden" name="_next" value="https://sunny-kumar.in/blog" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full border p-2 mb-2"
                />
                <textarea
                  name="feedback"
                  placeholder="Write your feedback..."
                  required
                  className="w-full border p-2 mb-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send Feedback
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;