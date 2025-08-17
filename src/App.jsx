import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function App() {
  const [publishedBlogs, setPublishedBlogs] = useState([]);

  useEffect(() => {
    // 🔥 Clear all old blogs (drafts + published)
    localStorage.removeItem("published");
    localStorage.removeItem("drafts");

    // Load fresh published blogs (empty at start)
    const savedPublished = JSON.parse(localStorage.getItem("published")) || [];
    setPublishedBlogs(savedPublished);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />

        {/* ✅ Published Blogs Section (Titles only) */}
        <section id="blogs" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Published Blogs</h2>

            {publishedBlogs.length === 0 ? (
              <p className="text-slate-600">No blogs published yet.</p>
            ) : (
              <ul className="space-y-4">
                {publishedBlogs.map((blog, index) => (
                  <li key={index}>
                    <Link
                      to="/blog"
                      className="text-teal-600 text-lg font-medium hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;