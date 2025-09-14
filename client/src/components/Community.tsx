import React from "react";
import galleryIcon from "../assets/gallery_icon.svg"; // Adjust the path as necessary

export default function Community() {
  return (
    <div>
      <p className="mx-3"></p>
      <div className="p-1 rounded border border-grey-700 m-2 text-sm cursor-pointer hover:bg-gray-700 transition">
        <img
          src={galleryIcon} // If in public folder, use "/logo.png"
          alt="Logo"
          className="h-7 w-7 mr-2 inline-block"
        />
        Community...
      </div>
    </div>
  );
}
