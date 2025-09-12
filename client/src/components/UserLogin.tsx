import React from "react";
import userIcon from "../assets/user_icon.svg"; // Adjust the path as necessary

export default function RecentChats() {
  return (
    <div>
      <div className="p-4 rounded border border-grey-700 m-2 text-sm cursor-pointer hover:bg-gray-700 transition">
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
