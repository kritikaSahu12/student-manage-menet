
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:3000/students";

const Alluser = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setError("");
      const response = await axios.get(API);
      setContent(response.data);
    } catch (err) {
      console.error(err);
      setError("Could not load users. Please check JSON Server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    try {
      await axios.delete(`${API}/${id}`);
      setContent((previous) =>
        previous.filter((user) => user.id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Unable to delete user.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-purple-400">
              USER MANAGEMENT
            </p>
            <h1 className="text-3xl font-bold sm:text-4xl">
              All Users
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              View and manage your student records.
            </p>
          </div>

          <Link
            to="/Createuser"
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
          >
            + Add User
          </Link>
        </div>

        <div className="mb-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-purple-500/20 bg-gray-900 p-5">
            <p className="text-sm text-gray-400">Total Users</p>
            <p className="mt-2 text-3xl font-bold text-purple-300">
              {content.length}
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-gray-900 p-5">
            <p className="text-sm text-gray-400">Database</p>
            <p className="mt-2 text-lg font-semibold text-green-400">
              JSON Server
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl shadow-black/20">
          <div className="border-b border-gray-800 px-5 py-4">
            <h2 className="font-semibold">Student Records</h2>
          </div>

          {loading ? (
            <p className="p-8 text-center text-purple-300">
              Loading users...
            </p>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-red-400">{error}</p>
              <button
                onClick={() => {
                  setLoading(true);
                  getData();
                }}
                className="mt-4 rounded-lg bg-purple-600 px-4 py-2"
              >
                Try Again
              </button>
            </div>
          ) : content.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-lg font-semibold">No users found</p>
              <p className="mt-2 text-sm text-gray-400">
                Add your first student to get started.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-purple-950/70 text-purple-200">
                  <tr>
                    <th className="px-5 py-4 font-semibold">ID</th>
                    <th className="px-5 py-4 font-semibold">Student</th>
                    <th className="px-5 py-4 font-semibold">Email</th>
                    <th className="px-5 py-4 font-semibold">Age</th>
                    <th className="px-5 py-4 text-center font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-800">
                  {content.map((ele) => (
                    <tr
                      key={ele.id}
                      className="transition hover:bg-purple-500/5"
                    >
                      <td className="px-5 py-4 text-gray-400">
                        {ele.id}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600/20 font-bold text-purple-300">
                            {ele.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <span className="font-medium text-white">
                            {ele.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-gray-400">
                        {ele.email}
                      </td>

                      <td className="px-5 py-4 text-gray-300">
                        {ele.age}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex justify-center gap-2">
                          <Link
                            to={`/updatedata/${ele.id}`}
                            className="rounded-lg border border-purple-500/40 bg-purple-600/20 px-3 py-2 font-medium text-purple-300 hover:bg-purple-600 hover:text-white"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => deleteHandler(ele.id)}
                            className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 font-medium text-red-400 hover:bg-red-600 hover:text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Alluser;
