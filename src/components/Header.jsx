import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative py-1 hover:text-teal-600 ${isActive ? "text-teal-600 font-bold" : ""}`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-teal-600 rounded"
          />
        )}
      </>
    )}
  </NavLink>
);

const Header = () => {
  // 🔑 Toggle this flag → true (when you want to edit), false (when deploying live)
  const isOwner = true;

  // Header shrinks and turns translucent once the page is scrolled
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
        initial={false}
        animate={{ height: scrolled ? 56 : 64 }}
        transition={{ duration: 0.25 }}
      >

        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Sunny Kumar
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 text-slate-700 font-medium">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/hobbies">Hobbies</NavItem>
          <NavItem to="/blogs">Blogs</NavItem>

          {/* Only for you (when isOwner = true) */}
          {isOwner && <NavItem to="/blog">Blog Editor</NavItem>}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
