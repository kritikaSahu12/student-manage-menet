import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/students", {
        name,
        email,
        age: Number(age),
      });

      alert("User created successfully!");
      navigate("/Alluser");
    } catch (err) {
      console.error(err);
      alert("User could not be created. Check JSON Server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-lg rounded-2xl border border-purple-500/30 bg-gray-900 p-6 shadow-2xl shadow-purple-950/20 sm:p-9">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-2xl">
            +
          </div>
          <h1 className="text-3xl font-bold">Create User</h1>
          <p className="mt-2 text-sm text-gray-400">
            Enter the new student's information
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter user name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter user email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div>
            <label htmlFor="age" className="mb-2 block text-sm font-medium text-gray-200">
              Age
            </label>
            <input
              id="age"
              type="number"
              min="1"
              max="120"
              placeholder="Enter user age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save User"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Createuser;
