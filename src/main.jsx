// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Hobbies from "./components/Hobbies";
import Blog from "./components/Blog"; // ✅ Import Blog
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/blog" element={<Blog isOwner={true} />} /> {/* ✅ New Blog Route */}
        <Route path="/blogs" element={<BlogList />} /> {/* Blog List (all) */}
        <Route path="/blogs/:id" element={<BlogDetail />} /> {/* Blog Detail */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);