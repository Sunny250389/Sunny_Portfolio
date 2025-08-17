import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Hobbies from "./components/Hobbies";
import Blog from "./components/Blog";          // Blog Editor
import BlogList from "./components/BlogList";  // Blogs (read-only list)
import BlogDetail from "./components/BlogDetail"; // Blog detail page
import "./index.css";

const isOwner = true;
// 🔑 Set this to false when deploying live so Blog Editor is hidden

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        {/* Blog Editor only accessible for owner */}
        {isOwner && <Route path="/blog" element={<Blog isOwner={true} />} />}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
