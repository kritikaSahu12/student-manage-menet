
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Updatedata = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/students/${id}`
        );

        setName(response.data.name ?? "");
        setAge(response.data.age ?? "");
        setEmail(response.data.email ?? "");
      } catch (err) {
        console.error(err);
        alert("Could not load user details.");
      }
    };

    getUser();
  }, [id]);

  const btnHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(
        `http://localhost:3000/students/${id}`,
        {
          name,
          email,
          age: Number(age),
        }
      );

      alert("User updated successfully!");
      navigate("/Alluser");
    } catch (err) {
      console.error(err);
      alert("Unable to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4 py-12 text-white">
      <div className="w-full max-w-lg rounded-2xl border border-purple-500/30 bg-gray-900 p-6 shadow-2xl shadow-purple-950/20 sm:p-9">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/20 text-2xl text-purple-300">
            ✎
          </div>
          <h1 className="text-3xl font-bold">Edit User</h1>
          <p className="mt-2 text-sm text-gray-400">
            Update student information below.
          </p>
        </div>

        <form onSubmit={btnHandler} className="space-y-5">
          <div>
            <label htmlFor="edit-name" className="mb-2 block text-sm font-medium">
              Full Name
            </label>
            <input
              id="edit-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div>
            <label htmlFor="edit-email" className="mb-2 block text-sm font-medium">
              Email Address
            </label>
            <input
              id="edit-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div>
            <label htmlFor="edit-age" className="mb-2 block text-sm font-medium">
              Age
            </label>
            <input
              id="edit-age"
              type="number"
              min="1"
              max="120"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 px-4 py-3 font-semibold hover:bg-purple-500 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update User"}
          </button>

          <Link
            to="/Alluser"
            className="block w-full rounded-xl border border-gray-700 px-4 py-3 text-center font-medium text-gray-300 hover:bg-gray-800"
          >
            Cancel
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Updatedata;
