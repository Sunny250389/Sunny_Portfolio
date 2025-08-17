import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // 🔑 Toggle this flag → true (when you want to edit), false (when deploying live)
  const isOwner = true;

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Sunny Kumar
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 text-slate-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-teal-600 ${isActive ? "text-teal-600 font-bold" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/hobbies"
            className={({ isActive }) =>
              `hover:text-teal-600 ${isActive ? "text-teal-600 font-bold" : ""}`
            }
          >
            Hobbies
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `hover:text-teal-600 ${isActive ? "text-teal-600 font-bold" : ""}`
            }
          >
            Blogs
          </NavLink>

          {/* Only for you (when isOwner = true) */}
          {isOwner && (
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `hover:text-teal-600 ${isActive ? "text-teal-600 font-bold" : ""}`
              }
            >
              Blog Editor
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;