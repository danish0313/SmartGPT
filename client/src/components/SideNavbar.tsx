import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Adjust the path as necessary
import RecentChats from "./RecentChats";
import Community from "./Community";
import Credits from "./Credits";
import Darkmode from "./Darkmode";
import UserLogin from "./UserLogin";
import { AppContext } from "../contextApi/Context";

const SideNavbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme, setTheme } = context;

  console.log(theme);

  // Conditional classes based on theme
  const navbarClasses =
    theme === "light" ? "bg-gray-200 text-black" : "bg-gray-900 text-white";

  return (
    <>
      {/* Burger button for mobile */}
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
        className={`ml-0 top-0 left-0 h-screen w-60 rounded-lg border-1 border-gray-200 ${navbarClasses} flex flex-col z-40 transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static border-r border-gray-200 fixed md:relative`}
      >
        {/* Logo Section */}
        <div className="flex items-center p-3 border-b border-gray-700">
          <img
            src={logo} // If in public folder, use "/logo.png"
            alt="Logo"
            className="h-15 w-15 ml-3 mr-3"
          />
          <span className="font-bold">
            SMARTCHAT <br />
            <p className="">OpenAI ChatBot</p>
          </span>
        </div>

        <div className="p-2 font-bold text-xl border-b border-gray-700">
          <button
            className="bg-[#8563F7] text-white w-full py-2 rounded hover:bg-purple-600 transition"
            onClick={() => setOpen(false)}
          >
            + NEW CHAT
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-2">
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
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-5 py-2 rounded border border-gray-700 text-white placeholder-gray-400 text-sm mb-4 outline-none hover:ring-purple-400 transition"
            />
          </div>
        </div>

        {/* Recent Chats, Community, Credits, etc. */}
        <RecentChats search={search} />
        <br />
        <Community />
        <Credits />
        <Darkmode />
        <UserLogin />
      </div>
    </>
  );
};

export default SideNavbar;
