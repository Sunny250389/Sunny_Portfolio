import React from "react";
import { Link } from "react-router-dom";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { Activity, Bike, Brush, Camera, Cpu, Pen, Smartphone } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    { icon: <Bike className="w-10 h-10 text-teal-600 animate-bounce" />, name: "Cycling" },
    { icon: <Camera className="w-10 h-10 text-purple-600 animate-pulse" />, name: "Photography" },
    { icon: <Activity className="w-10 h-10 text-orange-600 animate-spin-slow" />, name: "Playing Cricket" },
    { icon: <Pen className="w-10 h-10 text-blue-600 animate-pulse" />, name: "Poetry" },
    { icon: <Brush className="w-10 h-10 text-pink-600 animate-bounce" />, name: "Stippling Art" },
    { icon: <Cpu className="w-10 h-10 text-green-600 animate-spin-slow" />, name: "Learning New Technologies" },
    { icon: <Smartphone className="w-10 h-10 text-cyan-600 animate-pulse" />, name: "App Building", path: "/apps" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-slate-800 mb-12">My Hobbies</h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-10">
          {hobbies.map((hobby, index) => (
            <StaggerItem key={index} whileHover={{ y: -8 }} className="h-full">
            <Link
              to={hobby.path || "#"}
              aria-disabled={!hobby.path}
              onClick={(event) => {
                if (!hobby.path) {
                  event.preventDefault();
                }
              }}
              className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center justify-center transition-shadow"
            >
              <div className="mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-slate-700">{hobby.name}</h3>
            </Link>
          </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12">
          <Link
            to="/"
            className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
