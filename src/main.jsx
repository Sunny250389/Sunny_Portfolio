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
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/blog" element={<Blog />} /> {/* ✅ New Blog Route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);