import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Adjust the path as necessary
import RecentChats from "./RecentChats";
import Community from "./Community";
import Credits from "./Credits";

const SideNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Burger button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-gray-800 text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="red"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`ml-0 top-0 left-0 h-screen w-60 bg-gray-800 text-white flex flex-col z-40 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        {/* Logo Section */}
        <div className="flex items-center p-4 border-b border-gray-700">
          <img
            src={logo} // If in public folder, use "/logo.png"
            alt="Logo"
            className="h-15 w-15 ml-3 mr-3 "
          />
          <span className="text-[#8563F7] font-bold">
            SMARTCHAT <br />
            <p className="text-white">OpenAI ChatBot</p>
          </span>
        </div>

        <div className="p-6 font-bold text-xl border-b border-gray-700">
          <button
            className="bg-[#8563F7] text-white w-full py-2 rounded hover:bg-purple-600 transition"
            onClick={() => setOpen(false)}
          >
            + NEW CHAT
          </button>
        </div>

        {/* Search Bar */}

        <div className="p-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 bottom-2 flex items-center pl-2 mb-2">
              {/* Search icon (Heroicons or SVG) */}
              <svg
                className="w-4 h-4 text-[#8563F7]"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-5 py-2 rounded bg-gray-700 text-white placeholder-gray-400 text-sm mb-4 hover:outline-none  hover:ring-purple-400 transition"
            />
          </div>
        </div>
        {/* Recent chats */}
        <RecentChats />
        <Community />
        <Credits />
        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-2 p-4">
          <Link
            to="/"
            className="hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/home"
            className="hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </nav>
      </div>
      {/* Overlay for mobile
      {open && (
        <div
          className="fixed inset-0 bg-white bg-opacity-40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )} */}
    </>
  );
};

export default SideNavbar;
