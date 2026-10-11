import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import App from "./App";
import Hobbies from "./components/Hobbies";
import AppsGallery from "./components/AppsGallery";
import Blog from "./components/Blog";          // Blog Editor
import BlogList from "./components/BlogList";  // Blogs (read-only list)
import BlogDetail from "./components/BlogDetail"; // Blog detail page
import { ScrollProgress } from "./components/motion";
import "./index.css";

const isOwner = true;
// 🔑 Set this to false when deploying live so Blog Editor is hidden

// Opacity-only page transition: a transform here would break the fixed Header.
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/apps" element={<AppsGallery />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          {/* Blog Editor only accessible for owner */}
          {isOwner && <Route path="/blog" element={<Blog isOwner={true} />} />}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* reducedMotion="user" disables transform animations for users who prefer reduced motion */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollProgress />
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
);
