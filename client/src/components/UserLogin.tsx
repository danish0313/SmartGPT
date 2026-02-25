import React from "react";
import userIcon from "../assets/user_icon.svg"; // Adjust the path as necessary

export default function RecentChats() {
  const logout = () => {
    localStorage.removeItem("login");
    window.location.href = "/"; // Redirect to login page after logout
  };

  return (
    <div>
      <div
        onClick={logout}
        className="p-1 rounded border border-grey-700 m-2 text-sm cursor-pointer hover:bg-gray-700 transition"
      >
        <img
          src={userIcon} // If in public folder, use "/logo.png"
          alt="Logo"
          className="h-7 w-7 mr-2 inline-block"
        />
        User Login Component
      </div>
    </div>
  );
}
