import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../contextApi/Context";
import { dummyPublishedImages } from "../assets/assets.js";

interface dummyPublishedImages {
  imageUrl: any;
  userName: string;
}

export default function CommunityImages() {
  const [publishedImages, setPublicImages] = useState<dummyPublishedImages[]>();

  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme, setTheme, UserChats } = context;

  useEffect(() => {
    setPublicImages(dummyPublishedImages);
  }, []);

  console.log(publishedImages);
  const images = publishedImages?.map((images) => (
    <div className=" relative rounded-2xl overflow-hidden m-2  hover:scale-105 transition z-5">
      <img
        src={images.imageUrl}
        alt={images.userName}
        className="h-60 w-60 gap-1 rounded-2xl "
      />
      <div className="absolute opacity-0 top-0 left-0 w-full h-full flex items-end justify-end p-2 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-[10px]">
          {" "}
          Created By {images.userName}
        </span>
      </div>
    </div>
  ));
  return (
    <div>
      <div
        className={` flex flex-wrap justify-center gap-1 mb-5 mt-2 text-sm
           ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"} rounded-lg border-2 border-gray-200`}
      >
        {images}
      </div>
    </div>
  );
}
