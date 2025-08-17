import React from 'react';
import { Music, BookOpen, Gamepad2, Flower, Brush, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const hobbies = [
  {
    icon: <Brush className="w-8 h-8 text-teal-600" />,
    title: 'Digital Art & Design',
    description:
      'I enjoy experimenting with colors and design tools to create visually captivating digital illustrations.',
    animation: { rotate: [0, 10, -10, 0] },
  },
  {
    icon: <BookOpen className="w-8 h-8 text-teal-600" />,
    title: 'Reading & Learning',
    description:
      'Avid reader of books and blogs about AI, entrepreneurship, and behavioral psychology.',
    animation: { y: [-10, 10, -10] },
  },
  {
    icon: <Flower className="w-8 h-8 text-teal-600" />,
    title: 'Terrace Gardening',
    description:
      'Nurturing bonsais, herbs, and vegetables on my rooftop is both peaceful and productive.',
    animation: { scale: [1, 1.05, 1] },
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-teal-600" />,
    title: 'Gaming',
    description:
      'Strategy and simulation games like Age of Empires and Cities: Skylines are my go-to mind refreshers.',
    animation: { rotate: [0, -5, 5, 0] },
  },
  {
    icon: <Music className="w-8 h-8 text-teal-600" />,
    title: 'Music Composition',
    description:
      'I like composing instrumental loops using AI tools like Amper and Soundraw.',
    animation: { y: [0, -5, 0, 5, 0] },
  },
];

const Hobbies = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

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

        <h1 className="text-4xl font-bold text-slate-800 mb-6">My Hobbies</h1>
        <p className="text-lg text-slate-600 mb-12">
          Outside of work, I explore creative and mindful hobbies that keep me inspired and energized.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              animate={hobby.animation}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            >
              <div className="mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{hobby.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;