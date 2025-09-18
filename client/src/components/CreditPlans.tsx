import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../contextApi/Context";
import { dummyPlans } from "../assets/assets.js";

interface dummyPlansProps {
  _id: string;
  name: string;
  price: number;
  credits: number;
  features: string[];
}

export default function CreditPlans() {
  const [Plans, setPlans] = useState<dummyPlansProps[]>();

  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme } = context;

  useEffect(() => {
    setPlans(dummyPlans);
  }, []);

  const dummyPlan = dummyPlans?.map((dummyPlans) => (
    <div className="w-80 h-90 rounded-2xl overflow-hidden m-4 border-2 border-[#490675] hover:scale-105 transition [&:nth-child(3)]:text-white">
      <p className="p-5 font-bold text-xl"> {dummyPlans.name}</p>
      <p className="p-5 font-bold text-xl">
        $ {dummyPlans.price} / {dummyPlans.credits}
      </p>
      <div className="pl-10">
        <ul className="list-disc">
          {dummyPlans?.features.map((features, i) => (
            <li key={i} className="p-0.5">
              {features}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 w-full">
        <button className=" outline-none focus:outline-none bg-[#8563F7] text-white w-full py-2 rounded hover:bg-purple-600 transition ">
          Buy Now
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <div
        className={`plans flex flex-wrap justify-center gap-1 mb-5 mt-2 text-sm
           ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"} rounded-lg border-2 border-gray-200`}
      >
        <div className="w-full">
          <h1 className="text-center mt-30 font-extrabold">Credit Plans</h1>
        </div>

        {dummyPlan}
      </div>
    </div>
  );
}
