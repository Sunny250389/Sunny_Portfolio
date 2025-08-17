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

  // Load published blogs from localStorage
  useEffect(() => {
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

        {/* ✅ Published Blogs Section */}
        <section id="blogs" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Published Blogs</h2>

            {publishedBlogs.length === 0 ? (
              <p className="text-slate-600">No blogs published yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                  >
                    {blog.image && (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-40 object-cover rounded mb-4"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {blog.content.replace(/<[^>]+>/g, '').substring(0, 200)}...
                    </p>
                    <Link
                      to="/blog"
                      className="text-teal-600 font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
