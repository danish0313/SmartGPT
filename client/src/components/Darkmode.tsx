import React, { useEffect, useState, useContext } from "react";
import themeIcon from "../assets/theme_icon.svg"; // Adjust the path as necessary
import { AppContext } from "../contextApi/Context";

export default function RecentChats() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setDark((d) => !d);
    setTheme(dark ? "light" : "dark");
  };

  return (
    <div>
      <div className="flex items-center gap-2 p-4 rounded border border-grey-700 m-2 text-sm cursor-pointer hover:bg-gray-700 transition">
        <img
          src={themeIcon} // If in public folder, use "/logo.png"
          alt="Logo"
          className="h-7 w-7 mr-2 inline-block"
        />
        Darkmode
        <div className="p-1 ml-auto">
          <button
            onClick={toggleTheme}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
              dark
                ? "bg-gradient-to-r from-gray-700 to-gray-900"
                : "bg-gradient-to-r from-yellow-300 to-yellow-500"
            } shadow-lg relative`}
          >
            <span
              className={`w-6 h-6 bg-white rounded-full shadow flex items-center justify-center transform transition-transform duration-300 absolute ${
                dark ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {dark ? (
                // Moon icon
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                // Sun icon
                <svg
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v1a1 1 0 11-2 0V6a1 1 0 011-1zm0 7a2 2 0 100-4 2 2 0 000 4zm7-2a1 1 0 100 2h-1a1 1 0 100-2h1zm-7 7a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zm7-7a1 1 0 100-2h-1a1 1 0 100 2h1zm-9.071-5.071a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm9.192 9.192a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm-9.192 0a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zm9.192-9.192a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
