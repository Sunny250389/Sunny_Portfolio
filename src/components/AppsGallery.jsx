import React from "react";
import { ExternalLink, Github, Home, LayoutGrid, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const AppsGallery = () => {
  const apps = [
    {
      name: "One Line Journal",
      description: "A simple journaling app that allows users to write one line per day, helping them reflect on their thoughts and experiences.",
      gitUrl: "https://github.com/Sunny250389/One_Line_Journal",
      appUrl: "https://github.com/Sunny250389/One_Line_Journal",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      name: "Mazeduel",
      description: "A puzzle game where players navigate through mazes to reach the goal.",
      gitUrl: "https://github.com/Sunny250389/mazeduel",
      appUrl: "https://mazeduel.vercel.app/",
      icon: <LayoutGrid className="w-8 h-8" />,
    },
    {
      name: "Declare Card Game",
      description: "A card game where players declare their intentions and compete to achieve their goals.",
      gitUrl: "https://github.com/Sunny250389/declare_card-game",
      appUrl: "https://declarecard-game.vercel.app/",
      icon: <Smartphone className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-2">
              App Building
            </p>
            <h1 className="text-4xl font-bold text-slate-800">Built Apps</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/hobbies"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
            >
              <LayoutGrid size={18} />
              Hobbies
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 font-medium text-white transition hover:bg-slate-900"
            >
              <Home size={18} />
              Home
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.name}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                {app.icon}
              </div>

              <h2 className="text-2xl font-bold text-slate-800">{app.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{app.description}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={app.gitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={app.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 font-medium text-white transition hover:bg-teal-700"
                >
                  <ExternalLink size={18} />
                  App Link
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsGallery;
