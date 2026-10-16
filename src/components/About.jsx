
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gray-900 p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          About StudentHub
        </p>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Simple Student Management
        </h1>

        <p className="mt-5 leading-8 text-gray-400">
          StudentHub is a React-based student management project.
          It helps users create student records, view information,
          edit existing details and delete records.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "Create Records"],
            ["02", "Update Details"],
            ["03", "Manage Users"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="rounded-xl border border-gray-800 bg-gray-950 p-5"
            >
              <p className="text-2xl font-bold text-purple-400">{number}</p>
              <h2 className="mt-3 font-semibold">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
