
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Create User", path: "/Createuser" },
    { name: "All Users", path: "/Alluser" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-500/20 bg-gray-950 text-white shadow-lg shadow-purple-950/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 shadow-lg shadow-purple-900/40">
            <span className="text-xl font-bold">S</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide">
              Student<span className="text-purple-400">Hub</span>
            </h1>
            <p className="text-xs text-gray-400">Management System</p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
