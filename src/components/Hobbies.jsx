import React from 'react';

const Hobbies = () => {
  return (
    <div className="min-h-screen p-10 bg-white text-slate-800">
      <h1 className="text-4xl font-bold mb-6">My Hobbies</h1>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>🎨 Digital Art & Design</li>
        <li>📚 Reading about AI, Psychology, and Startups</li>
        <li>🌱 Terrace gardening & bonsai shaping</li>
        <li>🎮 Gaming (strategy + simulations)</li>
        <li>🎧 Creating music with AI tools</li>
      </ul>
    </div>
  );
};

export default Hobbies;
