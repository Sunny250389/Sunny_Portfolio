import React, { useEffect, useRef } from 'react';
import {
  motion,
  animate,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';

// Shared animation primitives so every section animates the same way.

const viewport = { once: true, margin: '-60px' };

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Fades/slides a single block in when it scrolls into view.
export const Reveal = (props) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    {...props}
  />
);

// Container that reveals its <StaggerItem> children one after another.
export const Stagger = (props) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    {...props}
  />
);

export const StaggerItem = (props) => <motion.div variants={fadeUp} {...props} />;

// Skill bar that fills to `level` when scrolled into view.
export const SkillBar = ({ level }) => {
  const reduce = useReducedMotion();
  return (
    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
      <motion.div
        className="bg-teal-600 h-2 rounded-full"
        initial={{ width: reduce ? `${level}%` : 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  );
};

// Number that counts up from 0 to `to` when scrolled into view.
export const CountUp = ({ to, suffix = '%' }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  return <span ref={ref}>{reduce ? `${to}${suffix}` : `0${suffix}`}</span>;
};

// Thin teal bar fixed to the top of the viewport showing page scroll progress.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-teal-600 origin-left z-[60] pointer-events-none"
    />
  );
};
