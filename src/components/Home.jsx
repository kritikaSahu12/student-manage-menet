
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Welcome to StudentHub
          </p>

          <h1 className="text-3xl font-bold sm:text-5xl">
            Student Management
            <span className="block text-purple-400">Dashboard</span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Manage student records, create new users, and update
            information from one simple dashboard.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-purple-500/20 bg-gray-900 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-2xl">
              👥
            </div>
            <h2 className="text-xl font-bold">All Users</h2>
            <p className="mt-2 text-sm text-gray-400">
              View, edit and delete student records.
            </p>
            <Link
              to="/Alluser"
              className="mt-5 inline-block rounded-lg bg-purple-600 px-5 py-2.5 font-semibold hover:bg-purple-500"
            >
              View Users →
            </Link>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-gray-900 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-2xl">
              ✨
            </div>
            <h2 className="text-xl font-bold">Create User</h2>
            <p className="mt-2 text-sm text-gray-400">
              Add a new student with name, email and age.
            </p>
            <Link
              to="/Createuser"
              className="mt-5 inline-block rounded-lg border border-purple-500 px-5 py-2.5 font-semibold text-purple-300 hover:bg-purple-600 hover:text-white"
            >
              Add User +
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/70 p-6">
          <h2 className="text-lg font-semibold">Your workspace</h2>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Use the navigation bar to access your pages. Student
            information is managed through your existing JSON Server API.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
