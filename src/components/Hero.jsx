import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { fadeUp } from './motion';

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Drifting background blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-300/30 blur-3xl pointer-events-none"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-blue-300/30 blur-3xl pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={heroStagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
        >
          Hi, I'm <span className="text-teal-600">Sunny Kumar</span>
        </motion.h1>
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl text-slate-600 mb-8 font-light"
        >
          Test Automation Lead
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Senior Test Engineer with 12 years of experience in UI, API, Database and Machine Learning
          model testing. Specialized in test automation using Python, Selenium, Robot Framework,
          and ML algorithm testing in Agile environments.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
          <motion.a
            href={`${import.meta.env.BASE_URL}Sunny_AI_Test_Resume.pdf`}
            download
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors duration-200"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-600 transition-colors duration-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
