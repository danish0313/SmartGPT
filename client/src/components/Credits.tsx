import React from "react";
import diamondIcon from "../assets/diamond_icon.svg"; // Adjust the path as necessary

export default function Credits() {
  return (
    <div>
      <p className="mx-3">Credits</p>
      <div className="p-1 rounded border border-grey-700 m-2 text-sm">
        <img
          src={diamondIcon} // If in public folder, use "/logo.png"
          alt="Logo"
          className="h-7 w-7 mr-2 inline-block"
        />
        Credits...
      </div>
    </div>
  );
}
