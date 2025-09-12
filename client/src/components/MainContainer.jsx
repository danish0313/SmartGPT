import logoFull from "../assets/logo_full.svg"; // Adjust the path as necessary
import logoFullDark from "../assets/logo_full_dark.svg"; // Adjust the path as necessary
import { useContext } from "react";
import { AppContext } from "../contextApi/Context";

const MainContainer = () => {
  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme, setTheme } = context;
  return (
    <div
      className={`flex-1 flex items-center justify-center m-5  ${theme === "light" ? "bg-gray-100 text-black dark:text-white " : "bg-gray-800"} rounded-lg border-1 border-gray-200`}
    >
      {/* Logo Section */}

      <div className="flex flex-col items-center justify-center">
        <div>
          <img
            src={theme === "dark" ? logoFull : logoFullDark} // If in public folder, use "/logo.png"
            alt="Logo"
            className="ml-20 h-10"
          />
          <br />
          <h1 className="font-bold"> ASK ME ANYTHING !</h1>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
