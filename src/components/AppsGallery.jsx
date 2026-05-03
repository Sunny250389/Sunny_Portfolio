import React from "react";
import { ExternalLink, Github, Home, LayoutGrid, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const AppsGallery = () => {
  const apps = [
    {
      name: "App Placeholder One",
      description: "A placeholder for one of your built apps. Replace this with the real app summary.",
      gitUrl: "https://github.com/your-username/app-placeholder-one",
      appUrl: "https://app-placeholder-one.example.com",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      name: "App Placeholder Two",
      description: "A second app slot with room for the GitHub repository and live app link.",
      gitUrl: "https://github.com/your-username/app-placeholder-two",
      appUrl: "https://app-placeholder-two.example.com",
      icon: <LayoutGrid className="w-8 h-8" />,
    },
    {
      name: "App Placeholder Three",
      description: "Use this card for another mobile, web, or automation utility app you have built.",
      gitUrl: "https://github.com/your-username/app-placeholder-three",
      appUrl: "https://app-placeholder-three.example.com",
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
